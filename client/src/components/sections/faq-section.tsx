import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useI18n } from '@/lib/i18n';

const faqs = [
  {
    question: "faq.q7",
    answer: "faq.a7"
  },
  {
    question: "faq.q8",
    answer: "faq.a8"
  },
  {
    question: "faq.q9",
    answer: "faq.a9"
  },
  {
    question: "faq.q10",
    answer: "faq.a10"
  }
];

export default function FAQSection() {
  const { t } = useI18n();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-earthy py-32">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl serif-title mb-8 text-gray-900">
            {t('faq.title')}
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
                  {t(faq.question)}
                </h3>
                <ChevronDown 
                  className={`w-6 h-6 text-gray-500 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div className={`faq-answer px-8 pb-6 ${openIndex === index ? 'open' : ''}`}>
                <p className="sans-body text-gray-700 leading-relaxed">
                  {t(faq.answer)}
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