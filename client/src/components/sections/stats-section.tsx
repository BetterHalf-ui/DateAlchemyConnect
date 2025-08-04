import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { EXTERNAL_LINKS } from "@/lib/constants";

export default function StatsSection() {
  const [displayCount, setDisplayCount] = useState(1);

  useEffect(() => {
    const targetCount = 222;
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = targetCount / steps;
    const stepDuration = duration / steps;

    let currentCount = 1;
    const timer = setInterval(() => {
      currentCount += increment;
      if (currentCount >= targetCount) {
        setDisplayCount(targetCount);
        clearInterval(timer);
      } else {
        setDisplayCount(Math.floor(currentCount));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section-white py-32">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-5xl md:text-6xl serif-title mb-16 text-gray-900">
          Trust Us, It Really Works
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Diverse young professionals enjoying conversation at an elegant coffee shop" 
              className="rounded-2xl shadow-lg w-full luxury-hover"
            />
          </div>
          <div className="text-left">
            <div className="relative inline-block mb-6">
              <div className="text-8xl serif-title font-bold text-primary mb-2">{displayCount}</div>
            </div>
            <h3 className="text-4xl serif-title font-bold mb-6">Active members</h3>
            <p className="text-lg sans-body text-gray-700 mb-6 leading-relaxed">
              Our members are ambitious, fun, and dynamic—locals and expats alike, from all age groups. All looking for a committed relationship. They are also self-aware professionals who simply want more than what the apps can offer.
            </p>
            <p className="text-xl serif-title font-semibold text-gray-900">
              Our matchmakers review EVERY application.
            </p>
          </div>
        </div>

        <a 
          href={EXTERNAL_LINKS.applicationForm} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg serif-title luxury-hover">
            Sign Up
          </Button>
        </a>
      </div>
    </section>
  );
}