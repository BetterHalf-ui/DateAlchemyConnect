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
    description: "Date without pressure. Meet your match for a coffee, exchange numbers if you like, date for months, or meet someone else who's a better fit. It's all on your terms."
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
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 body-text">
                Finding a real connection in Mauritius isn't easy — especially when you are a busy professional and hold yourself to high standards.
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed body-text">
                At The Date Alchemy, we believe true connections rarely happens by chance - it happens when you put yourself out there intentionally. That's exactly what we're inviting you to do — but discreetly, without pressure, and without the confusion that comes from going it alone.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Modern professionals in elegant urban setting" 
                className="rounded-2xl shadow-lg w-full hover-lift"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Date Alchemy Approach */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-8 text-gray-900 subtitle">
              The Date Alchemy Approach
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {approaches.map((approach, index) => {
              const IconComponent = approach.icon;
              return (
                <div key={index} className="text-center p-8 bg-white rounded-2xl hover-lift premium-shadow">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 subtitle">{approach.title}</h3>
                  <p className="text-gray-600 body-text leading-relaxed">{approach.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
