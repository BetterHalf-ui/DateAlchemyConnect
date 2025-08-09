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
              <h1 className="text-5xl md:text-6xl font-bold mb-8 subtitle text-gray-900">
                Real Connections Start Here
              </h1>
              
              {/* Call to Action Section */}
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 subtitle text-gray-900">Ready to Find Your Match?</h3>
                <p className="text-lg text-gray-700 leading-relaxed body-text mb-6">
                  Take the first step towards meaningful connection with our proven matchmaking process.
                </p>
                <a 
                  href={EXTERNAL_LINKS.applicationForm} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-block bg-primary text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 body-text"
                >
                  Start Your Application
                </a>
              </div>
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
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 subtitle text-gray-900">
            Your Membership Journey
          </h2>
          <p className="text-xl text-gray-600 text-center mb-20 body-text">
            A Proven Process for Real Connection
          </p>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-primary"></div>
            
            {/* Step 01 */}
            <div className="relative flex items-center mb-20">
              <div className="w-1/2 pr-8 text-right">
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h3 className="text-2xl font-bold mb-4 subtitle text-gray-900">01. Apply for Membership</h3>
                  <p className="text-gray-700 mb-4 body-text">
                    You'll begin by completing our initial application: a questionnaire that helps us understand your background, values, and what you're truly seeking in a partner.
                  </p>
                  <p className="text-gray-700 body-text">
                    Within one business day, we'll review your submission to let you know if we have a potential match within our member base and share an in-depth assessment to better understand your needs in a relationship, attachment style and dating tendencies.
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
                  <h3 className="text-2xl font-bold mb-4 subtitle text-gray-900">02. Private Consultation</h3>
                  <p className="text-gray-700 mb-4 body-text">
                    Next, you'll meet with your personal matchmaker in a one-on-one video consultation. This conversation is designed to have a more in-depth understanding of who you are and what you are looking for.
                  </p>
                  <p className="text-gray-700 body-text">
                    Following this, we craft a profile summary — which you'll review and approve — to be shared selectively only with potential matches who meet your criteria.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Step 03 */}
            <div className="relative flex items-center mb-20">
              <div className="w-1/2 pr-8 text-right">
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h3 className="text-2xl font-bold mb-4 subtitle text-gray-900">03. Curated Introduction</h3>
                  <p className="text-gray-700 mb-4 body-text">
                    Once a mutually aligned connection is identified, we share both profiles for review. If there's mutual interest, we invite you to activate your annual membership so we can proceed with arranging your first date.
                  </p>
                  <p className="text-gray-700 body-text">
                    We handle all the coordination with care and discretion, ensuring you meet someone genuinely aligned with your aspirations — in the right place, at the right time.
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
                  <h3 className="text-2xl font-bold mb-4 subtitle text-gray-900">04. Refinement & Follow-up</h3>
                  <p className="text-gray-700 mb-4 body-text">
                    After the introduction, the path is yours — whether it's a second date, exchanging contact details, or choosing to explore a new introduction.
                  </p>
                  <p className="text-gray-700 body-text">
                    We always seek your feedback after each date to fine-tune our matching approach and ensure your experience evolves meaningfully.
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
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 subtitle text-gray-900">
            Your Membership Journey
          </h2>
          <p className="text-xl text-gray-600 text-center mb-20 body-text">
            A Proven Process for Real Connection
          </p>
          
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

      {/* Comparison Table */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 subtitle text-gray-900">
            The Date Alchemy vs. Dating Apps
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 body-text">
            See why intentional matching delivers better results
          </p>
          
          {/* Comparison Table */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="overflow-x-auto">
              <table className="w-full">
                {/* Header */}
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left py-6 px-8 font-bold text-lg text-gray-900 body-text"></th>
                    <th className="text-center py-6 px-8 font-bold text-lg text-primary subtitle">The Date Alchemy</th>
                    <th className="text-center py-6 px-8 font-bold text-lg text-gray-900 subtitle">Dating Apps</th>
                  </tr>
                </thead>
                
                {/* Body */}
                <tbody className="divide-y divide-gray-100">
                  {/* Time Cost */}
                  <tr className="hover:bg-gray-50/50 transition-colors">
                    <td className="py-6 px-8 font-semibold text-gray-900 body-text">Time Cost</td>
                    <td className="py-6 px-8 text-center">
                      <div className="inline-flex items-center justify-center bg-green-50 text-green-700 px-4 py-2 rounded-full font-medium body-text">
                        40 Min (form + consultation)
                      </div>
                    </td>
                    <td className="py-6 px-8 text-center">
                      <div className="inline-flex items-center justify-center bg-red-50 text-red-700 px-4 py-2 rounded-full font-medium body-text">
                        40+ Hours swiping/month
                      </div>
                    </td>
                  </tr>
                  
                  {/* Users Mindset */}
                  <tr className="hover:bg-gray-50/50 transition-colors">
                    <td className="py-6 px-8 font-semibold text-gray-900 body-text">Users Mindset</td>
                    <td className="py-6 px-8 text-center">
                      <div className="inline-flex items-center justify-center bg-green-50 text-green-700 px-4 py-2 rounded-full font-medium body-text">
                        Relationship Ready
                      </div>
                    </td>
                    <td className="py-6 px-8 text-center">
                      <div className="inline-flex items-center justify-center bg-red-50 text-red-700 px-4 py-2 rounded-full font-medium body-text">
                        Fickle - Nearly 50% want "something casual"
                      </div>
                    </td>
                  </tr>
                  
                  {/* Member Safety */}
                  <tr className="hover:bg-gray-50/50 transition-colors">
                    <td className="py-6 px-8 font-semibold text-gray-900 body-text">Member Safety</td>
                    <td className="py-6 px-8 text-center">
                      <div className="inline-flex items-center justify-center bg-green-50 text-green-700 px-4 py-2 rounded-full font-medium body-text">
                        100% - Video screenings & ID verification
                      </div>
                    </td>
                    <td className="py-6 px-8 text-center">
                      <div className="bg-red-50 text-red-700 px-4 py-3 rounded-lg font-medium body-text">
                        <div className="font-semibold mb-1">0% - Anyone with a smartphone can join</div>
                        <div className="text-xs leading-relaxed">
                          56% of women receive unsolicited explicit content<br />
                          11% receive threats of physical harm<br />
                          52% encounter scammers
                        </div>
                      </div>
                    </td>
                  </tr>
                  
                  {/* Confidential Profile */}
                  <tr className="hover:bg-gray-50/50 transition-colors">
                    <td className="py-6 px-8 font-semibold text-gray-900 body-text">Confidential Profile</td>
                    <td className="py-6 px-8 text-center">
                      <div className="inline-flex items-center justify-center bg-green-50 text-green-700 px-4 py-2 rounded-full font-medium body-text">
                        Yes
                      </div>
                    </td>
                    <td className="py-6 px-8 text-center">
                      <div className="inline-flex items-center justify-center bg-red-50 text-red-700 px-4 py-2 rounded-full font-medium body-text">
                        No
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            {/* Footnote */}
            <div className="bg-gray-50 px-8 py-4 border-t border-gray-100">
              <p className="text-sm text-gray-600 body-text italic">
                *Dating app success rate in the US based on PEW Research Center, 2023.
              </p>
            </div>
          </div>
          
          {/* Call to Action after table */}
          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold mb-4 subtitle text-gray-900">Ready to Experience the Difference?</h3>
            <a 
              href={EXTERNAL_LINKS.applicationForm} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button className="bg-primary hover:bg-primary/90 text-white px-12 py-4 text-xl font-semibold">
                Begin Your Journey
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-50 text-center">
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