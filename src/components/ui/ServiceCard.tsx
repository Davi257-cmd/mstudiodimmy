import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '../common/Button';
import Typography from '../common/Typography';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  price?: string;
  delay?: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  features,
  price,
  delay = 0,
}) => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(`Olá! Gostaria de saber mais sobre ${title}.`);
    window.open(`https://wa.me/5585996163468?text=${message}`, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="bg-primary-white rounded-2xl p-8 shadow-lg border border-neutral-100 hover:shadow-xl hover:border-accent-gold transition-all duration-300 group"
    >
      {/* Icon */}
      <div className="mb-6">
        <div className="w-16 h-16 bg-gradient-to-br from-accent-gold to-accent-sepia rounded-2xl flex items-center justify-center text-primary-white group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
      </div>

      {/* Content */}
      <div className="space-y-4">
        <Typography variant="h3" className="text-xl text-left">
          {title}
        </Typography>
        
        <Typography variant="body" color="gray" className="leading-relaxed text-left" align="left">
          {description}
        </Typography>

        {/* Features */}
        <ul className="space-y-2 text-left">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center space-x-2 text-sm text-neutral-200">
              <div className="w-1.5 h-1.5 bg-accent-gold rounded-full flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* Price */}
        {price && (
          <div className="pt-4 border-t border-neutral-100 text-left">
            <Typography variant="h4" className="text-accent-gold text-left" align="left">
              {price}
            </Typography>
          </div>
        )}

        {/* CTA */}
        <div className="pt-6">
          <Button 
            variant="primary" 
            size="sm"
            onClick={handleWhatsAppClick}
            className="w-full group flex items-center justify-center gap-2"
          >
            <i className="bi bi-whatsapp text-sm flex-shrink-0"></i>
            <span>Solicitar Orçamento</span>
            <ArrowRight size={16} className="flex-shrink-0 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;