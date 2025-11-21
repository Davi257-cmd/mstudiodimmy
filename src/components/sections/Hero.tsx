import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { HeroSection } from '../hero-section-2';
import Button from '../common/Button';

const Hero: React.FC = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Olá! Gostaria de agendar um horário.');
    window.open(`https://wa.me/5585996163468?text=${message}`, '_blank');
  };

  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-primary-white to-neutral-50 pt-20 md:pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-accent-gold to-accent-sepia" />
      </div>

      <HeroSection
        className="relative z-10 min-h-screen md:min-h-[90vh] bg-transparent text-primary-black"
        slogan="Evidenciando sua beleza, elevando seu protagonismo"
        title={
          <>
            Realce sua beleza <br />
            <span className="text-accent-gold">com quem é referência no mercado</span>
          </>
        }
        subtitle="Especialista em sobrancelhas, maquiagem e consultoria de imagem. Transformando sua autoestima com excelência e personalização."
        backgroundImage="/eu/dimmy.jpg"
        hideFooter={true}
        customContent={
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-6"
          >
            {/* Buttons */}
            <div className="flex flex-col gap-4 items-start mb-6">
              <Button 
                variant="primary" 
                size="lg"
                onClick={handleWhatsAppClick}
                className="flex items-center gap-2 justify-center"
              >
                <i className="bi bi-whatsapp text-lg flex-shrink-0"></i>
                <span>Agende seu horário</span>
                <ArrowRight size={20} className="flex-shrink-0" />
              </Button>
              
              <Button 
                variant="secondary" 
                size="lg"
                onClick={() => {
                  const element = document.querySelector('#about');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="justify-center"
              >
                Conheça nossa história
              </Button>
            </div>

            {/* Features */}
            <div className="flex flex-row items-center gap-4 md:gap-6 text-xs md:text-sm text-neutral-200">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent-gold rounded-full flex-shrink-0"></div>
                <span>Atendimento Personalizado</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent-gold rounded-full flex-shrink-0"></div>
                <span>Resultados Exclusivos</span>
              </div>
            </div>
          </motion.div>
        }
      >
        {/* Stats Badge - Flutuante */}
        <motion.div 
          className="absolute bottom-4 left-4 md:bottom-8 md:left-8 bg-primary-white rounded-xl p-3 sm:p-4 shadow-lg border border-neutral-100 z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="text-center whitespace-nowrap">
            <div className="text-xl sm:text-2xl font-elegant font-bold text-accent-gold">500+</div>
            <div className="text-[10px] sm:text-xs text-neutral-200 uppercase tracking-wider">Clientes Satisfeitos</div>
          </div>
        </motion.div>

        {/* Decorative elements - Flutuantes */}
        <div className="absolute top-4 right-4 md:top-8 md:right-8 w-20 h-20 sm:w-24 sm:h-24 bg-accent-gold/20 rounded-full blur-xl z-0 pointer-events-none"></div>
        <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 w-28 h-28 sm:w-32 sm:h-32 bg-accent-sepia/20 rounded-full blur-xl z-0 pointer-events-none"></div>
      </HeroSection>
      
    </section>
  );
};

export default Hero;