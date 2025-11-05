import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useI18n } from "@/lib/i18n";
import { trackContactForm } from "@/lib/meta-pixel";

export default function Newsletter() {
  const { t } = useI18n();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log('[Newsletter] Submit started, email:', email);
    
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    console.log('[Newsletter] Sending request to /api/newsletter');

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      console.log('[Newsletter] Response status:', response.status);
      
      const result = await response.json();
      console.log('[Newsletter] Response data:', result);

      if (response.ok) {
        trackContactForm(); // Track Meta Pixel Contact event
        toast({
          title: "Successfully subscribed!",
          description: "You'll receive our bi-weekly dating tips straight to your inbox.",
        });
        setEmail("");
      } else {
        console.error('[Newsletter] Subscription failed:', result);
        toast({
          title: "Subscription failed",
          description: result.message || "Please try again or contact us directly.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('[Newsletter] Fetch error:', error);
      toast({
        title: "Subscription failed",
        description: error instanceof Error ? error.message : "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-32 bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6 subtitle">{t('home.newsletter.title')}</h2>
        <p className="text-xl text-gray-300 mb-12 body-text">{t('home.newsletter.subtitle')}</p>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-2">
          <Input
            type="email"
            placeholder={t('home.newsletter.placeholder')}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 sm:rounded-r-none focus:ring-primary text-gray-900 h-14 text-lg"
            disabled={isSubmitting}
            required
          />
          <Button 
            type="submit"
            disabled={isSubmitting}
            className="bg-primary hover:bg-primary/90 px-8 sm:rounded-l-none h-14 text-lg font-semibold whitespace-nowrap"
          >
            {isSubmitting ? "Subscribing..." : t('home.newsletter.cta')}
          </Button>
        </form>
        
        <div className="text-sm text-gray-400 mt-4">
          {t('home.newsletter.disclaimer')}
        </div>
      </div>
    </section>
  );
}