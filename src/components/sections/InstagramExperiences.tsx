import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Heart, MessageCircle as InstagramComment } from 'lucide-react';
import Section from '../common/Section';
import Typography from '../common/Typography';
import Button from '../common/Button';

const InstagramExperiences: React.FC = () => {
  // Array com as imagens do Instagram da pasta public/instagram
  const instagramImages = [
    "/instagram/SaveGram.App_560100505_18056942753573814_2608789414918131326_n.jpg",
    "/instagram/SaveGram.App_560457766_18056942762573814_8508979496672098797_n.jpg",
    "/instagram/SaveGram.App_561543748_18057568556573814_2596114394615542641_n.jpg",
    "/instagram/SaveGram.App_561603150_18057855392573814_2018292568017837464_n.jpg",
    "/instagram/SaveGram.App_562994467_18057568547573814_424135671317864603_n.jpg",
    "/instagram/SaveGram.App_565140795_18058564490573814_3196291135362484993_n.jpg",
    "/instagram/SaveGram.App_565790203_18059009579573814_4186778704440410221_n.jpg",
    "/instagram/SaveGram.App_566479444_18059207321573814_8484057568245527382_n.jpg"
  ];

  const experiences = [
    {
      name: "Mariana Silva",
      service: "Design de Sobrancelhas",
      rating: 5,
      comment: "Transformação incrível! Dimmy é super cuidadosa e atenciosa. Minhas sobrancelhas nunca ficaram tão perfeitas!",
      date: "2 semanas atrás"
    },
    {
      name: "Juliana Costa",
      service: "Maquiagem de Festa",
      rating: 5,
      comment: "Maquiagem perfeita que durou a noite toda! Recebi elogios o tempo todo. Profissional incrível!",
      date: "1 mês atrás"
    },
    {
      name: "Patricia Oliveira",
      service: "Consultoria de Imagem",
      rating: 5,
      comment: "A consultoria mudou minha autoestima! Aprendi a valorizar meus pontos fortes. Super recomendo!",
      date: "3 semanas atrás"
    }
  ];

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Olá! Vi as fotos no Instagram e gostaria de agendar um horário.');
    window.open(`https://wa.me/5585996163468?text=${message}`, '_blank');
  };

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/mstudiodimmy/', '_blank');
  };

  return (
    <Section id="instagram-experiences" background="white">
      <div className="text-center space-y-3 sm:space-y-4 mb-10 sm:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Typography variant="h2" className="text-gradient-gold">
            Experiências Reais no Instagram
          </Typography>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Typography variant="body" className="text-sm sm:text-base md:text-lg max-w-3xl mx-auto" color="gray">
            Acompanhe nosso dia a dia e veja transformações reais de clientes que confiaram no nosso trabalho. 
            Cada imagem conta uma história de autoestima elevada e beleza realçada.
          </Typography>
        </motion.div>
      </div>

      {/* Instagram Feed Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 mb-10 sm:mb-16">
        {instagramImages.map((image, index) => (
          <motion.div
            key={index}
            className="relative group cursor-pointer overflow-hidden rounded-xl aspect-square"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            onClick={handleInstagramClick}
          >
            <img 
              src={image} 
              alt={`Trabalho realizado no M Studio Dimmy ${index + 1}`}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center gap-2 text-white">
                  <Instagram size={16} />
                  <span className="text-sm font-medium">@mstudiodimmy</span>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="flex gap-4 text-white">
                <Heart className="w-6 h-6" />
                <InstagramComment className="w-6 h-6" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Experiences Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 mb-10 sm:mb-16">
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            className="bg-neutral-50 rounded-2xl p-4 sm:p-6 border border-neutral-100"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-3">
              {[...Array(experience.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-accent-gold text-accent-gold" />
              ))}
              <span className="text-sm text-neutral-200 ml-2">{experience.date}</span>
            </div>
            <Typography variant="h4" className="mb-2">{experience.name}</Typography>
            <Typography variant="caption" className="text-accent-gold mb-3 font-medium">
              {experience.service}
            </Typography>
            <Typography variant="body" color="gray" className="italic">
              "{experience.comment}"
            </Typography>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="bg-gradient-to-r from-accent-gold/10 to-accent-sepia/10 rounded-2xl p-8 max-w-3xl mx-auto">
          <Typography variant="h3" className="mb-4">
            Quer fazer parte dessas histórias?
          </Typography>
          <Typography variant="body" className="mb-6" color="gray">
            Siga-nos no Instagram e descubra como podemos transformar sua autoestima com nossos serviços premium.
          </Typography>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="primary" 
              size="lg" 
              onClick={handleWhatsAppClick}
              className="flex items-center gap-2 justify-center"
            >
              <i className="bi bi-whatsapp text-base sm:text-lg flex-shrink-0"></i>
              <span>Agende seu horário</span>
            </Button>
            <Button 
              variant="secondary" 
              size="lg" 
              onClick={handleInstagramClick}
              className="flex items-center gap-2 justify-center"
            >
              <Instagram size={18} className="sm:w-5 sm:h-5 flex-shrink-0" />
              <span>Seguir no Instagram</span>
            </Button>
          </div>
        </div>
      </motion.div>
    </Section>
  );
};

// Star component for ratings
const Star: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

export default InstagramExperiences;