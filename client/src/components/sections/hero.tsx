import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { EXTERNAL_LINKS } from "@/lib/constants";

export default function Hero() {
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Show text after slight scroll (50px)
      if (scrollY > 50) {
        setTextVisible(true);
      }
    };

    // Add scroll listener
    window.addEventListener('scroll', handleScroll);
    
    // Also show text after 500ms delay for better UX
    const timer = setTimeout(() => setTextVisible(true), 500);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <section 
      className="relative h-screen flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://frolic.mu/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-05-at-7.07.25-PM.jpeg')`,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}
    >
      <div className="text-center text-white px-4 max-w-6xl">
        <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight subtitle transition-all duration-1000 ${
          textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          A Healthier Dating Experience For Global Professionals
        </h1>
        <div className="flex justify-center">
          <a 
            href={EXTERNAL_LINKS.applicationForm} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg hover-lift">
              Apply Now
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
