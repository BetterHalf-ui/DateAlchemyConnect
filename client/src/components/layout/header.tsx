import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { COMPANY_INFO, EXTERNAL_LINKS } from "@/lib/constants";
import LanguageSwitcher from "@/components/i18n/language-switcher";
import { useI18n } from "@/lib/i18n";

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const { t } = useI18n();
  
  // Check if we're on a page that needs a white background header by default
  const needsWhiteHeader = location.startsWith('/blog') || location.startsWith('/admin') || location.startsWith('/network') || location.startsWith('/privacy-policy') || location.startsWith('/rebrand-announcement');

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
    <nav className={`fixed left-0 right-0 z-40 transition-all duration-300 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    } ${isScrolled || needsWhiteHeader ? 'bg-white shadow-md' : 'bg-transparent'}`}
    style={{ top: '40px' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/">
            <div className={`font-bold text-2xl hover:text-primary transition-colors cursor-pointer subtitle ${
              isScrolled || needsWhiteHeader ? 'text-primary' : 'text-white'
            }`}>
              {COMPANY_INFO.name}
            </div>
          </Link>
          
          <div className="flex items-center space-x-8">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/">
                <span className={`hover:text-primary transition-colors cursor-pointer body-text ${
                  isScrolled || needsWhiteHeader ? 'text-gray-700' : 'text-white'
                }`}>
                  {t('nav.home')}
                </span>
              </Link>
              <a 
                href="how-it-works.html"
                className={`hover:text-primary transition-colors body-text ${
                  isScrolled || needsWhiteHeader ? 'text-gray-700' : 'text-white'
                }`}
              >
                {t('nav.howItWorks')}
              </a>
              <Link href="/blog">
                <span className={`hover:text-primary transition-colors cursor-pointer body-text ${
                  isScrolled || needsWhiteHeader ? 'text-gray-700' : 'text-white'
                }`}>
                  {t('nav.insights')}
                </span>
              </Link>
              <LanguageSwitcher className={isScrolled || needsWhiteHeader ? 'text-gray-700' : 'text-white'} />
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <div className="space-y-1">
                <div className={`w-6 h-0.5 transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                } ${isScrolled || needsWhiteHeader ? 'bg-gray-700' : 'bg-white'}`}></div>
                <div className={`w-6 h-0.5 transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                } ${isScrolled || needsWhiteHeader ? 'bg-gray-700' : 'bg-white'}`}></div>
                <div className={`w-6 h-0.5 transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                } ${isScrolled || needsWhiteHeader ? 'bg-gray-700' : 'bg-white'}`}></div>
              </div>
            </button>

            <a 
              href={EXTERNAL_LINKS.applicationForm} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden md:block"
            >
              <Button className="bg-primary hover:bg-primary/90 text-white px-6 py-2 font-medium">
                {t('nav.applyNow')}
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className={`md:hidden ${isScrolled || needsWhiteHeader ? 'bg-white' : 'bg-black/95'} border-t ${
          isScrolled || needsWhiteHeader ? 'border-gray-200' : 'border-white/20'
        }`}>
          <div className="px-4 py-6 space-y-4">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
              <div className={`block py-2 text-lg hover:text-primary transition-colors ${
                isScrolled || needsWhiteHeader ? 'text-gray-700' : 'text-white'
              }`}>
                {t('nav.home')}
              </div>
            </Link>
            <a 
              href="how-it-works.html"
              className={`block py-2 text-lg hover:text-primary transition-colors ${
                isScrolled || needsWhiteHeader ? 'text-gray-700' : 'text-white'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('nav.howItWorks')}
            </a>
            <Link href="/blog" onClick={() => setIsMobileMenuOpen(false)}>
              <div className={`block py-2 text-lg hover:text-primary transition-colors ${
                isScrolled || needsWhiteHeader ? 'text-gray-700' : 'text-white'
              }`}>
                {t('nav.insights')}
              </div>
            </Link>
            <div className="py-2">
              <LanguageSwitcher className={isScrolled || needsWhiteHeader ? 'text-gray-700' : 'text-white'} />
            </div>
            <a 
              href={EXTERNAL_LINKS.applicationForm} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block pt-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 font-medium w-full">
                {t('nav.applyNow')}
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
