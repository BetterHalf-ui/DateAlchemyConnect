import { useEffect } from 'react';
import Navigation from '@/components/navigation';
import NewHero from '@/components/sections/new-hero';
import Introduction from '@/components/sections/introduction';
import ReadyCTA from '@/components/sections/ready-cta';
import ExperienceCarousel from '@/components/sections/experience-carousel';
import CoachingCarousel from '@/components/sections/coaching-carousel';
import StatsSection from '@/components/sections/stats-section';
import Testimonials from '@/components/sections/testimonials';
import Journey from '@/components/sections/journey';
import Membership from '@/components/sections/membership';
import Newsletter from '@/components/sections/newsletter';
import FAQSection from '@/components/sections/faq-section';
import { Button } from '@/components/ui/button';
import { useApplicationLink } from "@/hooks/use-application-link";

export default function NewHome() {
  const applicationLink = useApplicationLink();
  
  useEffect(() => {
    // Add smooth scroll behavior
    document.documentElement.classList.add('smooth-scroll');
    
    // Intersection Observer for fade-in animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all fade-in-scroll elements
    const elements = document.querySelectorAll('.fade-in-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Banner - Black */}
      <NewHero />
      
      {/* Introduction - Black */}
      <Introduction />
      
      {/* Ready for Real Connection - Black */}
      <ReadyCTA />
      
      {/* The Date Alchemy Experience - White */}
      <ExperienceCarousel />
      
      {/* Ready for Real Connection (repeat) - Black */}
      <ReadyCTA />
      
      {/* Self-Discovery & Coaching - Earthy */}
      <CoachingCarousel />
      
      {/* Trust Us It Really Works - White */}
      <StatsSection />
      
      {/* What Our Members Say - Earthy */}
      <section className="section-earthy">
        <Testimonials />
      </section>
      
      {/* Start Your Journey - White */}
      <section className="section-white">
        <Journey />
      </section>
      
      {/* Membership & Guarantees - Earthy */}
      <section id="membership" className="section-earthy">
        <Membership />
      </section>
      
      {/* Turning Our Story Into Yours - White */}
      <section id="alchemists" className="section-white py-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl serif-title mb-8 text-gray-900">
              Turning Our Story Into Yours
            </h2>
          </div>
          
          {/* Paragraph 1 - Image Left */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Founders' journey from corporate life to matchmaking" 
                className="rounded-2xl shadow-lg w-full luxury-hover"
              />
            </div>
            <div>
              <p className="text-lg sans-body text-gray-700 leading-relaxed">
                The Date Alchemy was born out of our own dating struggles after successful corporate careers in Singapore. We found ourselves surrounded by accomplished professionals who, despite their success, were struggling to find genuine connection. The dating apps weren't working, traditional matchmaking felt outdated, and we realized there had to be a better way.
              </p>
            </div>
          </div>
          
          {/* Paragraph 2 - Image Right */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="lg:order-2">
              <img 
                src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Professional consultation and personalized approach" 
                className="rounded-2xl shadow-lg w-full luxury-hover"
              />
            </div>
            <div className="lg:order-1">
              <p className="text-lg sans-body text-gray-700 leading-relaxed">
                That's when we developed our unique approach combining relationship science with personalized matchmaking. We moved to Mauritius and started working with professionals who valued discretion, authenticity, and a more intentional approach to dating. Our process isn't just about making introductions—it's about understanding who you are and what you truly need in a partner.
              </p>
            </div>
          </div>
          
          {/* Paragraph 3 - Image Left */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-12">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Success stories and genuine connections" 
                className="rounded-2xl shadow-lg w-full luxury-hover"
              />
            </div>
            <div>
              <p className="text-lg sans-body text-gray-700 leading-relaxed">
                So if you're ready to stop leaving love to chance, we'd love to walk this journey with you thoughtfully, personally and discretely. Your better half may be closer than you think.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Spread the Love - Earthy */}
      <section className="section-earthy">
        <Newsletter />
      </section>
      
      {/* FAQ Section - Earthy */}
      <FAQSection />
      
      {/* Footer - Black */}
      <footer className="section-black py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl serif-title mb-8">Ready to Begin?</h2>
          <a 
            href={applicationLink} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg serif-title luxury-hover">
              Sign Up
            </Button>
          </a>
          <div className="mt-12 text-gray-400 sans-body">
            <p>&copy; 2024 The Date Alchemy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}