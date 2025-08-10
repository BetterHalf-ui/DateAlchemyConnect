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
    
    // Banner
    'banner.rebrand': 'We\'ve rebranded from Betterhalf to The Date Alchemy!',
    'banner.learnMore': 'Learn more →',
    
    // Common
    'common.learnMore': 'Learn More',
    'common.getStarted': 'Get Started',
    'common.readMore': 'Read More',
    'common.loading': 'Loading...',
    
    // Home page
    'home.hero.title': 'Where Global Professionals Find Love in Mauritius',
    'home.hero.subtitle': 'Premium matchmaking for intentional relationships. Discreet, personalized, and effective.',
    'home.hero.cta': 'Start Your Journey',
    'home.hero.memberCount': 'Active Members',
    
    'home.help.title': 'How We Help',
    'home.help.curated.title': 'Curated Network',
    'home.help.curated.desc': 'Every member is personally vetted through video calls and background verification.',
    'home.help.personalized.title': 'Personalized Matching',
    'home.help.personalized.desc': 'We understand your values, lifestyle, and relationship goals to find compatible matches.',
    'home.help.discreet.title': 'Complete Discretion',
    'home.help.discreet.desc': 'Your privacy is paramount. We coordinate introductions with complete confidentiality.',
    
    // Testimonials section
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
    
    // Membership section
    'home.membership.title': 'The Date Alchemy Membership',
    'home.membership.subtitle': 'Everything you need for a healthier dating experience.',
    'home.membership.premiumTitle': '1. Premium Matchmaking',
    'home.membership.premiumSubtitle': 'Included in your membership:',
    'home.membership.feature1': '**Targeted introductions** with carefully selected, met, and vetted singles who match your standards, all ready for an authentic relationship.',
    'home.membership.feature2': '**In-depth compatibility assessment** based on your criteria, lifestyle, goals, but also your true relationship needs (The Date Alchemy Needs Compatibility Score™).',
    'home.membership.feature3': '**Human-centered matching**: unlike algorithms designed to keep you online, we rely on intuition and human experience. Each match is carefully chosen, and you meet them in person.',
    'home.membership.feature4': '**Professional, private consultation** to understand your aspirations and relationship goals.',
    'home.membership.feature5': '**Curated member community** of verified, serious-minded professionals.',
    'home.membership.feature6': '**Personalized post-date feedback** to refine future matches and improve your dating experience.',
    'home.membership.notIncludedTitle': '2. What We\'re Not',
    'home.membership.notIncludedSubtitle': 'This service is deliberately focused:',
    'home.membership.notIncluded1': '**Not a dating app**. We don\'t add more scrolling and swiping to your life.',
    'home.membership.notIncluded2': '**Not dating coaching**. We don\'t teach you how to date—we find you the right person to date.',
    'home.membership.notIncluded3': '**Not a social club**. We\'re focused on meaningful connections, not networking events.',
    'home.membership.supportTitle': '3. Ongoing Support',
    'home.membership.supportSubtitle': 'You\'re never on your own:',
    'home.membership.support1': '**Discreet consultation** before and after each introduction.',
    'home.membership.support2': '**Personalized feedback integration** to continuously improve match quality.',
    'home.membership.support3': '**Direct access to your matchmaker** via WhatsApp for ongoing support.',
    
    // How It Works section
    'home.howItWorks.title': 'Our Method',
    'home.howItWorks.subtitle': 'A proven process to find your ideal match',
    'home.howItWorks.step1Title': '01. Apply for Membership',
    'home.howItWorks.step1Description': 'Complete our thoughtful questionnaire to help us understand your background, values, and what you\'re truly seeking in a partner.',
    'home.howItWorks.step2Title': '02. Private Consultation',
    'home.howItWorks.step2Description': 'Meet your personal matchmaker in a one-on-one video consultation to craft your personalized profile and approach.',
    'home.howItWorks.step3Title': '03. Curated Introduction',
    'home.howItWorks.step3Description': 'We share a profile aligned with your preferences and, if there\'s mutual interest, you confirm your membership and we arrange your first date.',
    'home.howItWorks.step4Title': '04. Refinement & Follow-up',
    'home.howItWorks.step4Description': 'If the meeting didn\'t convince you, we gather your feedback to refine our selection and introduce you to someone who better matches what you\'re looking for.',
    'home.howItWorks.learnMore': 'Learn more about our method',
    
    // Research section
    'home.research.title': 'Research confirms: dating apps fall short',
    'home.research.subtitle': 'Leading research institutions and organizations have documented the harmful effects of dating applications. At The Date Alchemy, we offer a healthier, deeply human approach to finding love.',
    'home.research.guardianQuote': '"Dating apps are destroying people\'s souls"',
    'home.research.readArticle': '[Read article →]',
    'home.research.nytQuote': '"Years of swiping left and right has left users burnt out"',
    'home.research.pewQuote': '"57% of women using online dating receive unsolicited explicit content"',
    'home.research.readResearch': '[Read research →]',
    'home.research.singlesQuote': '"80% of users report emotional exhaustion from online dating"',
    'home.research.readReport': '[Read report →]',
    'home.research.stanfordQuote': '"Two-thirds of Tinder users are already in relationships"',
    'home.research.readStudy': '[Read study →]',
    'home.research.flindersQuote': '"Dating apps linked to poorer mental health and wellbeing"',
    'home.research.ctaTitle': 'Ready for a healthier dating experience?',
    'home.research.ctaSubtitle': 'Skip the apps. Avoid the burnout. Find authentic connection through our human-centered, proven approach.',
    'home.research.ctaButton': 'Apply Now',
    
    // Trust section
    'home.trust.title': 'Trusted by Professionals Across Mauritius',
    'home.trust.stat1': '95% Success Rate',
    'home.trust.stat2': '200+ Happy Couples',
    'home.trust.stat3': '3 Years of Excellence',
    'home.trust.stat4': '100% Confidential',
    
    // Guarantees section
    'home.guarantees.title': 'Our Commitments to You',
    'home.guarantees.guarantee1Title': 'Complete Confidentiality',
    'home.guarantees.guarantee1Description': 'Your consultation is completely private and confidential.',
    'home.guarantees.guarantee2Title': 'Verified Members Only',
    'home.guarantees.guarantee2Description': 'Every member undergoes thorough verification and background checks.',
    'home.guarantees.guarantee3Title': 'Quality Over Quantity',
    'home.guarantees.guarantee3Description': 'We focus on meaningful connections, not endless introductions.',
    'home.guarantees.guarantee4Title': 'Personal Attention',
    'home.guarantees.guarantee4Description': 'Your dedicated matchmaker provides ongoing support throughout your journey.',
    
    // Team section
    'home.team.title': 'Your Alchemists',
    'home.team.subtitle': 'The passionate team behind The Date Alchemy',
    'home.team.story1': 'We met through a mutual friend at a house party in 2017. Three hours of talking led to years of shared adventures, dreams, and now, a life together.',
    'home.team.story2': 'Both of us experienced the frustration of modern dating firsthand—the endless swiping, the superficial connections, the exhaustion of trying to find something real in a digital world that often felt anything but.',
    'home.team.story3': 'That\'s why we created The Date Alchemy—the dating service we wish we\'d had.',
    'home.team.story4': 'A respectful, empowering experience designed to foster genuine, deep connections. We don\'t promise love, but we promise our complete commitment: professionalism, integrity, sincere involvement in your journey, and a proven process that has led to lasting stories.',
    
    // Nominate section
    'home.nominate.title': 'Spread the Love',
    'home.nominate.subtitle': 'Know a single person ready to meet the right person?',
    'home.nominate.description': 'Nominate them—anonymously or not—they might just thank you soon!',
    'home.nominate.cta': 'Nominate Someone',
    
    // Pricing section
    'home.pricing.membershipTitle': 'Membership',
    'home.pricing.membershipPeriod': '1 Year / Until You Find Love',
    'home.pricing.membershipCompare': 'Compare: Average dating app user spends Rs 12,000+ annually',
    'home.pricing.urgencyMessage': 'Limited spots available',
    'home.pricing.priceIncrease': 'Price increases to Rs 10,000 after December 2024',
    'home.pricing.applyNow': 'Apply Now',
    'home.pricing.notReady': 'Not ready to commit yet?',
    'home.pricing.joinNetwork': 'Join The Date Alchemy Network',
    'home.pricing.createProfile': 'Create a profile and we\'ll reach out if we find a strong match',
    
    // Journey section
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
    
    // FAQ Section
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
    
    // Footer
    'footer.tagline': 'Redefining the dating experience for global professionals in Mauritius.',
    'footer.quickLinks': 'Quick Links',
    'footer.legal': 'Legal',
    'footer.contact': 'Contact',
    'footer.privacyPolicy': 'Privacy Policy',
    'footer.termsOfUse': 'Terms of Use',
    'footer.company.description': 'The Date Alchemy is part of Frolic Ltd, a Mauritius-registered company recognized for connecting expats and locals to each other and local businesses through our website frolic.mu, regular meetups and events.',
    
    // Network page
    'network.title': 'The Date Alchemy Network',
    'network.subtitle': 'Where real relationships begin — when the timing (and person) is right.',
    'network.description': 'Not quite ready to invest in our membership — but open to love if the right person comes along and ready to wait? You\'re in the right place.',
    'network.benefits.title': 'Complimentary. Confidential. Carefully considered.',
    'network.benefits.description': 'The Date Alchemy Network is for singles who are emotionally ready for a relationship — but not yet ready to join as a full client. It\'s free to join, and completely discreet.',
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
    
    // Language switcher
    'language.english': 'English',
    'language.french': 'Français',
  },
  
  fr: {
    // Navigation (French)
    'nav.home': 'Accueil',
    'nav.howItWorks': 'Notre méthode',
    'nav.insights': 'Conseils',
    'nav.applyNow': 'Postuler',
    'nav.network': 'Rejoindre le réseau',
    'team.yourAlchemists': 'Vos Alchimistes',
    
    // Banner (French)
    'banner.rebrand': 'Nous avons changé de nom : Betterhalf devient The Date Alchemy !',
    'banner.learnMore': 'En savoir plus',
    
    // Common (French)
    'common.learnMore': 'En savoir plus',
    'common.getStarted': 'Commencer',
    'common.readMore': 'Lire plus',
    'common.loading': 'Chargement...',
    
    // Home page (French)
    'home.hero.title': 'Où les professionnels connectés au monde trouvent l\'amour à Maurice',
    'home.hero.subtitle': 'L\'expérience de dating réinventée pour les professionnels connectés au monde à Maurice.',
    'home.hero.cta': 'Commencez votre parcours',
    'home.hero.memberCount': 'Membres Actifs',
    
    'home.help.title': 'Comment nous vous aidons',
    'home.help.curated.title': 'Réseau sélectionné',
    'home.help.curated.desc': 'Chaque membre est personnellement vérifié via des appels vidéo et une vérification des antécédents.',
    'home.help.personalized.title': 'Matching personnalisé',
    'home.help.personalized.desc': 'Nous comprenons vos valeurs, votre style de vie et vos objectifs relationnels pour trouver des partenaires compatibles.',
    'home.help.discreet.title': 'Discrétion totale',
    'home.help.discreet.desc': 'Votre vie privée est primordiale. Nous coordonnons les présentations en toute confidentialité.',
    
    // Testimonials section (French)
    'home.testimonials.title': 'Ce que disent nos membres',
    'home.testimonials.subtitle': 'Tous les témoignages proviennent de vrais clients — n\'hésitez pas à nous demander un contact si vous souhaitez vérifier leur expérience.',
    'home.testimonials.testimonial1': '« Grâce à The Date Alchemy, j\'ai trouvé l\'amour. L\'équipe a toujours été là pour me soutenir discrètement et me conseiller avec expertise sans jamais devenir trop intrusive. Merci pour votre professionnalisme et, surtout, merci d\'être là. »',
    'home.testimonials.author1': '— Vétérinaire, 30 ans',
    'home.testimonials.testimonial2': '« The Date Alchemy est de loin la meilleure agence de rencontres à Maurice. L\'équipe est très dévouée et s\'engage à assurer une expérience fluide et sans faille pour les membres. »',
    'home.testimonials.author2': '— Consultant IA, 41 ans',
    'home.testimonials.testimonial3': '« En plus des profils détaillés, The Date Alchemy propose également des évaluations de personnalité, permettant aux utilisateurs d\'acquérir une conscience de soi plus profonde et de grandir individuellement avant de rencontrer un partenaire potentiel. »',
    'home.testimonials.author3': '— Professionnel IT, 32 ans',
    'home.testimonials.testimonial4': '« La communication avec l\'équipe est ouverte, cohérente et collaborative, que ce soit sur Whatsapp ou via les newsletters partagées par e-mail. Les commentaires sont encouragés après chaque rendez-vous, ce qui aide à créer un environnement de soutien. »',
    'home.testimonials.author4': '— Scientifique, 37 ans',
    
    // Membership section (French)
    'home.membership.title': 'L\'adhésion The Date Alchemy',
    'home.membership.subtitle': 'Tout ce dont vous avez besoin pour une expérience de rencontres plus saine.',
    'home.membership.premiumTitle': '1. Matchmaking premium',
    'home.membership.premiumSubtitle': 'Inclus dans votre adhésion :',
    'home.membership.feature1': '**Présentations ciblées** avec des célibataires soigneusement sélectionnés, rencontrés et vérifiés qui correspondent à vos critères, tous prêts pour une relation authentique.',
    'home.membership.feature2': '**Évaluation approfondie de la compatibilité** basée sur vos critères, votre style de vie, vos objectifs, mais aussi vos véritables besoins relationnels (The Date Alchemy Needs Compatibility Score™).',
    'home.membership.feature3': '**Matching centré sur l\'humain** : contrairement aux algorithmes conçus pour vous garder en ligne, nous nous fions à l\'intuition et à l\'expérience humaine. Chaque match est soigneusement choisi, et vous les rencontrez en personne.',
    'home.membership.feature4': '**Consultation professionnelle et privée** pour comprendre vos aspirations et objectifs relationnels.',
    'home.membership.feature5': '**Communauté de membres sélectionnés** de professionnels vérifiés et sérieux.',
    'home.membership.feature6': '**Retours personnalisés après rendez-vous** pour affiner les futurs matchs et améliorer votre expérience de rencontres.',
    'home.membership.notIncludedTitle': '2. Ce que nous ne sommes pas',
    'home.membership.notIncludedSubtitle': 'Ce service est délibérément ciblé :',
    'home.membership.notIncluded1': '**Pas une app de rencontres**. Nous n\'ajoutons pas plus de scrolling et de swipe à votre vie.',
    'home.membership.notIncluded2': '**Pas du coaching de rencontres**. Nous ne vous apprenons pas comment avoir des rendez-vous — nous vous trouvons la bonne personne avec qui sortir.',
    'home.membership.notIncluded3': '**Pas un club social**. Nous nous concentrons sur les connexions significatives, pas sur les événements de networking.',
    'home.membership.supportTitle': '3. Accompagnement continu',
    'home.membership.supportSubtitle': 'Vous n\'êtes jamais seul(e) :',
    'home.membership.support1': '**Consultation discrète** avant et après chaque présentation.',
    'home.membership.support2': '**Intégration de retours personnalisés** pour améliorer continuellement la qualité des matchs.',
    'home.membership.support3': '**Accès direct à votre matchmaker** via WhatsApp pour un soutien continu.',
    
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
    'home.research.title': 'Les recherches sont formelles : les applis de rencontres ne sont pas à la hauteur',
    'home.research.subtitle': 'Des institutions et organismes de recherche de premier plan ont documenté les effets délétères des applications de rencontres. Chez The Date Alchemy, nous proposons une approche plus saine et profondément humaine pour trouver l\'amour.',
    'home.research.guardianQuote': '« Les applications de rencontres détruisent l\'âme »',
    'home.research.readArticle': '[Lire l\'article →]',
    'home.research.nytQuote': '« Des années à swiper ont laissé les utilisateurs épuisés »',
    'home.research.pewQuote': '« 57 % des femmes rencontrant en ligne reçoivent du contenu explicite non sollicité »',
    'home.research.readResearch': '[Lire l\'étude →]',
    'home.research.singlesQuote': '« 80 % des utilisateurs déclarent un épuisement émotionnel lié aux rencontres en ligne »',
    'home.research.readReport': '[Lire le rapport →]',
    'home.research.stanfordQuote': '« Deux tiers des utilisateurs de Tinder sont déjà en couple »',
    'home.research.readStudy': '[Lire l\'étude →]',
    'home.research.flindersQuote': '« Les applis de rencontres liées à une moins bonne santé mentale et bien-être »',
    'home.research.ctaTitle': 'Prêt(e) pour une expérience de rencontres plus saine ?',
    'home.research.ctaSubtitle': 'Oubliez les applis. Évitez l\'épuisement. Trouvez une connexion authentique grâce à notre approche humaine et éprouvée.',
    'home.research.ctaButton': 'Postulez dès maintenant',
    
    // Trust section (French)
    'home.trust.title': 'Fait confiance par les professionnels à travers Maurice',
    'home.trust.stat1': '95% de Taux de Réussite',
    'home.trust.stat2': '200+ Couples Heureux',
    'home.trust.stat3': '3 Années d\'Excellence',
    'home.trust.stat4': '100% Confidentiel',
    
    // Guarantees section (French)
    'home.guarantees.title': 'Nos engagements envers vous',
    'home.guarantees.guarantee1Title': 'Confidentialité complète',
    'home.guarantees.guarantee1Description': 'Votre consultation est complètement privée et confidentielle.',
    'home.guarantees.guarantee2Title': 'Membres vérifiés uniquement',
    'home.guarantees.guarantee2Description': 'Chaque membre subit une vérification approfondie et des vérifications d\'antécédents.',
    'home.guarantees.guarantee3Title': 'Qualité plutôt que quantité',
    'home.guarantees.guarantee3Description': 'Nous nous concentrons sur les connexions significatives, pas sur les présentations sans fin.',
    'home.guarantees.guarantee4Title': 'Attention personnelle',
    'home.guarantees.guarantee4Description': 'Votre matchmaker dédié vous offre un soutien continu tout au long de votre parcours.',
    
    // Team section (French)
    'home.team.title': 'Vos Alchimistes',
    'home.team.subtitle': 'L\'équipe passionnée derrière The Date Alchemy',
    'home.team.story1': 'Nous nous sommes rencontrés par l\'intermédiaire d\'un ami commun lors d\'une fête à la maison en 2017. Trois heures de conversation ont mené à des années d\'aventures partagées, de rêves, et maintenant, une vie ensemble.',
    'home.team.story2': 'Nous avons tous les deux vécu la frustration du dating moderne de première main — le swipe sans fin, les connexions superficielles, l\'épuisement d\'essayer de trouver quelque chose de réel dans un monde numérique qui semblait souvent tout sauf cela.',
    'home.team.story3': 'C\'est pourquoi nous avons créé The Date Alchemy — le service de rencontres que nous aurions rêvé d\'avoir.',
    'home.team.story4': 'Une expérience respectueuse, valorisante et pensée pour favoriser de véritables connexions profondes. Nous ne promettons pas l\'amour, mais nous vous promettons notre engagement total : professionnalisme, intégrité, implication sincère dans votre parcours et un processus éprouvé qui a mené à des histoires durables.',
    
    // Nominate section (French)
    'home.nominate.title': 'Répandez l\'amour',
    'home.nominate.subtitle': 'Connaissez-vous un célibataire prêt à rencontrer la bonne personne ?',
    'home.nominate.description': 'Nominez-le/la — anonymement ou pas - ils pourraient bien vous remercier bientôt !',
    'home.nominate.cta': 'Nominer quelqu\'un',
    
    // Pricing section (French)
    'home.pricing.membershipTitle': 'Adhésion',
    'home.pricing.membershipPeriod': '1 An / Jusqu\'à ce que vous trouviez l\'amour',
    'home.pricing.membershipCompare': 'Comparaison : L\'utilisateur moyen d\'app de rencontres dépense plus de 12 000 Rs par an',
    'home.pricing.urgencyMessage': 'Places limitées disponibles',
    'home.pricing.priceIncrease': 'Le prix augmente à 10 000 Rs après décembre 2024',
    'home.pricing.applyNow': 'Postuler maintenant',
    'home.pricing.notReady': 'Pas encore prêt(e) à vous engager ?',
    'home.pricing.joinNetwork': 'Rejoignez le réseau The Date Alchemy',
    'home.pricing.createProfile': 'Créez un profil et nous vous contacterons si nous trouvons un match solide',
    
    // Journey section (French)
    'home.journey.step1.title': 'Postulez pour l\'adhésion',
    'home.journey.step1.desc': 'Vous commencerez par compléter notre candidature initiale : un questionnaire qui nous aide à comprendre votre background, vos valeurs et ce que vous cherchez vraiment chez un partenaire.',
    'home.journey.step2.title': 'Consultation privée',
    'home.journey.step2.desc': 'Ensuite, vous rencontrerez votre matchmaker personnel dans une consultation vidéo en tête-à-tête pour créer votre profil personnalisé.',
    'home.journey.step3.title': 'Présentation sélectionnée',
    'home.journey.step3.desc': 'Une fois qu\'une connexion mutuellement alignée est identifiée, nous coordonnons votre premier rendez-vous avec une discrétion et un soin complets.',
    'home.journey.step4.title': 'Affinement et suivi',
    'home.journey.step4.desc': 'Après chaque présentation, nous recueillons vos commentaires pour affiner continuellement notre approche et garantir des connexions significatives.',
    
    'home.blog.title': 'Conseils et astuces de rencontres',
    'home.blog.subtitle': 'Conseils d\'experts pour des rencontres intentionnelles',
    
    'home.newsletter.title': 'Les secrets de l\'alchimie — directement dans votre boîte mail',
    'home.newsletter.subtitle': 'Rejoignez plus de 1 000 célibataires avisés qui reçoivent tous les 15 jours nos conseils exclusifs pour réussir leurs rencontres.',
    'home.newsletter.placeholder': 'Entrez votre adresse e-mail',
    'home.newsletter.cta': 'S\'abonner',
    'home.newsletter.disclaimer': 'En vous abonnant, vous acceptez de recevoir notre newsletter. Vous pouvez vous désabonner à tout moment.',
    
    // FAQ Section (French)
    'faq.title': 'Questions fréquentes',
    'faq.q1': 'Quels sont vos tarifs ?',
    'faq.a1': 'Nous facturons un montant unique de 8 000 Rs, TVA incluse, uniquement lorsque nous vous avons trouvé votre premier match.',
    'faq.q2': 'Combien de personnes puis-je rencontrer pendant mon adhésion ?',
    'faq.a2': 'Bien que 5 rendez-vous soient une indication générale, nous ne garantissons pas un nombre précis de rencontres. Notre priorité est la qualité plutôt que la quantité. Nous estimons qu\'il vaut mieux rencontrer quelques personnes d\'exception plutôt que d\'être noyé·e sous des profils inadaptés. Le nombre de rendez-vous dépendra de plusieurs facteurs, notamment votre propre adéquation, la souplesse de vos critères de recherche et les retours que nous recevons.',
    'faq.q3': 'Comment effectuer le paiement ?',
    'faq.a3': 'Nous acceptons actuellement uniquement les paiements par Juice ou virement bancaire, pour les clients à Maurice comme à l\'étranger.',
    'faq.q4': 'Puis-je postuler pour un frère, une sœur, un enfant ou un·e ami·e proche ?',
    'faq.a4': 'Si vous souhaitez réellement aider quelqu\'un de votre entourage, vous pouvez nous transmettre ses coordonnées. Nous le contacterons rapidement. Toutefois, cette personne devra remplir le questionnaire et passer l\'entretien seule, sans accompagnement d\'amis ou de famille. Notre processus exige un engagement personnel, une honnêteté totale et une réelle motivation pour être efficace.',
    'faq.q5': 'Que savent les deux personnes l\'une de l\'autre avant le rendez-vous ?',
    'faq.a5': 'La confidentialité et la discrétion sont au cœur de notre service. Nous ne partageons ni nom de famille, ni photo, ni affiliations spécifiques (comme l\'employeur ou l\'université) avant la rencontre. En revanche, chaque personne reçoit le prénom, l\'âge, la localisation, ainsi qu\'une brève description expliquant pourquoi nous pensons qu\'il y a une compatibilité.',
    'faq.q6': 'Que se passe-t-il si mon match se trouve dans un autre pays ? Comment organisez-vous la rencontre ?',
    'faq.a6': 'Nous savons qu\'il n\'est pas toujours pratique de traverser le monde pour rencontrer quelqu\'un que l\'on ne connaît pas. Nous proposons des rencontres internationales uniquement lorsque nous croyons à un fort potentiel. Dans ce cas, nous facilitons des présentations virtuelles par vidéo. Cela concerne généralement une personne qui envisage de s\'installer à Maurice ou un expatrié mauricien vivant à l\'étranger.',
    'faq.q7': 'Accueillez-vous des candidats divorcés ou parents seuls ?',
    'faq.a7': 'Absolument ! Nous accueillons volontiers les personnes divorcées ou parents seuls, à condition que la séparation soit légalement reconnue et amiable. Si vous êtes prêt·e à écrire un nouveau chapitre, nous sommes là pour vous accompagner. Nous informons les partenaires potentiels de votre passé pour que ce sujet ne soit pas à aborder lors du rendez-vous.',
    'faq.q8': 'Quelle est la durée de validité de mon adhésion ?',
    'faq.a8': 'Votre adhésion est valable un an ou jusqu\'à ce que vous trouviez votre partenaire avec The Date Alchemy, selon la première éventualité. Elle n\'est pas transférable.',
    'faq.q9': 'Pouvez-vous garantir le succès ?',
    'faq.a9': 'Dans le domaine des rencontres, il est impossible de garantir un résultat certain. C\'est pourquoi nous appliquons une politique de non-remboursement. Cependant, votre satisfaction et votre recommandation restent notre priorité absolue, et soyez assuré·e que nous mettrons tout en œuvre pour vous aider à trouver votre moitié.',
    'faq.q10': 'Quelle est la société derrière The Date Alchemy ?',
    'faq.a10': 'The Date Alchemy est un service proposé par la société mauricienne Frolic Ltd (C23201149), également propriétaire de la plateforme lifestyle Frolic.mu.',
    
    // Footer (French)
    'footer.tagline': 'L\'expérience de dating réinventée pour les professionnels connectés au monde à Maurice.',
    'footer.quickLinks': 'Liens rapides',
    'footer.legal': 'Légal',
    'footer.contact': 'Contact',
    'footer.privacyPolicy': 'Politique de confidentialité',
    'footer.termsOfUse': 'Conditions d\'utilisation',
    'footer.company.description': 'The Date Alchemy fait partie de Frolic Ltd, une société enregistrée à Maurice, reconnue pour connecter expatriés et locaux entre eux ainsi qu\'avec les entreprises locales, via notre site frolic.mu, nos meetups et nos événements.',
    
    // Network page (French)
    'network.title': 'Le réseau The Date Alchemy',
    'network.subtitle': 'Où les vraies relations commencent — quand le timing (et la personne) est bon.',
    'network.description': 'Pas tout à fait prêt(e) à investir dans notre adhésion — mais ouvert(e) à l\'amour si la bonne personne se présente et prêt(e) à attendre ? Vous êtes au bon endroit.',
    'network.benefits.title': 'Gratuit. Confidentiel. Soigneusement considéré.',
    'network.benefits.description': 'Le réseau The Date Alchemy est pour les célibataires qui sont émotionnellement prêts pour une relation — mais pas encore prêts à rejoindre en tant que client complet. C\'est gratuit de rejoindre, et complètement discret.',
    'network.benefits.analogy': 'Pensez-y comme être sur la touche — assez proche de l\'action, mais pas encore sur le terrain.',
    'network.step1.title': 'Remplissez votre profil privé',
    'network.step1.desc': 'Dites-nous qui vous êtes, ce qui compte pour vous, et ce que vous cherchez.',
    'network.step2.title': 'Vous êtes ajouté(e) à notre pool de célibataires sélectionnés',
    'network.step2.desc': 'Nous examinons régulièrement ce pool pour nos membres.',
    'network.step3.title': 'Vous entendrez de nous si nous repérons un match solide',
    'network.step3.desc': 'Nous ne vous contacterons que si nous croyons qu\'il y a un vrai potentiel des deux côtés.',
    'network.note.title': 'Veuillez noter :',
    'network.note.description': 'Nous priorisons les matches entre clients. En tant que membre gratuit du réseau Date Alchemy, nous ne cherchons pas en votre nom — et vous pourriez ne pas entendre de nous pendant un moment.',
    'network.cta.title': 'Voulez-vous rejoindre le réseau ?',
    'network.cta.description': 'Remplissez votre profil ci-dessous — et nous serons en contact si la bonne personne se présente.',
    'network.cta.button': 'Créez votre profil',
    'network.cta.membership': 'Prêt(e) à être proactif/ve à la place ?',
    'network.cta.membershipLink': 'En savoir plus sur l\'adhésion',
    
    // Blog page (French)
    'blog.title': 'Conseils et astuces de rencontres',
    'blog.subtitle': 'Conseils d\'experts, perspectives scientifiques et astuces pratiques pour des rencontres intentionnelles et des relations significatives.',
    'blog.search.placeholder': 'Rechercher des articles...',
    'blog.readTime': 'min de lecture',
    'blog.publishedOn': 'Publié le',
    
    // Language switcher (French)
    'language.english': 'English',
    'language.french': 'Français',
  }
};