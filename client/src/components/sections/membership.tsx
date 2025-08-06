import { useState, useEffect, useRef } from 'react';

const membershipFeatures = {
  premiumMatchmaking: {
    title: "1. Premium Matchmaking",
    description: "",
    features: [
      "**Curated introductions** with pre-screened and carefully interviewed singles who match your standards and are ready for a meaningful relationship.",
      "**In-depth compatibility assessment** based on your personal requirements, your lifestyle, and life goals, but also what you truly need in a relationship (The Date Alchemy Needs Compatibility Score™ ).",
      "**Human-centered matching** - Apps algorithms are designed to keep you online and set you up for failure. We use human intuition, not just filters. Our matches are handpicked with care and you meet them in-person.",
      "**Attachment-aware matching:** we use the science-backed Attachment Theory to avoid toxic mismatches before they start.",
      "**Vetted by you** based on in-depth profiles. You remain in full control.",
      "**Full scheduling concierge:** We book, confirm, and prep the date — so you just show up as your best self.",
      "**Follow-up after the date** handled for you — no ghosting, no awkward follow-ups",
      "**Bonus: Invitations to private events** (Singles Socials)- intimate brunches or dinners with hand-picked guests designed for meaningful connections"
    ]
  },
  innerWork: {
    title: "2. Inner Work and Guidance",
    description: "We set you up for successful dates and healthier relationships",
    subsections: [
      {
        title: "1) Full Relationship Readiness Self-Audit:",
        features: [
          "Your Needs Assessment: Get clear on what you truly need in a relationship — not just what you're attracted to.",
          "Attachment Style Assessment: Understand how your attachment style influences the way you connect, respond, and bond in relationships (based on attachment theory by psychologists John Bowlby and Mary Ainsworth)",
          "Dating Tendencies Assessment: Identify unconscious dating patterns that may be holding you back (based on relationship scientist Logan Ury's work)"
        ]
      },
      {
        title: "2) Personalized Guidance to Date Intentionally and Confidently",
        features: [
          "Direct Access to Our Matchmaking Team (via Whatsapp & Email): A discreet communication channel to dating experts who know you and your dating journey.",
          "Pre-Date and Pre-Dating Advice in your Inbox— Exactly When You Need It: Digestible emails to prepare you before the first date and second date with the most common pitfalls and winning moves from hundreds of client experiences.",
          "Reflection rituals after each date: Dating is also a journey of self-discovery—an opportunity to uncover what truly matters to you along the way.",
          "Bi-weekly science-based dating insights in your inbox: Tips based on our matchmaking experience and backed by scientific journals."
        ]
      }
    ]
  }
};

export default function Membership() {
  const [visibleFeatures, setVisibleFeatures] = useState<Set<string>>(new Set());
  const featureRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    const handleScroll = () => {
      Object.entries(featureRefs.current).forEach(([key, element]) => {
        if (element) {
          const rect = element.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight - 100 && rect.bottom > 0;
          
          if (isVisible && !visibleFeatures.has(key)) {
            setVisibleFeatures(prev => new Set(Array.from(prev).concat(key)));
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial visibility

    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleFeatures]);

  return (
    <section className="py-32 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6 subtitle text-gray-900">The Date Alchemy Membership</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto body-text">
            Everything you need for a healthier dating experience
          </p>
        </div>
        
        <div className="space-y-16">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2 bg-white rounded-3xl p-12 premium-shadow hover-lift">
              <h3 className="text-3xl font-bold mb-6 text-primary subtitle">
                {membershipFeatures.premiumMatchmaking.title}
              </h3>
              <p className="text-lg text-gray-700 mb-8 body-text leading-relaxed">
                {membershipFeatures.premiumMatchmaking.description}
              </p>
              <h4 className="text-xl font-semibold mb-6 text-gray-900 subtitle">Included in Your Membership:</h4>
              <div className="grid md:grid-cols-2 gap-6">
                {membershipFeatures.premiumMatchmaking.features.map((feature, index) => {
                  // Handle bold formatting for premium matchmaking features
                  const colonIndex = feature.indexOf(':');
                  const starIndex = feature.indexOf('**', 2); // Find closing **
                  const featureKey = `premium-${index}`;
                  const isVisible = visibleFeatures.has(featureKey);
                  
                  if (feature.startsWith('**') && starIndex > 0) {
                    const boldPart = feature.substring(2, starIndex);
                    const regularPart = feature.substring(starIndex + 2);
                    return (
                      <div 
                        key={index} 
                        ref={el => featureRefs.current[featureKey] = el}
                        className={`flex items-start transition-all duration-700 ${
                          isVisible 
                            ? 'opacity-100 translate-y-0' 
                            : 'opacity-0 translate-y-4'
                        }`}
                        style={{ transitionDelay: `${index * 150}ms` }}
                      >
                        <div className="w-2 h-2 bg-primary rounded-full mt-3 mr-4 flex-shrink-0"></div>
                        <span className="text-gray-700 body-text leading-relaxed">
                          <strong>{boldPart}</strong>{regularPart}
                        </span>
                      </div>
                    );
                  }
                  return (
                    <div 
                      key={index} 
                      ref={el => featureRefs.current[featureKey] = el}
                      className={`flex items-start transition-all duration-700 ${
                        isVisible 
                          ? 'opacity-100 translate-y-0' 
                          : 'opacity-0 translate-y-4'
                      }`}
                      style={{ transitionDelay: `${index * 150}ms` }}
                    >
                      <div className="w-2 h-2 bg-primary rounded-full mt-3 mr-4 flex-shrink-0"></div>
                      <span className="text-gray-700 body-text leading-relaxed">{feature}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div className="h-full">
              <img 
                src="/attached_assets/Screenshot 2025-07-30 at 17.02.42_1753881255839.png" 
                alt="Happy couple enjoying intimate moment together" 
                className="rounded-2xl shadow-lg w-full h-full object-cover hover-lift"
              />
            </div>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <div className="h-full">
              <img 
                src="/attached_assets/74c7b6d9-723b-48f4-8ad3-88de4e6dabe9_1753881262177.jpeg" 
                alt="Professional woman reflecting confidently" 
                className="rounded-2xl shadow-lg w-full h-full object-cover hover-lift"
              />
            </div>
            
            <div className="lg:col-span-2 bg-white rounded-3xl p-12 premium-shadow hover-lift">
              <h3 className="text-3xl font-bold mb-6 text-primary subtitle">
                {membershipFeatures.innerWork.title}
              </h3>
              <p className="text-lg text-gray-700 mb-8 body-text leading-relaxed">
                {membershipFeatures.innerWork.description}
              </p>
              <h4 className="text-xl font-semibold mb-6 text-gray-900 subtitle">Included in Your Membership:</h4>
              <div className="space-y-8">
                {membershipFeatures.innerWork.subsections.map((subsection, sectionIndex) => (
                  <div key={sectionIndex} className="space-y-4">
                    <h5 className="text-lg font-semibold text-gray-900 subtitle mb-4">
                      {subsection.title}
                    </h5>
                    <div className="space-y-3 ml-4">
                      {subsection.features.map((feature, featureIndex) => {
                        // Split on the first colon to separate bold part from description
                        const colonIndex = feature.indexOf(':');
                        const featureKey = `inner-${sectionIndex}-${featureIndex}`;
                        const isVisible = visibleFeatures.has(featureKey);
                        
                        if (colonIndex > 0) {
                          const boldPart = feature.substring(0, colonIndex);
                          const regularPart = feature.substring(colonIndex);
                          return (
                            <div 
                              key={featureIndex} 
                              ref={el => featureRefs.current[featureKey] = el}
                              className={`flex items-start transition-all duration-700 ${
                                isVisible 
                                  ? 'opacity-100 translate-y-0' 
                                  : 'opacity-0 translate-y-4'
                              }`}
                              style={{ transitionDelay: `${(sectionIndex * 4 + featureIndex) * 150}ms` }}
                            >
                              <div className="w-2 h-2 bg-primary rounded-full mt-3 mr-4 flex-shrink-0"></div>
                              <span className="text-gray-700 body-text leading-relaxed">
                                <strong>{boldPart}</strong>{regularPart}
                              </span>
                            </div>
                          );
                        }
                        return (
                          <div 
                            key={featureIndex} 
                            ref={el => featureRefs.current[featureKey] = el}
                            className={`flex items-start transition-all duration-700 ${
                              isVisible 
                                ? 'opacity-100 translate-y-0' 
                                : 'opacity-0 translate-y-4'
                            }`}
                            style={{ transitionDelay: `${(sectionIndex * 4 + featureIndex) * 150}ms` }}
                          >
                            <div className="w-2 h-2 bg-primary rounded-full mt-3 mr-4 flex-shrink-0"></div>
                            <span className="text-gray-700 body-text leading-relaxed">{feature}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
