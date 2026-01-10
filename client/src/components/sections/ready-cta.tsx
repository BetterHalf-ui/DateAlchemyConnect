import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useApplicationLink } from "@/hooks/use-application-link";

export default function ReadyCTA() {
  const applicationLink = useApplicationLink();
  
  return (
    <section className="section-black py-32 text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-5xl md:text-6xl serif-title mb-12 text-white">
          Ready for real connection?
        </h2>
        <a 
          href={applicationLink} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <Button className="bg-primary hover:bg-primary/90 text-white px-12 py-6 text-xl serif-title luxury-hover">
            Apply Now
          </Button>
        </a>
        <div className="mt-8">
          <p className="text-gray-300 sans-body mb-4">
            Not ready to invest?
          </p>
          <Link href="/dating-patterns-guide" onClick={() => window.scrollTo(0, 0)}>
            <Button variant="link" className="text-primary hover:text-primary/80 serif-title">
              Read our free report on the '11 Hidden Patterns' preventing smart singles in Mauritius from finding love.
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}