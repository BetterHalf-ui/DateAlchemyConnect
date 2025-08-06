import { useState, useEffect, useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import RebrandBanner from "@/components/layout/rebrand-banner";
import Hero from "@/components/sections/hero";
import Testimonials from "@/components/sections/testimonials";
import Membership from "@/components/sections/membership";
import Pricing from "@/components/sections/pricing";
import Journey from "@/components/sections/journey";
import FAQ from "@/components/sections/faq";
import Newsletter from "@/components/sections/newsletter";
import { EXTERNAL_LINKS } from "@/lib/constants";
import { useI18n } from "@/lib/i18n";
import type { BlogPost, Setting } from "@shared/schema";

export default function Home() {
  const { t } = useI18n();
  const { data: blogPosts } = useQuery<BlogPost[]>({
    queryKey: ["/api/blog-posts"],
    queryFn: async () => {
      const response = await fetch("/api/blog-posts?published=true");
      if (!response.ok) throw new Error("Failed to fetch blog posts");
      return response.json();
    },
  });

  const { data: activeMembersSetting } = useQuery<Setting>({
    queryKey: ["/api/settings", "active_members_count"],
    queryFn: async () => {
      const response = await fetch("/api/settings/active_members_count");
      if (!response.ok) throw new Error("Failed to fetch setting");
      return response.json();
    },
  });

  const latestPosts = blogPosts?.slice(0, 3) || [];
  const targetCount = parseInt(activeMembersSetting?.value || "222");
  const [displayCount, setDisplayCount] = useState(1);
  const [testimonialVisible, setTestimonialVisible] = useState(false);
  const [testimonialTextVisible, setTestimonialTextVisible] = useState(false);
  const [singaporeTestimonialTextVisible, setSingaporeTestimonialTextVisible] = useState(false);
  const [mauritiusTestimonialTextVisible, setMauritiusTestimonialTextVisible] = useState(false);
  const testimonialRef = useRef<HTMLElement>(null);
  const singaporeTestimonialRef = useRef<HTMLElement>(null);
  const mauritiusTestimonialRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = targetCount - 1;
    const stepDuration = duration / steps;
    
    let currentCount = 1;
    const interval = setInterval(() => {
      currentCount += 1;
      setDisplayCount(currentCount);
      
      if (currentCount >= targetCount) {
        clearInterval(interval);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [targetCount]);

  useEffect(() => {
    const handleScroll = () => {
      if (testimonialRef.current) {
        const rect = testimonialRef.current.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        setTestimonialVisible(isVisible);
        
        // Show text with additional scroll - when section is 30% visible
        const scrollProgress = (window.innerHeight - rect.top) / window.innerHeight;
        if (scrollProgress > 0.3) {
          setTimeout(() => {
            setTestimonialTextVisible(true);
          }, 800); // Delay the text appearance
        } else {
          setTestimonialTextVisible(false);
        }
      }

      if (singaporeTestimonialRef.current) {
        const rect = singaporeTestimonialRef.current.getBoundingClientRect();
        
        // Show text with additional scroll - when section is 30% visible
        const scrollProgress = (window.innerHeight - rect.top) / window.innerHeight;
        if (scrollProgress > 0.3) {
          setTimeout(() => {
            setSingaporeTestimonialTextVisible(true);
          }, 800); // Delay the text appearance
        } else {
          setSingaporeTestimonialTextVisible(false);
        }
      }

      if (mauritiusTestimonialRef.current) {
        const rect = mauritiusTestimonialRef.current.getBoundingClientRect();
        
        // Show text with additional scroll - when section is 30% visible
        const scrollProgress = (window.innerHeight - rect.top) / window.innerHeight;
        if (scrollProgress > 0.3) {
          setTimeout(() => {
            setMauritiusTestimonialTextVisible(true);
          }, 800); // Delay the text appearance
        } else {
          setMauritiusTestimonialTextVisible(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <RebrandBanner />
      <Header />
      
      <Hero />



      {/* How We Help Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-2xl md:text-3xl text-gray-800 mb-8 body-text max-w-4xl mx-auto leading-relaxed font-medium">
            {t('home.intro.p1')}
          </h3>
          <p className="text-lg text-gray-700 mb-8 body-text max-w-4xl mx-auto leading-relaxed">
            {t('home.intro.p2')}
          </p>
          <p className="text-lg text-gray-700 mb-16 body-text max-w-4xl mx-auto leading-relaxed">
            {t('home.intro.p3')}
          </p>
          
          <h2 className="text-4xl font-bold mb-12 subtitle text-gray-900">{t('home.expectations.title')}</h2>
          
          {/* Four Feature Points */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mt-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-4 subtitle text-gray-900">{t('home.expectations.curated.title')}</h4>
              <p className="text-gray-700 body-text leading-relaxed">
                {t('home.expectations.curated.desc')}
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-4 subtitle text-gray-900">{t('home.expectations.privacy.title')}</h4>
              <p className="text-gray-700 body-text leading-relaxed">
                {t('home.expectations.privacy.desc')}
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 19h16M6 10v6a2 2 0 002 2h8a2 2 0 002-2v-6M6 10V8a2 2 0 012-2h8a2 2 0 012 2v2M6 10h12M18 10h1a2 2 0 012 2v2a2 2 0 01-2 2h-1" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 6V4M12 6V4M16 6V4" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-4 subtitle text-gray-900">{t('home.expectations.noPressure.title')}</h4>
              <p className="text-gray-700 body-text leading-relaxed">
                {t('home.expectations.noPressure.desc')}
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-4 subtitle text-gray-900">{t('home.expectations.support.title')}</h4>
              <p className="text-gray-700 body-text leading-relaxed">
                {t('home.expectations.support.desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action - Before Testimonials */}
      <section className="py-20 bg-black text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <a 
            href="https://betterhalf.fillout.com/t/9ywPABvKHdus" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button className="bg-primary hover:bg-primary/90 text-white px-12 py-4 text-xl font-semibold mb-6">
              {t('nav.applyNow')}
            </Button>
          </a>
          <div className="text-sm text-gray-300 leading-relaxed max-w-2xl mx-auto">
            <p className="mb-2">Not ready to invest in a membership?</p>
            <Link href="/network" className="hover:text-white">
              <p className="mb-2">Join our network for free to see if you are a match with one of our exceptional clients.</p>
              <p className="underline">Create your complimentary profile.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Member Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Stats and Text */}
            <div className="text-center lg:text-left">
              <div className="text-5xl font-bold text-primary mb-3">{displayCount}</div>
              <h3 className="text-xl font-bold mb-4">{t('home.stats.activeMembers')}</h3>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                {t('home.stats.memberDesc')}
              </p>
              <p className="text-base font-semibold text-gray-900">
                {t('home.stats.reviewNote')}
              </p>
            </div>
            
            {/* Right: Member Photos */}
            <div className="grid grid-cols-3 gap-4">
              <div className="relative">
                <img 
                  src="/attached_assets/christin-noelle-i1Q838KZPt4-unsplash_1754161962245.jpg"
                  alt="Professional member"
                  className="w-full h-32 object-cover object-top rounded-xl shadow-md hover-lift"
                />
              </div>
              <div className="relative">
                <img 
                  src="/attached_assets/candice-picard-VDihQhOiOkI-unsplash_1754161962252.jpg"
                  alt="Dynamic member"
                  className="w-full h-32 object-cover object-top rounded-xl shadow-md hover-lift"
                />
              </div>
              <div className="relative">
                <img 
                  src="/attached_assets/noman-khan-3-iPJTAp1i0-unsplash_1754161962252.jpg"
                  alt="Ambitious member"
                  className="w-full h-32 object-cover object-top rounded-xl shadow-md hover-lift"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      {/* Full-Screen Image with Testimonial */}
      <section ref={testimonialRef} className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/attached_assets/fc9db359-157d-465f-afaf-1398700efe3b_1753876598985.jpeg"
            alt="Professional couple at elegant venue"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        {/* Testimonial that appears on additional scroll */}
        <div className={`absolute bottom-0 left-0 right-0 p-12 text-white transition-all duration-1000 ${
          testimonialTextVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="max-w-7xl mx-auto">
            <blockquote className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight subtitle mb-8">
              "{t('home.testimonials.main')}"
            </blockquote>
            <cite className="text-xl md:text-2xl lg:text-3xl font-medium opacity-90 not-italic">
              {t('home.testimonials.mainAuthor')}
            </cite>
          </div>
        </div>
      </section>

      <Membership />

      {/* Call to Action - After Membership */}
      <section className="py-20 bg-black text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <a 
            href="https://betterhalf.fillout.com/t/9ywPABvKHdus" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button className="bg-primary hover:bg-primary/90 text-white px-12 py-4 text-xl font-semibold mb-6">
              {t('nav.applyNow')}
            </Button>
          </a>
          <div className="text-sm text-gray-300 leading-relaxed max-w-2xl mx-auto">
            <p className="mb-2">{t('home.cta.notReady')}</p>
            <Link href="/network" className="hover:text-white">
              <p className="mb-2">{t('home.cta.joinNetwork')}</p>
              <p className="underline">{t('home.cta.createProfile')}</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Full Screen Image with Scroll-Triggered Text - Singapore */}
      <section ref={singaporeTestimonialRef} className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/attached_assets/d8c51dd7-2842-47ea-baa6-7180ac506cb3_1753881725745.jpeg"
            alt="Professional international consultant in Singapore"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        {/* Testimonial that appears on scroll at bottom */}
        <div className={`absolute bottom-0 left-0 right-0 p-12 text-white transition-all duration-1000 ${
          singaporeTestimonialTextVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="max-w-7xl mx-auto">
            <blockquote className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight subtitle mb-8">
              "{t('home.testimonials.professional')}"
            </blockquote>
            <cite className="text-xl md:text-2xl lg:text-3xl font-medium opacity-90 not-italic">
              {t('home.testimonials.professionalAuthor')}
            </cite>
          </div>
        </div>
      </section>

      {/* Your Date Alchemists Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-20 subtitle">{t('home.team.title')}</h2>
          
          {/* Main Team Photo - Centered and Larger */}
          <div className="text-center mb-16">
            <div className="inline-block">
              <img 
                src="/attached_assets/team (1)_1753896165937.png" 
                alt="The Date Alchemy team" 
                className="rounded-3xl shadow-2xl w-full max-w-2xl mx-auto hover-lift"
              />
              <div className="text-center pt-6">
                <p className="text-lg text-gray-600 font-medium body-text">
                  {t('home.team.founders')}
                </p>
              </div>
            </div>
          </div>

          {/* Story Content - Two Column Layout */}
          <div className="max-w-6xl mx-auto">
            {/* First Two Column Story Layout */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <img 
                  src="/attached_assets/Screenshot 2025-07-30 at 21.59.07_1753898366997.png" 
                  alt="The Date Alchemy founders" 
                  className="rounded-2xl shadow-lg w-full h-80 object-cover hover-lift"
                />
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm relative">
                <div className="absolute -top-4 -left-4 text-6xl text-primary opacity-60 font-serif">"</div>
                <p className="text-lg text-gray-700 leading-relaxed body-text">
                  {t('home.team.story1')}
                </p>
                <p className="text-lg text-gray-700 leading-relaxed body-text mt-4">
                  {t('home.team.story2')}
                </p>
              </div>
            </div>

            {/* Elegant Quote Section - Option 1: Glass Card with Gradient */}
            <div className="max-w-4xl mx-auto mb-16">
              <div className="relative bg-gradient-to-br from-white to-gray-50 backdrop-blur-sm border border-gray-200 p-10 rounded-3xl shadow-lg">
                <div className="absolute top-4 left-6 text-4xl text-primary opacity-40 font-serif">"</div>
                <div className="absolute bottom-4 right-6 text-4xl text-primary opacity-40 font-serif rotate-180">"</div>
                <p className="text-xl text-gray-800 leading-relaxed font-medium text-center px-8 py-4 body-text">
                  {t('home.team.quote')}
                </p>
              </div>
            </div>

            {/* Second Two Column Layout */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-white p-8 rounded-2xl shadow-sm md:order-1">
                <p className="text-lg text-gray-700 leading-relaxed body-text">
                  {t('home.team.story3')}
                </p>
                <p className="text-lg text-gray-700 leading-relaxed body-text mt-4">
                  {t('home.team.story4')}
                </p>
              </div>
              <div className="md:order-2">
                <img 
                  src="/attached_assets/WhatsApp Image 2025-07-30 at 21.30.22_1753897630892.jpeg" 
                  alt="The Date Alchemy team members" 
                  className="rounded-2xl shadow-lg w-full h-80 object-cover hover-lift"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Pricing />

      {/* Full Screen Image with Scroll-Triggered Text - Mauritius Expat */}
      <section ref={mauritiusTestimonialRef} className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/attached_assets/Couple_1753898817433.png"
            alt="Elegant couple in intimate moment"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        {/* Testimonial that appears on scroll at bottom */}
        <div className={`absolute bottom-0 left-0 right-0 p-12 text-white transition-all duration-1000 ${
          mauritiusTestimonialTextVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="max-w-7xl mx-auto">
            <blockquote className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight subtitle mb-8">
              "{t('home.testimonials.expert')}"
            </blockquote>
            <cite className="text-xl md:text-2xl lg:text-3xl font-medium opacity-90 not-italic">
              {t('home.testimonials.expertAuthor')}
            </cite>
          </div>
        </div>
      </section>

      {/* Nominate Section */}
      <section className="py-20 bg-gray-50 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8">{t('home.nominate.title')}</h2>
          <h3 className="text-2xl mb-6">{t('home.nominate.subtitle')}</h3>
          <p className="text-lg text-gray-700 mb-8">{t('home.nominate.description')}</p>
          <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold">
            {t('home.nominate.cta')}
          </Button>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center mb-16">
            <h2 className="text-4xl font-bold">{t('home.blog.latestTitle')}</h2>
            <Link href="/blog">
              <Button variant="outline" className="text-primary border-primary hover:bg-primary hover:text-white">
                {t('home.blog.viewAll')}
              </Button>
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {latestPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`}>
                <article className="bg-gray-50 rounded-xl overflow-hidden hover-lift cursor-pointer transition-transform hover:scale-105">
                  {post.imageUrl && (
                    <img 
                      src={post.imageUrl} 
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-primary font-medium">{post.category}</span>
                      <span className="text-sm text-gray-500">
                        {new Date(post.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQ />
      <Newsletter />
      <Footer />
    </div>
  );
}
