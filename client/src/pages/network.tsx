import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export default function Network() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-20 bg-white min-h-screen pt-32">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-6">The Date Alchemy Network</h1>
            <p className="text-2xl text-gray-700 mb-8">
              Where real relationships begin — when the timing (and person) is right.
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Not quite ready to invest in our membership — but open to love if the right person comes along and ready to wait? You're in the right place.
            </p>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-xl mb-12">
            <h2 className="text-3xl font-bold text-center mb-8">Complimentary. Confidential. Carefully considered.</h2>
            <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
              The Date Alchemy Network is for singles who are emotionally ready for a relationship — but not yet ready to join as a full client. It's free to join, and completely discreet. Once you're in the pool, we'll reach out only if we spot a strong mutual match with an active member.
            </p>
            <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mt-4 italic">
              Think of it as being on the sidelines — close enough to the action, but not quite on the field.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6">
              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-xl font-bold mb-3">Fill in your private profile</h3>
              <p className="text-gray-600">Tell us who you are, what matters to you, and what you're looking for.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🏊</div>
              <h3 className="text-xl font-bold mb-3">You're added to our curated singles pool</h3>
              <p className="text-gray-600">We regularly review this pool for our members.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="text-4xl mb-4">💌</div>
              <h3 className="text-xl font-bold mb-3">You'll hear from us if we spot a strong match</h3>
              <p className="text-gray-600">We'll only reach out if we believe there's real potential on both sides.</p>
            </div>
          </div>
          
          <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-xl mb-12">
            <h3 className="font-bold mb-3">Please note:</h3>
            <p className="text-gray-700 mb-3">
              The Date Alchemy prioritizes matches between active members. That means we're not searching on your behalf — and you may not hear from us for a while. Some matches happen quickly. Others take months.
            </p>
          </div>
          
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6">Want to join the network?</h3>
            <p className="text-lg text-gray-700 mb-8">
              Fill in your profile below — and we'll be in touch if the right person comes along.
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold mb-4">
              Create Your Profile
            </Button>
            <p className="text-gray-600">
              Ready to be proactive instead?{" "}
              <Link href="/">
                <a className="text-primary hover:underline">Learn more about membership</a>
              </Link>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
