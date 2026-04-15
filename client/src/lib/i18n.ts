import { createContext, useContext } from 'react';

export type Language = 'en' | 'fr';

export interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

export const I18nContext = createContext<I18nContextType | null>(null);

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
};

// Translation keys
export const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.howItWorks': 'How It Works',
    'nav.insights': 'Insights',
    'nav.applyNow': 'Join Now',
    'nav.network': 'Join the Network',
    'team.yourAlchemists': 'Your Alchemists',
    
    // Common
    'common.learnMore': 'Learn More',
    'common.getStarted': 'Get Started',
    'common.readMore': 'Read More',
    'common.loading': 'Loading...',
    
    // Home page
    'home.hero.title': 'Ultra-curated matchmaking for busy singles.',
    'home.hero.subtitle': 'Discreet, modern, and designed for Mauritius.',
    'home.hero.cta': 'Discover more',
    'home.hero.memberCount': 'Active Members',
    
    'home.help.title': 'How We Help',
    'home.help.curated.title': 'Curated Network',
    'home.help.curated.desc': 'Every member is personally vetted through video calls and background verification.',
    'home.help.personalized.title': 'Personalized Matching',
    'home.help.personalized.desc': 'We understand your values, lifestyle, and relationship goals to find compatible matches.',
    'home.help.discreet.title': 'Complete Discretion',
    'home.help.discreet.desc': 'Your privacy is paramount. We coordinate introductions with complete confidentiality.',
    
    // Testimonials section (English)
    'home.testimonials.title': 'What Our Members Say',
    'home.testimonials.subtitle': 'All testimonials are from real clients — feel free to ask us for a connection if you\'d like to verify their experience.',
    
    'home.testimonials.testimonial1': '"Thanks to The Date Alchemy, I found love. The team has always been there providing discreet support and expertly advising without ever becoming too intrusive. Thank you for your professionalism and, above all, thank you for being there."',
    'home.testimonials.author1': '— Veterinarian, 30',
    
    'home.testimonials.testimonial2': '"The Date Alchemy is by far the best matchmaking agency in Mauritius. The team is very dedicated and committed to ensuring a smooth and seamless experience for members."',
    'home.testimonials.author2': '— AI Consultant, 41',
    
    'home.testimonials.testimonial3': '"In addition to detailed profiles, The Date Alchemy also offer personality assessments, allowing users to gain deeper self-awareness and grow individually before meeting a potential partner."',
    'home.testimonials.author3': '— IT Professional, 32',
    
    'home.testimonials.testimonial4': '"The communication with the team is open, consistent, and collaborative, be it on Whatsapp and newsletters shared by mail. Feedback is encouraged after each date, which helps foster a supportive environment."',
    'home.testimonials.author4': '— Scientist, 37',
    
    'home.membership.title': 'The Date Alchemy Membership',
    'home.membership.subtitle': 'Everything you need for a healthier dating experience.',
    'home.membership.premiumTitle': '1. Premium Matchmaking',
    'home.membership.premiumSubtitle': 'Included in your membership:',
    
    'home.membership.feature1': '**Ultra-curated introductions** with carefully selected, met, and vetted singles who match your standards, all ready for an authentic relationship.',
    'home.membership.feature2': '**In-depth compatibility assessment** based on your requirements, values, lifestyle, goals, and relationship needs (The Date Alchemy Needs Compatibility Score™). We also use attachment theory science to avoid toxic incompatibilities from the start.',
    'home.membership.feature3': '**Human-centered matching**: We leverage on AI to analyze compatibility, but human intuition makes the final call. Each introduction is thoughtfully selected by real people who understand what you\'re looking for.',
    'home.membership.feature4': '**Detailed profiles**: You receive a comprehensive profile covering their career, interests, long-term goals, and what they\'re looking for in a partner. Photos are shared with mutual consent.',
    'home.membership.feature5': '**Dates organised for you**: we book, confirm and prepare the date based on your preferences - you just need to show up looking your best.',
    'home.membership.feature6': '**Post-date follow-up** handled for you — no ghosting, no awkward follow-ups.',
    'home.membership.bonus': '**Bonus**: invitations to private events (Singles Socials) — intimate brunches or dinners with hand-picked guests to foster real connections.',
    'home.membership.cta': 'Join Now',
    
    'home.membership.innerWorkTitle': '2. Inner Work and Guidance',
    'home.membership.innerWorkDescription': 'We set you up for successful dates and healthier relationships',
    'home.membership.innerWorkSubtitle': 'Included in your membership:',
    
    'home.membership.innerWork1Title': '1) Full relationship readiness self-audit:',
    'home.membership.innerWork1Feature1': '**Your needs assessment**: Get clear on what you truly need in a relationship — not just what you\'re attracted to.',
    'home.membership.innerWork1Feature2': '**Attachment style assessment**: Understand how your attachment style influences the way you connect, respond, and bond in relationships (based on attachment theory by psychologists John Bowlby and Mary Ainsworth)',
    'home.membership.innerWork1Feature3': '**Dating tendencies assessment**: Identify unconscious dating patterns that may be holding you back (based on relationship scientist Logan Ury\'s work)',
    
    'home.membership.innerWork2Title': '2) Personalized guidance to date intentionally and confidently',
    'home.membership.innerWork2Feature1': '**Direct access to our matchmaking team** (via Whatsapp & Email): A discreet communication channel to dating experts who know you and your dating journey.',
    'home.membership.innerWork2Feature2': '**Dating advice in your inbox— Exactly when you need it**: Digestible emails to prepare you before dates.',
    'home.membership.innerWork2Feature3': '**Reflection rituals after each date**: Dating is also a journey of self-discovery—an opportunity to uncover what truly matters to you along the way.',
    'home.membership.innerWork2Feature4': '**Bi-weekly science-based dating insights** in your inbox: Tips based on our matchmaking experience and backed by scientific journals.',
    
    'home.pricing.title': 'Investment in Your Future',
    'home.pricing.price': 'Rs 8,000',
    'home.pricing.period': '/year',
    'home.pricing.description': 'A one-time annual investment for unlimited introductions and personalized matchmaking.',
    'home.pricing.cta': 'Begin Your Journey',
    
    'home.journey.title': 'Start Your Journey',
    'home.journey.step1.title': 'Apply for Membership',
    'home.journey.step1.desc': 'You\'ll begin by completing our initial application: a questionnaire that helps us understand your background, values, and what you\'re truly seeking in a partner.',
    'home.journey.step2.title': 'Private Consultation',
    'home.journey.step2.desc': 'Next, you\'ll meet with your personal matchmaker in a one-on-one video consultation to craft your personalized profile.',
    'home.journey.step3.title': 'Curated Introduction',
    'home.journey.step3.desc': 'Once a mutually aligned connection is identified, we coordinate your first date with complete discretion and care.',
    'home.journey.step4.title': 'Refinement & Follow-up',
    'home.journey.step4.desc': 'After each introduction, we gather your feedback to continuously refine our approach and ensure meaningful connections.',
    
    'home.blog.title': 'Dating Insights & Tips',
    'home.blog.subtitle': 'Expert advice for intentional dating',
    
    'home.newsletter.title': 'The Smarter Way to Date — Straight to Your Inbox',
    'home.newsletter.subtitle': 'Join 1,000+ Smart Singles Getting Bi-Weekly Dating Tips',
    'home.newsletter.placeholder': 'Enter your email',
    'home.newsletter.cta': 'Subscribe',
    'home.newsletter.disclaimer': 'By subscribing, you agree to receive our newsletter. You can unsubscribe at any time.',
    
    // FAQ Section (English)
    'faq.title': 'Frequently Asked Questions',
    'faq.q1': 'How much do you charge for this service?',
    'faq.a1': 'For our efforts, we charge you a one-time fee of Rs 8,000 (inclusive of VAT) only when we have found you your first match.',
    'faq.q2': 'How many people can I expect to meet during my membership?',
    'faq.a2': 'While 5 dates is a general guide, we do not guarantee a specific number of introductions. We prioritize quality over quantity and believe it is better to meet fewer exceptional people than to be overwhelmed with unsuitable profiles. The number of dates will depend on several factors, including your own suitability, flexibility in your search criteria, and the feedback we receive.',
    'faq.q3': 'How do I make payment?',
    'faq.a3': 'We currently only accept payments via Juice or bank transfer for both local and international clients.',
    'faq.q4': 'Can I apply on behalf of a sibling, child, or close friend?',
    'faq.a4': 'If you genuinely want to help someone close to you, you can provide us with their contact details. We will reach out to them promptly. However, that person must complete the questionnaire and attend the interview alone, without accompaniment from friends or family. Our process requires personal commitment, complete honesty, and genuine motivation to be effective.',
    'faq.q5': 'What do the two people know about each other before the date?',
    'faq.a5': 'Confidentiality and discretion are at the heart of our service. We do not share last names, photos, or specific affiliations (such as employer or university) before the meeting. However, each person receives the first name, age, location, and a brief description explaining why we think there is compatibility.',
    'faq.q6': 'What happens if my match is in another country? How do you arrange the meeting?',
    'faq.a6': 'We know it\'s not always practical to travel the world to meet someone you don\'t know. We only offer international introductions when we believe in strong potential. In such cases, we facilitate virtual video introductions. This typically involves someone considering relocating to Mauritius or a Mauritian expatriate living abroad.',
    'faq.q7': 'Do you welcome divorced candidates or single parents?',
    'faq.a7': 'Absolutely! We welcome divorced individuals or single parents, provided the separation is legally recognized and amicable. If you\'re ready to write a new chapter, we\'re here to support you. We inform potential partners of your background so this topic doesn\'t need to be addressed during the date.',
    'faq.q8': 'How long is my membership valid?',
    'faq.a8': 'Your membership is valid for one year or until you find your partner through The Date Alchemy, whichever comes first. It is non-transferable.',
    'faq.q9': 'Can you guarantee success?',
    'faq.a9': 'In the dating realm, it\'s impossible to guarantee a certain outcome. This is why we apply a no-refund policy. However, your satisfaction and recommendation remain our absolute priority, and rest assured that we will do everything in our power to help you find your other half.',
    'faq.q10': 'What company is behind The Date Alchemy?',
    'faq.a10': 'The Date Alchemy is a service offered by the Mauritian company Frolic Ltd (C23201149), which also owns the lifestyle platform Frolic.mu.',
    'faq.contact.text': 'Have more questions? Reach out to us directly.',
    'faq.contact.cta': 'Contact Us →',
    
    // How it works page
    'howItWorks.hero.title': 'Real Connections Start Here',
    'howItWorks.hero.ctaTitle': 'Ready to Find Your Match?',
    'howItWorks.hero.ctaDescription': 'Take the first step towards meaningful connection with our proven matchmaking process.',
    'howItWorks.hero.ctaButton': 'Start Your Application',
    'howItWorks.hero.consultationText': 'Professional Consultation Session',
    
    'howItWorks.journey.title': 'Your Membership Journey',
    'howItWorks.journey.subtitle': 'A Proven Process for Real Connection',
    
    'howItWorks.step1.title': '01. Apply for Membership',
    'howItWorks.step1.description1': 'You\'ll begin by completing our initial application: a questionnaire that helps us understand your background, values, and what you\'re truly seeking in a partner.',
    'howItWorks.step1.description2': 'Within one business day, we\'ll review your submission to let you know if we have a potential match within our member base and schedule a video call with you.',
    
    'howItWorks.step2.title': '02. Private Consultation',
    'howItWorks.step2.description1': 'Next, you\'ll meet with your personal matchmaker in a one-on-one video consultation. This conversation is designed to have a more in-depth understanding of who you are and what you are looking for.',
    'howItWorks.step2.description2': 'Following this, we craft a profile summary — which you\'ll review and approve — to be shared selectively only with potential matches who meet your criteria.',
    'howItWorks.step2.description3': 'We also share an in-depth assessment to better understand your needs in a relationship, attachment style and dating tendencies.',
    
    'howItWorks.step3.title': '03. Curated Introduction',
    'howItWorks.step3.description1': 'After your onboarding fee (Rs 800) is paid, we kickstart your search and begin suggesting potential matches.',
    'howItWorks.step3.description2': 'Once a mutually aligned connection is identified, we share both profiles for review. If there\'s mutual interest, we invite you to activate your annual membership so we can proceed with arranging your first date.',
    'howItWorks.step3.description3': 'We handle all the coordination with care and discretion, ensuring you meet someone genuinely aligned with your aspirations — in the right place, at the right time.',
    
    'howItWorks.step4.title': '04. Follow-up & Refinements',
    'howItWorks.step4.description1': 'After the introduction, what happens next is up to you — whether that\'s a second date or exploring a new connection.',
    'howItWorks.step4.description2': 'Over the course of your one-year membership, we collect feedback after each date to fine-tune your experience and help you find the right match.',
    
    'howItWorks.comparison.title': 'The Date Alchemy vs. Dating Apps',
    'howItWorks.comparison.subtitle': 'See why intentional matching delivers better results',
    'howItWorks.comparison.timeRequired': 'Time Cost',
    'howItWorks.comparison.userMindset': 'Users Mindset',
    'howItWorks.comparison.memberSafety': 'Member Safety',
    'howItWorks.comparison.confidentialProfile': 'Confidential Profile',
    'howItWorks.comparison.dateAlchemyTime': '40 Min (form + consultation)',
    'howItWorks.comparison.datingAppsTime': '40+ Hours swiping/month',
    'howItWorks.comparison.dateAlchemyMindset': 'Relationship Ready',
    'howItWorks.comparison.datingAppsMindset': 'Fickle - Nearly 50% want "something casual"',
    'howItWorks.comparison.dateAlchemySafety': '100% - Video screenings & ID verification',
    'howItWorks.comparison.datingAppsSafety': '0% - Anyone with a smartphone can join',
    'howItWorks.comparison.dateAlchemyProfile': 'Yes',
    'howItWorks.comparison.datingAppsProfile': 'No',
    'howItWorks.comparison.disclaimer': '*Dating app success rate in the US based on PEW Research Center, 2023.',
    
    'howItWorks.finalCta.title': 'Ready to Experience the Difference?',
    'howItWorks.finalCta.subtitle': 'Start Your Journey',
    'howItWorks.finalCta.readyTitle': 'Ready to Get Started?',
    'howItWorks.finalCta.readyDescription': 'Experience the difference and take the first step towards meeting your better half.',
    'howItWorks.finalCta.readyButton': 'Join Now',
    'howItWorks.finalCta.notReadyTitle': 'Not ready to invest?',
    'howItWorks.finalCta.notReadyDescription': "Read our free report on the '11 Hidden Patterns' preventing smart singles in Mauritius from finding love.",
    
    // Footer
    'footer.tagline': 'Redefining the dating experience for global professionals in Mauritius.',
    'footer.quickLinks': 'Quick Links',
    'footer.legal': 'Legal',
    'footer.contact': 'Contact',
    'footer.privacyPolicy': 'Privacy Policy',
    'footer.termsOfUse': 'Terms of Use',
    'footer.parentCompany': 'The Date Alchemy is a service operated by Frolic Ltd, a company registered in the Republic of Mauritius (BRN: C23201149). All payments, contractual obligations, services, and liabilities are fulfilled by Frolic Ltd under The Date Alchemy brand.\n\n© The Date Alchemy by Frolic Ltd, Mauritius. All rights reserved.',
    
    // Network page
    'network.title': 'The Date Alchemy Network',
    'network.subtitle': 'Where real relationships begin — when the timing (and person) is right.',
    'network.description': 'Not quite ready to invest in our membership — but open to love if the right person comes along and ready to wait? You\'re in the right place.',
    'network.benefits.title': 'Confidential. Carefully considered.',
    'network.benefits.description': 'The Date Alchemy Network is for singles who are emotionally ready for a relationship — but not yet ready to join as a full client. Just like our full membership, your profile is completely confidential.',
    'network.benefits.poolDescription': 'Once you\'re in our singles pool, we\'ll only reach out if we spot a strong mutual match with an active member.',
    'network.benefits.analogy': 'Think of it as being on the sidelines — close enough to the action, but not quite on the field.',
    'network.step1.title': 'Fill in your private profile',
    'network.step1.desc': 'Tell us who you are, what matters to you, and what you\'re looking for.',
    'network.step2.title': 'You\'re added to our curated singles pool',
    'network.step2.desc': 'We regularly review this pool for our members.',
    'network.step3.title': 'You\'ll hear from us if we spot a strong match',
    'network.step3.desc': 'We\'ll only reach out if we believe there\'s real potential on both sides.',
    'network.note.title': 'Please note:',
    'network.note.description': 'We prioritize matches between clients. As a member of the Date Alchemy Network, we\'re not searching on your behalf — and you may not hear from us for a while.  When we reach out with a first match, an onboarding fee of Rs 800 will be required to finalize your profile, cover the initial consultation, verification and  insights, and help ensure your commitment to the process.',
    'network.cta.title': 'Want to join the network?',
    'network.cta.description': 'Fill in your profile below — and we\'ll be in touch if the right person comes along.',
    'network.cta.button': 'Create Your Profile',
    'network.cta.membership': 'Ready to be proactive instead?',
    'network.cta.membershipLink': 'Learn more about membership',
    
    // Blog page
    'blog.title': 'Dating Insights & Tips',
    'blog.subtitle': 'Expert advice, scientific insights, and practical tips for intentional dating and meaningful relationships.',
    'blog.search.placeholder': 'Search articles...',
    'blog.readTime': 'min read',
    'blog.publishedOn': 'Published on',
    
    // Home page detailed content
    'home.intro.p1': 'We take care of the search, so you can focus on living your best life while we introduce you to matches truly worth your time.',
    'home.intro.p2': '',
    'home.intro.p3': '',
    
    'home.expectations.title': 'What To Expect As A Member',
    'home.expectations.curated.title': 'Curated and Vetted Introductions',
    'home.expectations.curated.desc': 'Our matchmaking approach goes beyond surface-level checklists. We prioritize compatibility in relationships needs, lifestyles, values and attachment patterns. All potential matches have been interviewed, screened and are equally serious about finding a partner.',
    'home.expectations.privacy.title': 'Your Privacy is Our Priority',
    'home.expectations.privacy.desc': 'We protect your privacy like it\'s our own—your detailed profile, photo and phone number are always confidential, and never shared without your consent. Every introduction is handled with the utmost care and respect for your privacy.',
    'home.expectations.noPressure.title': 'Date Preparation',
    'home.expectations.noPressure.desc': 'Once matched, your date will be custom-planned based on your preferences. You\'ll also receive tips and tools to help the date flow naturally. All you need to do is show up and enjoy getting to know each other.',
    'home.expectations.support.title': 'Feedback & Support',
    'home.expectations.support.desc': 'As a client, your matchmaker will get your feedback after every date to keep refining your matches. We\'re dedicated to making you succeed in this journey—offering coaching resources, thoughtful support and inviting you to private events.',
    
    'home.cta.title': 'Ready to step into a more intentional way of dating?',
    'home.cta.button': 'Get Started Today',
    'home.cta.subtext': 'We only accept clients when we\'re confident we have good matches for them.',
    'home.cta.howItWorks': 'Discover how it works',
    'home.cta.notReady': 'Not ready to invest in a membership?',
    
    'home.stats.activeMembers': 'Curated Members',
    'home.stats.memberDesc': 'Sophisticated, dynamic, and serious about finding love—locals and foreigners from all age groups and backgrounds.',
    
    // Testimonials - Additional ones for image sections
    'home.testimonials.main': 'Thank you for a match that goes far beyond just an algorithm. You helped bring two hearts onto the same wavelength.',
    'home.testimonials.mainAuthor': '— COO, Tech Industry, 52',
    'home.testimonials.professional': 'The Date Alchemy promotes healthy relationships in a safe and confidential setting. Embarking on this journey has helped me listen more deeply to others and understand myself better—allowing me to grow into a better version of myself.',
    'home.testimonials.professionalAuthor': '— Scientist, 37',
    'home.testimonials.expert': 'I would wholeheartedly recommend The Date Alchemy to single professionals who may not have the time—or inclination—to navigate traditional matchmaking methods or dating apps.',
    'home.testimonials.expertAuthor': '— IT Professional, 32',

    // Singles Socials FAQ - English translations
    'singles.faq.q1.question': 'Why choose Singles Socials?',
    'singles.faq.q1.answer': 'Singles tell us that they\'re increasingly frustrated with online dating apps, due to safety concerns, catfishing, fake profiles, ghosting and inappropriate behavior. If you feel this way too, you\'re not alone. Many are seeking better ways to meet quality singles, in real life. Singles Socials is the answer for those wanting a more authentic way to meet others in a safe, relaxed, fun group setting, surrounded by genuine individuals who value socialising and making meaningful connections in person.',
    'singles.faq.q2.question': 'How are the guests seated at the table?',
    'singles.faq.q2.answer': 'Guests are seated in small groups of 6 to 8, carefully curated to ensure a mix of like-minded men and women. We use our questionnaire responses to match guests with compatible dining companions.',
    'singles.faq.q3.question': 'Is there a dress code for the event?',
    'singles.faq.q3.answer': 'While there is no strict dress code, we recommend smart casual attire. Feel free to dress comfortably yet stylishly for the occasion.',
    'singles.faq.q4.question': 'Can I bring a friend to the event?',
    'singles.faq.q4.answer': 'We encourage attendees to come solo to maximize the opportunity for everyone to meet new people and foster connections. However, if you\'d like to bring a friend who is like-minded and in the same age group as you, drop us an email at hello@thedatealchemy.com and we\'ll try to accommodate.',
    'singles.faq.q5.question': 'I have purchased the ticket but I am not able to go',
    'singles.faq.q5.answer': 'Tickets are non-refundable but don\'t worry, you can still use it for another event if you cancel 1 week before.',
    'singles.faq.q6.question': 'How is the restaurant selected?',
    'singles.faq.q6.answer': 'Restaurants are selected for stylish ambiance, fabulous food and drinks. We select restaurants in the center of Mauritius for maximum convenience to all the guests.',
    'singles.faq.q7.question': 'Are there always 6 to 8 guests at the table?',
    'singles.faq.q7.answer': 'We focus on creating tables of 6 to 8, with equal number of men and women. Occasionally, however, it may be 4 or 6 guests, depending on availability, mix of members and attendance on a particular night (despite our best efforts, some cancellations happen due to illness or emergencies).',
    'singles.faq.q8.question': 'How and when will I know if I\'m confirmed for a dinner or brunch?',
    'singles.faq.q8.answer': 'Once we receive your registration, our team reviews if they can add you to a table and ensure the table\'s chemistry. If invited, you will receive an invitation via email within the next business day. You must then make your payment to secure your seat. Please note that we finalize all guest lists 10 days before the event, so we recommend applying as early as possible to ensure your spot.',
    'singles.faq.q9.question': 'How do I locate our table at the restaurant?',
    'singles.faq.q9.answer': 'We will let you know the surname that the booking is made under. Please arrive on time, ready for a fun night out!',
    'singles.faq.q10.question': 'How is the dinner or brunch paid for?',
    'singles.faq.q10.answer': 'As with any dinner or brunch with friends you can agree at the end to either split the bill 6 ways, or pay individually (if people have ordered different drinks or dishes). It\'s up to you!',
    'singles.faq.q11.question': 'How do I request another member\'s phone number after an event?',
    'singles.faq.q11.answer': 'After each event, our Events Team will email you, seeking feedback. In this email you can request member phone numbers. We ask that members don\'t swap numbers in front of others at the table, out of respect. Our phone number swapping service removes any awkwardness and ensures mutual interest.',
    'singles.faq.q12.question': 'How can I contact the event organizers if I have further questions?',
    'singles.faq.q12.answer': 'For any additional questions or inquiries, please feel free to reach out to us via email at hello@thedatealchemy.com. We\'re here to help!',
    
    // Team section
    'home.team.title': 'Your Alchemists',
    'home.team.founders': 'Pratik Malia, Celine Delacharlerie, Sagarika Sarkar - Co-founders',
    'home.team.story1': 'Three years ago, we left our corporate careers in Singapore and moved to Mauritius to do something that felt more personal, more impactful. Finding a life partner we truly connect with has been such a life changing experience for us, that we wanted more people to experience that kind of love.',
    'home.team.story2': 'But getting there wasn\'t easy. We\'ve been through the frustration ourselves — showing up to countless events that led nowhere, spending hours swiping on dating apps only to feel disillusioned, getting caught in relationships with emotionally unavailable or toxic people.',
    'home.team.quote': 'We\'ve wasted emotional energy on people who weren\'t serious. We\'ve faced the ghosting, the anxiety, the self-doubt and confusion. And we knew there had to be a better way.',
    'home.team.story3': 'That\'s why we created The Date Alchemy— the dating service we wish we\'d had.',
    'home.team.story4': 'A respectful and empowering experience designed for real, meaningful connections. We can\'t promise love, but we can promise effort, professionalism, integrity, a genuine investment in your journey, and a proven process that\'s led to lasting relationships.',
    
    // Nominate section
    'home.nominate.title': 'Spread the Love',
    'home.nominate.subtitle': 'Nominate a single you know',
    'home.nominate.description': 'They can thank you once we find them the one!',
    'home.nominate.cta': 'Nominate Someone',
    
    // Blog section
    'home.blog.latestTitle': 'Latest Insights',
    'home.blog.viewAll': 'View All Posts',
    
    // Singles Socials page
    'singles.hero.title': 'Singles Socials',
    'singles.hero.subtitle': 'Ready to add more fun, friendship and connection to your life? Get invited to an intimate dinner or brunch with singles carefully selected to match your vibe.',
    'singles.hero.cta': 'Sign Up Now',
    
    'singles.expect.title': 'What to Expect?',
    'singles.expect.description': 'An intimate brunch or dinner at one of Mauritius\' best rated restaurants — where you\'ll join a handpicked group of 6 to 8 like-minded singles, matched by vibe and age. With an equal number of men and women, it\'s the perfect relaxed setting to share stories, exchange ideas, and connect over great conversation, delicious food and ice-breakers.',
    
    'singles.howItWorks.title': 'How It Works',
    'singles.howItWorks.step1.title': 'Sign up',
    'singles.howItWorks.step1.description': 'Select your event and tell us a bit about yourself by filling out our form. The more we know, the better we can connect you with the right people. We close registrations 10 days before each event to carefully curate the table chemistry, so make sure to plan ahead and apply early!',
    'singles.howItWorks.step2.title': 'We curate tables for interesting conversations',
    'singles.howItWorks.step2.description': 'Say goodbye to awkward encounters and hello to stimulating conversations with like-minded individuals. We select guests within your age group and at a similar stage in their lives and ensure a balanced mix of men and women.',
    'singles.howItWorks.step3.title': 'Receive your invitation',
    'singles.howItWorks.step3.description': 'If we have the right table for you, you\'ll receive your invitation within the next business day. Secure your spot by purchasing your ticket immediately — and get ready for an unforgettable experience!',
    'singles.howItWorks.note': 'We care to get the vibe right and hence do not rush into a table. We only get in touch with you when we have the right set of dinner mates for you. If not for this event, you\'ll be considered for the next one unless you ask us to opt you out.',
    
    'singles.whyAttend.title': 'Why Attend?',
    'singles.whyAttend.meetPeople.title': 'Meet New People',
    'singles.whyAttend.meetPeople.description': 'Break the ice and connect with singles in your age group handpicked for their similar lifestyle and shared interests.',
    'singles.whyAttend.goodTime.title': 'Have a Good Time',
    'singles.whyAttend.goodTime.description': 'Enjoy a relaxed moment of laughter, good food, and great company in an environment where there\'s no pressure and it\'s about having fun and making new connections.',
    'singles.whyAttend.connection.title': 'Experience Genuine Connection',
    'singles.whyAttend.connection.description': 'From the moment you sit down, you\'ll feel the warmth of genuine conversations in a welcoming and intimate setting, and the joy of building new friendships.',
    
    'singles.events.title': 'Our Next Events',
    'singles.events.ticketNote': '(Ticket price - food & drinks separate)',
    'singles.events.empty': 'No upcoming events at the moment. Check back soon!',
    
    'singles.pricing.title': '🍷 Ticket: 1000 Rs',
    'singles.pricing.vatNote': '(exclusive of VAT)',
    'singles.pricing.description': '(This price does not include food or drinks. You pay to the restaurant directly for what you order)',
    'singles.pricing.application': 'Your application will be considered for the upcoming event. Should we be unable to include you, you will be automatically considered for future Singles Socials.',
    'singles.pricing.timing': 'We send invitations 4 to 2 weeks before the event, so make sure to apply early.',
    'singles.pricing.disclaimer': 'Please be aware that if you do not receive an invitation from us, it means we felt we did not have the right table for you.',
    
    'singles.faq.title': 'FAQ',
    
    // Trust section
    'home.trust.title': 'Trust Us - It Really Works',
    'home.trust.stat1': 'of setups result in real, face-to-face dates',
    'home.trust.stat2': 'of dates are reported as good experiences',
    'home.trust.stat3': 'lead to a second date',
    'home.trust.stat4': 'of our paid members are already going strong with their match',
    
    // Guarantees section
    'home.guarantees.title': 'Our Guarantees',
    'home.guarantees.guarantee1Title': 'Only Pay When We Deliver',
    'home.guarantees.guarantee1Description': 'An upfront payment of 10% is required to start your dedicated matchmaking search. The remaining 90% is only required once you accept a match we find for you.',

    'home.guarantees.guarantee3Title': 'Flexible Membership',
    'home.guarantees.guarantee3Description': 'Life happens. If you need to take a break for any reason, we\'ll pause your membership—no lost time, no penalties.',
    'home.guarantees.guarantee4Title': 'No Hidden Fees',
    'home.guarantees.guarantee4Description': 'Transparent pricing. No hidden costs, ever.',
    
    // Pricing section
    'home.pricing.membershipTitle': 'Membership price:',
    'home.pricing.membershipPeriod': 'For 1 year, VAT included',
    'home.pricing.membershipCompare': '… less than 1 night staycation in Mauritius',
    'home.pricing.urgencyMessage': '',
    'home.pricing.priceIncrease': 'Only Pay When We Deliver',
    'home.pricing.priceIncreaseDisclaimer': 'An upfront payment of 10% (Rs 800) is required to start your dedicated matchmaking search. The remaining 90% (Rs 7200) is paid once you accept a match we find you, and covers your full one-year membership.',
    'home.pricing.applyNow': 'Join Now',
    'home.pricing.notReady': 'Not ready to invest?',
    'home.pricing.freeReport': "Read our free report on the '11 Hidden Patterns' preventing smart singles in Mauritius from finding love.",
    'home.pricing.createProfile': 'Create your profile now.',
    
    // How It Works section
    'home.howItWorks.title': 'How It Works',
    'home.howItWorks.subtitle': 'A proven process to find your match',
    'home.howItWorks.step1Title': '01. Apply for Membership',
    'home.howItWorks.step1Description': 'Complete our questionnaire to help us understand who you are and your preferences.',
    'home.howItWorks.step2Title': '02. Private Consultation',
    'home.howItWorks.step2Description': 'Meet with your personal matchmaker in a one-on-one video call to better understand who you are and craft your personalized profile.',
    'home.howItWorks.step3Title': '03. Curated Introduction',
    'home.howItWorks.step3Description': 'We share a profile for your review, and if there is mutual interest, you make the payment and we coordinate your first date.',
    'home.howItWorks.step4Title': '04. Refinement & Follow-up',
    'home.howItWorks.step4Description': 'If the match didn\'t feel right, we seek your feedback to fine-tune our matching approach and introduce you to a better match.',
    'home.howItWorks.learnMore': 'Learn More About Our Process',
    
    // Research section
    'home.research.title': 'Research Shows: Dating Apps Are Failing Us',
    'home.research.subtitle': 'Leading institutions and research organizations have documented the harmful effects of dating apps. At The Date Alchemy, we offer a healthier, more human approach to finding love.',
    'home.research.guardianQuote': '"Dating apps are soul destroying"',
    'home.research.nytQuote': '"Years of swiping and searching have left dating app users with burnout"',
    'home.research.pewQuote': '"57% of female online daters receive unwanted explicit content"',
    'home.research.singlesQuote': '"80% experienced emotional burnout with online dating"',
    'home.research.stanfordQuote': '"Two thirds of Tinder users are already in a relationship"',
    'home.research.flindersQuote': '"Dating apps linked to poorer mental health and wellbeing"',
    'home.research.readArticle': 'Read article →',
    'home.research.readResearch': 'Read research →',
    'home.research.readReport': 'Read report →',
    'home.research.readStudy': 'Read study →',
    'home.research.ctaTitle': 'Ready for a Healthier Dating Experience?',
    'home.research.ctaSubtitle': 'Skip the apps. Skip the burnout. Find genuine connection through our proven, human-centered approach.',
    'home.research.ctaButton': 'Join Now',
    
    // Comparison Table
    'home.comparison.title': 'Why Choose The Date Alchemy Over Dating Apps?',
    'home.comparison.subtitle': 'Based on Pew Research Center findings on dating app experiences',
    'home.comparison.headerIssue': 'Issue',
    'home.comparison.headerDatingApps': 'Dating Apps (Pew Research)',
    'home.comparison.headerDateAlchemy': 'The Date Alchemy',
    'home.comparison.userMindset.issue': 'User Mindset',
    'home.comparison.userMindset.datingApps': 'Not serious: Nearly 50% want "something casual"',
    'home.comparison.userMindset.dateAlchemy': '100% of members are intentional and serious about finding a life partner',
    'home.comparison.confidentiality.issue': 'Confidentiality',
    'home.comparison.confidentiality.datingApps': '0% privacy. Photos and names publicly exposed',
    'home.comparison.confidentiality.dateAlchemy': '100% privacy. Details only shared with appropriate matches, with agreement from both sides, one at a time',
    'home.comparison.timeCost.issue': 'Time Cost',
    'home.comparison.timeCost.datingApps': '40+ hours swiping per month',
    'home.comparison.timeCost.dateAlchemy': '~40 min: form + consultation',
    'home.comparison.overallExperience.issue': 'Overall Experience',
    'home.comparison.overallExperience.datingApps': '46% say their experience is negative',
    'home.comparison.overallExperience.dateAlchemy': '88% of dates are reported as good experiences. Tailored introductions ensure satisfaction',
    'home.comparison.scamsFakeProfiles.issue': 'Scams / Fake Profiles',
    'home.comparison.scamsFakeProfiles.datingApps': '52% encountered a scammer',
    'home.comparison.scamsFakeProfiles.dateAlchemy': 'All profiles vetted and verified',
    'home.comparison.disrespectfulMessages.issue': 'Disrespectful Messages',
    'home.comparison.disrespectfulMessages.datingApps': '38% received unsolicited sexual messages',
    'home.comparison.disrespectfulMessages.dateAlchemy': 'Zero instances of disrespect',
    'home.comparison.persistentContact.issue': 'Persistent / Unwanted Contact',
    'home.comparison.persistentContact.datingApps': '30% kept contacting after rejection',
    'home.comparison.persistentContact.dateAlchemy': 'You stay in control — contact details shared only when you want',
    'home.comparison.insultsThreats.issue': 'Insults / Threats',
    'home.comparison.insultsThreats.datingApps': '24% insulted; 6% threatened',
    'home.comparison.insultsThreats.dateAlchemy': 'Safe space, zero tolerance for disrespect',
    'home.comparison.source': 'Source: Pew Research Center\'s study on online dating experiences',
    'home.comparison.cta': 'Experience The Difference',
    
    // Language switcher
    'language.english': 'English',
    'language.french': 'Français',
  },
  
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.howItWorks': 'Notre méthode',
    'nav.insights': 'Conseils',
    'nav.applyNow': 'Devenir membre',
    'nav.network': 'Rejoindre le Réseau',
    'team.yourAlchemists': 'Vos Alchimistes',
    
    // Common
    'common.learnMore': 'En Savoir Plus',
    'common.getStarted': 'Commencer',
    'common.readMore': 'Lire Plus',
    'common.loading': 'Chargement...',
    
    // Home page
    'home.hero.title': 'Matchmaking sur-mesure pour célibataires occupés.',
    'home.hero.subtitle': 'Discret, moderne et pensé pour Maurice.',
    'home.hero.cta': 'En savoir plus',
    'home.hero.memberCount': 'membres actifs',
    
    'home.help.title': 'Comment nous aidons',
    'home.help.curated.title': 'Réseau sélectionné',
    'home.help.curated.desc': 'Chaque membre est personnellement vérifié par appels vidéo et vérification des antécédents.',
    'home.help.personalized.title': 'Mise en relation personnalisée',
    'home.help.personalized.desc': 'Nous comprenons vos valeurs, votre style de vie et vos objectifs relationnels pour trouver des partenaires compatibles.',
    'home.help.discreet.title': 'Discrétion complète',
    'home.help.discreet.desc': 'Votre confidentialité est primordiale. Nous coordonnons les présentations en toute confidentialité.',
    
    // Testimonials section (French)
    'home.testimonials.title': 'Ce que disent nos membres',
    'home.testimonials.subtitle': 'Tous les témoignages proviennent de vrais clients — n\'hésitez pas à nous demander une mise en relation si vous souhaitez vérifier leur expérience.',
    
    'home.testimonials.testimonial1': '« Grâce à The Date Alchemy, j\'ai trouvé l\'amour. L\'équipe a toujours été présente, apportant un soutien discret et des conseils experts sans jamais devenir trop intrusive. Merci pour votre professionnalisme et, surtout, merci d\'être là. »',
    'home.testimonials.author1': '— Vétérinaire, 30 ans',
    
    'home.testimonials.testimonial2': '« The Date Alchemy est de loin la meilleure agence de mise en relation à Maurice. L\'équipe est très dévouée et engagée pour assurer une expérience fluide et sans accroc aux membres. »',
    'home.testimonials.author2': '— Consultant en IA, 41 ans',
    
    'home.testimonials.testimonial3': '« En plus de profils détaillés, The Date Alchemy propose aussi des évaluations de personnalité, permettant aux utilisateurs de développer une conscience de soi plus profonde et de grandir individuellement avant de rencontrer un partenaire potentiel. »',
    'home.testimonials.author3': '— Professionelle IT, 32 ans',
    
    'home.testimonials.testimonial4': '« La communication avec l\'équipe est ouverte, cohérente et collaborative, que ce soit sur WhatsApp ou par les newsletters partagées par email. Les retours sont encouragés après chaque rendez-vous, ce qui aide à créer un environnement bienveillant. »',
    'home.testimonials.author4': '— Scientifique, 37 ans',
    
    'home.membership.title': 'L\'adhésion The Date Alchemy',
    'home.membership.subtitle': 'Tout ce dont vous avez besoin pour vivre une expérience de rencontres plus saine.',
    'home.membership.premiumTitle': '1. Premium Matchmaking',
    'home.membership.premiumSubtitle': 'Inclus dans votre adhésion :',
    
    'home.membership.feature1': '**Rencontres ultra-sélectionnées**: Chaque personne que nous vous présentons a été interviewée et vérifiée—elle correspond à vos standards et est prête pour une relation authentique.',
    'home.membership.feature2': '**Compatibilité approfondie** basée sur bien plus que des critères superficiels : valeurs, style de vie, objectifs et besoins relationnels (The Date Alchemy Needs Compatibility Score™). La théorie de l\'attachement nous permet d\'éviter les incompatibilités toxiques dès le départ.',
    'home.membership.feature3': '**Intelligence humaine au cœur du processus** : Nous utilisons l\'IA pour analyser la compatibilité, mais l\'intuition humaine prend la décision finale. Chaque introduction est sélectionnée par de vraies personnes qui comprennent ce que vous recherchez.',
    'home.membership.feature4': '**Profils détaillés** : Incluant carrière, passions, objectifs de vie et description du partenaire idéal. Les photos sont partagées avec consentement mutuel.',
    'home.membership.feature5': '**Rendez-vous organisés pour vous** : Nous réservons, confirmons et préparons tout selon vos préférences. Vous n\'avez qu\'à vous présenter sous votre meilleur jour et profiter de la rencontre.',
    'home.membership.feature6': '**Suivi post-rencontre** : Accompagnement après chaque rendez-vous—pas de ghosting, pas d\'ambiguïté, juste de la clarté et du respect.',
    'home.membership.bonus': '**Accès exclusif à nos événements** : Invitations à nos Singles Socials—brunchs et dîners intimistes avec des invités soigneusement sélectionnés.',
    'home.membership.cta': 'postuler pour l\'adhésion',
    
    'home.membership.innerWorkTitle': '2. Accompagnement et développement personnel',
    'home.membership.innerWorkDescription': 'Nous vous préparons à vivre des rendez-vous réussis et des relations plus équilibrées.',
    'home.membership.innerWorkSubtitle': 'Inclus dans votre adhésion :',
    
    'home.membership.innerWork1Title': '1) Audit personnel de préparation à la relation',
    'home.membership.innerWork1Feature1': '**Évaluation de vos besoins** : clarifiez ce qui est réellement essentiel pour vous dans une relation — au-delà des simples attirances.',
    'home.membership.innerWork1Feature2': '**Analyse de votre style d\'attachement** : comprenez comment votre manière de vous lier influence vos relations (basé sur la théorie de l\'attachement de John Bowlby et Mary Ainsworth).',
    'home.membership.innerWork1Feature3': '**Évaluation de vos tendances de dating** : identifiez les schémas inconscients qui peuvent freiner votre épanouissement amoureux (inspiré des travaux de Logan Ury).',
    
    'home.membership.innerWork2Title': '2) Accompagnement personnalisé pour dater avec intention et confiance',
    'home.membership.innerWork2Feature1': '**Accès direct à notre équipe** (via WhatsApp & email) : un canal discret vers des experts qui connaissent votre parcours.',
    'home.membership.innerWork2Feature2': '**Conseils pour vos rencontres— Au bon moment** : emails courts et pratiques pour vous préparer avant vos rendez-vous.',
    'home.membership.innerWork2Feature3': '**Rituels de réflexion après chaque rendez-vous** : car chaque rencontre est aussi une occasion de mieux vous connaître.',
    'home.membership.innerWork2Feature4': '**Les secrets de l\'alchimie deux fois par mois** dans votre boîte mail : conseils basés sur notre expérience de matchmaking et validés par la recherche scientifique.',
    
    'home.pricing.title': 'Investissement dans votre avenir',
    'home.pricing.price': 'Rs 8,000',
    'home.pricing.period': '/an',
    'home.pricing.description': 'Un investissement annuel unique pour des présentations illimitées et un service personnalisé.',
    'home.pricing.cta': 'Commencez votre parcours',
    
    'home.journey.title': 'Commencez votre parcours',
    'home.journey.step1.title': 'Postulez pour l\'adhésion',
    'home.journey.step1.desc': 'Vous commencerez par remplir notre candidature initiale : un questionnaire qui nous aide à comprendre votre background, vos valeurs et ce que vous recherchez vraiment chez un partenaire.',
    'home.journey.step2.title': 'Consultation privée',
    'home.journey.step2.desc': 'Ensuite, vous rencontrerez votre matchmaker personnel lors d\'une consultation vidéo individuelle pour créer votre profil personnalisé.',
    'home.journey.step3.title': 'Présentation personnalisée',
    'home.journey.step3.desc': 'Une fois qu\'une connexion mutuellement alignée est identifiée, nous coordonnons votre premier rendez-vous avec discrétion et soin complets.',
    'home.journey.step4.title': 'Affinement et suivi',
    'home.journey.step4.desc': 'Après chaque présentation, nous recueillons vos commentaires pour affiner continuellement notre approche et assurer des connexions significatives.',
    
    'home.blog.title': 'Conseils et astuces de rencontres',
    'home.blog.subtitle': 'Conseils d\'experts pour des rencontres intentionnelles',
    
    'home.newsletter.title': 'Les secrets de l\'alchimie — directement dans votre boîte mail',
    'home.newsletter.subtitle': 'Rejoignez plus de 1 000 célibataires avisés qui reçoivent tous les 15 jours nos conseils exclusifs (en anglais) pour réussir leurs rencontres.',
    'home.newsletter.placeholder': 'Entrez votre adresse e-mail',
    'home.newsletter.cta': 'S\'abonner',
    'home.newsletter.disclaimer': 'En vous abonnant, vous acceptez de recevoir notre newsletter. Vous pouvez vous désabonner à tout moment.',
    
    // Trust section (French)
    'home.trust.title': 'Faites-nous confiance — ça fonctionne vraiment.',
    'home.trust.stat1': 'de nos mises en relation aboutissent à un vrai rendez-vous en face-à-face',
    'home.trust.stat2': 'des rendez-vous sont jugés comme de bonnes expériences',
    'home.trust.stat3': 'des rencontres donnent lieu à un second rendez-vous',
    'home.trust.stat4': 'de nos membres payants vivent déjà une belle histoire avec leur match',
    
    // Guarantees section (French)
    'home.guarantees.title': 'Nos garanties',
    'home.guarantees.guarantee1Title': 'Payez uniquement lorsque nous délivrons',
    'home.guarantees.guarantee1Description': 'Un paiement initial de 10% est requis pour démarrer votre recherche de matchmaking personnalisée. Les 90% restants ne sont exigés qu\'une fois que vous acceptez un match que nous trouvons pour vous.',

    'home.guarantees.guarantee3Title': 'Adhésion flexible',
    'home.guarantees.guarantee3Description': 'La vie est faite d\'imprévus. Si vous devez faire une pause, nous suspendons votre adhésion — aucun temps perdu ni pénalités.',
    'home.guarantees.guarantee4Title': 'Pas de frais cachés',
    'home.guarantees.guarantee4Description': 'Tarifs transparents. Aucun coût supplémentaire, jamais.',
    
    // Pricing section (French)
    'home.pricing.membershipTitle': 'Tarif d\'adhésion :',
    'home.pricing.membershipPeriod': 'Pour 1 an, TVA incluse',
    'home.pricing.membershipCompare': '… soit moins qu\'une nuitée en staycation à Maurice',
    'home.pricing.urgencyMessage': '',
    'home.pricing.priceIncrease': 'Payez uniquement lorsque nous délivrons',
    'home.pricing.priceIncreaseDisclaimer': 'Un paiement initial de 10% (Rs 800) est requis pour démarrer votre recherche de matchmaking personnalisée. Les 90% restants (Rs 7200) sont payés une fois que vous acceptez un match que nous trouvons pour vous, et couvrent votre adhésion complète d\'un an.',
    'home.pricing.applyNow': 'Rejoindre Maintenant',
    'home.pricing.notReady': 'Pas prêt à investir ?',
    'home.pricing.freeReport': "Lisez notre rapport gratuit sur les '11 Schémas Cachés' qui empêchent les célibataires intelligents à Maurice de trouver l'amour.",
    'home.pricing.createProfile': 'Créez votre profil maintenant.',
    
    // How It Works section (French)
    'home.howItWorks.title': 'Notre méthode',
    'home.howItWorks.subtitle': 'Un processus éprouvé pour trouver votre match idéal',
    'home.howItWorks.step1Title': '01. Faites une demande d\'adhésion',
    'home.howItWorks.step1Description': 'Remplissez notre questionnaire pour nous aider à mieux comprendre qui vous êtes et vos préférences.',
    'home.howItWorks.step2Title': '02. Consultation privée',
    'home.howItWorks.step2Description': 'Rencontrez votre matchmaker personnel lors d\'un appel vidéo individuel afin d\'approfondir votre profil et personnaliser votre approche.',
    'home.howItWorks.step3Title': '03. Présentation ciblée',
    'home.howItWorks.step3Description': 'Nous vous partageons un profil aligné à vos préférences et, s\'il y a un intérêt mutuel, vous confirmez votre adhésion et nous organisons votre premier rendez-vous.',
    'home.howItWorks.step4Title': '04. Ajustement & suivi',
    'home.howItWorks.step4Description': 'Si la rencontre ne vous a pas convaincu, nous recueillons vos retours pour affiner notre sélection et vous présenter une personne qui correspond mieux à ce que vous cherchez.',
    'home.howItWorks.learnMore': 'En savoir plus sur notre méthode',
    
    // Research section (French)
    'home.research.title': 'Les recherches sont formelles : les applis de rencontres font des dégâts',
    'home.research.subtitle': 'Des institutions et organismes de recherche de premier plan ont documenté les effets délétères des applications de rencontres. Chez The Date Alchemy, nous proposons une approche plus saine et profondément humaine pour trouver l\'amour.',
    'home.research.guardianQuote': '« Les applications de rencontres détruisent l\'âme »',
    'home.research.nytQuote': '« Des années à swiper ont laissé les utilisateurs épuisés »',
    'home.research.pewQuote': '« 57 % des femmes rencontrant en ligne reçoivent du contenu explicite non sollicité »',
    'home.research.singlesQuote': '« 80 % des utilisateurs déclarent un épuisement émotionnel lié aux rencontres en ligne »',
    'home.research.stanfordQuote': '« Deux tiers des utilisateurs de Tinder sont déjà en couple »',
    'home.research.flindersQuote': '« Les applis de rencontres liées à une moins bonne santé mentale et bien-être »',
    'home.research.readArticle': '[Lire l\'article →]',
    'home.research.readResearch': '[Lire l\'étude →]',
    'home.research.readReport': '[Lire le rapport →]',
    'home.research.readStudy': '[Lire l\'étude →]',
    'home.research.ctaTitle': 'Prêt(e) pour une expérience de rencontres plus saine ?',
    'home.research.ctaSubtitle': 'Oubliez les applis. Évitez l\'épuisement. Trouvez une connexion authentique grâce à notre approche humaine et éprouvée.',
    'home.research.ctaButton': 'Rejoindre Maintenant',

    // FAQ Section (French)
    'faq.title': 'Questions fréquentes',
    'faq.q1': 'Quels sont vos tarifs ?',
    'faq.a1': 'Nous facturons un montant unique de 8 000 Rs, TVA incluse, uniquement lorsque nous vous avons trouvé votre premier match.',
    'faq.q2': 'Combien de personnes puis-je rencontrer pendant mon adhésion ?',
    'faq.a2': 'Bien que 5 rendez-vous soient une indication générale, nous ne garantissons pas un nombre précis de rencontres. Notre priorité est la qualité plutôt que la quantité. Nous estimons qu\'il vaut mieux rencontrer quelques personnes d\'exception plutôt que d\'être noyé·e sous des profils inadaptés. Le nombre de rendez-vous dépendra de plusieurs facteurs, notamment votre propre adéquation, la souplesse de vos critères de recherche et les retours que nous recevons. Notre objectif est que chaque présentation ait un réel potentiel.',
    'faq.q3': 'Comment effectuer le paiement ?',
    'faq.a3': 'Nous acceptons actuellement uniquement les paiements par Juice ou virement bancaire, pour les clients à Maurice comme à l\'étranger.',
    'faq.q4': 'Puis-je postuler pour un frère, une sœur, un enfant ou un·e ami·e proche ?',
    'faq.a4': 'Si vous souhaitez réellement aider quelqu\'un de votre entourage, vous pouvez nous transmettre ses coordonnées. Nous le contacterons rapidement. Toutefois, cette personne devra remplir le questionnaire et passer l\'entretien seule, sans accompagnement d\'amis ou de famille. Notre processus exige un engagement personnel, une honnêteté totale et une réelle motivation pour être efficace.',
    'faq.q5': 'Que savent les deux personnes l\'une de l\'autre avant le rendez-vous ?',
    'faq.a5': 'La confidentialité et la discrétion sont au cœur de notre service. Nous ne partageons ni nom de famille, ni photo, ni affiliations spécifiques (comme l\'employeur ou l\'université) avant la rencontre. En revanche, chaque personne reçoit le prénom, l\'âge, la localisation, ainsi qu\'une brève description expliquant pourquoi nous pensons qu\'il y a une compatibilité.',
    'faq.q6': 'Que se passe-t-il si mon match se trouve dans un autre pays ? Comment organisez-vous la rencontre ?',
    'faq.a6': 'Nous savons qu\'il n\'est pas toujours pratique de traverser le monde pour rencontrer quelqu\'un que l\'on ne connaît pas. Nous proposons des rencontres internationales uniquement lorsque nous croyons à un fort potentiel. Dans ce cas, nous facilitons des présentations virtuelles par vidéo. Cela concerne généralement une personne qui envisage de s\'installer à Maurice ou un expatrié mauricien vivant à l\'étranger. Une série d\'appels vidéo permet de vérifier la connexion avant d\'envisager une rencontre en personne.',
    'faq.q7': 'Accueillez-vous des candidats divorcés ou parents seuls ?',
    'faq.a7': 'Absolument ! Nous accueillons volontiers les personnes divorcées ou parents seuls, à condition que la séparation soit légalement reconnue et amiable. Si vous êtes prêt·e à écrire un nouveau chapitre, nous sommes là pour vous accompagner. Nous informons les partenaires potentiels de votre passé pour que ce sujet ne soit pas à aborder lors du rendez-vous.',
    'faq.q8': 'Quelle est la durée de validité de mon adhésion ?',
    'faq.a8': 'Votre adhésion est valable un an ou jusqu\'à ce que vous trouviez votre partenaire avec The Date Alchemy, selon la première éventualité. Elle n\'est pas transférable.',
    'faq.q9': 'Pouvez-vous garantir le succès ?',
    'faq.a9': 'Dans le domaine des rencontres, il est impossible de garantir un résultat certain. C\'est pourquoi nous appliquons une politique de non-remboursement. Cependant, votre satisfaction et votre recommandation restent notre priorité absolue, et soyez assuré·e que nous mettrons tout en œuvre pour vous aider à trouver votre moitié.',
    'faq.q10': 'Quelle est la société derrière The Date Alchemy ?',
    'faq.a10': 'The Date Alchemy est un service proposé par la société mauricienne Frolic Ltd (C23201149), également propriétaire de la plateforme lifestyle Frolic.mu.',
    'faq.contact.text': 'Vous avez d\'autres questions ? Contactez-nous directement.',
    'faq.contact.cta': 'Nous contacter →',
    
    // How it works page (French)
    'howItWorks.hero.title': 'De vraies connexions commencent ici',
    'howItWorks.hero.ctaTitle': 'Prêt(e) à trouver votre moitié ?',
    'howItWorks.hero.ctaDescription': 'Faites le premier pas vers une rencontre authentique grâce à notre processus de mise en relation éprouvé.',
    'howItWorks.hero.ctaButton': 'Rejoindre Maintenant',
    'howItWorks.hero.consultationText': 'Séance de consultation professionnelle',
    
    'howItWorks.journey.title': 'Votre parcours d\'adhésion',
    'howItWorks.journey.subtitle': 'Un processus éprouvé pour de vraies rencontres',
    
    'howItWorks.step1.title': '01. Postulez pour devenir membre',
    'howItWorks.step1.description1': 'Vous commencerez par remplir notre formulaire de candidature : un questionnaire qui nous aide à comprendre votre parcours, vos valeurs et ce que vous recherchez vraiment chez un partenaire.',
    'howItWorks.step1.description2': 'Sous un jour ouvrable, nous examinerons votre demande pour vous indiquer si nous avons un profil correspondant parmi nos membres et planifierons un appel vidéo avec vous.',
    
    'howItWorks.step2.title': '02. Consultation privée',
    'howItWorks.step2.description1': 'Ensuite, vous rencontrerez votre matchmaker lors d\'une consultation individuelle en visioconférence. Cet échange permet d\'obtenir une compréhension plus approfondie de qui vous êtes et de ce que vous recherchez.',
    'howItWorks.step2.description2': 'À la suite de cet entretien, nous créons un résumé de votre profil — que vous pourrez relire et approuver — et que nous partagerons de manière sélective uniquement avec des profils correspondant à vos critères.',
    'howItWorks.step2.description3': 'Nous vous demandons également de faire une auto-évaluation plus approfondie de vos besoins dans une relation et votre style d\'attachement.',
    
    'howItWorks.step3.title': '03. Présentation sur mesure',
    'howItWorks.step3.description1': 'Après le paiement de vos frais d\'inscription (Rs 800), nous lançons votre recherche et commençons à suggérer des profils correspondants potentiels.',
    'howItWorks.step3.description2': 'Lorsqu\'une compatibilité mutuelle est identifiée, nous partageons les deux profils pour examen. S\'il y a un intérêt réciproque, nous vous invitons à activer votre adhésion annuelle afin d\'organiser votre premier rendez-vous.',
    'howItWorks.step3.description3': 'Nous nous chargeons de toute la coordination avec soin et discrétion, afin que vous rencontriez une personne réellement alignée avec vos aspirations — au bon endroit, au bon moment.',
    
    'howItWorks.step4.title': '04. Ajustements et suivi',
    'howItWorks.step4.description1': 'Après la rencontre, la décision de ce qui suit vous appartient — que ce soit un deuxième rendez-vous ou la volonté d\'explorer une nouvelle rencontre.',
    'howItWorks.step4.description2': 'Au cours de votre adhésion d\'un an, nous recueillons vos retours après chaque rendez-vous pour affiner votre expérience et vous aider à trouver la bonne personne.',
    
    'howItWorks.comparison.title': 'The Date Alchemy vs. Applications de rencontres',
    'howItWorks.comparison.subtitle': 'Découvrez pourquoi la mise en relation intentionnelle donne de meilleurs résultats',
    'howItWorks.comparison.timeRequired': 'Temps requis',
    'howItWorks.comparison.userMindset': 'État d\'esprit des utilisateurs',
    'howItWorks.comparison.memberSafety': 'Sécurité des membres',
    'howItWorks.comparison.confidentialProfile': 'Profil confidentiel',
    'howItWorks.comparison.dateAlchemyTime': '40 min (formulaire + consultation)',
    'howItWorks.comparison.datingAppsTime': '40+ heures de swiping/mois',
    'howItWorks.comparison.dateAlchemyMindset': 'Prêts pour une relation sérieuse',
    'howItWorks.comparison.datingAppsMindset': 'Intentions pas claires - près de 50 % recherchent une relation sans engagement',
    'howItWorks.comparison.dateAlchemySafety': '100 % — vérification vidéo et pièce d\'identité',
    'howItWorks.comparison.datingAppsSafety': '0 % — N\'importe qui possédant un smartphone peut s\'inscrire',
    'howItWorks.comparison.dateAlchemyProfile': 'Oui',
    'howItWorks.comparison.datingAppsProfile': 'Non',
    'howItWorks.comparison.disclaimer': 'Statistiques de réussite des applications de rencontres aux États-Unis basées sur le Pew Research Center, 2023.',
    
    'howItWorks.finalCta.title': 'Prêt(e) à faire l\'expérience de la différence ?',
    'howItWorks.finalCta.subtitle': 'Commencez votre parcours',
    'howItWorks.finalCta.readyTitle': 'Prêt(e) à vous lancer ?',
    'howItWorks.finalCta.readyDescription': 'Rejoignez notre adhésion et faites le premier pas vers la rencontre de votre future moitiée.',
    'howItWorks.finalCta.readyButton': 'Rejoindre Maintenant',
    'howItWorks.finalCta.notReadyTitle': 'Pas prêt à investir ?',
    'howItWorks.finalCta.notReadyDescription': "Lisez notre rapport gratuit sur les '11 Schémas Cachés' qui empêchent les célibataires intelligents à Maurice de trouver l'amour.",
    
    // Footer (French)
    'footer.tagline': 'Une expérience de dating réinventée pour les professionnels cosmopolites à Maurice.',
    'footer.quickLinks': 'Liens Rapides',
    'footer.legal': 'Légal',
    'footer.contact': 'Contact',
    'footer.privacyPolicy': 'Politique de Confidentialité',
    'footer.termsOfUse': 'Conditions d\'Utilisation',
    'footer.parentCompany': 'The Date Alchemy est un service exploité par Frolic Ltd, une société enregistrée en République de Maurice (BRN : C23201149). Tous les paiements, obligations contractuelles, services et responsabilités sont assumés par Frolic Ltd sous la marque The Date Alchemy.\n\n© The Date Alchemy par Frolic Ltd, Maurice. Tous droits réservés.',
    
    // Network page (French)
    'network.title': 'Le réseau The Date Alchemy',
    'network.subtitle': 'Là où commencent les vraies histoires — quand le bon moment (et la bonne personne) se présentent.',
    'network.description': 'Pas encore prêt(e) à investir dans notre adhésion — mais ouvert(e) à l\'amour si la bonne personne se présente, et prêt(e) à attendre ? Vous êtes au bon endroit.',
    'network.benefits.title': 'Confidentiel. Soigneusement sélectionnés.',
    'network.benefits.description': 'Le réseau The Date Alchemy s\'adresse aux célibataires émotionnellement prêts pour une relation, mais qui ne souhaitent pas encore devenir client(e) à part entière. Tout comme pour notre adhésion complète, votre profil est entièrement confidentiel.',
    'network.benefits.poolDescription': 'Une fois inscrit(e) dans notre "pool" de célibataires, nous vous contacterons uniquement si nous repérons une forte compatibilité mutuelle avec un membre actif.',
    'network.benefits.analogy': 'Pensez-y comme à être sur la touche — assez proche de l\'action, mais pas encore sur le terrain.',
    'network.step1.title': 'Remplissez votre profil privé',
    'network.step1.desc': 'Dites-nous qui vous êtes, ce qui compte pour vous et ce que vous recherchez.',
    'network.step2.title': 'Vous rejoignez notre pool de célibataires',
    'network.step2.desc': 'Nous passons régulièrement en revue ce pool pour nos membres.',
    'network.step3.title': 'Nous vous contacterons si nous trouvons une forte compatibilité',
    'network.step3.desc': 'Nous ne vous écrirons que si nous pensons qu\'il y a un véritable potentiel des deux côtés.',
    'network.note.title': 'À noter :',
    'network.note.description': 'Nous donnons la priorité aux mises en relation de nos membres. En tant que membre du réseau The Date Alchemy, nous ne cherchons pas activement en votre nom — et il se peut que vous n\'ayez pas de nos nouvelles pendant un certain temps.  Lorsque nous vous contacterons avec un premier match, des frais d\'inscription de Rs 800 seront requis pour finaliser votre profil, couvrir la consultation initiale, la vérification et les analyses, et garantir votre engagement dans le processus.',
    'network.cta.title': 'Rejoignez le réseau dès maintenant',
    'network.cta.description': 'Remplissez votre profil ci-dessous — et nous vous contacterons si la bonne personne se présente.',
    'network.cta.button': 'Créer votre profil',
    'network.cta.membership': 'Envie d\'être plus proactif(ve) ?',
    'network.cta.membershipLink': 'Découvrez notre formule d\'adhésion.',

    
    // Blog page (French)
    'blog.title': 'Conseils et astuces de rencontres',
    'blog.subtitle': 'Conseils d\'experts, perspectives scientifiques et astuces pratiques pour des rencontres intentionnelles et des relations significatives.',
    'blog.search.placeholder': 'Rechercher des articles...',
    'blog.readTime': 'min de lecture',
    'blog.publishedOn': 'Publié le',
    
    // Home page detailed content (French)
    'home.intro.p1': 'Nous gérons la recherche pour vous. Vivez pleinement votre vie pendant que nous trouvons des personnes qui méritent vraiment votre attention.',
    'home.intro.p2': '',
    'home.intro.p3': '',
    
    'home.expectations.title': 'À quoi s\'attendre en tant que membre',
    'home.expectations.curated.title': 'Rencontres sélectionnées et vérifiées',
    'home.expectations.curated.desc': 'Notre approche va au-delà des critères superficiels. Nous priorisons la compatibilité en matière de besoins relationnels, styles de vie, valeurs et types d\'attachement. Chaque match potentiel a été interviewé et vérifié—tous sont aussi sérieux que vous dans leur recherche.',
    'home.expectations.privacy.title': 'Votre confidentialité, notre priorité absolue',
    'home.expectations.privacy.desc': 'Nous protégeons votre vie privée comme la nôtre. Votre profil, photos et coordonnées restent strictement confidentiels et ne sont jamais partagés sans votre consentement explicite. Chaque introduction est orchestrée avec discrétion et respect.',
    'home.expectations.noPressure.title': 'Préparation des rencontres',
    'home.expectations.noPressure.desc': 'Une fois le match établi, nous organisons votre rendez-vous selon vos préférences. Vous recevez également des conseils et outils pratiques pour que la rencontre se déroule naturellement. Il ne vous reste qu\'à vous présenter et profiter du moment.',
    'home.expectations.support.title': 'Suivi personnalisé',
    'home.expectations.support.desc': 'Après chaque rendez-vous, votre matchmaker recueille vos impressions pour affiner continuellement vos matchs. Nous vous accompagnons avec du coaching, un soutien attentionné et des invitations à nos événements privés.',
    
    'home.cta.title': 'Prêt(e) à adopter une approche plus intentionnelle des rencontres ?',
    'home.cta.button': 'Commencer aujourd\'hui',
    'home.cta.subtext': 'Nous n\'acceptons que les clients pour lesquels nous sommes confiants d\'avoir de bons matchs.',
    'home.cta.howItWorks': 'Découvrir notre méthode',
    'home.cta.notReady': 'Pas encore prêt(e) à investir dans une adhésion ?',
    
    'home.stats.activeMembers': 'Membres sélectionnés',
    'home.stats.memberDesc': 'Sophistiqués, dynamiques et prêts pour une relation sérieuse—locaux et expatriés de tous âges et horizons.',
    
    // Testimonials - Additional ones for image sections (French)
    'home.testimonials.main': 'Merci pour un match qui va bien au-delà d\'un simple algorithme. Vous avez aidé à mettre deux cœurs sur la même longueur d\'onde.',
    'home.testimonials.mainAuthor': '— COO, Industrie Tech, 52 ans',
    'home.testimonials.professional': 'The Date Alchemy promeut des relations saines dans un cadre sûr et confidentiel. Entreprendre ce voyage m\'a aidé à écouter plus profondément les autres et à mieux me comprendre — me permettant de grandir en une meilleure version de moi-même.',
    'home.testimonials.professionalAuthor': '— Scientifique, 37 ans',
    'home.testimonials.expert': 'Je recommanderais de tout cœur The Date Alchemy aux professionnels célibataires qui pourraient ne pas avoir le temps — ou l\'inclination — de naviguer dans les méthodes traditionnelles de matchmaking ou les applications de rencontres.',
    'home.testimonials.expertAuthor': '— Professionelle IT, 32 ans',
    
    // Team section (French)
    'home.team.title': 'Vos Alchimistes',
    'home.team.founders': 'Pratik Malia, Celine Delacharlerie, Sagarika Sarkar - Co-fondateurs',
    'home.team.story1': 'Il y a trois ans, nous avons quitté nos carrières en entreprise à Singapour et avons déménagé à Maurice pour faire quelque chose qui semblait plus personnel, plus impactant. Trouver un partenaire de vie avec qui nous nous connectons vraiment a été une expérience si transformatrice pour nous, que nous voulions que plus de gens vivent ce genre d\'amour.',
    'home.team.story2': 'Mais y arriver n\'a pas été facile. Nous avons vécu la frustration nous-mêmes — nous présenter à d\'innombrables événements qui ne menaient nulle part, passer des heures à swiper sur des applications de rencontres seulement pour nous sentir désabusés, nous retrouver dans des relations avec des personnes émotionnellement indisponibles ou toxiques.',
    'home.team.quote': 'Nous avons gaspillé de l\'énergie émotionnelle sur des personnes qui n\'étaient pas sérieuses. Nous avons fait face au ghosting, à l\'anxiété, au doute de soi et à la confusion. Et nous savions qu\'il devait y avoir une meilleure façon.',
    'home.team.story3': 'C\'est pourquoi nous avons créé The Date Alchemy — le service de rencontres que nous aurions aimé avoir.',
    'home.team.story4': 'Une expérience respectueuse et enrichissante conçue pour de vraies connexions significatives. Nous ne pouvons pas promettre l\'amour, mais nous pouvons promettre l\'effort, le professionnalisme, l\'intégrité, un investissement authentique dans votre parcours, et un processus éprouvé qui a mené à des relations durables.',
    
    // Nominate section (French)
    'home.nominate.title': 'Répandez l\'amour',
    'home.nominate.subtitle': 'Nominez un célibataire que vous connaissez',
    'home.nominate.description': 'Il ou elle pourra vous remercier une fois qu\'on lui aura trouvé sa moitié !',
    'home.nominate.cta': 'Nominer quelqu\'un',
    
    // Blog section (French)
    'home.blog.latestTitle': 'Derniers Conseils',
    'home.blog.viewAll': 'Voir Tous les Articles',
    
    // Comparison Table (French)
    'home.comparison.title': 'Pourquoi choisir The Date Alchemy plutôt que les apps de rencontres ?',
    'home.comparison.subtitle': 'Basé sur les études du Pew Research Center sur les expériences de rencontres en ligne',
    'home.comparison.headerIssue': 'Problème',
    'home.comparison.headerDatingApps': 'Apps de Rencontres (Pew Research)',
    'home.comparison.headerDateAlchemy': 'The Date Alchemy',
    'home.comparison.userMindset.issue': 'État d\'Esprit des Utilisateurs',
    'home.comparison.userMindset.datingApps': 'Pas sérieux : Près de 50% veulent "une relation sans engagement"',
    'home.comparison.userMindset.dateAlchemy': '100% des membres sont intentionnels et sérieux dans la recherche d\'un partenaire de vie',
    'home.comparison.confidentiality.issue': 'Confidentialité',
    'home.comparison.confidentiality.datingApps': '0% de confidentialité. Photos et noms exposés publiquement',
    'home.comparison.confidentiality.dateAlchemy': '100% de confidentialité. Détails partagés uniquement avec des matches appropriés, avec accord des deux parties, un à la fois',
    'home.comparison.timeCost.issue': 'Coût en Temps',
    'home.comparison.timeCost.datingApps': '40+ heures de swipe par mois',
    'home.comparison.timeCost.dateAlchemy': '~40 min : formulaire + consultation',
    'home.comparison.overallExperience.issue': 'Expérience Globale',
    'home.comparison.overallExperience.datingApps': '46% disent que leur expérience est négative',
    'home.comparison.overallExperience.dateAlchemy': '88% des rendez-vous sont rapportés comme de bonnes expériences. Les présentations sur mesure garantissent la satisfaction',
    'home.comparison.scamsFakeProfiles.issue': 'Arnaques / Faux Profils',
    'home.comparison.scamsFakeProfiles.datingApps': '52% ont rencontré un arnaqueur',
    'home.comparison.scamsFakeProfiles.dateAlchemy': 'Tous les profils vérifiés et validés',
    'home.comparison.disrespectfulMessages.issue': 'Messages Irrespectueux',
    'home.comparison.disrespectfulMessages.datingApps': '38% ont reçu des messages sexuels non sollicités',
    'home.comparison.disrespectfulMessages.dateAlchemy': 'Zéro instance d\'irrespect',
    'home.comparison.persistentContact.issue': 'Contact Persistant / Non Désiré',
    'home.comparison.persistentContact.datingApps': '30% ont continué à contacter après rejet',
    'home.comparison.persistentContact.dateAlchemy': 'Vous gardez le contrôle — détails de contact partagés seulement quand vous le voulez',
    'home.comparison.insultsThreats.issue': 'Insultes / Menaces',
    'home.comparison.insultsThreats.datingApps': '24% insultés ; 6% menacés',
    'home.comparison.insultsThreats.dateAlchemy': 'Espace sûr, tolérance zéro pour l\'irrespect',
    'home.comparison.source': 'Source : Étude du Pew Research Center sur les expériences de rencontres en ligne',
    'home.comparison.cta': 'Découvrez la Différence',
    
    // Language switcher (French)
    'language.english': 'English',
    'language.french': 'Français',
    
    // Singles Socials page (French)
    'singles.hero.title': 'Singles Socials',
    'singles.hero.subtitle': 'Prêt(e) à ajouter plus de plaisir, d\'amitié et de connexion à votre vie ? Recevez une invitation à un dîner ou brunch intime avec des célibataires soigneusement sélectionnés selon votre énergie.',
    'singles.hero.cta': 'S\'inscrire Maintenant',
    
    'singles.expect.title': 'À quoi s\'attendre ?',
    'singles.expect.description': 'Un brunch ou dîner intime dans l\'un des restaurants les mieux notés de Maurice — où vous rejoindrez un groupe sélectionné de 6 à 8 célibataires partageant la même énergie, assortis par ambiance et âge. Avec un nombre égal d\'hommes et de femmes, c\'est le cadre détendu parfait pour partager des histoires, échanger des idées et se connecter autour d\'excellentes conversations, de délicieux plats et de brise-glaces.',
    
    'singles.howItWorks.title': 'Comment ça fonctionne ?',
    'singles.howItWorks.step1.title': 'Inscrivez-vous',
    'singles.howItWorks.step1.description': 'Sélectionnez votre événement et parlez-nous un peu de vous en remplissant notre formulaire. Plus nous en savons, mieux nous pouvons vous connecter avec les bonnes personnes. Nous fermons les inscriptions 10 jours avant chaque événement pour soigneusement sélectionner la chimie à table — pensez donc à anticiper et à postuler tôt !',
    'singles.howItWorks.step2.title': 'Nous organisons des tables pour des conversations intéressantes',
    'singles.howItWorks.step2.description': 'Dites adieu aux rencontres gênantes et bonjour aux conversations stimulantes avec des personnes partageant les mêmes idées. Nous sélectionnons des invités de votre groupe d\'âge et à une étape similaire de leur vie et assurons un mélange équilibré d\'hommes et de femmes.',
    'singles.howItWorks.step3.title': 'Recevez votre invitation',
    'singles.howItWorks.step3.description': 'Si nous avons la bonne table pour vous, vous recevrez votre invitation dans le prochain jour ouvrable. Sécurisez immédiatement votre place en achetant votre ticket — et préparez-vous pour une expérience inoubliable !',
    'singles.howItWorks.note': 'Nous prenons soin d\'avoir la bonne ambiance et ne nous précipitons donc pas pour former une table. Nous ne vous contactons que lorsque nous avons le bon groupe de convives pour vous. Si ce n\'est pas pour cet événement, vous serez considéré(e) pour le prochain à moins que vous ne nous demandiez de vous retirer.',
    
    'singles.whyAttend.title': 'Pourquoi participer ?',
    'singles.whyAttend.meetPeople.title': 'Rencontrer de nouvelles personnes',
    'singles.whyAttend.meetPeople.description': 'Brisez la glace et connectez-vous avec des célibataires de votre groupe d\'âge triés sur le volet pour leur style de vie similaire et leurs intérêts partagés.',
    'singles.whyAttend.goodTime.title': 'Passer un bon moment',
    'singles.whyAttend.goodTime.description': 'Profitez d\'un moment détendu de rires, de bonne nourriture et d\'excellente compagnie dans un environnement où il n\'y a aucune pression et où il s\'agit de s\'amuser et de créer de nouvelles connexions.',
    'singles.whyAttend.connection.title': 'Vivre une connexion authentique',
    'singles.whyAttend.connection.description': 'Dès le moment où vous vous asseyez, vous ressentirez la chaleur de conversations authentiques dans un cadre accueillant et intime, et la joie de construire de nouvelles amitiés.',
    
    'singles.events.title': 'Nos Prochains Événements',
    'singles.events.ticketNote': '(Prix du ticket - nourriture et boissons séparées)',
    'singles.events.empty': 'Aucun événement à venir pour le moment. Revenez bientôt !',
    
    'singles.pricing.title': '🍷 Ticket : 1000 Rs',
    'singles.pricing.vatNote': '(TVA non incluse)',
    'singles.pricing.description': '(Ce prix n\'inclut pas la nourriture ou les boissons. Vous payez directement au restaurant pour ce que vous commandez)',
    'singles.pricing.application': 'Votre candidature sera considérée pour l\'événement à venir. Si nous ne pouvons pas vous inclure, vous serez automatiquement considéré(e) pour les futurs Singles Socials.',
    'singles.pricing.timing': 'Nous envoyons les invitations 4 à 2 semaines avant l\'événement, alors assurez-vous de postuler tôt.',
    'singles.pricing.disclaimer': 'Veuillez noter que si vous ne recevez pas d\'invitation de notre part, cela signifie que nous estimons ne pas avoir eu la bonne table pour vous.',
    
    'singles.faq.title': 'FAQ',
    'singles.faq.q1.question': 'Pourquoi choisir Singles Socials ?',
    'singles.faq.q1.answer': 'Les célibataires nous disent qu\'ils sont de plus en plus frustrés par les applications de rencontres en ligne, en raison des préoccupations de sécurité, du catfishing, des faux profils, du ghosting et des comportements inappropriés. Si vous ressentez la même chose, vous n\'êtes pas seul. Beaucoup cherchent de meilleures façons de rencontrer des célibataires de qualité, dans la vraie vie. Singles Socials est la réponse pour ceux qui veulent une façon plus authentique de rencontrer les autres dans un cadre de groupe sûr, détendu et amusant, entourés d\'individus authentiques qui valorisent la socialisation et la création de connexions significatives en personne.',
    'singles.faq.q2.question': 'Comment les invités sont-ils placés à table ?',
    'singles.faq.q2.answer': 'Les invités sont assis en petits groupes de 6 à 8, soigneusement sélectionnés pour assurer un mélange d\'hommes et de femmes partageant les mêmes idées. Nous utilisons les réponses de notre questionnaire pour associer les invités avec des compagnons de table compatibles.',
    'singles.faq.q3.question': 'Y a-t-il un code vestimentaire pour l\'événement ?',
    'singles.faq.q3.answer': 'Bien qu\'il n\'y ait pas de code vestimentaire strict, nous recommandons une tenue décontractée chic. N\'hésitez pas à vous habiller confortablement mais avec style pour l\'occasion.',
    'singles.faq.q4.question': 'Puis-je amener un ami à l\'événement ?',
    'singles.faq.q4.answer': 'Nous encourageons les participants à venir seuls pour maximiser l\'opportunité pour chacun de rencontrer de nouvelles personnes et favoriser les connexions. Cependant, si vous souhaitez amener un ami qui partage vos idées et qui est dans le même groupe d\'âge que vous, envoyez-nous un email à hello@thedatealchemy.com et nous essaierons de nous accommoder.',
    'singles.faq.q5.question': 'J\'ai acheté le billet mais je ne peux pas y aller',
    'singles.faq.q5.answer': 'Les billets ne sont pas remboursables mais ne vous inquiétez pas, vous pouvez toujours l\'utiliser pour un autre événement si vous annulez 1 semaine avant.',
    'singles.faq.q6.question': 'Comment le restaurant est-il sélectionné ?',
    'singles.faq.q6.answer': 'Les restaurants sont sélectionnés pour leur ambiance élégante, leur nourriture et leurs boissons fabuleuses. Nous sélectionnons des restaurants au centre de Maurice pour une commodité maximale pour tous les invités.',
    'singles.faq.q7.question': 'Y a-t-il toujours 6 à 8 invités à table ?',
    'singles.faq.q7.answer': 'Nous nous concentrons sur la création de tables de 6 à 8, avec un nombre égal d\'hommes et de femmes. Parfois, cependant, il peut y avoir 4 ou 6 invités, selon la disponibilité, le mélange de membres et la présence une nuit particulière (malgré nos meilleurs efforts, certaines annulations se produisent en raison de maladie ou d\'urgences).',
    'singles.faq.q8.question': 'Comment et quand saurai-je si je suis confirmé pour un dîner ou un brunch ?',
    'singles.faq.q8.answer': 'Dès réception de votre inscription, notre équipe évalue si elle peut vous ajouter à une table et s\'assure de la chimie de la table. Si vous êtes invité(e), vous recevrez une invitation par email dans le prochain jour ouvrable. Vous devrez alors effectuer votre paiement pour sécuriser votre place. Veuillez noter que nous finalisons toutes les listes d\'invités 10 jours avant l\'événement, nous vous recommandons donc de postuler le plus tôt possible pour garantir votre place.',
    'singles.faq.q9.question': 'Comment localiser notre table au restaurant ?',
    'singles.faq.q9.answer': 'Nous vous indiquerons le nom de famille sous lequel la réservation est faite. Veuillez arriver à l\'heure, prêt pour une soirée amusante !',
    'singles.faq.q10.question': 'Comment le dîner ou le brunch est-il payé ?',
    'singles.faq.q10.answer': 'Comme pour tout dîner ou brunch entre amis, vous pouvez convenir à la fin de soit diviser la facture en 6, soit de payer individuellement (si les gens ont commandé différentes boissons ou plats). C\'est à vous de décider !',
    'singles.faq.q11.question': 'Comment demander le numéro de téléphone d\'un autre membre après un événement ?',
    'singles.faq.q11.answer': 'Après chaque événement, notre équipe d\'événements vous enverra un email, demandant des commentaires. Dans cet email, vous pouvez demander les numéros de téléphone des membres. Nous demandons que les membres n\'échangent pas de numéros devant les autres à table, par respect. Notre service d\'échange de numéros de téléphone supprime toute gêne et assure un intérêt mutuel.',
    'singles.faq.q12.question': 'Comment puis-je contacter les organisateurs de l\'événement si j\'ai d\'autres questions ?',
    'singles.faq.q12.answer': 'Pour toute question ou demande supplémentaire, n\'hésitez pas à nous contacter par email à hello@thedatealchemy.com. Nous sommes là pour vous aider !'
  }
};