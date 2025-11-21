import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Instagram } from 'lucide-react';
import Button from '../common/Button';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          
          // Verifica se passou do threshold para aplicar blur
          setIsScrolled((prev) => {
            const scrolled = currentScrollY > 50;
            return scrolled !== prev ? scrolled : prev;
          });
          
          // Lógica de mostrar/esconder header
          if (currentScrollY < 10) {
            // No topo - sempre visível
            setIsVisible(true);
            lastScrollY.current = currentScrollY;
          } else if (currentScrollY > 100) {
            // Abaixo do threshold
            const scrollingDown = currentScrollY > lastScrollY.current;
            const scrollDifference = Math.abs(currentScrollY - lastScrollY.current);
            
            // Só atualiza se houver diferença significativa (evita mudanças mínimas)
            if (scrollDifference > 5) {
              setIsVisible((prevVisible) => {
                if (scrollingDown && prevVisible) {
                  // Descendo - esconde header
                  return false;
                } else if (!scrollingDown && !prevVisible) {
                  // Subindo - mostra header
                  return true;
                }
                return prevVisible;
              });
              
              lastScrollY.current = currentScrollY;
            }
          } else {
            lastScrollY.current = currentScrollY;
          }
          
          ticking.current = false;
        });
        
        ticking.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#about' },
    { name: 'Serviços', href: '#services' },
    { name: 'Galeria', href: '#gallery' },
    { name: 'Depoimentos', href: '#testimonials' },
    { name: 'Contato', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Olá! Gostaria de agendar um horário.');
    window.open(`https://wa.me/5585996163468?text=${message}`, '_blank');
  };

  return (
    <header 
      className={`fixed top-0 left-1/2 -translate-x-1/2 z-50 transition-transform duration-300 ease-in-out w-[100%] md:w-full md:left-0 md:translate-x-0 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${
        isScrolled 
          ? 'bg-primary-white/80 backdrop-blur-md shadow-md border-b border-neutral-100' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-4">
          {/* Logo */}
          <div className="flex items-center space-x-2 flex-shrink-0 min-w-0">
            <div className="text-base sm:text-lg md:text-xl font-elegant font-bold text-primary-black whitespace-nowrap truncate">
              M Studio Dimmy
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 flex-shrink-0">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="text-neutral-800 hover:text-accent-gold font-medium transition-colors duration-200 text-sm lg:text-base whitespace-nowrap"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3 lg:space-x-4 flex-shrink-0">
            <Button 
              variant="primary" 
              size="sm"
              onClick={handleWhatsAppClick}
              className="flex items-center gap-1.5 lg:gap-2 justify-center whitespace-nowrap"
            >
              <i className="bi bi-whatsapp text-sm flex-shrink-0"></i>
              <span className="text-xs lg:text-sm">Agendar</span>
            </Button>
            <a
              href="https://instagram.com/mstudiodimmy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-800 hover:text-accent-gold transition-colors duration-200"
            >
              <Instagram size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden text-primary-black z-50 relative rounded-lg p-2 flex-shrink-0 transition-all duration-300 ${
              isScrolled || isMenuOpen
                ? 'bg-primary-white/90 backdrop-blur-sm' 
                : 'bg-transparent'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-primary-white border-t border-neutral-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="text-left text-neutral-800 hover:text-accent-gold font-medium transition-colors duration-200 py-2"
                >
                  {item.name}
                </button>
              ))}
              <div className="flex items-center space-x-4 pt-4 border-t border-neutral-100">
                <Button 
                  variant="primary" 
                  size="sm"
                  onClick={handleWhatsAppClick}
                  className="flex items-center gap-2 justify-center"
                >
                  <i className="bi bi-whatsapp text-sm sm:text-base flex-shrink-0"></i>
                  <span>Agendar Horário</span>
                </Button>
                <a
                  href="https://instagram.com/mstudiodimmy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-800 hover:text-accent-gold transition-colors duration-200"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;