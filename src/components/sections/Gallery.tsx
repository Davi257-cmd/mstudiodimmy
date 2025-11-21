import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Instagram, ExternalLink, Heart } from 'lucide-react';
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

const Gallery: React.FC = () => {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);

  // Mock data for demonstration - In production, this would come from Instagram API
  const mockPosts: InstagramPost[] = [
    {
      id: '1',
      media_url: 'https://images.unsplash.com/photo-1595475038665-8de2728fd0b5?w=400&h=400&fit=crop',
      caption: 'Transformação completa! Design de sobrancelhas + maquiagem para evento especial ✨',
      permalink: 'https://instagram.com/p/mock1',
      timestamp: '2024-01-15T10:00:00Z',
      like_count: 142
    },
    {
      id: '2',
      media_url: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&h=400&fit=crop',
      caption: 'Noiva deslumbrante! Maquiagem leve e elegante para o dia mais especial 💕',
      permalink: 'https://instagram.com/p/mock2',
      timestamp: '2024-01-10T15:30:00Z',
      like_count: 203
    },
    {
      id: '3',
      media_url: 'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb421?w=400&h=400&fit=crop',
      caption: 'Design de sobrancelhas - antes e depois! A diferença é impressionante 😍',
      permalink: 'https://instagram.com/p/mock3',
      timestamp: '2024-01-08T09:15:00Z',
      like_count: 89
    },
    {
      id: '4',
      media_url: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop',
      caption: 'Workshop de automaquiagem - aprendendo técnicas profissionais 💄',
      permalink: 'https://instagram.com/p/mock4',
      timestamp: '2024-01-05T14:20:00Z',
      like_count: 156
    },
    {
      id: '5',
      media_url: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&h=400&fit=crop',
      caption: 'Consultoria de imagem completa - transformação total! ✨',
      permalink: 'https://instagram.com/p/mock5',
      timestamp: '2024-01-03T11:45:00Z',
      like_count: 178
    },
    {
      id: '6',
      media_url: 'https://images.unsplash.com/photo-1595475038665-8de2728fd0b5?w=400&h=400&fit=crop',
      caption: 'Maquiagem para festa - brilho e sofisticação 🌟',
      permalink: 'https://instagram.com/p/mock6',
      timestamp: '2023-12-28T16:00:00Z',
      like_count: 124
    }
  ];

  useEffect(() => {
    // Simulate API loading
    setTimeout(() => {
      setPosts(mockPosts);
      setLoading(false);
    }, 1500);
  }, []);

  const handleInstagramClick = () => {
    window.open('https://instagram.com/mstudiodimmy', '_blank');
  };

  return (
    <Section id="gallery" background="white">
      <div className="text-center space-y-4 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Typography variant="h2" className="text-gradient-gold">
            Nossos Trabalhos
          </Typography>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Typography variant="body" className="text-lg max-w-3xl mx-auto" color="gray">
            Conheça nosso portfólio com transformações reais e resultados incríveis. 
            Cada imagem conta uma história de confiança e beleza realçada.
          </Typography>
        </motion.div>
      </div>

      {/* Instagram Feed */}
      <div className="mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex items-center justify-center space-x-2 mb-8"
        >
          <Instagram className="w-6 h-6 text-accent-gold" />
          <Typography variant="h3" className="text-xl">
            @mstudiodimmy
          </Typography>
        </motion.div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="aspect-square bg-neutral-50 rounded-2xl animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {/* Image */}
                <img
                  src={post.media_url}
                  alt={post.caption || 'Trabalho do M Studio Dimmy'}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <p className="text-sm line-clamp-2 mb-2">{post.caption}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1">
                        <Heart size={14} />
                        <span className="text-xs">{post.like_count}</span>
                      </div>
                      <a
                        href={post.permalink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1 text-xs hover:text-accent-gold transition-colors"
                      >
                        <span>Ver no Instagram</span>
                        <ExternalLink size={12} />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-accent-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* CTA */}
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Button 
          variant="primary" 
          size="lg"
          onClick={handleInstagramClick}
          className="group"
        >
          <Instagram className="w-5 h-5 mr-2" />
          <span>Siga @mstudiodimmy</span>
          <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </motion.div>
    </Section>
  );
};

export default Gallery;