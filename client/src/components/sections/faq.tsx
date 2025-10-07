import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "How much do you charge for this service?",
    answer: "For our efforts, we charge you a one time fee of Rs 8000, VAT included, when we have found you your first match."
  },
  {
    question: "How many people can I meet during my membership?",
    answer: "While you may take 5 dates as a high level benchmark, we don't commit to introducing our clients to a specific number of matches. Our focus is on quality over quantity. We believe it's more valuable for you to meet a few exceptional matches than to be inundated with unsuitable ones. The number of dates you go on depends on various factors, including your own eligibility, the flexibility of your search criteria, and the feedback we receive about you. Our goal is to ensure each introduction has genuine potential."
  },
  {
    question: "How do I make the payment?",
    answer: "Presently we only accept payment via Juice/Bank Transfer for both clients within and outside mauritius."
  },
  {
    question: "Can I apply for my sibling, child, or best friend?",
    answer: "If you genuinely care about someone close to you, please share their details, and we'll reach out to them promptly. However, the individual will need to complete the questionnaires and interviews independently, without being accompanied by friends or family. We require personal inclination, 100% honesty, and commitment for our matchmaking process to be effective."
  },
  {
    question: "How much do the dates know about each other beforehand?",
    answer: "Confidentiality and discretion are fundamental to our service. We do not share last names before the date, and we share photographs and phone numbers only if you have explicitly agreed. We provide both sides with a complete description into the match's lifestyle, career, interests, age, height, nationality, location, marrital status, long term plans, ideal partner, smoking habits and even diet."
  },
  {
    question: "What if my match is based in another country? How do you set us up?",
    answer: "We understand that flying across the world for someone you've never met isn't practical. We suggest international matches when we believe there's a strong potential for success, and we facilitate virtual introductions. Typically, this may involve someone intending to move to Mauritius or a Mauritian expat living abroad. A series of video calls can help determine if there's a connection and if it's worth considering a physical meeting."
  },
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
