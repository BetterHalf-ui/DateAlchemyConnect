import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { COMPANY_INFO, EXTERNAL_LINKS } from "@/lib/constants";

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Hide header when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      // Check if background should be white (scrolled)
      setIsScrolled(currentScrollY > 50);
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    } ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/">
            <div className={`font-bold text-2xl hover:text-primary transition-colors cursor-pointer subtitle ${
              isScrolled ? 'text-primary' : 'text-white'
            }`}>
              {COMPANY_INFO.name}
            </div>
          </Link>
          
          <div className="flex items-center space-x-8">
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/">
                <span className={`hover:text-primary transition-colors cursor-pointer body-text ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}>
                  Home
                </span>
              </Link>
              <a 
                href="how-it-works.html"
                className={`hover:text-primary transition-colors body-text ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                How It Works
              </a>
              <Link href="/blog">
                <span className={`hover:text-primary transition-colors cursor-pointer body-text ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}>
                  Blog
                </span>
              </Link>
            </div>
            <a 
              href={EXTERNAL_LINKS.applicationForm} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button className="bg-primary hover:bg-primary/90 text-white px-6 py-2 font-medium">
                Apply Now
              </Button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
