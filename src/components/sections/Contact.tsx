import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Section from '../common/Section';
import Typography from '../common/Typography';
import Button from '../common/Button';

interface FormData {
  name: string;
  phone: string;
  service: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      const message = encodeURIComponent(
        `Olá! Meu nome é ${formData.name}.\n` +
        `Telefone: ${formData.phone}\n` +
        `Serviço de interesse: ${formData.service}\n` +
        `Mensagem: ${formData.message}`
      );
      
      window.open(`https://wa.me/5585996163468?text=${message}`, '_blank');
      
      setSubmitMessage('Redirecionando para WhatsApp...');
      setIsSubmitting(false);
      
      // Reset form
      setFormData({
        name: '',
        phone: '',
        service: '',
        message: ''
      });
      
      setTimeout(() => {
        setSubmitMessage('');
      }, 3000);
    }, 1000);
  };

  const handleLocationClick = () => {
    window.open('https://maps.google.com/?q=Rua+Oliveira+Sobrinho,+Bonsucesso,+Fortaleza+CE', '_blank');
  };

  const contactInfo = [
    {
      icon: <i className="bi bi-whatsapp text-accent-gold text-xl"></i>,
      title: "WhatsApp",
      value: "(85) 99616-3468",
      action: () => window.open('https://wa.me/5585996163468', '_blank')
    },
    {
      icon: <i className="bi bi-clock text-accent-gold text-xl"></i>,
      title: "Horário de Atendimento",
      value: "Segunda a Sexta\n09:00 às 18:00",
      action: null
    },
    {
      icon: <i className="bi bi-geo-alt text-accent-gold text-xl"></i>,
      title: "Localização",
      value: "Rua Oliveira Sobrinho\nBonsucesso - Fortaleza/CE",
      action: handleLocationClick
    }
  ];

  const services = [
    "Design de Sobrancelhas",
    "Maquiagem Profissional", 
    "Consultoria de Imagem",
    "Design e Estética",
    "Workshops e Cursos",
    "Outro Serviço"
  ];

  return (
    <Section id="contact" background="gray">
      <div className="text-center space-y-3 sm:space-y-4 mb-10 sm:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Typography variant="h2" className="text-gradient-gold">
            Entre em Contato
          </Typography>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Typography variant="body" className="text-sm sm:text-base md:text-lg max-w-3xl mx-auto" color="gray">
            Facilite seu agendamento, tire dúvidas ou solicite seu orçamento. 
            Estamos aqui para transformar sua experiência de beleza.
          </Typography>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6 sm:space-y-8"
        >
          <div className="bg-primary-white rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg border border-neutral-100">
            <Typography variant="h3" className="mb-4 sm:mb-6">
              Solicite seu Orçamento
            </Typography>
            
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-xs sm:text-sm font-semibold text-neutral-800 mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-neutral-100 rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-transparent outline-none transition-all"
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-xs sm:text-sm font-semibold text-neutral-800 mb-2">
                  WhatsApp *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-neutral-100 rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-transparent outline-none transition-all"
                  placeholder="(85) 9 9999-9999"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-xs sm:text-sm font-semibold text-neutral-800 mb-2">
                  Serviço de Interesse *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-neutral-100 rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-transparent outline-none transition-all"
                >
                  <option value="">Selecione um serviço</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs sm:text-sm font-semibold text-neutral-800 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-neutral-100 rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Conte-nos mais sobre o que você procura..."
                />
              </div>

              {submitMessage && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-sm">
                  {submitMessage}
                </div>
              )}

              <Button 
                type="submit"
                variant="primary" 
                size="lg"
                disabled={isSubmitting}
                className="w-full group flex items-center justify-center gap-2"
              >
                <i className="bi bi-whatsapp text-lg"></i>
                <span>{isSubmitting ? 'Enviando...' : 'Enviar via WhatsApp'}</span>
              </Button>
            </form>
          </div>

          {/* Quick Contact */}
          <div className="space-y-4">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-primary-white rounded-xl p-6 shadow-sm border border-neutral-100 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    {info.icon}
                  </div>
                  <div className="flex-1">
                    <Typography variant="h4" className="text-base mb-1">
                      {info.title}
                    </Typography>
                    <Typography variant="body" color="gray" className="whitespace-pre-line">
                      {info.value}
                    </Typography>
                    {info.action && (
                      <button
                        onClick={info.action}
                        className="mt-2 text-accent-gold hover:text-accent-sepia text-sm font-medium transition-colors"
                      >
                        {info.title === 'WhatsApp' ? 'Enviar mensagem' : 
                         info.title === 'Localização' ? 'Ver no mapa' : null}
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Map and Additional Info */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Map */}
          <div className="bg-primary-white rounded-2xl p-6 shadow-lg border border-neutral-100">
            <Typography variant="h3" className="mb-4">
              Localização
            </Typography>
            
            <div className="aspect-video rounded-lg overflow-hidden border border-neutral-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.3!2d-38.5!3d-3.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c7486291d4c7af%3A0x1234567890abcdef!2sRua%20Oliveira%20Sobrinho%20-%20Bonsucesso%2C%20Fortaleza%20-%20CE%2C%2060330-140!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização M Studio Dimmy"
              />
            </div>
            
            <div className="mt-4 p-4 bg-neutral-50 rounded-lg">
              <Typography variant="body" className="text-sm" color="gray">
                📍 <strong>Endereço completo:</strong><br />
                Rua Oliveira Sobrinho<br />
                Bonsucesso - Fortaleza/CE<br />
                CEP: 60330-140
              </Typography>
            </div>
          </div>

          {/* Additional Info */}
          <div className="bg-primary-white rounded-2xl p-6 shadow-lg border border-neutral-100">
            <Typography variant="h3" className="mb-4">
              Informações Importantes
            </Typography>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent-gold rounded-full mt-2" />
                <Typography variant="body" className="text-sm" color="gray">
                  Atendimento exclusivamente com hora marcada para garantir a melhor experiência.
                </Typography>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent-gold rounded-full mt-2" />
                <Typography variant="body" className="text-sm" color="gray">
                  Estacionamento disponível próximo ao studio.
                </Typography>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent-gold rounded-full mt-2" />
                <Typography variant="body" className="text-sm" color="gray">
                  Cancelamentos devem ser feitos com até 24h de antecedência.
                </Typography>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent-gold rounded-full mt-2" />
                <Typography variant="body" className="text-sm" color="gray">
                  Aceitamos pagamento em dinheiro, cartão e Pix.
                </Typography>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default Contact;