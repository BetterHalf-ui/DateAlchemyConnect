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
    'nav.applyNow': 'Apply Now',
    'nav.network': 'Join the Network',
    'team.yourAlchemists': 'Your Alchemists',
    
    // Common
    'common.learnMore': 'Learn More',
    'common.getStarted': 'Get Started',
    'common.readMore': 'Read More',
    'common.loading': 'Loading...',
    
    // Home page
    'home.hero.title': 'Redefining the Dating Experience for Global Professionals in Mauritius',
    'home.hero.subtitle': 'Premium matchmaking for intentional relationships. Discreet, personalized, and effective.',
    'home.hero.cta': 'Apply Now',
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
    
    'home.membership.feature1': '**Targeted introductions** with carefully selected, met, and vetted singles who match your standards, all ready for an authentic relationship.',
    'home.membership.feature2': '**In-depth compatibility assessment** based on your criteria, lifestyle, goals, but also your true relationship needs (The Date Alchemy Needs Compatibility Score™).',
    'home.membership.feature3': '**Human-centered matching**: unlike algorithms designed to keep you online, we rely on intuition and human experience. Each match is carefully chosen, and you meet them in person.',
    'home.membership.feature4': '**Attachment-style aware matching**: we use attachment theory science to avoid toxic incompatibilities from the start.',
    'home.membership.feature5': '**Self-validation** from detailed profiles: you always maintain control.',
    'home.membership.feature6': '**Full concierge service**: we book, confirm and prepare the date — you just need to show up looking your best.',
    'home.membership.feature7': '**Post-date follow-up** handled for you — no ghosting, no awkward follow-ups.',
    'home.membership.bonus': '**Bonus**: invitations to private events (Singles Socials) — intimate brunches or dinners with hand-picked guests to foster real connections.',
    'home.membership.cta': 'Apply for Membership',
    
    'home.membership.innerWorkTitle': '2. Inner Work and Guidance',
    'home.membership.innerWorkDescription': 'We set you up for successful dates and healthier relationships',
    'home.membership.innerWorkSubtitle': 'Included in Your Membership:',
    
    'home.membership.innerWork1Title': '1) Full Relationship Readiness Self-Audit:',
    'home.membership.innerWork1Feature1': '**Your Needs Assessment**: Get clear on what you truly need in a relationship — not just what you\'re attracted to.',
    'home.membership.innerWork1Feature2': '**Attachment Style Assessment**: Understand how your attachment style influences the way you connect, respond, and bond in relationships (based on attachment theory by psychologists John Bowlby and Mary Ainsworth)',
    'home.membership.innerWork1Feature3': '**Dating Tendencies Assessment**: Identify unconscious dating patterns that may be holding you back (based on relationship scientist Logan Ury\'s work)',
    
    'home.membership.innerWork2Title': '2) Personalized Guidance to Date Intentionally and Confidently',
    'home.membership.innerWork2Feature1': '**Direct Access to Our Matchmaking Team** (via Whatsapp & Email): A discreet communication channel to dating experts who know you and your dating journey.',
    'home.membership.innerWork2Feature2': '**Pre-Date and Pre-Dating Advice in your Inbox**— Exactly When You Need It: Digestible emails to prepare you before the first date and second date with the most common pitfalls and winning moves from hundreds of client experiences.',
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
    'howItWorks.step1.description2': 'Within one business day, we\'ll review your submission to let you know if we have a potential match within our member base and share an in-depth assessment to better understand your needs in a relationship, attachment style and dating tendencies.',
    
    'howItWorks.step2.title': '02. Private Consultation',
    'howItWorks.step2.description1': 'Next, you\'ll meet with your personal matchmaker in a one-on-one video consultation. This conversation is designed to have a more in-depth understanding of who you are and what you are looking for.',
    'howItWorks.step2.description2': 'Following this, we craft a profile summary — which you\'ll review and approve — to be shared selectively only with potential matches who meet your criteria.',
    
    'howItWorks.step3.title': '03. Curated Introduction',
    'howItWorks.step3.description1': 'Once a mutually aligned connection is identified, we share both profiles for review. If there\'s mutual interest, we invite you to activate your annual membership so we can proceed with arranging your first date.',
    'howItWorks.step3.description2': 'We handle all the coordination with care and discretion, ensuring you meet someone genuinely aligned with your aspirations — in the right place, at the right time.',
    
    'howItWorks.step4.title': '04. Follow-up & Refinements',
    'howItWorks.step4.description1': 'After the introduction, what happens next is up to you — whether that\'s a second date or exploring a new connection.',
    'howItWorks.step4.description2': 'We always collect feedback after each date to refine our approach and evolve your experience in meaningful ways.',
    
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
    'howItWorks.finalCta.readyButton': 'Apply for Membership',
    'howItWorks.finalCta.notReadyTitle': 'Not ready to invest in a membership yet?',
    'howItWorks.finalCta.notReadyDescription': 'Join our free network to check if you match with one of our exceptional clients.',
    
    // Footer
    'footer.tagline': 'Redefining the dating experience for global professionals in Mauritius.',
    'footer.quickLinks': 'Quick Links',
    'footer.legal': 'Legal',
    'footer.contact': 'Contact',
    'footer.privacyPolicy': 'Privacy Policy',
    'footer.termsOfUse': 'Terms of Use',
    'footer.parentCompany': 'The Date Alchemy is part of Frolic Ltd, a Mauritius-registered company recognized for connecting expats and locals to each other and local businesses through our website frolic.mu, regular meetups and events.',
    
    // Network page
    'network.title': 'The Date Alchemy Network',
    'network.subtitle': 'Where real relationships begin — when the timing (and person) is right.',
    'network.description': 'Not quite ready to invest in our membership — but open to love if the right person comes along and ready to wait? You\'re in the right place.',
    'network.benefits.title': 'Complimentary. Confidential. Carefully considered.',
    'network.benefits.description': 'The Date Alchemy Network is for singles who are emotionally ready for a relationship — but not yet ready to join as a full client. It\'s free to join, and completely discreet.',
    'network.benefits.poolDescription': 'Once you\'re in our singles pool, we\'ll only reach out if we spot a strong mutual match with an active member.',
    'network.benefits.analogy': 'Think of it as being on the sidelines — close enough to the action, but not quite on the field.',
    'network.step1.title': 'Fill in your private profile',
    'network.step1.desc': 'Tell us who you are, what matters to you, and what you\'re looking for.',
    'network.step2.title': 'You\'re added to our curated singles pool',
    'network.step2.desc': 'We regularly review this pool for our members.',
    'network.step3.title': 'You\'ll hear from us if we spot a strong match',
    'network.step3.desc': 'We\'ll only reach out if we believe there\'s real potential on both sides.',
    'network.note.title': 'Please note:',
    'network.note.description': 'We prioritize matches between clients. As a free member of the Date Alchemy Network, we\'re not searching on your behalf — and you may not hear from us for a while.',
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
    'home.intro.p1': 'Finding a genuine connection in Mauritius isn\'t easy—especially when you\'re a busy professional with high standards.',
    'home.intro.p2': 'Dating apps promise endless options but often deliver disappointment: ghosting, mixed signals, and emotional detachment. They\'re designed to keep you swiping, not to help you connect. Most people aren\'t serious, and it takes a toll—over 80% of users report feeling emotionally drained or burnt out by online dating (Singles Report).',
    'home.intro.p3': 'At The Date Alchemy, we believe real connection is too important to leave to algorithms or chance. That\'s why we invite you to put yourself out there—intentionally, but discreetly and with the respect you deserve. We take care of the search, so you can focus on living your best life while love finds its way to you.',
    
    'home.expectations.title': 'What To Expect As A Member',
    'home.expectations.curated.title': 'Curated Introductions',
    'home.expectations.curated.desc': 'We introduce you to singles who meet your standards and share your vibe, are carefully interviewed and equally serious about finding a lifetime partner in Mauritius.',
    'home.expectations.privacy.title': 'Your Privacy is Our Priority',
    'home.expectations.privacy.desc': 'We protect your privacy like it\'s our own—your information is always safe, confidential, and never shared without your consent. Every introduction is handled with the utmost care and respect for your privacy.',
    'home.expectations.noPressure.title': 'Sans pressure',
    'home.expectations.noPressure.desc': 'No pressure from family to deal with. Meet your match for a coffee date, exchange numbers if you like, or date for months, or meet someone else who\'s a better fit. It\'s all on your terms.',
    'home.expectations.support.title': 'Thoughtful, Human Support',
    'home.expectations.support.desc': 'We\'re with you every step of the way—offering thoughtful guidance, logistical support, and post-date follow-ups. No ghosting, no guesswork— just respect and genuine support from people who truly care.',
    
    'home.cta.applyNow': 'Apply Now',
    'home.cta.notReady': 'Not ready to invest in a membership?',
    'home.cta.joinNetwork': 'Join our network for free to see if you are a match with one of our exceptional clients.',
    'home.cta.createProfile': 'Create your complimentary profile.',
    
    'home.stats.activeMembers': 'Active members',
    'home.stats.memberDesc': 'Our members are ambitious, fun, and dynamic—locals and expats alike, from all age groups. All looking for a committed relationship.',
    'home.stats.reviewNote': 'Our matchmakers review EVERY application',
    
    // Testimonials - Additional ones for image sections
    'home.testimonials.main': 'Thank you for a match that goes far beyond just an algorithm. You helped bring two hearts onto the same wavelength.',
    'home.testimonials.mainAuthor': '— COO, Tech Industry, 52',
    'home.testimonials.professional': 'The Date Alchemy promotes healthy relationships in a safe and confidential setting. Embarking on this journey has helped me listen more deeply to others and understand myself better—allowing me to grow into a better version of myself.',
    'home.testimonials.professionalAuthor': '— Scientist, 37',
    'home.testimonials.expert': 'I would wholeheartedly recommend The Date Alchemy to single professionals who may not have the time—or inclination—to navigate traditional matchmaking methods or dating apps.',
    'home.testimonials.expertAuthor': '— IT Professional, 32',
    
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
    
    // Trust section
    'home.trust.title': 'Trust Us - It Really Works',
    'home.trust.stat1': 'of setups result in real, face-to-face dates',
    'home.trust.stat2': 'of dates are reported as good experiences',
    'home.trust.stat3': 'lead to a second date',
    'home.trust.stat4': 'of our paid members are going strong with their better half',
    
    // Guarantees section
    'home.guarantees.title': 'Our Guarantees',
    'home.guarantees.guarantee1Title': 'First Quality Date Guaranteed Before Payment',
    'home.guarantees.guarantee1Description': 'Your initial consultation and matchmaking search are completely free. We\'ll only ask for payment once you say yes to a match and we\'ve planned the first date.',
    'home.guarantees.guarantee2Title': 'At least 4 High-Quality Introductions',
    'home.guarantees.guarantee2Description': 'We guarantee at least 4 high-quality introductions within 12 months — or we\'ll extend your membership at no extra cost. The 12-month period pauses when you start dating someone seriously.',
    'home.guarantees.guarantee3Title': 'Flexible Membership',
    'home.guarantees.guarantee3Description': 'Life happens. If you need to take a break for any reason, we\'ll pause your membership—no lost time, no penalties.',
    'home.guarantees.guarantee4Title': 'No Hidden Fees',
    'home.guarantees.guarantee4Description': 'Transparent pricing. No hidden costs, ever.',
    
    // Pricing section
    'home.pricing.membershipTitle': 'Membership price:',
    'home.pricing.membershipPeriod': 'For 1 year, VAT included',
    'home.pricing.membershipCompare': '… less than 1 night staycation in Mauritius',
    'home.pricing.urgencyMessage': 'Someone really special could be joining today. And the most sought-after singles tend to not stay single for long. Are you in the pool — or on the sidelines?',
    'home.pricing.priceIncrease': 'Prices are going up! So apply now!',
    'home.pricing.applyNow': 'Apply Now',
    'home.pricing.notReady': 'Not ready to invest in a membership?',
    'home.pricing.joinNetwork': 'Join our network for free to see if you are a match with one of our exceptional clients.',
    'home.pricing.createProfile': 'Create your complimentary profile.',
    
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
    'home.research.ctaButton': 'Apply for Membership',
    
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
    'home.hero.title': 'Une expérience de dating réinventée pour les professionnels cosmopolites à Maurice',
    'home.hero.subtitle': 'Service de mise en relation premium pour des relations intentionnelles. Discret, personnalisé et efficace.',
    'home.hero.cta': 'Devenir membre',
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
    
    'home.membership.feature1': '**Présentations ciblées** avec des célibataires soigneusement sélectionnés, rencontrés et correspondant à vos standards, tous prêts pour une relation authentique.',
    'home.membership.feature2': '**Évaluation approfondie de la compatibilité** selon vos critères, votre style de vie, vos objectifs, mais aussi vos véritables besoins en relation (The Date Alchemy Needs Compatibility Score™).',
    'home.membership.feature3': '**Mise en relation centrée sur l\'humain** : contrairement aux algorithmes conçus pour vous garder en ligne, nous faisons appel à l\'intuition et à l\'expérience humaine. Chaque match est choisi avec soin, et vous le rencontrez en personne.',
    'home.membership.feature4': '**Matching conscient des styles d\'attachement** : nous utilisons la science de la théorie de l\'attachement pour éviter les incompatibilités toxiques dès le départ.',
    'home.membership.feature5': '**Validation par vous-même** à partir de profils détaillés : vous gardez toujours le contrôle.',
    'home.membership.feature6': '**Service de conciergerie complet** : nous réservons, confirmons et préparons le rendez-vous — vous n\'avez plus qu\'à vous présenter sous votre meilleur jour.',
    'home.membership.feature7': '**Suivi après la rencontre** pris en charge pour vous — pas de ghosting, pas de relances maladroites.',
    'home.membership.bonus': '**Bonus** : invitations à des événements privés (Singles Socials) — brunchs ou dîners intimistes avec des invités triés sur le volet pour favoriser de vraies connexions.',
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
    'home.membership.innerWork2Feature2': '**Conseils avant chaque rencontre** : emails courts et efficaces pour éviter les pièges les plus courants et maximiser vos chances de succès.',
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
    'home.trust.stat4': 'de nos membres payants vivent aujourd\'hui une belle histoire avec leur moitié',
    
    // Guarantees section (French)
    'home.guarantees.title': 'Nos garanties',
    'home.guarantees.guarantee1Title': 'Premier rendez-vous de qualité garanti avant paiement',
    'home.guarantees.guarantee1Description': 'Votre consultation initiale et la recherche de votre première rencontre sont entièrement gratuites. Nous ne vous demanderons de payer que lorsque vous aurez accepté une mise en relation et que le premier rendez-vous aura été planifié.',
    'home.guarantees.guarantee2Title': 'Au moins 4 introductions de qualité',
    'home.guarantees.guarantee2Description': 'Nous vous garantissons au minimum 4 rencontres de qualité en 12 mois — sinon, nous prolongeons votre adhésion sans frais supplémentaires. La période de 12 mois se suspend dès que vous commencez une relation sérieuse.',
    'home.guarantees.guarantee3Title': 'Adhésion flexible',
    'home.guarantees.guarantee3Description': 'La vie est faite d\'imprévus. Si vous devez faire une pause, nous suspendons votre adhésion — aucun temps perdu ni pénalités.',
    'home.guarantees.guarantee4Title': 'Pas de frais cachés',
    'home.guarantees.guarantee4Description': 'Tarifs transparents. Aucun coût supplémentaire, jamais.',
    
    // Pricing section (French)
    'home.pricing.membershipTitle': 'Tarif d\'adhésion :',
    'home.pricing.membershipPeriod': 'Pour 1 an, TVA incluse',
    'home.pricing.membershipCompare': '… soit moins qu\'une nuitée en staycation à Maurice',
    'home.pricing.urgencyMessage': 'Aujourd\'hui, quelqu\'un d\'exceptionnel pourrait rejoindre nos membres. Et les célibataires les plus recherchés ne restent jamais célibataires longtemps. Êtes-vous prêt à être acteur de votre destin— ou à rester spectateur ?',
    'home.pricing.priceIncrease': 'Les prix vont augmenter ! Devenez membre dès maintenant !',
    'home.pricing.applyNow': 'Postuler Maintenant',
    'home.pricing.notReady': 'Pas prêt à investir dans une adhésion ?',
    'home.pricing.joinNetwork': 'Rejoignez notre réseau gratuitement pour voir si vous correspondez à l\'un de nos clients exceptionnels.',
    'home.pricing.createProfile': 'Créez votre profil gratuit.',
    
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
    'home.research.ctaButton': 'Postulez dès maintenant',

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
    'howItWorks.hero.ctaButton': 'Commencez votre candidature',
    'howItWorks.hero.consultationText': 'Séance de consultation professionnelle',
    
    'howItWorks.journey.title': 'Votre parcours d\'adhésion',
    'howItWorks.journey.subtitle': 'Un processus éprouvé pour de vraies rencontres',
    
    'howItWorks.step1.title': '01. Postulez pour devenir membre',
    'howItWorks.step1.description1': 'Vous commencerez par remplir notre formulaire de candidature : un questionnaire qui nous aide à comprendre votre parcours, vos valeurs et ce que vous recherchez vraiment chez un partenaire.',
    'howItWorks.step1.description2': 'Sous un jour ouvrable, nous examinerons votre demande pour vous indiquer si nous avons un profil correspondant parmi nos membres et nous partagerons avec vous une évaluation approfondie de vos besoins en matière de relation, de votre style d\'attachement et de vos habitudes de rencontre.',
    
    'howItWorks.step2.title': '02. Consultation privée',
    'howItWorks.step2.description1': 'Ensuite, vous rencontrerez votre matchmaker lors d\'une consultation individuelle en visioconférence. Cet échange permet d\'obtenir une compréhension plus approfondie de qui vous êtes et de ce que vous recherchez.',
    'howItWorks.step2.description2': 'À la suite de cet entretien, nous créons un résumé de votre profil — que vous pourrez relire et approuver — et que nous partagerons de manière sélective uniquement avec des profils correspondant à vos critères.',
    
    'howItWorks.step3.title': '03. Présentation sur mesure',
    'howItWorks.step3.description1': 'Lorsqu\'une compatibilité mutuelle est identifiée, nous partageons les deux profils pour examen. S\'il y a un intérêt réciproque, nous vous invitons à activer votre adhésion annuelle afin d\'organiser votre premier rendez-vous.',
    'howItWorks.step3.description2': 'Nous nous chargeons de toute la coordination avec soin et discrétion, afin que vous rencontriez une personne réellement alignée avec vos aspirations — au bon endroit, au bon moment.',
    
    'howItWorks.step4.title': '04. Ajustements et suivi',
    'howItWorks.step4.description1': 'Après la rencontre, la décision de ce qui suit vous appartient — que ce soit un deuxième rendez-vous ou la volonté d\'explorer une nouvelle rencontre.',
    'howItWorks.step4.description2': 'Nous recueillons toujours vos retours après chaque rendez-vous afin d\'affiner notre approche et d\'assurer une expérience positive.',
    
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
    'howItWorks.finalCta.readyButton': 'Devenir membre',
    'howItWorks.finalCta.notReadyTitle': 'Pas encore prêt(e) à investir dans une adhésion ?',
    'howItWorks.finalCta.notReadyDescription': 'Rejoignez gratuitement notre réseau pour vérifier si vous correspondez à l\'un(e) de nos client(e)s d\'exception.',
    
    // Footer (French)
    'footer.tagline': 'Une expérience de dating réinventée pour les professionnels cosmopolites à Maurice.',
    'footer.quickLinks': 'Liens Rapides',
    'footer.legal': 'Légal',
    'footer.contact': 'Contact',
    'footer.privacyPolicy': 'Politique de Confidentialité',
    'footer.termsOfUse': 'Conditions d\'Utilisation',
    'footer.parentCompany': 'The Date Alchemy est un service fourni par Frolic Ltd, une société enregistrée à Maurice, reconnue pour mettre en relation expatriés et locaux, ainsi que pour les connecter aux entreprises locales grâce à notre site web frolic.mu, à des meetups régulièrs et à des événements.',
    
    // Network page (French)
    'network.title': 'Le réseau The Date Alchemy',
    'network.subtitle': 'Là où commencent les vraies histoires — quand le bon moment (et la bonne personne) se présentent.',
    'network.description': 'Pas encore prêt(e) à investir dans notre adhésion — mais ouvert(e) à l\'amour si la bonne personne se présente, et prêt(e) à attendre ? Vous êtes au bon endroit.',
    'network.benefits.title': 'Gratuit. Confidentiel. Soigneusement sélectionnés.',
    'network.benefits.description': 'Le réseau The Date Alchemy s\'adresse aux célibataires émotionnellement prêts pour une relation, mais qui ne souhaitent pas encore devenir client(e) à part entière. L\'inscription est gratuite et totalement discrète.',
    'network.benefits.poolDescription': 'Une fois inscrit(e) dans notre "pool" de célibataires, nous vous contacterons uniquement si nous repérons une forte compatibilité mutuelle avec un membre actif.',
    'network.benefits.analogy': 'Pensez-y comme à être sur la touche — assez proche de l\'action, mais pas encore sur le terrain.',
    'network.step1.title': 'Remplissez votre profil privé',
    'network.step1.desc': 'Dites-nous qui vous êtes, ce qui compte pour vous et ce que vous recherchez.',
    'network.step2.title': 'Vous rejoignez notre pool de célibataires',
    'network.step2.desc': 'Nous passons régulièrement en revue ce pool pour nos membres.',
    'network.step3.title': 'Nous vous contacterons si nous trouvons une forte compatibilité',
    'network.step3.desc': 'Nous ne vous écrirons que si nous pensons qu\'il y a un véritable potentiel des deux côtés.',
    'network.note.title': 'À noter :',
    'network.note.description': 'Nous donnons la priorité aux mises en relation de nos membres, donc il est possible que vous ne receviez pas de nouvelles immédiatement. Mais nous sommes heureux que vous soyez ici — et c\'est un excellent premier pas.',
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
    'home.intro.p1': 'Trouver une véritable connexion à Maurice n\'est pas chose facile—surtout quand on est un professionnel occupé avec des standards élevés.',
    'home.intro.p2': 'Les applications de rencontres promettent des options infinies, mais livrent trop souvent déception et frustration : ghosting, signaux contradictoires, détachement émotionnel… Elles sont conçues pour vous faire swiper sans fin, pas pour vous aider à créer du lien. La plupart des utilisateurs ne cherchent rien de sérieux, et cela fait des dégâts—plus de 80 % déclarent se sentir épuisés ou désabusés par les rencontres en ligne (Rapport Singles).',
    'home.intro.p3': 'Chez The Date Alchemy, nous savons que rencontrer la bonne personne est trop important pour être laissé aux algorithmes ou au hasard. Nous vous invitons à vous lancer—intentionnellement, avec discrétion, et avec le respect que vous méritez. Nous faisons le travail de recherche et de sélection, pour que vous puissiez vous concentrer sur l\'essentiel : vivre pleinement votre vie pendant que l\'amour trouve naturellement son chemin vers vous.',
    
    'home.expectations.title': 'À quoi s\'attendre en tant que membre',
    'home.expectations.curated.title': 'Rencontres sélectionnées avec soin',
    'home.expectations.curated.desc': 'Nous vous présentons des célibataires qui répondent à vos critères, partagent votre énergie et votre vision, ont été soigneusement interviewés, et sont sincèrement engagés dans la recherche d\'un partenaire de vie à Maurice.',
    'home.expectations.privacy.title': 'Votre confidentialité, notre engagement absolu',
    'home.expectations.privacy.desc': 'Nous veillons sur votre vie privée comme sur la nôtre : vos informations restent strictement confidentielles et ne sont jamais partagées sans votre accord explicite. Chaque présentation est organisée avec la plus grande attention et un profond respect de votre vie privée.',
    'home.expectations.noPressure.title': 'Sans pression',
    'home.expectations.noPressure.desc': 'Prenez un café avec votre match, échangez vos coordonnées si vous le souhaitez, apprenez à vous mieux connaître ou laissez la place à une nouvelle rencontre plus alignée. Vous avancez à votre rythme, selon vos propres règles.',
    'home.expectations.support.title': 'Un accompagnement humain et précieux',
    'home.expectations.support.desc': 'Nous vous guidons à chaque étape : conseils personnalisés, assistance logistique, suivi attentif après vos rendez-vous. Pas de silence radio, pas d\'incertitudes —uniquement un soutien authentique, porté par des professionnels qui se préoccupent réellement de votre expérience.',
    
    'home.cta.applyNow': 'Postuler Maintenant',
    'home.cta.notReady': 'Pas encore prêt(e) à investir dans une adhésion ?',
    'home.cta.joinNetwork': 'Rejoignez gratuitement notre réseau pour découvrir si vous correspondez à l\'un(e) de nos clients exceptionnels.',
    'home.cta.createProfile': 'Créez votre profil gratuit.',
    
    'home.stats.activeMembers': 'Membres actifs',
    'home.stats.memberDesc': 'Nos membres sont ambitieux, pétillants et dynamiques — qu\'ils soient locaux ou expatriés, et de tous âges. Tous recherchent une relation sérieuse.',
    'home.stats.reviewNote': 'Nous examinons CHAQUE candidature.',
    
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
    
    // Language switcher (French)
    'language.english': 'English',
    'language.french': 'Français',
  }
};