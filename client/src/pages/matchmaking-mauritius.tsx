import { useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import RebrandBanner from "@/components/layout/rebrand-banner";
import { useSEO } from "@/hooks/use-seo";
import { Check, Heart, Users, Shield, Calendar, Star, MessageCircle } from "lucide-react";

export default function MatchmakingMauritius() {
  useSEO({
    title: "Matchmaking in Mauritius | The Date Alchemy - Premium Dating Service",
    description: "Looking for matchmaking in Mauritius? The Date Alchemy is Mauritius' premier matchmaking service. Ultra-curated introductions with vetted professionals. 400+ members. Pay only when matched.",
    keywords: "matchmaking mauritius, matchmaking in mauritius, dating mauritius, dating in mauritius, matchmaker mauritius, dating service mauritius, professional matchmaking mauritius, singles mauritius, find love mauritius",
    canonical: "https://thedatealchemy.com/matchmaking-mauritius"
  });

  useEffect(() => {
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Matchmaking Service in Mauritius",
      "serviceType": "Professional Matchmaking",
      "provider": {
        "@type": "LocalBusiness",
        "name": "The Date Alchemy",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Port Louis",
          "addressCountry": "MU"
        }
      },
      "areaServed": {
        "@type": "Country",
        "name": "Mauritius"
      },
      "description": "Premium matchmaking service for professionals in Mauritius. Ultra-curated introductions with vetted singles.",
      "offers": {
        "@type": "Offer",
        "price": "8000",
        "priceCurrency": "MUR",
        "description": "1-year matchmaking membership with curated introductions"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-schema', 'service');
    script.textContent = JSON.stringify(serviceSchema);
    document.head.appendChild(script);

    return () => {
      const schemaScript = document.querySelector('script[data-schema="service"]');
      if (schemaScript) {
        schemaScript.remove();
      }
    };
  }, []);

  const features = [
    {
      icon: Users,
      title: "400+ Curated Members",
      description: "Join a community of sophisticated professionals in Mauritius who are serious about finding love."
    },
    {
      icon: Shield,
      title: "Vetted & Verified",
      description: "Every member is personally interviewed and verified. No fake profiles, no time wasters."
    },
    {
      icon: Heart,
      title: "Compatibility-First Matching",
      description: "We use our proprietary Needs Compatibility Score™ plus attachment theory to find your ideal match."
    },
    {
      icon: Calendar,
      title: "Dates Organized For You",
      description: "We book, confirm, and prepare everything. You just show up looking your best."
    },
    {
      icon: MessageCircle,
      title: "Post-Date Support",
      description: "No ghosting, no awkward follow-ups. We handle all communication professionally."
    },
    {
      icon: Star,
      title: "Pay Only When Matched",
      description: "Just Rs 800 upfront. Pay the remaining Rs 7,200 only when you accept your first match."
    }
  ];

  const faqs = [
    {
      question: "How is matchmaking different from dating apps in Mauritius?",
      answer: "Unlike dating apps where you swipe through thousands of profiles, our matchmaking service does the work for you. We personally interview every member, assess compatibility using scientific methods, and only introduce you to people who match your criteria and are genuinely ready for a relationship."
    },
    {
      question: "Who uses matchmaking services in Mauritius?",
      answer: "Our members are typically busy professionals aged 28-55 who value their time. They include executives, entrepreneurs, doctors, lawyers, and expatriates living in Mauritius who are serious about finding a life partner but don't have time for endless swiping."
    },
    {
      question: "How much does matchmaking cost in Mauritius?",
      answer: "Our membership costs Rs 8,000 for one year. You pay just Rs 800 (10%) upfront to start, and the remaining Rs 7,200 only when we find you a match you want to meet. This pay-for-results model ensures we're motivated to find you the right person."
    },
    {
      question: "How many matches will I get?",
      answer: "Quality over quantity. While members typically meet 3-5 highly compatible matches, some find their partner on the first introduction. We focus on finding the right match, not just any match."
    },
    {
      question: "Do you serve the whole of Mauritius?",
      answer: "Yes! We have members across Mauritius including Port Louis, Grand Baie, Flic en Flac, Curepipe, and other areas. We also work with Mauritians abroad and expatriates relocating to Mauritius."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <RebrandBanner />
      <Header />

      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 to-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
            Matchmaking in Mauritius
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Mauritius' premier matchmaking service for professionals seeking meaningful relationships
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://betterhalf.fillout.com/t/9ywPABvKHdus" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg" data-testid="button-apply-hero">
                Apply for Membership
              </Button>
            </a>
            <Link href="/how-it-works">
              <Button size="lg" variant="outline" className="px-8 py-4 text-lg" data-testid="button-how-it-works">
                How It Works
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Why Choose The Date Alchemy for Matchmaking in Mauritius?
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            We're not a dating app. We're a dedicated matchmaking team that does the hard work of finding compatible partners for you.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <feature.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            How Matchmaking Works in Mauritius
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            A simple, personalized process designed for busy professionals
          </p>
          
          <div className="space-y-8">
            {[
              { step: "1", title: "Apply & Interview", desc: "Complete our application and have a personal interview with our matchmaking team. We get to know you, your values, and what you're looking for." },
              { step: "2", title: "Compatibility Assessment", desc: "We assess your needs, attachment style, and relationship goals using our proprietary Needs Compatibility Score™." },
              { step: "3", title: "Receive Curated Matches", desc: "We search our database and network to find compatible matches. You receive detailed profiles of people who meet your criteria." },
              { step: "4", title: "Meet Your Match", desc: "We arrange the date at a venue of your choice. You just show up and enjoy. We handle all follow-up communication." }
            ].map((item) => (
              <div key={item.step} className="flex gap-6 items-start bg-white rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Frequently Asked Questions About Matchmaking in Mauritius
          </h2>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Find Your Match in Mauritius?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join 400+ professionals who trust The Date Alchemy for their matchmaking journey.
          </p>
          <a href="https://betterhalf.fillout.com/t/9ywPABvKHdus" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg" data-testid="button-apply-cta">
              Start Your Journey Today
            </Button>
          </a>
          <p className="mt-4 text-sm opacity-75">
            Only Rs 800 upfront. Pay the rest when we find your match.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
