import { useState, useEffect, useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Hero from "@/components/sections/hero";
import Testimonials from "@/components/sections/testimonials";
import Membership from "@/components/sections/membership";
import Pricing from "@/components/sections/pricing";
import Journey from "@/components/sections/journey";
import FAQ from "@/components/sections/faq";
import Newsletter from "@/components/sections/newsletter";
import { EXTERNAL_LINKS } from "@/lib/constants";
import type { BlogPost, Setting } from "@shared/schema";

export default function Home() {
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
      <Header />
      
      <Hero />



      {/* How We Help Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-lg text-gray-700 mb-8 body-text max-w-4xl mx-auto leading-relaxed">
            Finding a real connection in Mauritius isn't easy — especially when you are a busy professional and hold yourself to high standards.
          </p>
          <p className="text-lg text-gray-700 mb-16 body-text max-w-4xl mx-auto leading-relaxed">
            At The Date Alchemy, we believe real connections rarely happen by chance. We invite you to put yourself out there, intentionally. And we'll handle the rest — discreetly, with care, and without the confusion. So you can focus on living fully, while love finds its way to you.
          </p>
          
          <h2 className="text-4xl font-bold mb-12 subtitle text-gray-900">What To Expect As A Member</h2>
          
          {/* Four Feature Points */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mt-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-4 subtitle text-gray-900">Curated Introductions</h4>
              <p className="text-gray-700 body-text leading-relaxed">
                We introduce you to singles who meet your standards and share your vibe, are carefully interviewed and equally serious about finding a lifetime partner in Mauritius.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-4 subtitle text-gray-900">Your Privacy is Our Priority</h4>
              <p className="text-gray-700 body-text leading-relaxed">
                We protect your privacy like it's our own—your information is always safe, confidential, and never shared without your consent. Every introduction is handled with the utmost care and respect for your privacy.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-4 subtitle text-gray-900">Sans pressure</h4>
              <p className="text-gray-700 body-text leading-relaxed">
                No pressure from parents and friends to deal with. Meet your match for a coffee date, exchange numbers if you like, or date for months, or meet someone else who's a better fit. Every introduction is your choice.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-4 subtitle text-gray-900">Thoughtful, Human Support</h4>
              <p className="text-gray-700 body-text leading-relaxed">
                We offer a full-circle dating experience — from pre-date self-assessments to date planning and post-date follow-ups. You get personalized, science-backed guidance at every step. No more ghosting, no confusion — just real support, with a human touch. Because your love life deserves more than algorithms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action - Before Testimonials */}
      <section className="py-20 bg-black text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/network">
            <Button className="bg-primary hover:bg-primary/90 text-white px-12 py-4 text-xl font-semibold mb-6">
              Apply Now
            </Button>
          </Link>
          <div className="text-sm text-gray-300 leading-relaxed max-w-2xl mx-auto">
            <p className="mb-2">Not ready to invest in a membership?</p>
            <p className="mb-2">Join the Betterhalf candidate circle to receive opportunities for matches with our exceptional clients.</p>
            <p>Create your complimentary profile.</p>
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
              <h3 className="text-xl font-bold mb-4">active members</h3>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Our members are the most ambitious, fun, and dynamic people you know!
              </p>
              <p className="text-base font-semibold text-gray-900">
                Our matchmakers review EVERY application
              </p>
            </div>
            
            {/* Right: Member Photos */}
            <div className="grid grid-cols-3 gap-4">
              <div className="relative">
                <img 
                  src="/attached_assets/74c7b6d9-723b-48f4-8ad3-88de4e6dabe9_1753881262177.jpeg"
                  alt="Professional member"
                  className="w-full h-32 object-cover rounded-xl shadow-md hover-lift"
                />
              </div>
              <div className="relative">
                <img 
                  src="/attached_assets/WhatsApp Image 2025-07-30 at 21.15.40_1753896375443.jpeg"
                  alt="Dynamic member"
                  className="w-full h-32 object-cover rounded-xl shadow-md hover-lift"
                />
              </div>
              <div className="relative">
                <img 
                  src="/attached_assets/team (1)_1753896165937.png"
                  alt="Ambitious member"
                  className="w-full h-32 object-cover rounded-xl shadow-md hover-lift"
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
              "Discreet, professional, and incredibly effective. The Date Alchemy understood exactly what I was looking for, curating introductions that led to a truly profound and lasting relationship."
            </blockquote>
            <cite className="text-xl md:text-2xl lg:text-3xl font-medium opacity-90 not-italic">
              — Entrepreneur, Tech Industry
            </cite>
          </div>
        </div>
      </section>

      <Membership />

      {/* Call to Action - After Membership */}
      <section className="py-20 bg-black text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/network">
            <Button className="bg-primary hover:bg-primary/90 text-white px-12 py-4 text-xl font-semibold mb-6">
              Apply Now
            </Button>
          </Link>
          <div className="text-sm text-gray-300 leading-relaxed max-w-2xl mx-auto">
            <p className="mb-2">Not ready to invest in a membership?</p>
            <p className="mb-2">Join the Betterhalf candidate circle to receive opportunities for matches with our exceptional clients.</p>
            <p>Create your complimentary profile.</p>
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
              "The Date Alchemy isn't just matchmaking; it's a masterclass in connection. Their expertise created a path to love I didn't know existed, perfectly suited for my global lifestyle."
            </blockquote>
            <cite className="text-xl md:text-2xl lg:text-3xl font-medium opacity-90 not-italic">
              — International Consultant, Singapore
            </cite>
          </div>
        </div>
      </section>

      {/* Your Date Alchemists Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-16 subtitle">Your Date Alchemists</h2>
          
          {/* Paragraph 1 - Image Left, Text Right */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <img 
                src="/attached_assets/team (1)_1753896165937.png" 
                alt="The Date Alchemy team" 
                className="rounded-2xl shadow-lg w-full h-104 object-cover hover-lift"
              />
              <div className="text-center pt-4">
                <p className="text-sm text-gray-500 italic body-text">
                  Pratik Malia, Celine Delacharlerie, Sagarika Sarkar
                </p>
              </div>
            </div>
            <div>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed body-text">
                  We left our corporate careers in Singapore and moved to Mauritius to do something that felt more personal, more impactful. We know from experience: there's nothing quite like the joy and growth that come from finding someone who really gets you. Each of us has been fortunate to experience that kind of connection — and it truly changed everything. That's why we created The Date Alchemy: to help others experience the same.
                </p>
              </div>
            </div>
          </div>

          {/* Paragraph 2 - Text Left, Image Right */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed body-text">
                  But getting there wasn't easy. We've been through the frustration ourselves — showing up to countless events that led nowhere, spending hours swiping on dating apps only to feel disillusioned, getting caught in relationships with emotionally unavailable or toxic people. We've wasted emotional energy on people who weren't serious. We've faced the ghosting, the anxiety, the self-doubt and confusion. We understand what it feels like. And we knew there had to be a better way.
                </p>
              </div>
            </div>
            <div>
              <img 
                src="/attached_assets/Screenshot 2025-07-30 at 21.59.07_1753898366997.png" 
                alt="The Date Alchemy founders" 
                className="rounded-2xl shadow-lg w-full h-104 object-cover hover-lift"
              />
            </div>
          </div>

          {/* Paragraph 3 - Image Left, Text Right */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src="/attached_assets/WhatsApp Image 2025-07-30 at 21.30.22_1753897630892.jpeg" 
                alt="The Date Alchemy team members" 
                className="rounded-2xl shadow-lg w-full h-104 object-cover hover-lift"
              />
            </div>
            <div>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed body-text">
                  That's why we created The Date Alchemy— the dating service we wish we'd had. A thoughtful, human and empowering experience designed for real, meaningful connections. We can't promise love, but we can promise effort, professionalism, integrity, a genuine investment in your journey, and a proven process that's led to lasting relationships. Whether a date turns into a lifelong relationship or brings new clarity, we believe every step forward matters. We've witnessed - in our own lives and through our clients — the magic that unfolds when two truly compatible people connect. And we want more people to experience that kind of transformation. So if you're ready to stop leaving love to chance, we'd love to walk this journey with you thoughtfully, personally and discretely. Your better half may be closer than you think.
                </p>
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
              "I was seeking a partner who understood my world, and The Date Alchemy delivered beyond expectation."
            </blockquote>
            <cite className="text-xl md:text-2xl lg:text-3xl font-medium opacity-90 not-italic">
              — Expat Professional, Mauritius
            </cite>
          </div>
        </div>
      </section>

      {/* Nominate Section */}
      <section className="py-20 bg-gray-50 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8">Spread the Love</h2>
          <h3 className="text-2xl mb-6">Nominate a single you know</h3>
          <p className="text-lg text-gray-700 mb-8">They can thank you once we find them the one!</p>
          <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold">
            Nominate Someone
          </Button>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center mb-16">
            <h2 className="text-4xl font-bold">Latest Insights</h2>
            <Link href="/blog">
              <Button variant="outline" className="text-primary border-primary hover:bg-primary hover:text-white">
                View All Posts
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
