import React, { useState } from 'react';
import { Calculator, Check, ArrowRight, Sparkles, Clock } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import GlassCard from './GlassCard';
import SpatialButton from '../ui/SpatialButton';
import { useModal } from '../../context/ModalContext';

export default function QuoteEstimator() {
  const [selectedModules, setSelectedModules] = useState(['design', 'frontend']);
  const [deliverySpeed, setDeliverySpeed] = useState('standard'); // 'standard' (7-10 days), 'rush' (3-5 days)
  const { openModal, showToast } = useModal();

  const toggleModule = (id) => {
    if (selectedModules.includes(id)) {
      if (selectedModules.length === 1) {
        showToast('Please select at least one module', 'info');
        return;
      }
      setSelectedModules(prev => prev.filter(m => m !== id));
    } else {
      setSelectedModules(prev => [...prev, id]);
    }
  };

  // Calculate Subtotal & Timeline
  const baseCost = selectedModules.reduce((acc, currId) => {
    const item = siteConfig.pricingModules.find(m => m.id === currId);
    return acc + (item ? item.price : 0);
  }, 0);

  const speedMultiplier = deliverySpeed === 'rush' ? 1.3 : 1.0;
  const totalCostINR = Math.round(baseCost * speedMultiplier);
  const totalCostUSD = Math.round(totalCostINR / 83);
  const estimatedDays = deliverySpeed === 'rush' ? Math.max(3, selectedModules.length * 1.5) : Math.max(5, selectedModules.length * 2.5);

  const handleLaunchInquiry = () => {
    const selectedNames = selectedModules
      .map(id => siteConfig.pricingModules.find(m => m.id === id)?.name)
      .join(', ');

    openModal({
      title: '🚀 Launch Custom Project Inquiry',
      content: (
        <div className="space-y-4">
          <p className="text-sm text-theme-muted">
            You've configured a custom digital package with:
          </p>
          <div className="p-4 rounded-2xl glass-spatial border border-theme-primary/30 text-xs font-mono text-theme-text space-y-2">
            <div><strong className="text-theme-primary">Selected Modules:</strong> {selectedNames}</div>
            <div><strong className="text-theme-primary">Estimated Investment:</strong> ₹{totalCostINR.toLocaleString()} (~${totalCostUSD})</div>
            <div><strong className="text-theme-primary">Timeline:</strong> {Math.ceil(estimatedDays)} Business Days ({deliverySpeed.toUpperCase()})</div>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              showToast('Inquiry sent successfully! Our project team will contact you shortly.', 'success');
            }}
            className="space-y-3 pt-2"
          >
            <div>
              <label className="text-xs font-semibold text-theme-muted block mb-1">Your Name</label>
              <input required type="text" placeholder="John Doe" className="w-full px-4 py-2.5 rounded-xl glass-spatial border border-theme-border text-theme-text text-sm focus:outline-none focus:border-theme-primary" />
            </div>
            <div>
              <label className="text-xs font-semibold text-theme-muted block mb-1">Phone / WhatsApp</label>
              <input required type="tel" placeholder="+91 93101 81569" className="w-full px-4 py-2.5 rounded-xl glass-spatial border border-theme-border text-theme-text text-sm focus:outline-none focus:border-theme-primary" />
            </div>
            <SpatialButton type="submit" variant="primary" className="w-full mt-2">
              Submit Configuration & Request Callback
            </SpatialButton>
          </form>
        </div>
      )
    });
  };

  return (
    <GlassCard className="p-6 sm:p-10 border border-theme-border shadow-spatial-lg">
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Module Selection Matrix */}
        <div className="flex-1 space-y-6">
          <div>
            <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-theme-primary/20 text-theme-primary border border-theme-primary/30 inline-flex items-center gap-1.5 mb-2">
              <Calculator className="w-3.5 h-3.5" /> Instant Quote Calculator
            </span>
            <h3 className="text-2xl font-display font-bold text-theme-text">
              Configure Your Custom Digital Package
            </h3>
            <p className="text-theme-muted text-xs sm:text-sm mt-1">
              Select the modules you need. Price & delivery timeline update in real-time.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {siteConfig.pricingModules.map((module) => {
              const isSelected = selectedModules.includes(module.id);
              return (
                <button
                  key={module.id}
                  onClick={() => toggleModule(module.id)}
                  className={`flex items-center justify-between p-3.5 rounded-2xl border text-left transition-all duration-300 ${
                    isSelected
                      ? 'bg-theme-primary/15 border-theme-primary text-theme-text shadow-sm'
                      : 'glass-spatial border-theme-border text-theme-muted hover:border-theme-primary/50 hover:text-theme-text'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-lg border flex items-center justify-center transition ${
                      isSelected ? 'bg-theme-primary border-theme-primary text-white' : 'border-theme-border'
                    }`}>
                      {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>
                    <span className="text-xs font-semibold">{module.name}</span>
                  </div>
                  <span className="text-xs font-mono font-bold text-theme-primary">
                    +₹{module.price.toLocaleString()}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Speed Selector */}
          <div className="pt-2">
            <label className="text-xs font-semibold text-theme-muted uppercase tracking-wider block mb-2">
              Delivery Pace
            </label>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setDeliverySpeed('standard')}
                className={`flex-1 py-2.5 px-4 rounded-xl border text-xs font-semibold transition ${
                  deliverySpeed === 'standard'
                    ? 'bg-theme-primary text-white border-theme-primary shadow-md'
                    : 'glass-spatial border-theme-border text-theme-muted'
                }`}
              >
                Standard Pace (7–10 Days)
              </button>
              <button
                onClick={() => setDeliverySpeed('rush')}
                className={`flex-1 py-2.5 px-4 rounded-xl border text-xs font-semibold transition ${
                  deliverySpeed === 'rush'
                    ? 'bg-theme-primary text-white border-theme-primary shadow-md'
                    : 'glass-spatial border-theme-border text-theme-muted'
                }`}
              >
                🚀 Express Rush (3–5 Days)
              </button>
            </div>
          </div>
        </div>

        {/* Live Calculation Card */}
        <div className="w-full lg:w-80 glass-spatial p-6 rounded-3xl border border-theme-primary/40 shadow-spatial space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-theme-border">
              <span className="text-xs font-semibold text-theme-muted uppercase tracking-wider">
                Live Estimation
              </span>
              <Sparkles className="w-4 h-4 text-theme-primary animate-pulse" />
            </div>

            <div>
              <span className="text-xs text-theme-muted block">Estimated Investment</span>
              <div className="text-3xl font-display font-extrabold text-theme-text mt-1">
                ₹{totalCostINR.toLocaleString()}
              </div>
              <span className="text-xs font-mono text-theme-primary font-semibold">
                (~${totalCostUSD} USD)
              </span>
            </div>

            <div className="p-3.5 rounded-2xl bg-theme-primary/10 border border-theme-primary/20 space-y-2">
              <div className="flex items-center justify-between text-xs text-theme-text">
                <span className="flex items-center gap-1 text-theme-muted">
                  <Clock className="w-3.5 h-3.5 text-theme-primary" /> Est. Delivery:
                </span>
                <span className="font-bold font-mono text-theme-primary">
                  ~{Math.ceil(estimatedDays)} Days
                </span>
              </div>
              <div className="flex items-center justify-between text-xs text-theme-text">
                <span className="flex items-center gap-1 text-theme-muted">
                  <Check className="w-3.5 h-3.5 text-theme-primary" /> Support Included:
                </span>
                <span className="font-bold text-emerald-400">30 Days Free</span>
              </div>
            </div>
          </div>

          <SpatialButton onClick={handleLaunchInquiry} variant="primary" className="w-full" icon={ArrowRight}>
            Lock Quote & Proceed
          </SpatialButton>
        </div>
      </div>
    </GlassCard>
  );
}
