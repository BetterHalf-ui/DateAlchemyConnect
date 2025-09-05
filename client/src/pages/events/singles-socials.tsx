import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, MapPin, Users, Heart, Coffee, Utensils } from 'lucide-react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import RebrandBanner from '@/components/layout/rebrand-banner';

export default function SinglesSocials() {
  const events = [
    {
      id: 1,
      title: "Singles Socials #6 - Dinner Experience",
      date: "September 6",
      time: "6:30 pm - 9:30 pm",
      price: "Rs1000",
      type: "Dinner"
    },
    {
      id: 2,
      title: "Singles Socials #7 - Brunch Edition!",
      date: "October 4",
      time: "11:30 am - 1:30 pm",
      price: "Rs1000",
      type: "Brunch"
    },
    {
      id: 3,
      title: "Singles Socials #8 - Dinner Experience",
      date: "November 8",
      time: "6:30 pm - 8:30 pm",
      price: "Rs1000",
      type: "Dinner"
    },
    {
      id: 4,
      title: "Singles Socials #9 - Brunch Edition!",
      date: "December 6",
      time: "11:30 am - 1:30 pm",
      price: "Rs1000",
      type: "Brunch"
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
              Singles Socials
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Ready to add more fun, friendship and connection to your life? Get invited to an intimate 
              dinner or brunch with singles carefully selected to match your vibe.
            </p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold shadow-lg"
              onClick={() => window.open('https://betterhalf.fillout.com/t/aovhVckkYLus', '_blank')}
            >
              Sign Up Now
            </Button>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">What to Expect?</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            An intimate brunch or dinner at one of Mauritius' best rated restaurants — where you'll join a 
            handpicked group of 6 to 8 like-minded singles, matched by vibe and age. With an equal number of 
            men and women, it's the perfect relaxed setting to share stories, exchange ideas, and connect over 
            great conversation, delicious food and ice-breakers.
          </p>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
            How Does it Work?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Apply by filling out the form</h3>
              <p className="text-gray-600 leading-relaxed">
                Tell us a bit about yourself by filling out our form. We'll gather insights into your interests, 
                lifestyle and more. The more we know, the better we can connect you with the right people.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">We curate tables for interesting conversations</h3>
              <p className="text-gray-600 leading-relaxed">
                Say goodbye to awkward encounters and hello to stimulating conversations with like-minded individuals. 
                We select guests within your age group and at a similar stage in their lives and ensure a balanced mix of men and women.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Receive an invitation when we have the right table for you</h3>
              <p className="text-gray-600 leading-relaxed">
                Once we have the right table for you, you'll receive a personalized invitation with more details. 
                Secure your spot by purchasing your Singles Socials Ticket — and get ready for an unforgettable experience!
              </p>
            </div>
          </div>
          
          <div className="mt-16 p-8 bg-white rounded-lg shadow-sm border">
            <p className="text-gray-600 text-center leading-relaxed">
              <strong>We care to get the vibe right and hence do not rush into a table.</strong> We only get in touch with you 
              when we have the right set of dinner mates for you. If not for this event, you'll be considered for the next one 
              unless you ask us to opt you out.
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
            Why Attend?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Meet New People</h3>
              <p className="text-gray-600 leading-relaxed">
                Break the ice and connect with singles in your age group handpicked for their similar 
                lifestyle and shared interests.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Have a Good Time</h3>
              <p className="text-gray-600 leading-relaxed">
                Enjoy a relaxed moment of laughter, good food, and great company in an environment where 
                there's no pressure and it's about having fun and making new connections.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Coffee className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Experience Genuine Connection</h3>
              <p className="text-gray-600 leading-relaxed">
                From the moment you sit down, you'll feel the warmth of genuine conversations in a welcoming 
                and intimate setting, and the joy of building new friendships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Next Events - Calendar Style */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
            Our Next Events
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {events.map((event) => (
              <Card key={event.id} className="hover-lift border-2 hover:border-primary transition-all duration-300">
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
                        {event.date.split(' ')[1]}
                      </div>
                      <div className="text-sm text-gray-500 uppercase tracking-wide">
                        {event.date.split(' ')[0]}
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
                        Central Mauritius
                      </div>
                    </div>
                    
                    <div className="text-2xl font-bold text-primary mb-4">
                      {event.price}
                    </div>
                    
                    <p className="text-xs text-gray-500">
                      (Ticket price - food & drinks separate)
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
            🍷 Ticket: 1000 Rs <span className="text-lg font-normal text-gray-600">(inclusive of VAT)</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            (This price does not include food or drinks. You pay to the restaurant directly for what you order)
          </p>
          
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold mb-8"
            onClick={() => window.open('https://betterhalf.fillout.com/t/aovhVckkYLus', '_blank')}
          >
            Sign Up Now
          </Button>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <p className="text-gray-600 leading-relaxed">
              Your application will be considered for the upcoming event. Should we be unable to include you, 
              you will be automatically considered for future Singles Socials.
            </p>
            <p className="text-gray-600 mt-4 font-semibold">
              We send invitations 4 to 2 weeks before the event, so make sure to apply early.
            </p>
            <p className="text-gray-500 text-sm mt-4">
              Please be aware that if you do not receive an invitation from us, it means we felt we did not 
              have the right table for you.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">FAQ</h2>
          
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