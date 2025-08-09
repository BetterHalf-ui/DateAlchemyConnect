import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import RebrandBanner from "@/components/layout/rebrand-banner";
import { Button } from "@/components/ui/button";
import { EXTERNAL_LINKS } from "@/lib/constants";
import { Link } from "wouter";

export default function HowItWorks() {
  return (
    <div className="min-h-screen">
      <RebrandBanner />
      <Header />
      
      {/* Hero Section with Image and Text */}
      <section className="bg-white py-20" style={{ paddingTop: '120px' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="order-2 lg:order-1">
              <h1 className="text-5xl font-bold mb-6 subtitle text-gray-900">How The Date Alchemy Works</h1>
              <p className="text-xl text-gray-700 mb-8 body-text leading-relaxed">
                A personalized 4-step process designed to bring you meaningful connections efficiently and discreetly in Mauritius.
              </p>
              <a 
                href={EXTERNAL_LINKS.applicationForm} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold">
                  Apply for Membership
                </Button>
              </a>
            </div>
            
            {/* Image */}
            <div className="order-1 lg:order-2">
              <img 
                src="/attached_assets/WhatsApp Image 2025-07-30 at 12.49.09 PM (1)_1754165583551.jpeg"
                alt="Professional consultation session"
                className="w-full h-96 lg:h-[500px] object-cover rounded-xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Process - Desktop Version */}
      <section className="py-20 bg-gray-50 hidden lg:block">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 subtitle text-gray-900">Our Process</h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-primary"></div>
            
            {/* Step 01 */}
            <div className="relative flex items-center mb-20">
              <div className="w-1/2 pr-8 text-right">
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h3 className="text-2xl font-bold mb-4 subtitle text-gray-900">01. Application Process</h3>
                  <p className="text-gray-700 mb-4 body-text">
                    You'll begin by completing our initial application: a questionnaire that helps us understand your background, values, and what you're truly seeking in a partner.
                  </p>
                  <p className="text-gray-700 body-text">
                    We value transparency, so we'll be upfront about what we can realistically offer based on your preferences and our current member base.
                  </p>
                </div>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold z-10">
                01
              </div>
              <div className="w-1/2 pl-8"></div>
            </div>
            
            {/* Step 02 */}
            <div className="relative flex items-center mb-20">
              <div className="w-1/2 pr-8"></div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold z-10">
                02
              </div>
              <div className="w-1/2 pl-8">
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h3 className="text-2xl font-bold mb-4 subtitle text-gray-900">02. Personal Interview</h3>
                  <p className="text-gray-700 mb-4 body-text">
                    Next, you'll meet with your personal matchmaker in a one-on-one video consultation to craft your personalized profile.
                  </p>
                  <p className="text-gray-700 body-text">
                    We'll dive deeper into your relationship goals, discuss what hasn't worked in the past, and align on the type of person you're hoping to meet.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Step 03 */}
            <div className="relative flex items-center mb-20">
              <div className="w-1/2 pr-8 text-right">
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h3 className="text-2xl font-bold mb-4 subtitle text-gray-900">03. Curated Introduction</h3>
                  <p className="text-gray-700 body-text">
                    When we identify a mutually aligned connection, we share both profiles for review. With mutual interest, <strong>we ask you for the payment of the membership</strong> and coordinate your first date with complete discretion and care.
                  </p>
                </div>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold z-10">
                03
              </div>
              <div className="w-1/2 pl-8"></div>
            </div>
            
            {/* Step 04 */}
            <div className="relative flex items-center">
              <div className="w-1/2 pr-8"></div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold z-10">
                04
              </div>
              <div className="w-1/2 pl-8">
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h3 className="text-2xl font-bold mb-4 subtitle text-gray-900">04. Ongoing Support</h3>
                  <p className="text-gray-700 body-text">
                    We provide thoughtful guidance and post-date follow-ups to help you navigate your new connection. Our support continues throughout your membership until you find your perfect match.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Process - Mobile Version */}
      <section className="py-20 bg-gray-50 lg:hidden">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 subtitle text-gray-900">Our Process</h2>
          
          <div className="space-y-8">
            {/* Step 01 Mobile */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center text-lg font-bold mr-4">
                  01
                </div>
                <h3 className="text-xl font-bold subtitle text-gray-900">Application Process</h3>
              </div>
              <p className="text-gray-700 mb-4 body-text">
                You'll begin by completing our initial application: a questionnaire that helps us understand your background, values, and what you're truly seeking in a partner.
              </p>
              <p className="text-gray-700 body-text">
                We value transparency, so we'll be upfront about what we can realistically offer based on your preferences and our current member base.
              </p>
            </div>
            
            {/* Step 02 Mobile */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center text-lg font-bold mr-4">
                  02
                </div>
                <h3 className="text-xl font-bold subtitle text-gray-900">Personal Interview</h3>
              </div>
              <p className="text-gray-700 mb-4 body-text">
                Next, you'll meet with your personal matchmaker in a one-on-one video consultation to craft your personalized profile.
              </p>
              <p className="text-gray-700 body-text">
                We'll dive deeper into your relationship goals, discuss what hasn't worked in the past, and align on the type of person you're hoping to meet.
              </p>
            </div>
            
            {/* Step 03 Mobile */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center text-lg font-bold mr-4">
                  03
                </div>
                <h3 className="text-xl font-bold subtitle text-gray-900">Curated Introduction</h3>
              </div>
              <p className="text-gray-700 body-text">
                When we identify a mutually aligned connection, we share both profiles for review. With mutual interest, <strong>we ask you for the payment of the membership</strong> and coordinate your first date with complete discretion and care.
              </p>
            </div>
            
            {/* Step 04 Mobile */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center text-lg font-bold mr-4">
                  04
                </div>
                <h3 className="text-xl font-bold subtitle text-gray-900">Ongoing Support</h3>
              </div>
              <p className="text-gray-700 body-text">
                We provide thoughtful guidance and post-date follow-ups to help you navigate your new connection. Our support continues throughout your membership until you find your perfect match.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 subtitle text-gray-900">Ready to Begin?</h2>
          <p className="text-xl text-gray-700 mb-8 body-text">
            Join our exclusive membership and take the first step toward finding your perfect match.
          </p>
          <a 
            href={EXTERNAL_LINKS.applicationForm} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button className="bg-primary hover:bg-primary/90 text-white px-12 py-4 text-xl font-semibold mb-6">
              Apply for Membership
            </Button>
          </a>
          <div className="text-gray-600">
            <p className="mb-2">Not ready to invest in a membership?</p>
            <Link href="/network" onClick={() => window.scrollTo(0, 0)}>
              <span className="text-primary hover:underline cursor-pointer">
                Join our network for free to see if you are a match with one of our exceptional clients.
              </span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}