const testimonials = [
  {
    rating: "★★★★★",
    text: "Thanks to The Date Alchemy, I found love. The team has always been there providing discreet support and expertly advising without ever becoming too intrusive. Thank you for your professionalism and, above all, thank you for being there.",
    author: "Veterinarian, 30"
  },
  {
    rating: "★★★★★",
    text: "The Date Alchemy is by far the best matchmaking agency in Mauritius. The team is very dedicated and committed to ensuring a smooth and seamless experience for members.",
    author: "AI Consultant, 41"
  },
  {
    rating: "★★★★★",
    text: "In addition to detailed profiles, The Date Alchemy also offer personality assessments, allowing users to gain deeper self-awareness and grow individually before meeting a potential partner.",
    author: "IT Professional, 32"
  },
  {
    rating: "★★★★★",
    text: "The communication with the team is open, consistent, and collaborative, be it on Whatsapp and newsletters shared by mail. Feedback is encouraged after each date, which helps foster a supportive environment.",
    author: "Scientist, 37"
  },

];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">What Our Members Say</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-xl hover-lift">
              <div className="text-primary mb-4 text-xl">{testimonial.rating}</div>
              <p className="text-gray-700 mb-6 italic text-lg">"{testimonial.text}"</p>
              <div className="font-semibold">— {testimonial.author}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
