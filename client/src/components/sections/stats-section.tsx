import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { useApplicationLink } from "@/hooks/use-application-link";

export default function StatsSection() {
  const applicationLink = useApplicationLink();
  const [displayCount, setDisplayCount] = useState(1);

  useEffect(() => {
    const targetCount = 234; // Updated from 222 to 234
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
    <>
      {/* Active Members Section */}
      <section className="section-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
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
            href={applicationLink} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg serif-title luxury-hover">
              Sign Up
            </Button>
          </a>
        </div>
      </section>

      {/* New Comparison Table Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl serif-title font-bold text-center mb-8 text-gray-900">
            Why Choose The Date Alchemy Over Dating Apps?
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 sans-body">
            Based on Pew Research Center findings on dating app experiences
          </p>
          
          {/* Comparison Table */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="overflow-x-auto">
              <table className="w-full">
                {/* Header */}
                <thead>
                  <tr className="bg-gray-900">
                    <th className="text-left py-6 px-6 font-bold text-lg text-white sans-body">Issue</th>
                    <th className="text-center py-6 px-6 font-bold text-lg text-white sans-body">Dating Apps (Pew Research)</th>
                    <th className="text-center py-6 px-6 font-bold text-lg text-primary bg-white sans-body">The Date Alchemy</th>
                  </tr>
                </thead>
                
                {/* Body */}
                <tbody className="divide-y divide-gray-100">
                  {/* User Mindset */}
                  <tr className="hover:bg-gray-50/50 transition-colors">
                    <td className="py-6 px-6 font-semibold text-gray-900 sans-body">User Mindset</td>
                    <td className="py-6 px-6 text-center text-red-700 sans-body">
                      Not serious: Nearly 50% want "something casual"
                    </td>
                    <td className="py-6 px-6 text-center text-green-700 sans-body">
                      100% of members are intentional and serious about finding a life partner
                    </td>
                  </tr>
                  
                  {/* Confidentiality */}
                  <tr className="hover:bg-gray-50/50 transition-colors">
                    <td className="py-6 px-6 font-semibold text-gray-900 sans-body">Confidentiality</td>
                    <td className="py-6 px-6 text-center text-red-700 sans-body">
                      0% privacy. Photos and names publicly exposed
                    </td>
                    <td className="py-6 px-6 text-center text-green-700 sans-body">
                      100% privacy. Details only shared with appropriate matches, with agreement from both sides, one at a time
                    </td>
                  </tr>
                  
                  {/* Time Cost */}
                  <tr className="hover:bg-gray-50/50 transition-colors">
                    <td className="py-6 px-6 font-semibold text-gray-900 sans-body">Time Cost</td>
                    <td className="py-6 px-6 text-center text-red-700 sans-body">
                      40+ hours swiping per month
                    </td>
                    <td className="py-6 px-6 text-center text-green-700 sans-body">
                      ~40 min: form + consultation
                    </td>
                  </tr>
                  
                  {/* Overall Experience */}
                  <tr className="hover:bg-gray-50/50 transition-colors">
                    <td className="py-6 px-6 font-semibold text-gray-900 sans-body">Overall Experience</td>
                    <td className="py-6 px-6 text-center text-red-700 sans-body">
                      46% say their experience is negative
                    </td>
                    <td className="py-6 px-6 text-center text-green-700 sans-body">
                      88% of dates are reported as good experiences. Tailored introductions ensure satisfaction
                    </td>
                  </tr>
                  
                  {/* Scams / Fake Profiles */}
                  <tr className="hover:bg-gray-50/50 transition-colors">
                    <td className="py-6 px-6 font-semibold text-gray-900 sans-body">Scams / Fake Profiles</td>
                    <td className="py-6 px-6 text-center text-red-700 sans-body">
                      52% encountered a scammer
                    </td>
                    <td className="py-6 px-6 text-center text-green-700 sans-body">
                      All profiles vetted and verified
                    </td>
                  </tr>
                  
                  {/* Disrespectful Messages */}
                  <tr className="hover:bg-gray-50/50 transition-colors">
                    <td className="py-6 px-6 font-semibold text-gray-900 sans-body">Disrespectful Messages</td>
                    <td className="py-6 px-6 text-center text-red-700 sans-body">
                      38% received unsolicited sexual messages
                    </td>
                    <td className="py-6 px-6 text-center text-green-700 sans-body">
                      Zero instances of disrespect
                    </td>
                  </tr>
                  
                  {/* Persistent / Unwanted Contact */}
                  <tr className="hover:bg-gray-50/50 transition-colors">
                    <td className="py-6 px-6 font-semibold text-gray-900 sans-body">Persistent / Unwanted Contact</td>
                    <td className="py-6 px-6 text-center text-red-700 sans-body">
                      30% kept contacting after rejection
                    </td>
                    <td className="py-6 px-6 text-center text-green-700 sans-body">
                      You stay in control — contact details shared only when you want
                    </td>
                  </tr>
                  
                  {/* Insults / Threats */}
                  <tr className="hover:bg-gray-50/50 transition-colors">
                    <td className="py-6 px-6 font-semibold text-gray-900 sans-body">Insults / Threats</td>
                    <td className="py-6 px-6 text-center text-red-700 sans-body">
                      24% insulted; 6% threatened
                    </td>
                    <td className="py-6 px-6 text-center text-green-700 sans-body">
                      Safe space, zero tolerance for disrespect
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            {/* Footnote */}
            <div className="bg-gray-50 px-8 py-4 border-t border-gray-100">
              <p className="text-sm text-gray-600 sans-body italic">
                Data from Pew Research Center's 2022 study on online dating experiences
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <a 
              href={applicationLink} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button className="bg-primary hover:bg-primary/90 text-white px-12 py-4 text-xl serif-title luxury-hover">
                Experience The Difference
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}