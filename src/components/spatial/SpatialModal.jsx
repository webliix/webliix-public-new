import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, Info, AlertCircle } from 'lucide-react';
import { useModal } from '../../context/ModalContext';

export default function SpatialModal() {
  const { modalConfig, closeModal, toast } = useModal();

  return (
    <>
      {/* Toast Notification */}
      <AnimatePresence>
        {toast.visible && (
          <motion.div
            initial={{ opacity: 0, y: -50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            className="fixed top-6 right-6 z-50 flex items-center gap-3 px-5 py-3.5 rounded-2xl glass-spatial border border-theme-primary shadow-spatial text-sm font-medium text-theme-text"
          >
            {toast.type === 'success' ? (
              <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
            ) : toast.type === 'error' ? (
              <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />
            ) : (
              <Info className="w-5 h-5 text-theme-primary shrink-0" />
            )}
            <span>{toast.message}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Global Spatial Modal Dialog */}
      <AnimatePresence>
        {modalConfig.isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="fixed inset-0 bg-black/60 backdrop-blur-md"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="relative w-full max-w-2xl glass-spatial rounded-3xl p-6 sm:p-8 z-10 border border-theme-border shadow-spatial-lg max-h-[90vh] overflow-y-auto"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-theme-border">
                <h3 className="text-xl sm:text-2xl font-display font-bold text-theme-text">
                  {modalConfig.title}
                </h3>
                <button
                  onClick={closeModal}
                  className="p-2 rounded-xl text-theme-muted hover:text-theme-text hover:bg-theme-border/30 transition"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="text-theme-text text-sm sm:text-base leading-relaxed">
                {modalConfig.content}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
