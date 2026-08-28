import React from 'react';
import { siteConfig } from '../../config/siteConfig';
import WebliixIcon from './WebliixIcon';

export default function FloatingWhatsApp() {
  const rawPhone = siteConfig.brand.contactPhone.replace(/\D/g, '');
  const waUrl = `https://wa.me/${rawPhone}?text=Hi%20Webliix,%20I%20would%20like%20to%20inquire%20about%20your%20digital%20services.`;

  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-20 right-6 z-50 flex items-center justify-center w-12 h-12 rounded-none sm:rounded-[4px] bg-[#25D366]/15 text-[#25D366] hover:bg-[#25D366] hover:text-white glass-spatial border border-[#25D366]/50 shadow-spatial hover:scale-105 active:scale-95 transition-all duration-300 group"
      title="Chat with Webliix on WhatsApp"
    >
      <div className="relative flex items-center justify-center">
        <WebliixIcon
          social="whatsapp"
          size="md"
          color="inherit"
          className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300"
        />
        <span className="absolute -top-1 -right-1 w-2 h-2 rounded-none sm:rounded-[1px] bg-[#25D366] animate-pulse" />
      </div>
    </a>
  );
}

