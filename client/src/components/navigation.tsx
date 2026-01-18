import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { useApplicationLink } from "@/hooks/use-application-link";

export default function Navigation() {
  const applicationLink = useApplicationLink();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'nav-translucent' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Left - Menu Items */}
          <div className="flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('alchemy')}
              className="text-white hover:text-primary transition-colors serif-title font-medium"
            >
              The Alchemy
            </button>
            <button 
              onClick={() => scrollToSection('alchemists')}
              className="text-white hover:text-primary transition-colors serif-title font-medium"
            >
              The Alchemists
            </button>
            <button 
              onClick={() => scrollToSection('membership')}
              className="text-white hover:text-primary transition-colors serif-title font-medium"
            >
              Membership & Pricing
            </button>
          </div>

          {/* Right - CTA */}
          <Link 
            href={applicationLink}
            onClick={() => window.scrollTo(0, 0)}
          >
            <Button className="bg-primary hover:bg-primary/90 text-white px-6 py-2 serif-title font-medium">
              Sign Up Now
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}