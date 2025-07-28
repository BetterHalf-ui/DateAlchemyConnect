import { CheckCircle, Shield, Clock, Users } from "lucide-react";

const approaches = [
  {
    icon: CheckCircle,
    title: "Curated Introductions",
    description: "We introduce you to singles who meet your standards and share your vibe, are carefully interviewed and equally serious about finding a lifetime partner in Mauritius."
  },
  {
    icon: Shield,
    title: "Your Privacy is Our Priority ",
    description: "We protect your privacy like it's our own—your information is always safe, confidential, and never shared without your consent. Every introduction is handled with the utmost care and respect for your privacy."
  },
  {
    icon: Clock,
    title: "Sans pressure",
    description: "No pressure from parents and friends to deal with. Meet your match for a coffee date, exchange numbers if you like, or date for months, or meet someone else who's a better fit. Every introduction is your choice. You can always say no, and we'll always listen. "
  },
  {
    icon: Users,
    title: "Thoughtful, Human Support",
    description: "We offer a full-circle dating experience — from pre-date self-assessments to date planning and post-date follow-ups. You get personalized, science-backed guidance at every step. No more ghosting, no confusion — just real support, with a human touch. Because your love life deserves more than algorithms. "
  }
];

export default function Approach() {
  return (
    <>
      {/* Why Apply Section */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-16 body-text">
            Finding a real connection in Mauritius isn't easy — especially when you are a busy professional and hold yourself to high standards.
            <br /><br />
            At The Date Alchemy, we believe  true connections rarely happens by chance - it happens  when you put yourself out there intentionally. That's exactly what we're inviting you to do — but discreetly, without pressure, and without the confusion that comes from going it alone.
          </p>
        </div>
      </section>

      {/* The Date Alchemy Approach */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            The Date Alchemy Approach
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {approaches.map((approach, index) => {
              const IconComponent = approach.icon;
              return (
                <div key={index} className="text-center p-6 bg-white rounded-xl hover-lift premium-shadow">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{approach.title}</h3>
                  <p className="text-gray-600">{approach.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
