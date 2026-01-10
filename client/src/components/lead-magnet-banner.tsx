import { Button } from '@/components/ui/button';
import datingResetImage from '@assets/DatingReset_1768045206756.png';

export default function LeadMagnetBanner() {
  const handleCTAClick = () => {
    window.location.href = '/dating-patterns-guide';
  };

  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-[#f5f5f0] rounded-2xl overflow-hidden shadow-md">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 flex-shrink-0">
              <img
                src={datingResetImage}
                alt="Is a hidden pattern keeping you single?"
                className="w-full h-56 md:h-full object-cover object-center"
                loading="lazy"
              />
            </div>
            
            <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                Is a 'Hidden Pattern' keeping you single?
              </h3>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                You're doing the work, but the results aren't there yet. We've identified 11 subconscious behaviors that sabotage even the smartest singles in Mauritius. Find out which one is yours.
              </p>
              
              <Button
                onClick={handleCTAClick}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 text-base w-full md:w-auto md:self-start shadow-md"
              >
                Reveal the 11 Patterns
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
