import { CheckCircle, Heart, Users, Sparkles } from 'lucide-react';

const features = [
  {
    icon: CheckCircle,
    text: "Handpicked introductions with singles who match your standards"
  },
  {
    icon: Heart,
    text: "Compatibility based on your needs, not just interests"
  },
  {
    icon: Users,
    text: "Curated real-life experiences, not swiping"
  },
  {
    icon: Sparkles,
    text: "A human-led process backed by relationship science"
  }
];

export default function Introduction() {
  return (
    <section className="section-black py-32">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <div className="fade-in-scroll mb-16">
          <p className="text-xl md:text-2xl leading-relaxed sans-body text-gray-200 mb-8">
            Finding a real connection in Mauritius isn't easy — especially when you are a busy professional and hold yourself to high standards.
          </p>
          <p className="text-xl md:text-2xl leading-relaxed sans-body text-gray-200">
            At The Date Alchemy, we believe real connections rarely happen by chance. We invite you to put yourself out there, intentionally. And we'll handle the rest — discreetly, with care, and without the confusion. So you can focus on living fully, while love finds its way to you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="fade-in-scroll text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-primary" />
                </div>
                <p className="text-white sans-body leading-relaxed">{feature.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}