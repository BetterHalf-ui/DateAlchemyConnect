const journeySteps = [
  {
    number: "1",
    title: "Apply for Membership",
    description: "You'll begin by completing our initial application: a questionnaire that helps us understand your background, values, and what you're truly seeking in a partner. Within one business day, we'll review your submission to let you know if we have a potential match within our member base and share an in-depth assessment to better understand your needs in a relationship, attachment style and dating tendencies."
  },
  {
    number: "2",
    title: "Private Consultation",
    description: "Next, you'll meet with your personal matchmaker in a one-on-one video consultation. This conversation is designed to have a more in-depth understanding of who you are and what you are looking for. Following this, we craft a profile summary — which you'll review and approve — to be shared selectively only with potential matches who meet your criteria."
  },
  {
    number: "3",
    title: "Curated Introduction",
    description: "Once a mutually aligned connection is identified, we share both profiles for review. If there's mutual interest, we invite you to activate your annual membership so we can proceed with arranging your first date. We handle all the coordination with care and discretion, ensuring you meet someone genuinely aligned with your aspirations — in the right place, at the right time."
  },
  {
    number: "4",
    title: "Refinement & Follow-up",
    description: "After the introduction, the path is yours — whether it's a second date, exchanging contact details, or choosing to explore a new introduction. We always seek your feedback after each date to fine-tune our matching approach and ensure your experience evolves meaningfully."
  }
];

export default function Journey() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Start Your Journey</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {journeySteps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-bold mb-4">{step.title}</h3>
              <p className="text-gray-700">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
