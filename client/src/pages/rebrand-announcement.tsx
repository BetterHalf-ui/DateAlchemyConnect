import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import RebrandBanner from "@/components/layout/rebrand-banner";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { useApplicationLink } from "@/hooks/use-application-link";

export default function RebrandAnnouncement() {
  const applicationLink = useApplicationLink();
  
  return (
    <div className="min-h-screen bg-white">
      <RebrandBanner />
      <Header />
      
      <main className="pb-16" style={{ paddingTop: '120px' }}>
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              We're Now The Date Alchemy
            </h1>
            <p className="text-2xl text-gray-600 mb-4">
              A New Name. The Same Purpose.
            </p>
            <p className="text-xl text-gray-600">
              We've rebranded from Betterhalf to The Date Alchemy — and we'd love to tell you why.
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Why Did We Change the Name?</h2>
              <p className="text-lg text-gray-700 mb-6">
                As we grow and expand internationally, we felt it was time for a brand that truly reflects our vision and the quality of service we provide.
              </p>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">1. A name that reflects the value we offer.</h3>
                  <p className="text-lg text-gray-700 mb-4">
                    We're working with global professionals in Mauritius and abroad—people who value meaningful, high-quality, human-centered matchmaking.
                  </p>
                  <p className="text-lg text-gray-700">
                    The Date Alchemy speaks to the way we're redefining dating: more respectful, more intentional, more human. It captures the quiet magic of a well-matched connection—and the life-changing transformation that can come from meeting the right person.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">2. A name that's uniquely ours.</h3>
                  <p className="text-lg text-gray-700">
                    We previously shared the name Betterhalf with a company in India, with whom we have no affiliation. As our reputation and reach grew, we needed a brand that's distinct, memorable, and entirely our own, one that reflects the care and originality behind what we do.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12 bg-gray-50 rounded-xl p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">What's Staying the Same?</h2>
              <p className="text-lg text-gray-700 mb-4">Everything you already value:</p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="text-primary mt-1 mr-3 flex-shrink-0" size={20} />
                  <span className="text-lg text-gray-700">Same promise: quality introductions with no pressure, privacy and thoughtful, human support</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-primary mt-1 mr-3 flex-shrink-0" size={20} />
                  <span className="text-lg text-gray-700">Same professional team</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-primary mt-1 mr-3 flex-shrink-0" size={20} />
                  <span className="text-lg text-gray-700">Same pricing (for now)</span>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">What's New?</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-primary">Free network membership option.</h3>
                  <p className="text-lg text-gray-700">
                    Not ready for a full membership yet? You can now join our network for free. While we won't actively search on your behalf, we'll reach out if you're a great match for one of our clients.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4 text-primary">International matchmaking.</h3>
                  <p className="text-lg text-gray-700">
                    We're now advertising abroad, connecting global professionals in Mauritius with like-minded singles who are open to moving — or moving back — to the island.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4 text-primary">A clearer website.</h3>
                  <p className="text-lg text-gray-700">
                    We've improved the layout, detailed what is included in our membership, and made it easier to understand exactly what you can expect from us, before you commit.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4 text-primary">Insights, now online.</h3>
                  <p className="text-lg text-gray-700">
                    The advice and reflections we share in our newsletter will now also be available on our website — accessible anytime.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4 text-primary">More to come.</h3>
                  <p className="text-lg text-gray-700">
                    We're constantly improving. From new tools to exclusive member bonuses, this is just the beginning.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12 bg-gray-50 rounded-xl p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Do I need to reapply?</h3>
                  <p className="text-lg text-gray-700">No — your membership remains active, just as it was.</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Are my preferences saved?</h3>
                  <p className="text-lg text-gray-700">Yes — nothing has changed on your profile or with your preferences.</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Is this still the same team?</h3>
                  <p className="text-lg text-gray-700">Yes — and we're more dedicated than ever to helping you find meaningful love.</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Got more questions?</h3>
                  <p className="text-lg text-gray-700">Reach out to us anytime — we're here to support you, every step of the way.</p>
                </div>
              </div>
            </section>

            <div className="text-center">
              <a 
                href={applicationLink} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold">
                  Start Your Journey with The Date Alchemy
                </Button>
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}