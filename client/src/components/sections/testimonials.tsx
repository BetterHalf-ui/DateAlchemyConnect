const testimonials = [
  {
    rating: "★★★★★",
    text: "Finally, a dating service that actually understands what I'm looking for. The personal touch and quality of matches is unmatched.",
    author: "Anonymous Member"
  },
  {
    rating: "★★★★★",
    text: "I was skeptical about matchmaking services, but The Date Alchemy changed my perspective completely. Professional, discreet, and effective.",
    author: "Anonymous Member"
  },
  {
    rating: "★★★★★",
    text: "The level of support and guidance throughout the process was incredible. I felt confident and prepared for every date.",
    author: "Anonymous Member"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">What Our Members Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
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
