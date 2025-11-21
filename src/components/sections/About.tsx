import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Star, TrendingUp } from 'lucide-react';
import Section from '../common/Section';
import Typography from '../common/Typography';
import Button from '../common/Button';

const About: React.FC = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Olá! Gostaria de agendar um horário.');
    window.open(`https://wa.me/5585996163468?text=${message}`, '_blank');
  };

  const achievements = [
    {
      icon: <Award className="w-6 h-6 sm:w-8 sm:h-8 text-accent-gold" />,
      title: "Especialista Certificada",
      description: "Formação em design de sobrancelhas e maquiagem profissional com certificações nacionais e internacionais."
    },
    {
      icon: <Users className="w-6 h-6 sm:w-8 sm:h-8 text-accent-gold" />,
      title: "500+ Clientes Satisfeitas",
      description: "Histórico comprovado de clientes felizes e resultados excepcionais em mais de 5 anos de atuação."
    },
    {
      icon: <Star className="w-6 h-6 sm:w-8 sm:h-8 text-accent-gold" />,
      title: "Parcerias Premium",
      description: "Colaboração com marcas renomadas como JO's Professional, garantindo qualidade nos produtos utilizados."
    },
    {
      icon: <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-accent-gold" />,
      title: "Educação Contínua",
      description: "Constante atualização com as últimas tendências e técnicas do mercado de beleza."
    }
  ];

  return (
    <Section id="about" background="gray">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Image */}
        <motion.div 
          className="relative order-2 lg:order-1 flex justify-center lg:justify-end lg:pr-8"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] rounded-2xl overflow-visible shadow-2xl">
            <div className="relative w-full h-full rounded-2xl overflow-hidden">
              <img 
                src="/eu/eu-bio.jpg" 
                alt="Dimmy Marinho - Profissional de Beleza" 
                className="w-full h-full object-cover object-center brightness-110 contrast-110 saturate-115"
                style={{ objectFit: 'cover' }}
              />
            </div>
            
            {/* Decorative elements - Flutuantes */}
            <div className="absolute -top-4 -right-4 w-24 h-24 sm:w-32 sm:h-32 bg-accent-gold/20 rounded-full blur-2xl z-0 pointer-events-none"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 sm:w-40 sm:h-40 bg-accent-sepia/20 rounded-full blur-2xl z-0 pointer-events-none"></div>

            {/* Experience Badge - Flutuante */}
            <motion.div 
              className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 bg-primary-white rounded-xl p-3 sm:p-4 md:p-6 shadow-xl border border-neutral-100 z-10"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-center whitespace-nowrap">
                <div className="text-xl sm:text-2xl md:text-3xl font-elegant font-bold text-accent-gold">5+</div>
                <div className="text-[10px] sm:text-xs text-neutral-200 uppercase tracking-wider">Anos de Experiência</div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div 
          className="space-y-6 md:space-y-8 order-1 lg:order-2 text-center lg:text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Title and Description */}
          <div className="space-y-4">
            <Typography variant="h2" className="text-gradient-gold text-center lg:text-left">
              Sobre Dimmy Marinho
            </Typography>
            
            <Typography variant="body" className="text-base md:text-lg leading-relaxed text-center lg:text-left">
              Com mais de 5 anos de experiência no mercado de beleza, sou especializada em design de sobrancelhas, 
              maquiagem profissional e consultoria de imagem. Minha missão é realçar a beleza natural de cada cliente, 
              proporcionando uma experiência única e personalizada.
            </Typography>

            <Typography variant="body" className="text-sm md:text-base leading-relaxed text-center lg:text-left" color="gray">
              Meu trabalho é guiado por valores de excelência, educação constante, inovação e personalização. 
              Acredito que cada pessoa é única e merece um atendimento que valorize suas características individuais, 
              realçando sua beleza natural e elevando sua autoestima.
            </Typography>
          </div>

          {/* Values */}
          <div className="space-y-4 md:space-y-6">
            <Typography variant="h3" className="text-lg md:text-xl text-center lg:text-left">
              Nossos Valores
            </Typography>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              {achievements.map((achievement, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start gap-3 p-3 md:p-4 bg-primary-white rounded-lg shadow-sm border border-neutral-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0">
                    {achievement.icon}
                  </div>
                  <div className="space-y-1 min-w-0">
                    <Typography variant="h4" className="text-sm md:text-base text-left">
                      {achievement.title}
                    </Typography>
                    <Typography variant="caption" color="gray" className="text-xs md:text-sm text-left" align="left">
                      {achievement.description}
                    </Typography>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 items-center lg:items-start">
            <Button 
              variant="primary" 
              size="lg"
              onClick={handleWhatsAppClick}
              className="w-full sm:w-auto flex items-center justify-center gap-2"
            >
              <i className="bi bi-whatsapp text-lg flex-shrink-0"></i>
              <span>Agende seu horário</span>
            </Button>
            
            <Button 
              variant="secondary" 
              size="lg"
              onClick={() => {
                const element = document.querySelector('#services');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="w-full sm:w-auto justify-center"
            >
              Conheça nossos serviços
            </Button>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default About;