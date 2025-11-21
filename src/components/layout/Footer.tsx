import React from 'react';
import { Instagram, MapPin, ExternalLink } from 'lucide-react';
import Button from '../common/Button';

const Footer: React.FC = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Olá! Gostaria de agendar um horário.');
    window.open(`https://wa.me/5585996163468?text=${message}`, '_blank');
  };

  return (
    <footer className="bg-primary-black text-primary-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-2xl font-elegant font-bold text-accent-gold">
              M Studio Dimmy
            </div>
            <p className="text-neutral-200 text-sm leading-relaxed">
              Realce sua beleza com quem é referência no mercado. 
              Especialista em sobrancelhas, maquiagem e consultoria de imagem.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/mstudiodimmy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-200 hover:text-accent-gold transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://wa.me/5585996163468"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-200 hover:text-accent-gold transition-colors duration-200"
                aria-label="WhatsApp"
              >
                <i className="bi bi-whatsapp text-xl"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-elegant text-lg font-semibold text-accent-gold">
              Navegação
            </h3>
            <nav className="space-y-2">
              {[
                { name: 'Início', href: '#home' },
                { name: 'Sobre', href: '#about' },
                { name: 'Serviços', href: '#services' },
                { name: 'Galeria', href: '#gallery' },
                { name: 'Depoimentos', href: '#testimonials' },
                { name: 'Contato', href: '#contact' },
              ].map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    const element = document.querySelector(item.href);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="block text-neutral-200 hover:text-accent-gold transition-colors duration-200 text-sm"
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-elegant text-lg font-semibold text-accent-gold">
              Serviços
            </h3>
            <ul className="space-y-2 text-neutral-200 text-sm">
              <li>Design de Sobrancelhas</li>
              <li>Maquiagem Profissional</li>
              <li>Consultoria de Imagem</li>
              <li>Workshops e Cursos</li>
              <li>Design e Estética</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-elegant text-lg font-semibold text-accent-gold">
              Contato
            </h3>
            <div className="space-y-3">
              <a 
                href="https://wa.me/5585996163468"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-neutral-200 text-sm hover:text-accent-gold transition-colors duration-200"
              >
                <i className="bi bi-whatsapp text-lg"></i>
                <span>(85) 99616-3468</span>
              </a>
              <div className="flex items-center space-x-2 text-neutral-200 text-sm">
                <MapPin size={16} />
                <span>Rua Oliveira Sobrinho, Bonsucesso</span>
              </div>
              <div className="pt-2">
                <Button 
                  variant="primary" 
                  size="sm"
                  onClick={handleWhatsAppClick}
                  className="flex items-center gap-2 justify-center"
                >
                  <i className="bi bi-whatsapp text-sm sm:text-base flex-shrink-0"></i>
                  <span>Agendar Horário</span>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-neutral-400 text-sm">
              © 2024 M Studio Dimmy. Todos os direitos reservados.
            </div>
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-neutral-400 text-sm">
              <button className="hover:text-accent-gold transition-colors duration-200">
                Política de Privacidade
              </button>
              <span className="text-accent-gold hidden sm:inline">•</span>
              <span>
                Desenvolvido com ♥ por{' '}
                <a 
                  href="https://www.instagram.com/davilucas.dev/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-gold font-semibold pulse-gold hover:text-accent-sepia transition-colors duration-200"
                >
                  Davi Lucas Dev
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;