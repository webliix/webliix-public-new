import React, { createContext, useContext, useState } from 'react';

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [modalConfig, setModalConfig] = useState({
    isOpen: false,
    title: '',
    content: null,
    type: 'default' // 'default', 'quote', 'portfolio', 'service'
  });

  const [toast, setToast] = useState({
    visible: false,
    message: '',
    type: 'info'
  });

  const openModal = ({ title, content, type = 'default' }) => {
    setModalConfig({
      isOpen: true,
      title,
      content,
      type
    });
  };

  const closeModal = () => {
    setModalConfig(prev => ({ ...prev, isOpen: false }));
  };

  const showToast = (message, type = 'info') => {
    setToast({ visible: true, message, type });
    setTimeout(() => {
      setToast(prev => ({ ...prev, visible: false }));
    }, 4000);
  };

  return (
    <ModalContext.Provider value={{
      modalConfig,
      openModal,
      closeModal,
      toast,
      showToast
    }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};
