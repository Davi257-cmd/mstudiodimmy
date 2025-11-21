import React from 'react';
import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import Section from '../common/Section';
import Typography from '../common/Typography';

interface Testimonial {
  id: number;
  name: string;
  service: string;
  rating: number;
  comment: string;
  image?: string;
}

const TestimonialCard: React.FC<{ testimonial: Testimonial; index: number }> = ({ testimonial, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-primary-white rounded-2xl p-8 shadow-lg border border-neutral-100 hover:shadow-xl transition-all duration-300"
    >
      {/* Rating */}
      <div className="flex items-center space-x-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className={i < testimonial.rating ? 'text-accent-gold fill-current' : 'text-neutral-200'}
          />
        ))}
      </div>

      {/* Comment */}
      <Typography variant="body" className="mb-6 italic leading-relaxed">
        "{testimonial.comment}"
      </Typography>

      {/* Client Info */}
      <div className="flex items-center space-x-3">
        {/* Avatar */}
        <div className="w-12 h-12 bg-gradient-to-br from-accent-gold to-accent-sepia rounded-full flex items-center justify-center text-primary-white font-bold">
          {testimonial.name.charAt(0)}
        </div>
        
        <div>
          <Typography variant="h4" className="text-base">
            {testimonial.name}
          </Typography>
          <Typography variant="caption" color="gray">
            {testimonial.service}
          </Typography>
        </div>
      </div>
    </motion.div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Ana Carolina",
      service: "Design de Sobrancelhas",
      rating: 5,
      comment: "Dimmy é simplesmente incrível! Transformou completamente minhas sobrancelhas. O trabalho é impecável e o atendimento é super personalizado. Recomendo muito!"
    },
    {
      id: 2,
      name: "Juliana Silva",
      service: "Maquiagem de Noiva",
      rating: 5,
      comment: "No dia mais importante da minha vida, confiei na Dimmy para minha maquiagem e foi a melhor escolha! Fiquei deslumbrante e a maquiagem durou o dia todo. Perfeita!"
    },
    {
      id: 3,
      name: "Patrícia Costa",
      service: "Consultoria de Imagem",
      rating: 5,
      comment: "A consultoria com a Dimmy mudou minha forma de me ver. Ela me ajudou a descobrir meu estilo e agora me sinto muito mais confiante. Vale cada investimento!"
    },
    {
      id: 4,
      name: "Mariana Oliveira",
      service: "Maquiagem Social",
      rating: 5,
      comment: "Profissional extremamente qualificada e atenciosa. A maquiagem ficou perfeita para o evento e todos elogiaram. Já marquei meu próximo horário!"
    },
    {
      id: 5,
      name: "Fernanda Lima",
      service: "Design de Sobrancelhas + Maquiagem",
      rating: 5,
      comment: "Dimmy tem uma habilidade única de realçar a beleza natural. Meu rosto ficou completamente transformado. Sou cliente fiel e indico para todas as minhas amigas!"
    },
    {
      id: 6,
      name: "Camila Rodrigues",
      service: "Workshop de Maquiagem",
      rating: 5,
      comment: "Fiz o workshop com a Dimmy e foi incrível! Aprendi técnicas que uso todos os dias. Ela é uma excelente professora, muito paciente e didática."
    }
  ];

  return (
    <Section id="testimonials" background="gray">
      <div className="text-center space-y-4 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Typography variant="h2" className="text-gradient-gold">
            Experiências Reais, Resultados Únicos
          </Typography>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Typography variant="body" className="text-lg max-w-3xl mx-auto" color="gray">
            Veja o que nossas clientes dizem sobre os serviços e a experiência 
            de se cuidar com quem é referência no mercado.
          </Typography>
        </motion.div>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={testimonial.id}
            testimonial={testimonial}
            index={index}
          />
        ))}
      </div>

      {/* Stats */}
      <motion.div 
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-elegant font-bold text-accent-gold mb-2">500+</div>
            <div className="text-sm text-neutral-200 uppercase tracking-wider">Clientes Satisfeitas</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-elegant font-bold text-accent-gold mb-2">5+</div>
            <div className="text-sm text-neutral-200 uppercase tracking-wider">Anos de Experiência</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-elegant font-bold text-accent-gold mb-2">4.9</div>
            <div className="text-sm text-neutral-200 uppercase tracking-wider">Avaliação Média</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-elegant font-bold text-accent-gold mb-2">95%</div>
            <div className="text-sm text-neutral-200 uppercase tracking-wider">Taxa de Retorno</div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
};

export default Testimonials;