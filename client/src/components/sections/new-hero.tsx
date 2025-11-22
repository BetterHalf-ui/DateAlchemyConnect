import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useApplicationLink } from "@/hooks/use-application-link";
import { useI18n } from "@/lib/i18n";

export default function NewHero() {
  const applicationLink = useApplicationLink();
  const { t } = useI18n();
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 10) { // Slight scroll needed
        setTextVisible(true);
      }
    };

    // Show immediately on load for better UX
    setTimeout(() => setTextVisible(true), 500);
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="section-black min-h-screen flex items-center justify-center relative">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://frolic.mu/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-05-at-7.07.25-PM.jpeg')`,
        }}
      />
      
      <div className="relative z-10 text-center text-white px-4 max-w-6xl">
        <h1 className={`text-4xl md:text-6xl lg:text-7xl serif-title mb-4 leading-tight hero-text-reveal ${
          textVisible ? 'visible' : ''
        }`}>
          {t('home.hero.title')}
        </h1>
        <p className={`text-xl md:text-2xl mb-8 text-white/90 hero-text-reveal ${
          textVisible ? 'visible' : ''
        }`}>
          {t('home.hero.subtitle')}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <a 
            href={applicationLink} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg serif-title luxury-hover">
              Sign Up
            </Button>
          </a>
          <Link href="/network" onClick={() => window.scrollTo(0, 0)}>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg serif-title luxury-hover">
              Create a Complimentary Profile
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}