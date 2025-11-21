import React from 'react';

const WhatsAppFloat: React.FC = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Olá! Gostaria de agendar um horário.');
    window.open(`https://wa.me/5585996163468?text=${message}`, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-3 sm:p-4 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
      aria-label="Agendar horário pelo WhatsApp"
    >
      <i className="bi bi-whatsapp text-xl sm:text-2xl"></i>
    </button>
  );
};

export default WhatsAppFloat;