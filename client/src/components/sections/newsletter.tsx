import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

declare global {
  interface Window {
    ml_account: any;
    ml_webform_2964238: any;
  }
}

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Load MailerLite JavaScript
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://static.mailerlite.com/js/universal.js';
    document.head.appendChild(script);

    script.onload = () => {
      if (window.ml_account) {
        window.ml_account('webforms', '976785', 'a1b4f3', 'load');
      }
    };

    return () => {
      // Cleanup
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Use MailerLite's JavaScript API if available
      if (window.ml_account) {
        window.ml_account('webforms', '976785', 'a1b4f3', 'subscribe', { email: email });
        
        toast({
          title: "Successfully subscribed!",
          description: "You'll receive our bi-weekly dating tips straight to your inbox.",
        });
        setEmail("");
      } else {
        // Fallback to direct form submission
        const formData = new URLSearchParams();
        formData.append('fields[email]', email);
        formData.append('ml-submit', '1');

        const response = await fetch('https://assets.mailerlite.com/jsonp/976785/forms/161724071625623326/subscribe', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: formData,
          mode: 'no-cors'
        });

        toast({
          title: "Successfully subscribed!",
          description: "You'll receive our bi-weekly dating tips straight to your inbox.",
        });
        setEmail("");
      }
    } catch (error) {
      console.error('Subscription error:', error);
      toast({
        title: "Subscription failed",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-32 bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6 subtitle">The Smarter Way to Date — Straight to Your Inbox</h2>
        <p className="text-xl text-gray-300 mb-12 body-text">Join 1,000+ Smart Singles Getting Bi-Weekly Dating Tips</p>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-2">
          <Input
            type="email"
            placeholder="Enter your email"
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
            {isSubmitting ? "Subscribing..." : "Subscribe"}
          </Button>
        </form>
        
        <div className="text-sm text-gray-400 mt-4">
          By subscribing, you agree to receive our newsletter. You can unsubscribe at any time.
        </div>
      </div>
    </section>
  );
}