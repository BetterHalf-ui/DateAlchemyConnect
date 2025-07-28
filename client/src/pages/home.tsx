import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Hero from "@/components/sections/hero";
import Approach from "@/components/sections/approach";
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

  return (
    <div className="min-h-screen">
      <Header />
      
      <Hero />
      
      <Approach />

      {/* Ready for Real Connection CTA */}
      <section className="py-32 bg-black text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-5xl font-bold mb-12 subtitle">Ready for real connection?</h2>
          <a 
            href={EXTERNAL_LINKS.applicationForm} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button className="bg-primary hover:bg-primary/90 text-white px-12 py-6 text-xl font-semibold mb-8 rounded-full hover-lift">
              Apply Now
            </Button>
          </a>
          <p className="text-gray-300 text-base body-text">
            Not ready to invest in a membership?{" "}
            <Link href="/network">
              <a className="text-primary hover:underline">
                Join our network for free to see if you are a match with one of our exceptional clients.
              </a>
            </Link>
            <br />
            <Link href="/network">
              <a className="text-primary hover:underline">Create your complimentary profile.</a>
            </Link>
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-16 subtitle">Turning Our Story Into Yours</h2>
          <div className="grid lg:grid-cols-5 gap-16 items-start">
            <div className="lg:col-span-3">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed mb-6 body-text">
                  We're Sagarika (🇮🇳),  Céline (🇧🇪) and Pratik (🇮🇳). We left our corporate careers in Singapore and moved to Mauritius to do something that felt more personal, more impactful. We know from experience: there's nothing quite like the joy and growth that come from finding someone who really gets you.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6 body-text">
                  Each of us has been fortunate to experience that kind of connection — and it truly changed everything. That's why we created The Date Alchemy: to help others experience the same.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6 body-text">
                  But getting there wasn't easy. We've been through the frustration ourselves — showing up to countless events that led nowhere, spending hours swiping on dating apps only to feel disillusioned, getting caught in relationships with emotionally unavailable or toxic people.  We've wasted emotional energy on people who weren't serious. We've faced the ghosting, the anxiety, the self-doubt and confusion. 
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6 body-text">
                  We understand what it feels like.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6 body-text">
                  And we knew there had to be a better way. 
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6 body-text">
                  That's why we created The Date Alchemy— the dating service we wish we'd had.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6 body-text">
                  A thoughtful, human and empowering  experience designed for real, meaningful connections.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6 body-text">
                  We can't promise love, but we can promise effort, professionalism, integrity, a genuine investment in your journey, and a proven process that's led to lasting relationships.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6 body-text">
                  Whether a date turns into a lifelong relationship or brings new clarity, we believe every step forward matters. 
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6 body-text">
                  We've witnessed -  in our own lives and through our clients — the magic that unfolds when two truly compatible people connect. And we want more people to experience that kind of transformation.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed body-text">
                  So if you're ready to stop leaving love to chance, we'd love to walk this journey with you thoughtfully, personally and discretely. Your better half may be closer than you think.
                </p>
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="sticky top-24 space-y-6">
                {/* Enhanced visual collage of diverse couples and dating scenes */}
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400" 
                    alt="Multicultural couple sharing a romantic dinner at modern restaurant" 
                    className="rounded-2xl shadow-lg w-full h-64 object-cover hover-lift"
                  />
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full"></div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <img 
                    src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                    alt="Young couple laughing together at trendy urban cafe" 
                    className="rounded-xl shadow-lg h-40 object-cover hover-lift transform rotate-1"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                    alt="Professional couple walking together in modern city setting" 
                    className="rounded-xl shadow-lg h-40 object-cover hover-lift transform -rotate-1"
                  />
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <img 
                    src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200" 
                    alt="Modern professionals in elegant urban setting" 
                    className="rounded-lg shadow-lg h-24 object-cover hover-lift"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200" 
                    alt="Professional couple having consultation" 
                    className="rounded-lg shadow-lg h-24 object-cover hover-lift"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200" 
                    alt="Elegant couple at upscale venue" 
                    className="rounded-lg shadow-lg h-24 object-cover hover-lift"
                  />
                </div>
                <div className="text-center pt-4">
                  <p className="text-sm text-gray-500 italic body-text">
                    "From corporate life in Singapore to helping hearts connect in Mauritius"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Active Members Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Diverse young professionals enjoying conversation at an elegant coffee shop" 
                className="rounded-xl shadow-lg w-full hover-lift"
              />
            </div>
            <div className="text-left">
              <div className="relative inline-block mb-6">
                <div className="text-8xl font-bold text-primary mb-2">{displayCount}</div>
              </div>
              <h3 className="text-4xl font-bold mb-6 subtitle">Active Members</h3>
              <p className="text-lg text-gray-700 mb-6 body-text">
                Our members are the most ambitious, fun and dynamic people you know! They are also self-aware professionals who simply want more than what the apps can offer.
              </p>
              <p className="text-xl font-semibold text-gray-900 body-text">
                Our matchmakers review EVERY application.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      <Membership />
      <Pricing />
      <Journey />

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
              <article key={post.id} className="bg-gray-50 rounded-xl overflow-hidden hover-lift">
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
