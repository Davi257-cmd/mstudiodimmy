import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Heart } from 'lucide-react';
import Section from '../common/Section';
import Typography from '../common/Typography';
import Button from '../common/Button';

const Partners: React.FC = () => {
  const partners = [
    {
      name: "JO's Professional",
      logo: "JO'S",
      description: "Marca premium de cosméticos profissionais, parceira oficial do M Studio Dimmy.",
      highlight: true,
      website: "https://josprofessional.com.br"
    },
    {
      name: "Beauty Pro Academy",
      logo: "BPA",
      description: "Centro de formação profissional em beleza e estética, com cursos certificados.",
      highlight: false,
      website: "#"
    },
    {
      name: "Premium Beauty",
      logo: "PB",
      description: "Distribuidora de produtos de alta performance para profissionais da beleza.",
      highlight: false,
      website: "#"
    }
  ];

  const handlePartnerClick = (website: string) => {
    if (website !== '#') {
      window.open(website, '_blank');
    }
  };

  return (
    <Section id="partners" background="white">
      <div className="text-center space-y-4 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Typography variant="h2" className="text-gradient-gold">
            Parceiros e Marcas
          </Typography>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Typography variant="body" className="text-lg max-w-3xl mx-auto" color="gray">
            Trabalhamos com as melhores marcas do mercado para garantir qualidade 
            e excelência em todos os nossos serviços.
          </Typography>
        </motion.div>
      </div>

      {/* Main Partner - JO's Professional */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="bg-gradient-to-r from-accent-gold/10 to-accent-sepia/10 rounded-3xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-20 h-20 bg-gradient-to-br from-accent-gold to-accent-sepia rounded-2xl flex items-center justify-center text-primary-white text-2xl font-bold">
                  JO'S
                </div>
                <div>
                  <Typography variant="h3" className="text-2xl">
                    JO's Professional
                  </Typography>
                  <Typography variant="caption" color="gold" className="uppercase tracking-wider">
                    Parceira Oficial
                  </Typography>
                </div>
              </div>
              
              <Typography variant="body" className="leading-relaxed">
                A JO's Professional é nossa parceira oficial, fornecendo produtos de alta performance 
                que garantem resultados excepcionais. Juntos, transformamos talentos em protagonistas da beleza.
              </Typography>

              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <Award className="w-8 h-8 text-accent-gold mx-auto mb-2" />
                  <div className="text-sm font-semibold">Premium</div>
                  <div className="text-xs text-neutral-200">Qualidade</div>
                </div>
                <div className="text-center">
                  <Users className="w-8 h-8 text-accent-gold mx-auto mb-2" />
                  <div className="text-sm font-semibold">Profissional</div>
                  <div className="text-xs text-neutral-200">Especializada</div>
                </div>
                <div className="text-center">
                  <Heart className="w-8 h-8 text-accent-gold mx-auto mb-2" />
                  <div className="text-sm font-semibold">Confiança</div>
                  <div className="text-xs text-neutral-200">Garantida</div>
                </div>
              </div>

              <Button 
                variant="primary" 
                onClick={() => handlePartnerClick("https://josprofessional.com.br")}
              >
                Conheça a JO's Professional
              </Button>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-2xl flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-32 h-32 mx-auto bg-gradient-to-br from-accent-gold to-accent-sepia rounded-2xl flex items-center justify-center text-primary-white">
                    <span className="text-4xl font-bold">JO'S</span>
                  </div>
                  <Typography variant="body" color="gray">
                    Produtos Premium<br />para Resultados Excepcionais
                  </Typography>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent-gold/20 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent-sepia/20 rounded-full blur-xl" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Other Partners */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {partners.map((partner, index) => (
          <motion.div
            key={partner.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`rounded-2xl p-6 border transition-all duration-300 hover:shadow-lg ${
              partner.highlight 
                ? 'bg-gradient-to-br from-accent-gold/5 to-accent-sepia/5 border-accent-gold' 
                : 'bg-primary-white border-neutral-100 hover:border-accent-gold'
            }`}
          >
            <div className="text-center space-y-4">
              <div className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center text-primary-white font-bold ${
                partner.highlight 
                  ? 'bg-gradient-to-br from-accent-gold to-accent-sepia' 
                  : 'bg-gradient-to-br from-neutral-200 to-neutral-300 text-neutral-800'
              }`}>
                {partner.logo}
              </div>
              
              <div>
                <Typography variant="h4" className="text-lg">
                  {partner.name}
                </Typography>
                {partner.highlight && (
                  <Typography variant="caption" color="gold" className="uppercase tracking-wider">
                    Parceira Oficial
                  </Typography>
                )}
              </div>
              
              <Typography variant="body" color="gray" className="text-sm leading-relaxed">
                {partner.description}
              </Typography>
              
              <Button 
                variant={partner.highlight ? "primary" : "secondary"} 
                size="sm"
                onClick={() => handlePartnerClick(partner.website)}
                disabled={partner.website === '#'}
              >
                {partner.website === '#' ? 'Em Breve' : 'Conhecer'}
              </Button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div 
        className="text-center mt-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="bg-gradient-to-r from-neutral-50 to-neutral-100 rounded-2xl p-8 max-w-2xl mx-auto">
          <Typography variant="h3" className="mb-4">
            Seja Nosso Parceiro
          </Typography>
          <Typography variant="body" className="mb-6" color="gray">
            Se você representa uma marca de beleza ou estética e deseja fazer parceria conosco, 
            entre em contato para explorar oportunidades de colaboração.
          </Typography>
          <Button variant="primary" size="lg">
            Propor Parceria
          </Button>
        </div>
      </motion.div>
    </Section>
  );
};

export default Partners;