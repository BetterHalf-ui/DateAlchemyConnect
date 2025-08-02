import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { EXTERNAL_LINKS } from "@/lib/constants";

const trustStats = [
  { percentage: "99%", description: "of setups result in real, face-to-face dates" },
  { percentage: "88%", description: "of dates are reported as good experiences" },
  { percentage: "32%", description: "lead to a second date" },
  { percentage: "22%", description: "of our paid members are going strong" }
];

const guarantees = [
  {
    title: "First Quality Date Guaranteed Before Payment",
    description: "Your initial consultation and matchmaking search are completely free. We'll only ask for payment once you say yes to a match and we've planned the first date."
  },
  {
    title: "4 High-Quality Introductions",
    description: "We guarantee at least 4 high-quality introductions within 12 months — or we'll extend your membership at no extra cost. The 12-month period pauses when you start dating someone seriously."
  },
  {
    title: "Flexible Membership",
    description: "Life happens. If you need to take a break for any reason, we'll pause your membership—no lost time, no penalties."
  },
  {
    title: "No Hidden Fees",
    description: "Transparent pricing. No hidden costs, ever."
  }
];

export default function Pricing() {
  return (
    <>
      {/* Trust Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-16">Trust Us - It Really Works</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustStats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold text-primary mb-2">{stat.percentage}</div>
                <p className="text-gray-700">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Our Guarantees</h2>
          <div className="space-y-8">
            {guarantees.map((guarantee, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-primary">{guarantee.title}</h3>
                <p className="text-gray-700">{guarantee.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-32 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-5xl font-bold mb-8 subtitle text-gray-900">Membership price:</h2>
          <div className="text-7xl font-bold text-primary mb-4">Rs8000</div>
          <p className="text-2xl mb-2 body-text text-gray-700">For 1 year, VAT included</p>
          <p className="text-gray-500 mb-12 text-lg body-text">…  less than 1 night staycation in Mauritius</p>
          
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-12 rounded-2xl mb-12 premium-shadow">
            <p className="text-xl mb-6 body-text text-gray-800">
              Someone really special could be joining today. And the most sought-after singles tend to not stay single for long. Are you in the pool — or on the sidelines?
            </p>
            <p className="text-primary font-bold text-xl body-text">Prices are going up! So apply now! </p>
          </div>
          
          <a 
            href={EXTERNAL_LINKS.applicationForm} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button className="bg-primary hover:bg-primary/90 text-white px-12 py-6 text-xl font-semibold mb-8 rounded-full">
              Apply Now
            </Button>
          </a>
          
          <p className="text-gray-500 text-base body-text">
            Not ready to invest in a membership?{" "}
            <Link href="/network">
              <span className="text-primary hover:underline cursor-pointer">
                Join our network for free to see if you are a match with one of our exceptional clients.
              </span>
            </Link>
            <br />
            <Link href="/network">
              <span className="text-primary hover:underline cursor-pointer">Create your complimentary profile. </span>
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
