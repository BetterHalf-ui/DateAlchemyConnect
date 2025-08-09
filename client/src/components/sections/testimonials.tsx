import { useI18n } from '@/lib/i18n';

const testimonialKeys = [
  {
    rating: "★★★★★",
    textKey: "home.testimonials.testimonial1",
    authorKey: "home.testimonials.author1"
  },
  {
    rating: "★★★★★",
    textKey: "home.testimonials.testimonial2",
    authorKey: "home.testimonials.author2"
  },
  {
    rating: "★★★★★",
    textKey: "home.testimonials.testimonial3", 
    authorKey: "home.testimonials.author3"
  },
  {
    rating: "★★★★★",
    textKey: "home.testimonials.testimonial4",
    authorKey: "home.testimonials.author4"
  },
];

export default function Testimonials() {
  const { t } = useI18n();
  
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">{t('home.testimonials.title')}</h2>
        <p className="text-center text-gray-600 mb-16 italic">
          {t('home.testimonials.subtitle')}
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonialKeys.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-xl hover-lift">
              <div className="text-primary mb-4 text-xl">{testimonial.rating}</div>
              <p className="text-gray-700 mb-6 italic text-lg">{t(testimonial.textKey)}</p>
              <div className="font-semibold">{t(testimonial.authorKey)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
