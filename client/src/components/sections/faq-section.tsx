import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "Do you cater to applicants who are divorced or single parents?",
    answer: "Absolutely! We welcome individuals who are divorced or single parents, as long as the separation is legally documented and amicable. If you're ready to begin the next chapter of your life, we're here to assist you. We're upfront about your past with potential matches, so it's not a topic that needs to be discussed during your date."
  },

  {
    question: "How long is my membership valid?",
    answer: "A membership is valid for a period of one year or until you find your partner with The Date Alchemy; whichever comes first. It cannot be transferred."
  },
  {
    question: "Can you guarantee success?",
    answer: "Given the nature of dating business, it is virtually impossible to guarantee success. As such, we maintain a \"no refunds\" policy. However, your satisfaction as a client and your recommendation of our service to others is our primary goal, so be rest assured that we will do our best to find you your better half."
  },
  {
    question: "What is the company behind The Date Alchemy?",
    answer: "The Date Alchemy is a service offered by the registered Mauritian entity Frolic Ltd (C23201149), also owner of the lifestyle platform Frolic.mu."
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