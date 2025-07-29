import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "What happens after I sign up?",
    answer: "After you sign up, you'll receive a comprehensive questionnaire to help us understand your background, values, and what you're seeking in a partner. Within one business day, we'll review your submission and let you know if we have potential matches in our member base. We'll then schedule a private consultation to craft your profile and begin the matching process."
  },
  {
    question: "Can I choose who I am matched with?",
    answer: "Yes, you remain in complete control. We share potential matches with you for review, and introductions only happen with mutual interest from both parties. You can always say no to any introduction, and we'll continue working to find someone who's the right fit for you."
  },
  {
    question: "Do you serve clients who live abroad?",
    answer: "Yes, we work with global professionals who are based in or frequently travel to Mauritius and Singapore. Our network spans across both locations, making it ideal for international professionals seeking meaningful connections in either market."
  },
  {
    question: "How do you ensure privacy and discretion?",
    answer: "Privacy is our top priority. Your information is always kept confidential and never shared without your explicit consent. Every introduction is handled with the utmost care and respect for your privacy. We maintain strict confidentiality protocols and only share profiles with pre-approved potential matches."
  },
  {
    question: "What if I don't find someone I connect with?",
    answer: "We're committed to your success. Our process includes continuous feedback and refinement to improve matches over time. We also provide coaching and support throughout your journey. If you're not finding the connections you're looking for, we'll work together to adjust our approach and explore what might be missing."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-earthy py-32">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl serif-title mb-8 text-gray-900">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-accordion bg-white rounded-xl overflow-hidden luxury-hover">
              <button
                onClick={() => toggleFAQ(index)}
                className="faq-question w-full px-8 py-6 text-left flex items-center justify-between"
              >
                <h3 className="text-xl serif-title font-medium text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <ChevronDown 
                  className={`w-6 h-6 text-gray-500 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div className={`faq-answer px-8 pb-6 ${openIndex === index ? 'open' : ''}`}>
                <p className="sans-body text-gray-700 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg sans-body text-gray-600 mb-4">
            Have more questions? Reach out to us directly.
          </p>
          <a 
            href="mailto:hello@thedatealchemy.com" 
            className="text-primary hover:text-primary/80 serif-title font-medium"
          >
            Contact Us →
          </a>
        </div>
      </div>
    </section>
  );
}