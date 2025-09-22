import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, MapPin, Users, Heart, Coffee, Utensils } from 'lucide-react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import RebrandBanner from '@/components/layout/rebrand-banner';
import { useI18n } from '@/lib/i18n';

type Event = {
  id: string;
  title: string;
  date: string;
  time: string;
  price: string;
  type: string;
  description?: string;
  location: string;
  maxGuests: string;
  published: boolean;
  createdAt: string;
  updatedAt: string;
};

export default function SinglesSocials() {
  const { t } = useI18n();

  // Hardcoded events for October, November, December
  const events: Event[] = [
    {
      id: "oct-2024",
      title: "Singles Socials #7 - Brunch Edition!",
      date: "October 4",
      time: "11:30 am - 1:30 pm",
      price: "Rs1000",
      type: "Brunch",
      description: "A relaxed brunch experience with like-minded singles.",
      location: "Central Mauritius",
      maxGuests: "6-8",
      published: true,
      createdAt: "2024-10-01",
      updatedAt: "2024-10-01"
    },
    {
      id: "nov-2024",
      title: "Singles Socials #8 - Dinner Experience",
      date: "November 8",
      time: "6:30 pm - 8:30 pm",
      price: "Rs1000",
      type: "Dinner", 
      description: "Another wonderful dinner experience for connections.",
      location: "Central Mauritius",
      maxGuests: "6-8",
      published: true,
      createdAt: "2024-11-01",
      updatedAt: "2024-11-01"
    },
    {
      id: "dec-2024",
      title: "Singles Socials #9 - Brunch Edition!",
      date: "December 6",
      time: "11:30 am - 1:30 pm",
      price: "Rs1000",
      type: "Brunch",
      description: "End the year with a fantastic brunch experience.",
      location: "Central Mauritius", 
      maxGuests: "6-8",
      published: true,
      createdAt: "2024-12-01",
      updatedAt: "2024-12-01"
    }
  ];

  const testimonials = [
    {
      text: "We had a great night. That was a first experience meeting royal strangers for the first time, I will definitely recommend to friends.",
      author: "Anonymous",
      gender: "Male",
      age: 35
    },
    {
      text: "It was a nice evening out with other singles having somehow some of the same interests as myself. I'd like to thank your team for all the effort you've put in. I enjoyed the ambiance at the restaurant. This is a superb idea to bring busy single people together to have a chance at finding their betterhalf.",
      author: "Anonymous",
      gender: "Female",
      age: 36
    },
    {
      text: "I would definitely recommend Single Socials. We all agreed that it felt a bit awkward at first to meet over dinner without knowing much about one another, but overall it turned out to be a really pleasant experience. The venue was great and the food was very good.",
      author: "Anonymous",
      gender: "Male",
      age: 41
    },
    {
      text: "It went wonderfully well and I would recommend Singles Socials to a friend. I certainly bonded with everyone and would love to connect as friends.",
      author: "Anonymous",
      gender: "Female",
      age: 42
    }
  ];

  const faqs = [
    {
      question: "Why choose Singles Socials?",
      answer: "Singles tell us that they're increasingly frustrated with online dating apps, due to safety concerns, catfishing, fake profiles, ghosting and inappropriate behavior. If you feel this way too, you're not alone. Many are seeking better ways to meet quality singles, in real life. Singles Socials is the answer for those wanting a more authentic way to meet others in a safe, relaxed, fun group setting, surrounded by genuine individuals who value socialising and making meaningful connections in person."
    },
    {
      question: "How are the guests seated at the table?",
      answer: "Guests are seated in small groups of 6 to 8, carefully curated to ensure a mix of like-minded men and women. We use our questionnaire responses to match guests with compatible dining companions."
    },
    {
      question: "Is there a dress code for the event?",
      answer: "While there is no strict dress code, we recommend smart casual attire. Feel free to dress comfortably yet stylishly for the occasion."
    },
    {
      question: "Can I bring a friend to the event?",
      answer: "We encourage attendees to come solo to maximize the opportunity for everyone to meet new people and foster connections. However, if you'd like to bring a friend who is like-minded and in the same age group as you, drop us an email at hello@thedatealchemy.com and we'll try to accommodate."
    },
    {
      question: "I have purchased the ticket but I am not able to go",
      answer: "Tickets are non-refundable but don't worry, you can still use it for another event if you cancel 1 week before."
    },
    {
      question: "How is the restaurant selected?",
      answer: "Restaurants are selected for stylish ambiance, fabulous food and drinks. We select restaurants in the center of Mauritius for maximum convenience to all the guests."
    },
    {
      question: "Are there always 6 to 8 guests at the table?",
      answer: "We focus on creating tables of 6 to 8, with equal number of men and women. Occasionally, however, it may be 4 or 6 guests, depending on availability, mix of members and attendance on a particular night (despite our best efforts, some cancellations happen due to illness or emergencies)."
    },
    {
      question: "How and when will I know if I'm confirmed for a dinner or brunch?",
      answer: "Once our final guest list is ready, our Events Team will send a confirmation email and a Whatsapp text message to let you know you're on the guest list and for you to make the payment. This will happen at least 2 to 4 weeks before the event date."
    },
    {
      question: "How do I locate our table at the restaurant?",
      answer: "We will let you know the surname that the booking is made under. Please arrive on time, ready for a fun night out!"
    },
    {
      question: "How is the dinner or brunch paid for?",
      answer: "As with any dinner or brunch with friends you can agree at the end to either split the bill 6 ways, or pay individually (if people have ordered different drinks or dishes). It's up to you!"
    },
    {
      question: "How do I request another member's phone number after an event?",
      answer: "After each event, our Events Team will email you, seeking feedback. In this email you can request member phone numbers. We ask that members don't swap numbers in front of others at the table, out of respect. Our phone number swapping service removes any awkwardness and ensures mutual interest."
    },
    {
      question: "How can I contact the event organizers if I have further questions?",
      answer: "For any additional questions or inquiries, please feel free to reach out to us via email at hello@thedatealchemy.com. We're here to help!"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <RebrandBanner />
      <Header />
      {/* Hero Section */}
      <section 
        className="relative h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/singles-socials-hero.png)' }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 flex items-center justify-center h-full px-4">
          <div className="text-center text-white max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-lg">
              {t('singles.hero.title')}
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              {t('singles.hero.subtitle')}
            </p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold shadow-lg"
              onClick={() => window.open('https://betterhalf.fillout.com/t/aovhVckkYLus', '_blank')}
              data-testid="button-signup-hero"
            >
              {t('singles.hero.cta')}
            </Button>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{t('singles.expect.title')}</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t('singles.expect.description')}
          </p>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
            {t('singles.howItWorks.title')}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('singles.howItWorks.step1.title')}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t('singles.howItWorks.step1.description')}
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('singles.howItWorks.step2.title')}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t('singles.howItWorks.step2.description')}
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('singles.howItWorks.step3.title')}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t('singles.howItWorks.step3.description')}
              </p>
            </div>
          </div>
          
          <div className="mt-16 p-8 bg-white rounded-lg shadow-sm border">
            <p className="text-gray-600 text-center leading-relaxed">
              {t('singles.howItWorks.note')}
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-gray-500" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.author}</p>
                      <p className="text-sm text-gray-500">{testimonial.gender}, {testimonial.age}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Attend Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
            {t('singles.whyAttend.title')}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('singles.whyAttend.meetPeople.title')}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t('singles.whyAttend.meetPeople.description')}
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('singles.whyAttend.goodTime.title')}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t('singles.whyAttend.goodTime.description')}
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Coffee className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('singles.whyAttend.connection.title')}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t('singles.whyAttend.connection.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Next Events - Calendar Style */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
            {t('singles.events.title')}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <Card key={event.id} className="hover-lift border-2 hover:border-primary transition-all duration-300" data-testid={`card-event-${event.id}`}>
                <CardContent className="p-6">
                  <div className="text-center">
                    <Badge 
                      variant={event.type === 'Dinner' ? 'default' : 'secondary'} 
                      className="mb-4"
                    >
                      {event.type === 'Dinner' ? <Utensils className="w-4 h-4 mr-1" /> : <Coffee className="w-4 h-4 mr-1" />}
                      {event.type}
                    </Badge>
                    
                    <div className="mb-4">
                      <div className="text-3xl font-bold text-primary mb-1">
                        {event.date.split(' ')[1] || event.date}
                      </div>
                      <div className="text-sm text-gray-500 uppercase tracking-wide">
                        {event.date.split(' ')[0] || 'Event'}
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
                      {event.title}
                    </h3>
                    
                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <div className="flex items-center justify-center gap-2">
                        <Clock className="w-4 h-4" />
                        {event.time}
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {event.location}
                      </div>
                    </div>
                    
                    <div className="text-2xl font-bold text-primary mb-4">
                      {event.price}
                    </div>
                    
                    {event.description && (
                      <p className="text-xs text-gray-600 mb-2">
                        {event.description}
                      </p>
                    )}
                    
                    <p className="text-xs text-gray-500">
                      {t('singles.events.ticketNote')}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            {t('singles.pricing.title')} <span className="text-lg font-normal text-gray-600">{t('singles.pricing.vatNote')}</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            {t('singles.pricing.description')}
          </p>
          
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold mb-8"
            onClick={() => window.open('https://betterhalf.fillout.com/t/aovhVckkYLus', '_blank')}
            data-testid="button-signup-pricing"
          >
            {t('singles.hero.cta')}
          </Button>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <p className="text-gray-600 leading-relaxed">
              {t('singles.pricing.application')}
            </p>
            <p className="text-gray-600 mt-4 font-semibold">
              {t('singles.pricing.timing')}
            </p>
            <p className="text-gray-500 text-sm mt-4">
              {t('singles.pricing.disclaimer')}
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">{t('singles.faq.title')}</h2>
          
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}