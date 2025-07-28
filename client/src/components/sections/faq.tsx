import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "How does The Date Alchemy differ from dating apps?",
    answer: "Unlike dating apps, we provide a fully curated, human-centered experience. Our matchmakers personally interview every member, use science-based compatibility assessments, and provide ongoing support throughout your dating journey. No endless swiping, no ghosting, no confusion."
  },
  {
    question: "What is your screening process?",
    answer: "Every applicant undergoes a thorough screening process including application review, video consultation, and compatibility assessments. We verify professional status and ensure all members are serious about finding meaningful relationships."
  },
  {
    question: "How many introductions can I expect?",
    answer: "We guarantee at least 4 high-quality introductions within 12 months. However, many members receive more based on their flexibility and the matches available in our network. Quality over quantity is always our priority."
  },
  {
    question: "Is my privacy protected?",
    answer: "Absolutely. Your information is never shared without explicit consent. We maintain the highest standards of confidentiality and discretion throughout the entire process. Your privacy is our priority."
  },
  {
    question: "What happens if I don't find a match?",
    answer: "We guarantee at least 4 high-quality introductions within 12 months. If we can't deliver on this promise, we'll extend your membership at no extra cost. We're committed to your success."
  },
  {
    question: "Can I pause or cancel my membership?",
    answer: "Yes, life happens and we understand. You can pause your membership at any time without penalties. If you need to cancel, we'll work with you to find the best solution based on your circumstances."
  }
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm">
              <button 
                className="w-full p-6 text-left font-semibold text-lg flex justify-between items-center hover:bg-gray-50 transition-colors"
                onClick={() => toggleItem(index)}
              >
                {faq.question}
                {openItems.includes(index) ? (
                  <ChevronUp className="text-primary w-5 h-5" />
                ) : (
                  <ChevronDown className="text-primary w-5 h-5" />
                )}
              </button>
              {openItems.includes(index) && (
                <div className="px-6 pb-6">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
