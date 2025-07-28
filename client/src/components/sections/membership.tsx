const membershipFeatures = {
  premiumMatchmaking: {
    title: "1. Premium Matchmaking, Curated for Intentional Dating",
    description: "We begin by organising quality dates with intentional and compatible singles who match your standards, removing the dating app fatigue and confusion from the equation.",
    features: [
      "**Curated introductions** with pre-screened and carefully interviewed active, intentional singles who are ready for a meaningful relationship.",
      "**In-depth compatibility assessment** using your personal requirements, your lifestyle, and goals, but also what you truly need for lasting partnership and how you can meet someone's needs (The Date Alchemy Needs Compatibility Score™ ).",
      "**Human-centered matching** - Apps algorithms are designed to keep you online. We use human intuition, not just filters. Our matches are handpicked with care and you meet them in-person.",
      "**Attachment-aware matching:** we use the latest science in attachment style to avoid toxic mismatches before they start.",
      "**Vetted by you** based on in-depth profiles. You remain in full control.",
      "**Full scheduling concierge:** We book, confirm, and prep the date — so you just show up as your best self.",
      "**Follow-up after the date** handled for you — no ghosting, no awkward follow-ups",
      "**Bonus: Invitations to private events** (Singles Socials)- intimate brunches or dinners with hand-picked guests based on lifestyle, age, and shared values designed for meaningful connection, not crowd-chasing"
    ]
  },
  innerWork: {
    title: "2. Inner Work and Guidance",
    description: "We don't just help you meet the right person.  Our process addresses the inner patterns that shape your relationships, often without you realizing it.",
    subsections: [
      {
        title: "1) Full Relationship Readiness Self-Audit: Get crystal-clear on your patterns, blind spots, limiting beliefs and needs through:",
        features: [
          "**Your Needs Assessment:** Get clear on what you truly need in a relationship — not just what you're attracted to.",
          "**Attachment Style Assessment:** Understand how your attachment style influences the way you connect, respond, and bond in relationships (based on attachment theory by psychologists John Bowlby and Mary Ainsworth)",
          "**Dating Tendencies Assessment:** Identify unconscious dating patterns that may be holding you back (based on relationship scientist Logan Ury's work)"
        ]
      },
      {
        title: "2) Personalized Guidance to Date Intentionally and Confidently",
        features: [
          "**Direct Access to Our Matchmaking Team (via WhatsApp & Email):** A discreet communication channel to dating experts who know you and your dating journey.",
          "**Pre-Date and Pre-Dating Advice in your Inbox— Exactly When You Need It:** Digestible emails to prepare you before the first date and second date with the most common pitfalls and winning moves from hundreds of client experiences.",
          "**Reflection rituals after each date:** Guided prompts to learn about your needs throughout your dating journey.",
          "**Bi-weekly science-based relationship science insights in your inbox:** Bite-sized, science-backed tips to keep your dating mindset sharp. Curated from our matchmaking experience and backed by scientific journals."
        ]
      }
    ]
  }
};

export default function Membership() {
  return (
    <section className="py-32 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6 subtitle text-gray-900">The Date Alchemy Membership</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto body-text">
            Everything you need for a transformative dating experience — from premium matchmaking to personal growth guidance
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
                  
                  if (feature.startsWith('**') && starIndex > 0) {
                    const boldPart = feature.substring(2, starIndex);
                    const regularPart = feature.substring(starIndex + 2);
                    return (
                      <div key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-3 mr-4 flex-shrink-0"></div>
                        <span className="text-gray-700 body-text leading-relaxed">
                          <strong>{boldPart}</strong>{regularPart}
                        </span>
                      </div>
                    );
                  }
                  return (
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-3 mr-4 flex-shrink-0"></div>
                      <span className="text-gray-700 body-text leading-relaxed">{feature}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div className="space-y-6">
              <img 
                src="https://images.unsplash.com/photo-1559734840-f2f99ac4d94d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                alt="Diverse professionals at exclusive networking event" 
                className="rounded-2xl shadow-lg w-full h-48 object-cover hover-lift"
              />
              <img 
                src="https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                alt="Elegant restaurant setting for curated dates" 
                className="rounded-2xl shadow-lg w-full h-48 object-cover hover-lift"
              />
            </div>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <div className="space-y-6">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                alt="Professional woman reflecting confidently" 
                className="rounded-2xl shadow-lg w-full h-48 object-cover hover-lift"
              />
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                alt="Happy couple celebrating connection" 
                className="rounded-2xl shadow-lg w-full h-48 object-cover hover-lift"
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
                        if (colonIndex > 0 && feature.startsWith('**')) {
                          const boldPart = feature.substring(2, colonIndex - 2); // Remove ** from start and end before colon
                          const regularPart = feature.substring(colonIndex);
                          return (
                            <div key={featureIndex} className="flex items-start">
                              <div className="w-2 h-2 bg-primary rounded-full mt-3 mr-4 flex-shrink-0"></div>
                              <span className="text-gray-700 body-text leading-relaxed">
                                <strong>{boldPart}</strong>{regularPart}
                              </span>
                            </div>
                          );
                        }
                        return (
                          <div key={featureIndex} className="flex items-start">
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
