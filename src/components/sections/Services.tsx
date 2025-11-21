import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Palette, Scissors, GraduationCap, Sparkles } from 'lucide-react';
import Section from '../common/Section';
import Typography from '../common/Typography';
import ServiceCard from '../ui/ServiceCard';
import Button from '../common/Button';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Design de Sobrancelhas",
      description: "Transformação completa com técnicas avançadas de design e henna, realçando a expressão natural do seu rosto.",
      features: [
        "Análise facial personalizada",
        "Design proporcional ao rosto",
        "Técnica de henna premium",
        "Finalização com produtos de alta qualidade"
      ],
      price: "A partir de R$ 120"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Maquiagem Profissional",
      description: "Maquiagem para todas as ocasiões: social, festa, noiva, fotográfica. Realçando sua beleza natural.",
      features: [
        "Análise de tom de pele",
        "Técnica adaptada ao evento",
        "Produtos de alta performance",
        "Duração prolongada"
      ],
      price: "A partir de R$ 180"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Consultoria de Imagem",
      description: "Análise completa para descobrir o melhor estilo que se adapta à sua personalidade e estilo de vida.",
      features: [
        "Análise de coloração pessoal",
        "Estilo corporal personalizado",
        "Orientação de maquiagem diária",
        "Prescrição de produtos"
      ],
      price: "A partir de R$ 250"
    },
    {
      icon: <Scissors className="w-8 h-8" />,
      title: "Design e Estética",
      description: "Serviços completos de estética facial com técnicas modernas e produtos premium.",
      features: [
        "Design de sobrancelhas",
        "Limpeza de pele",
        "Tratamentos faciais",
        "Manutenção estética"
      ],
      price: "A partir de R$ 150"
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Workshops e Cursos",
      description: "Treinamentos personalizados para profissionais e iniciantes que desejam aprender as técnicas mais modernas.",
      features: [
        "Cursos de design de sobrancelhas",
        "Workshops de maquiagem",
        "Treinamento personalizado",
        "Certificado de participação"
      ],
      price: "Consultar valores"
    }
  ];

  return (
    <Section id="services" background="white">
      <div className="text-center space-y-3 sm:space-y-4 mb-10 sm:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Typography variant="h2" className="text-gradient-gold">
            Nossos Serviços
          </Typography>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Typography variant="body" className="text-sm sm:text-base md:text-lg max-w-3xl mx-auto" color="gray">
            Oferecemos serviços premium de beleza e estética, utilizando técnicas avançadas 
            e produtos de alta qualidade para garantir resultados excepcionais.
          </Typography>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            {...service}
            delay={index * 0.1}
          />
        ))}
      </div>

      {/* CTA Section */}
      <motion.div 
        className="text-center mt-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="bg-gradient-to-r from-accent-gold/10 to-accent-sepia/10 rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto">
          <Typography variant="h3" className="mb-4 text-center">
            Não encontrou o que procura?
          </Typography>
          <Typography variant="body" className="mb-6 text-center" color="gray">
            Entre em contato e descubra como podemos criar um serviço personalizado para suas necessidades específicas.
          </Typography>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="primary" 
              size="lg" 
              className="flex items-center gap-2 justify-center"
              onClick={() => {
                const message = encodeURIComponent('Olá! Gostaria de saber mais sobre os serviços.');
                window.open(`https://wa.me/5585996163468?text=${message}`, '_blank');
              }}
            >
              <i className="bi bi-whatsapp text-lg flex-shrink-0"></i>
              <span>Fale conosco no WhatsApp</span>
            </Button>
            <Button variant="secondary" size="lg">
              Ver todos os serviços
            </Button>
          </div>
        </div>
      </motion.div>
    </Section>
  );
};

export default Services;