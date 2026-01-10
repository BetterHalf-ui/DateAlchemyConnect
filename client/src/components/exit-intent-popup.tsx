import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useExitIntent } from '@/hooks/use-exit-intent';
import datingResetImage from '@assets/DatingReset_1768045206756.png';

export default function ExitIntentPopup() {
  const { showPopup, closePopup } = useExitIntent({
    threshold: 20,
    cookieName: 'butterfly_trap_popup_shown',
    cookieExpireDays: 7,
    preloadImage: datingResetImage
  });

  if (!showPopup) return null;

  const handleCTAClick = () => {
    window.open('https://betterhalf.fillout.com/t/oy76Ymzo8jus', '_blank');
    closePopup();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-300">
        <button
          onClick={closePopup}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 bg-white/80 transition-colors z-10"
          aria-label="Close popup"
        >
          <X className="w-5 h-5 text-gray-500" />
        </button>

        <div className="w-full h-48 overflow-hidden rounded-t-2xl">
          <img
            src={datingResetImage}
            alt="Professional singles contemplating relationships"
            className="w-full h-full object-cover object-top"
            loading="eager"
            decoding="async"
          />
        </div>

        <div className="p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 leading-tight">
            Wait! Are you falling into the "Butterfly Trap"?
          </h2>

          <p className="text-gray-600 mb-6">
            Discover the <strong className="text-gray-900">11 subconscious patterns that keep smart singles stuck</strong>—and learn exactly how to break them.
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

          <p className="text-gray-700 mb-4">
            ...plus 8 other hidden patterns based on behavioral science.
          </p>

          <p className="text-sm text-gray-500 mb-6 text-center">
            Backed by psychology, attachment theory, and real matchmaking data.
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
        </div>
      </div>
    </div>
  );
}
