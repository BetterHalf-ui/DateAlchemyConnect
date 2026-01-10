import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { COMPANY_INFO } from "@/lib/constants";
import LanguageSwitcher from "@/components/i18n/language-switcher";
import { useI18n } from "@/lib/i18n";
import { useApplicationLink } from "@/hooks/use-application-link";
import { ChevronDownIcon } from "lucide-react";

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isEventsDropdownOpen, setIsEventsDropdownOpen] = useState(false);
  const [location] = useLocation();
  const { t } = useI18n();
  const applicationLink = useApplicationLink();
  
  // Check if we're on a page that needs a white background header by default
  const needsWhiteHeader = location.startsWith('/blog') || location.startsWith('/admin') || location.startsWith('/network') || location.startsWith('/privacy-policy') || location.startsWith('/rebrand-announcement') || location.startsWith('/how-it-works') || location.startsWith('/events') || location.startsWith('/dating-patterns-guide');

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
      
      // Close events dropdown when scrolling
      if (Math.abs(currentScrollY - lastScrollY) > 5) {
        setIsEventsDropdownOpen(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isEventsDropdownOpen && !target.closest('.events-dropdown-container')) {
        setIsEventsDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isEventsDropdownOpen]);

  return (
    <nav className={`fixed left-0 right-0 z-40 transition-all duration-300 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    } ${isScrolled || needsWhiteHeader ? 'bg-white shadow-md' : 'bg-transparent'}`}
    style={{ top: '40px' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" onClick={() => window.scrollTo(0, 0)}>
            <div className={`font-bold text-3xl hover:text-primary transition-colors cursor-pointer logo ${
              isScrolled || needsWhiteHeader ? 'text-primary' : 'text-white'
            }`}>
              {COMPANY_INFO.name}
            </div>
          </Link>
          
          <div className="flex items-center space-x-8">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">

              <Link href="/how-it-works" onClick={() => window.scrollTo(0, 0)}>
                <span className={`font-bold hover:text-primary hover:bg-white hover:px-3 hover:py-2 hover:rounded transition-all cursor-pointer body-text ${
                  isScrolled || needsWhiteHeader ? 'text-gray-700' : 'text-white'
                }`}>
                  {t('nav.howItWorks')}
                </span>
              </Link>
              <Link href="/blog" onClick={() => window.scrollTo(0, 0)}>
                <span className={`font-bold hover:text-primary hover:bg-white hover:px-3 hover:py-2 hover:rounded transition-all cursor-pointer body-text ${
                  isScrolled || needsWhiteHeader ? 'text-gray-700' : 'text-white'
                }`}>
                  {t('nav.insights')}
                </span>
              </Link>
              
              {/* Events Dropdown */}
              <div 
                className="relative events-dropdown-container"
              >
                <div 
                  onClick={() => setIsEventsDropdownOpen(!isEventsDropdownOpen)}
                  className={`font-bold hover:text-primary hover:bg-white hover:px-3 hover:py-2 hover:rounded transition-all cursor-pointer body-text flex items-center gap-1 ${
                    isScrolled || needsWhiteHeader ? 'text-gray-700' : 'text-white'
                  }`}
                  data-testid="button-events-dropdown"
                >
                  Events
                  <ChevronDownIcon className={`w-4 h-4 transition-transform ${
                    isEventsDropdownOpen ? 'rotate-180' : ''
                  }`} />
                </div>
                
                {isEventsDropdownOpen && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                    <Link href="/events/singlessocials" onClick={() => { setIsEventsDropdownOpen(false); window.scrollTo(0, 0); }}>
                      <div className="px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary cursor-pointer font-medium" data-testid="link-singles-socials">
                        Singles Socials
                      </div>
                    </Link>
                  </div>
                )}
              </div>
              
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
              href={applicationLink} 
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

            <Link href="/how-it-works" onClick={() => { setIsMobileMenuOpen(false); window.scrollTo(0, 0); }}>
              <div className={`block py-2 text-lg font-bold hover:text-primary transition-colors ${
                isScrolled || needsWhiteHeader ? 'text-gray-700' : 'text-white'
              }`}>
                {t('nav.howItWorks')}
              </div>
            </Link>
            <Link href="/blog" onClick={() => { setIsMobileMenuOpen(false); window.scrollTo(0, 0); }}>
              <div className={`block py-2 text-lg font-bold hover:text-primary transition-colors ${
                isScrolled || needsWhiteHeader ? 'text-gray-700' : 'text-white'
              }`}>
                {t('nav.insights')}
              </div>
            </Link>
            <div className="py-2">
              <div className={`text-lg font-bold ${
                isScrolled || needsWhiteHeader ? 'text-gray-700' : 'text-white'
              }`}>
                Events
              </div>
              <Link href="/events/singlessocials" onClick={() => { setIsMobileMenuOpen(false); window.scrollTo(0, 0); }}>
                <div className={`block py-2 pl-4 text-base hover:text-primary transition-colors ${
                  isScrolled || needsWhiteHeader ? 'text-gray-600' : 'text-gray-300'
                }`}>
                  Singles Socials
                </div>
              </Link>
            </div>
            <div className="py-2">
              <LanguageSwitcher className={isScrolled || needsWhiteHeader ? 'text-gray-700' : 'text-white'} />
            </div>
            <a 
              href={applicationLink} 
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
