import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import RebrandBanner from '@/components/layout/rebrand-banner';
import { useEffect } from 'react';
import datingResetImage from '@assets/DatingReset_1768045206756.png';

export default function DatingPatternsGuide() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://server.fillout.com/embed/v1/';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <RebrandBanner />
      <Header />

      <section className="pt-32 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Are you falling into the "Butterfly Trap"?
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Discover the <strong className="text-gray-900">11 subconscious patterns</strong> that keep smart singles stuck—and learn exactly how to break them.
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 text-lg">•</span>
                  <p className="text-gray-700">
                    <strong className="text-gray-900">The Butterfly Trap:</strong> Why "sparks" often signal anxiety, not compatibility.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 text-lg">•</span>
                  <p className="text-gray-700">
                    <strong className="text-gray-900">The "Perfect Timing" Illusion:</strong> Why waiting for life to slow down is backfiring.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 text-lg">•</span>
                  <p className="text-gray-700">
                    <strong className="text-gray-900">The Give-to-Get Trap:</strong> How "keeping score" kills true intimacy.
                  </p>
                </li>
              </ul>

              <p className="text-gray-700 mb-4">
                ...plus 8 other hidden patterns based on behavioral science.
              </p>

              <p className="text-sm text-gray-500">
                Backed by psychology, attachment theory, and real matchmaking data.
              </p>
            </div>

            <div>
              <img
                src={datingResetImage}
                alt="Professional singles contemplating relationships"
                className="w-full rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#f5f5f0]">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Get Your Free Guide
            </h2>
            <p className="text-gray-600">
              Enter your details below and we'll send you the complete guide to breaking these patterns.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-md">
            <div 
              style={{ width: '100%', height: '500px' }} 
              data-fillout-id="4zmVS7WbHkus" 
              data-fillout-embed-type="standard" 
              data-fillout-inherit-parameters 
              data-fillout-dynamic-resize
            ></div>
          </div>

          <p className="text-xs text-gray-400 text-center mt-4">
            We respect your privacy. No spam, ever.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
