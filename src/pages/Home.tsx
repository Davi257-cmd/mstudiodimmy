import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SEO from '@/components/common/SEO';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import InstagramExperiences from '@/components/sections/InstagramExperiences';
import JOInstagramSection from '@/components/sections/JOInstagramSection';
import Contact from '@/components/sections/Contact';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-primary-white">
      <SEO 
        title="M Studio Dimmy - Beleza e Estética Premium em Fortaleza"
        description="Realce sua beleza com Dimmy Marinho. Especialista em sobrancelhas, maquiagem e consultoria de imagem. Agende seu horário! WhatsApp (85) 99616-3468"
        keywords="sobrancelhas, maquiagem, design de sobrancelhas, consultoria de imagem, beleza, estética, Fortaleza, Dimmy Marinho, M Studio Dimmy"
      />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <InstagramExperiences />
        <JOInstagramSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;