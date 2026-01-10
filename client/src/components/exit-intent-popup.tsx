import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useExitIntent } from '@/hooks/use-exit-intent';
import datingResetImage from '@assets/DatingReset_1768045206756.png';

export default function ExitIntentPopup() {
  const { showPopup, closePopup } = useExitIntent({
    threshold: 20,
    cookieName: 'butterfly_trap_popup_shown',
    cookieExpireDays: 7
  });

  if (!showPopup) return null;

  const handleCTAClick = () => {
    window.open('https://betterhalf.fillout.com/t/oy76Ymzo8jus', '_blank');
    closePopup();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-300">
        <button
          onClick={closePopup}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors z-10"
          aria-label="Close popup"
        >
          <X className="w-5 h-5 text-gray-500" />
        </button>

        <div className="grid md:grid-cols-2 gap-0">
          <div className="hidden md:block">
            <img
              src={datingResetImage}
              alt="Professional singles contemplating relationships"
              className="w-full h-full object-cover rounded-l-2xl"
            />
          </div>

          <div className="p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 leading-tight">
              Wait! Are you falling into the "Butterfly Trap"?
            </h2>

            <p className="text-gray-600 mb-6">
              Discover the 11 subconscious patterns that keep smart singles stuck—and learn exactly how to break them.
            </p>

            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <p className="text-gray-700">
                  <strong className="text-gray-900">The Butterfly Trap:</strong> Why "sparks" often signal anxiety, not compatibility.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <p className="text-gray-700">
                  <strong className="text-gray-900">The "Perfect Timing" Illusion:</strong> Why waiting for life to slow down is backfiring.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <p className="text-gray-700">
                  <strong className="text-gray-900">The Give-to-Get Trap:</strong> How "keeping score" kills true intimacy.
                </p>
              </li>
            </ul>

            <p className="text-sm text-gray-500 mb-6 italic">
              ...plus 8 other hidden patterns based on behavioral science.
            </p>

            <Button
              onClick={handleCTAClick}
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-6 text-lg shadow-lg"
            >
              Send Me The Free Guide
            </Button>

            <p className="text-xs text-gray-400 text-center mt-3">
              We respect your privacy. No spam, ever.
            </p>

            <p className="text-xs text-gray-400 text-center mt-4 pt-4 border-t border-gray-100">
              Backed by psychology, attachment theory, and real matchmaking data.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
