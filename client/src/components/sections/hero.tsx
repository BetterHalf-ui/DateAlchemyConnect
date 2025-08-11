import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import { useApplicationLink } from "@/hooks/use-application-link";
import { trackApplicationClick } from "@/lib/analytics";
import coupleImagePath from "@assets/WhatsApp Image 2025-08-11 at 12.07.54 PM_1754899948811.jpeg";

export default function Hero() {
  const { t, language } = useI18n();
  const applicationLink = useApplicationLink();
  const [animationTriggered, setAnimationTriggered] = useState(false);

  useEffect(() => {
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
    };
  }, [animationTriggered]);

  // Split text into words for staggered animation
  const titleWords = t('home.hero.title').split(" ");

  return (
    <section 
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{
        paddingTop: '96px', // Account for banner (40px) + header (56px)
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('${coupleImagePath}')`,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center 75%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}
    >
      <div className="text-center text-white px-4 max-w-6xl">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight subtitle">
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
        <div className={`flex justify-center transition-all duration-700 ease-out ${
          animationTriggered 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-12'
        }`}
        style={{
          transitionDelay: animationTriggered ? `${titleWords.length * 0.1 + 0.2}s` : '0s'
        }}>
          <a 
            href={applicationLink} 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={() => trackApplicationClick(language)}
          >
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg hover-lift">
              {t('home.hero.cta')}
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
