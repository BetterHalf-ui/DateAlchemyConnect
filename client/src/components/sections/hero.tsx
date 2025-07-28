import { Button } from "@/components/ui/button";
import { COMPANY_INFO, EXTERNAL_LINKS } from "@/lib/constants";

export default function Hero() {
  return (
    <section 
      className="relative h-screen flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')`,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}
    >
      <div className="text-center text-white px-4 fade-in max-w-6xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Built for real connection — with exceptional professionals in Mauritius.
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto font-light">
          No more ghosting. No more guesswork. No more wasting your time. Discover a more intentional, empowering way to meet someone exceptional.
        </p>
      </div>
    </section>
  );
}
