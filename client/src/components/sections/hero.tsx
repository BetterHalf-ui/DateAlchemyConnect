import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import { useApplicationLink } from "@/hooks/use-application-link";
import { trackApplicationClick } from "@/lib/analytics";
import { trackApplicationSubmit } from "@/lib/meta-pixel";
import coupleImagePath from "@assets/WhatsApp Image 2025-08-11 at 12.07.54 PM_1755074867371.jpeg";

export default function Hero() {
  const { t, language } = useI18n();
  const applicationLink = useApplicationLink();
  const [animationTriggered, setAnimationTriggered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Trigger animation after slight scroll (20px)
      if (scrollY > 20) {
        setAnimationTriggered(true);
      }
    };

    const handleMouseMove = () => {
      // Trigger animation on first mouse movement
      if (!animationTriggered) {
        setAnimationTriggered(true);
      }
    };

    // Add event listeners
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', checkMobile);
    };
  }, [animationTriggered]);

  // Split text into words for staggered animation
  const titleWords = t('home.hero.title').split(" ");

  return (
    <section 
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{
        paddingTop: '96px', // Account for banner (40px) + header (56px)
      }}
    >
      {/* Background Image - Optimized for mobile */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('${coupleImagePath}')`,
          backgroundAttachment: isMobile ? 'scroll' : 'fixed',
          backgroundPosition: 'center 35%',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          transform: isMobile ? 'translate3d(0, 0, 0)' : 'none', // Force GPU acceleration on mobile
          minHeight: '100vh', // Ensure full height coverage on mobile
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-10" />
      
      {/* Content */}
      <div className="relative z-20 text-center text-white px-4 max-w-6xl">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight subtitle">
          {titleWords.map((word, index) => (
            <span
              key={index}
              className={`inline-block mr-4 transition-all duration-700 ease-out ${
                animationTriggered 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-16'
              }`}
              style={{
                transitionDelay: animationTriggered ? `${index * 0.1}s` : '0s'
              }}
            >
              {word}
            </span>
          ))}
        </h1>
        <p className={`text-xl md:text-2xl mb-8 text-white/90 transition-all duration-700 ease-out ${
          animationTriggered 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-12'
        }`}
        style={{
          transitionDelay: animationTriggered ? `${titleWords.length * 0.1 + 0.1}s` : '0s'
        }}>
          {t('home.hero.subtitle')}
        </p>
        <div className={`flex justify-center transition-all duration-700 ease-out ${
          animationTriggered 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-12'
        }`}
        style={{
          transitionDelay: animationTriggered ? `${titleWords.length * 0.1 + 0.2}s` : '0s'
        }}>
          <button
            onClick={() => {
              const introSection = document.getElementById('intro');
              if (introSection) {
                introSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
            data-testid="button-discover-more"
          >
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg hover-lift">
              {t('home.hero.cta')}
            </Button>
          </button>
        </div>
      </div>
    </section>
  );
}