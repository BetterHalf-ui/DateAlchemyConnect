import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useApplicationLink } from "@/hooks/use-application-link";
import { useI18n } from "@/lib/i18n";
import { trackApplicationClick } from "@/lib/analytics";
import { trackApplicationSubmit } from "@/lib/meta-pixel";

export default function ReadyCTA() {
  const applicationLink = useApplicationLink();
  const { language } = useI18n();
  
  return (
    <section className="section-black py-32 text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-5xl md:text-6xl serif-title mb-12 text-white">
          Ready for real connection?
        </h2>
        <Link 
          href={applicationLink}
          onClick={() => {
            trackApplicationClick(language, 'ready_cta');
            trackApplicationSubmit();
            window.scrollTo(0, 0);
          }}
        >
          <Button className="bg-primary hover:bg-primary/90 text-white px-12 py-6 text-xl serif-title luxury-hover">
            Apply Now
          </Button>
        </Link>
      </div>
    </section>
  );
}