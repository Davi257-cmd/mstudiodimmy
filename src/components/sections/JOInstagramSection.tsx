import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Heart, ExternalLink } from 'lucide-react';
import Section from '../common/Section';
import Typography from '../common/Typography';
import Button from '../common/Button';

interface InstagramPost {
  id: string;
  media_url: string;
  caption?: string;
  permalink: string;
  timestamp: string;
  like_count?: number;
}

const JOInstagramSection: React.FC = () => {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  // Real Instagram images from JO's folder
  const realPosts: InstagramPost[] = [
    {
      id: '1',
      media_url: '/instagram-jo\'s/SaveGram.App_487140990_18495946243004900_4949279182269582274_n.jpg',
      caption: 'JO\'s Professional - Produtos premium para resultados excepcionais ✨',
      permalink: 'https://instagram.com/p/jos1',
      timestamp: '2024-01-15T10:00:00Z',
      like_count: 142
    },
    {
      id: '2',
      media_url: '/instagram-jo\'s/SaveGram.App_582760234_18542614480004900_4340163367321388539_n.jpg',
      caption: 'Cosméticos profissionais de alta performance 💄',
      permalink: 'https://instagram.com/p/jos2',
      timestamp: '2024-01-10T15:30:00Z',
      like_count: 203
    },
    {
      id: '3',
      media_url: '/instagram-jo\'s/SaveGram.App_583695832_1177800681112667_7474130045391229241_n.jpg',
      caption: 'A JO\'s transformando talentos em protagonistas da beleza 😍',
      permalink: 'https://instagram.com/p/jos3',
      timestamp: '2024-01-08T09:15:00Z',
      like_count: 89
    },
    {
      id: '4',
      media_url: '/instagram-jo\'s/SaveGram.App_583782256_18537624019017597_6169486149627745692_n.jpg',
      caption: 'Qualidade e excelência em cada produto 🌟',
      permalink: 'https://instagram.com/p/jos4',
      timestamp: '2024-01-05T14:20:00Z',
      like_count: 156
    },
    {
      id: '5',
      media_url: '/instagram-jo\'s/SaveGram.App_583841280_18542853511004900_5075823113790851673_n.jpg',
      caption: 'Parceira oficial M Studio Dimmy - Confiança garantida 💫',
      permalink: 'https://instagram.com/p/jos5',
      timestamp: '2024-01-03T11:45:00Z',
      like_count: 178
    },
    {
      id: '6',
      media_url: '/instagram-jo\'s/SaveGram.App_585390684_1754752491876243_61008917046837321_n.jpg',
      caption: 'Tecnologia e inovação para profissionais da beleza ✨',
      permalink: 'https://instagram.com/p/jos6',
      timestamp: '2023-12-28T16:00:00Z',
      like_count: 124
    }
  ];

  useEffect(() => {
    // Simulate API loading
    setTimeout(() => {
      setPosts(realPosts);
      setLoading(false);
    }, 1500);
  }, []);

  const handleInstagramClick = () => {
    window.open('https://instagram.com/josprofessional', '_blank');
  };

  const handleJOSClick = () => {
    window.open('https://josprofessional.com.br', '_blank');
  };

  return (
    <Section id="jo-instagram" background="white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
        {/* Left Side - JO's Professional Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="text-center lg:text-left space-y-4">
            <Typography variant="h2" className="text-gradient-gold">
              JO's Professional
            </Typography>
            <Typography variant="h3" className="text-xl text-neutral-700">
              Nossa Parceira Oficial
            </Typography>
          </div>

          <div className="bg-gradient-to-r from-accent-gold/10 to-accent-sepia/10 rounded-3xl p-8">
            <div className="flex items-center space-x-4 mb-6">
              <img 
                src="/instagram-jo's/logo-jo's.jpg" 
                alt="JO's Professional Logo" 
                className="w-20 h-20 object-contain rounded-2xl"
              />
              <div>
                <Typography variant="h3" className="text-2xl">
                  JO's Professional
                </Typography>
                <Typography variant="caption" color="gold" className="uppercase tracking-wider">
                  Premium Cosmetics
                </Typography>
              </div>
            </div>
            
            <Typography variant="body" className="leading-relaxed mb-6">
              A JO's Professional é nossa parceira oficial, fornecendo produtos de alta performance 
              que garantem resultados excepcionais. Juntos, transformamos talentos em protagonistas da beleza.
            </Typography>

            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center">
                <Award className="w-8 h-8 text-accent-gold mx-auto mb-2" />
                <div className="text-sm font-semibold">Premium</div>
                <div className="text-xs text-neutral-600">Qualidade</div>
              </div>
              <div className="text-center">
                <Users className="w-8 h-8 text-accent-gold mx-auto mb-2" />
                <div className="text-sm font-semibold">Profissional</div>
                <div className="text-xs text-neutral-600">Especializada</div>
              </div>
              <div className="text-center">
                <Heart className="w-8 h-8 text-accent-gold mx-auto mb-2" />
                <div className="text-sm font-semibold">Confiança</div>
                <div className="text-xs text-neutral-600">Garantida</div>
              </div>
            </div>

            <Button 
              variant="primary" 
              onClick={handleJOSClick}
              className="w-full"
            >
              Conheça a JO's Professional
            </Button>
          </div>
        </motion.div>

        {/* Right Side - Instagram Carousel */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="text-center space-y-2">
            <div className="flex items-center justify-center space-x-2">
              <i className="bi bi-instagram text-accent-gold text-xl"></i>
              <Typography variant="h3" className="text-xl">
                @josprofessional
              </Typography>
            </div>
            <Typography variant="body" color="gray">
              Produtos premium e transformações
            </Typography>
          </div>

          {/* Instagram Auto-Slider Carousel */}
          <div className="relative">
            {loading ? (
              <div className="grid grid-cols-2 gap-4">
                {[...Array(4)].map((_, index) => (
                  <div key={index} className="aspect-square bg-neutral-50 rounded-2xl animate-pulse" />
                ))}
              </div>
            ) : (
              <>
                <style>{`
                  @keyframes scroll-right {
                    0% {
                      transform: translateX(0);
                    }
                    100% {
                      transform: translateX(-50%);
                    }
                  }

                  .infinite-scroll {
                    animation: scroll-right 15s linear infinite;
                  }

                  .scroll-container {
                    mask: linear-gradient(
                      90deg,
                      transparent 0%,
                      black 10%,
                      black 90%,
                      transparent 100%
                    );
                    -webkit-mask: linear-gradient(
                      90deg,
                      transparent 0%,
                      black 10%,
                      black 90%,
                      transparent 100%
                    );
                  }

                  .image-item {
                    transition: transform 0.3s ease, filter 0.3s ease;
                  }

                  .image-item:hover {
                    transform: scale(1.05);
                    filter: brightness(1.1);
                  }
                `}</style>
                
                <div className="scroll-container w-full rounded-2xl overflow-hidden">
                  <div className="infinite-scroll flex gap-4 w-max">
                    {/* First set of images */}
                    {posts.slice(0, 4).map((post, index) => (
                      <div
                        key={`first-${post.id}`}
                        className="image-item flex-shrink-0 w-32 h-32 md:w-40 md:h-40 rounded-xl overflow-hidden shadow-lg"
                      >
                        <img
                          src={post.media_url}
                          alt={post.caption || 'Trabalho do M Studio Dimmy'}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    ))}
                    {/* Duplicate set for seamless loop */}
                    {posts.slice(0, 4).map((post, index) => (
                      <div
                        key={`second-${post.id}`}
                        className="image-item flex-shrink-0 w-32 h-32 md:w-40 md:h-40 rounded-xl overflow-hidden shadow-lg"
                      >
                        <img
                          src={post.media_url}
                          alt={post.caption || 'Trabalho do M Studio Dimmy'}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            {/* CTA */}
            <motion.div 
              className="text-center mt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Button 
                variant="primary" 
                onClick={handleInstagramClick}
                className="group flex items-center gap-2 justify-center"
              >
                <i className="bi bi-instagram text-base sm:text-lg flex-shrink-0"></i>
                <span>Siga @josprofessional</span>
                <ExternalLink size={18} className="sm:w-5 sm:h-5 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default JOInstagramSection;