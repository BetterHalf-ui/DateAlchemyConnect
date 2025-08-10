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
    'home.testimonials.testimonial1': '"Thank you for an introduction that goes well beyond a simple algorithm. You succeeded in harmonizing two hearts on the same frequency."',
    'home.testimonials.author1': '— Veterinarian, 30 years old',
    'home.testimonials.testimonial2': '"The Date Alchemy is by far the best dating agency in Mauritius. The team is very involved and dedicated to providing a smooth and seamless experience to its members."',
    'home.testimonials.author2': '— AI Consultant, 41 years old',
    'home.testimonials.testimonial3': '"In addition to detailed profiles, The Date Alchemy also offers personality assessments, allowing everyone to know themselves better and evolve personally before even meeting a potential partner."',
    'home.testimonials.author3': '— IT Professional, 32 years old',
    'home.testimonials.testimonial4': '"Communication with the team is open, regular and collaborative, whether via WhatsApp or through newsletters sent by email. Feedback is encouraged after each meeting, which helps create a benevolent environment."',
    'home.testimonials.author4': '— Scientist, 37 years old',
    'home.testimonials.main': '"Thank you for an introduction that goes well beyond a simple algorithm. You succeeded in harmonizing two hearts on the same frequency."',
    'home.testimonials.mainAuthor': '— COO, Tech Industry, 52 years old',
    'home.testimonials.professional': 'The Date Alchemy fosters healthy relationships in a safe and confidential environment. Embarking on this journey helped me listen more deeply to others and understand myself better—allowing me to become a better version of myself.',
    'home.testimonials.professionalAuthor': '— Scientist, 37',
    'home.testimonials.expert': 'I recommend The Date Alchemy without hesitation to single professionals who don\'t have the time — or desire — to venture into traditional matchmaking methods or dating applications.',
    'home.testimonials.expertAuthor': '— IT Professional, 32 years old',
    
    // Team section
    'home.team.title': 'Your Alchemists',
    'home.team.founders': 'Pratik Malia, Celine Delacharlerie, Sagarika Sarkar - Co-founders',
    'home.team.story1': 'Three years ago, we left our corporate careers in Singapore to settle in Mauritius, driven by the desire to create something more personal, more meaningful.\nFinding our life partner with whom we have a deep connection truly transformed our lives — to the point of wanting to offer this chance to others.',
    'home.team.story2': 'But the journey wasn\'t easy. We\'ve experienced the frustration of dating apps ourselves, the disappointment of promising evenings that lead nowhere, hours lost swiping... and the emotional exhaustion of relationships with people unable to invest emotionally, or toxic ones.',
    'home.team.quote': 'We invested our emotional energy in people who weren\'t ready to commit to a relationship. We faced ghosting, anxiety, self-doubt and confusion. And, deep down, we knew there had to be a better way to date.',
    'home.team.story3': 'That\'s why we created The Date Alchemy — the dating service we would have dreamed of having.',
    'home.team.story4': 'A respectful, rewarding experience designed to foster genuine deep connections. We don\'t promise love, but we promise our total commitment: professionalism, integrity, sincere involvement in your journey and a proven process that has led to lasting stories.',
    
    // Nominate section
    'home.nominate.title': 'Spread the Love',
    'home.nominate.subtitle': 'Do you know a single person ready to meet the right person?',
    'home.nominate.description': 'Nominate them — anonymously or not - they might thank you soon!',
    'home.nominate.cta': 'Nominate Someone',
    
    // Blog section
    'home.blog.title': 'Dating Insights & Tips',
    'home.blog.subtitle': 'Expert advice for intentional dating',
    'home.blog.latestTitle': 'Latest Insights',
    'home.blog.viewAll': 'View All Posts',
    
    // Newsletter section
    'home.newsletter.title': 'The Smarter Way to Date — Straight to Your Inbox',
    'home.newsletter.subtitle': 'Join 1,000+ Smart Singles Getting Bi-Weekly Dating Tips',
    'home.newsletter.placeholder': 'Enter your email',
    'home.newsletter.cta': 'Subscribe',
    'home.newsletter.disclaimer': 'By subscribing, you agree to receive our newsletter. You can unsubscribe at any time.',
    
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
    
    // Common (French)
    'common.learnMore': 'En savoir plus',
    'common.getStarted': 'Commencer',
    'common.readMore': 'Lire la suite',
    'common.loading': 'Chargement...',
    
    // Home page (French)
    'home.hero.title': 'Où les professionnels globaux trouvent l\'amour à Maurice',
    'home.hero.subtitle': 'L\'expérience de dating réinventée pour les professionnels connectés au monde à Maurice.',
    'home.hero.cta': 'Commencer votre parcours',
    'home.hero.memberCount': 'Membres actifs',
    
    'home.help.title': 'Comment nous aidons',
    'home.help.curated.title': 'Réseau soigneusement sélectionné',
    'home.help.curated.desc': 'Chaque membre est personnellement vérifié par des appels vidéo et une vérification des antécédents.',
    'home.help.personalized.title': 'Matching personnalisé',
    'home.help.personalized.desc': 'Nous comprenons vos valeurs, votre style de vie et vos objectifs relationnels pour trouver des matches compatibles.',
    'home.help.discreet.title': 'Discrétion complète',
    'home.help.discreet.desc': 'Votre vie privée est primordiale. Nous coordonnons les introductions avec une confidentialité complète.',
    
    // Testimonials section (French)
    'home.testimonials.title': 'Ce que disent nos membres',
    'home.testimonials.subtitle': 'Tous les témoignages proviennent de vrais clients — n\'hésitez pas à nous demander une mise en relation si vous souhaitez vérifier leur expérience.',
    'home.testimonials.testimonial1': '« Merci pour une mise en relation qui dépasse largement un simple algorithme. Vous avez réussi à accorder deux cœurs sur la même fréquence. »',
    'home.testimonials.author1': '— Vétérinaire, 30 ans',
    'home.testimonials.testimonial2': '« The Date Alchemy est de loin la meilleure agence de rencontres à Maurice. L\'équipe est très impliquée et dévouée pour offrir une expérience fluide et sans accroc à ses membres. »',
    'home.testimonials.author2': '— Consultant en IA, 41 ans',
    'home.testimonials.testimonial3': '« En plus de profils détaillés, The Date Alchemy propose aussi des évaluations de personnalité, permettant à chacun de mieux se connaître et d\'évoluer personnellement avant même de rencontrer un partenaire potentiel. »',
    'home.testimonials.author3': '— Informaticienne, 32 ans',
    'home.testimonials.testimonial4': '« La communication avec l\'équipe est ouverte, régulière et collaborative, que ce soit via WhatsApp ou à travers les newsletters envoyées par email. Un retour est encouragé après chaque rencontre, ce qui contribue à créer un environnement bienveillant. »',
    'home.testimonials.author4': '— Scientifique, 37 ans',
    'home.testimonials.main': '« Merci pour une mise en relation qui dépasse largement un simple algorithme. Vous avez réussi à accorder deux cœurs sur la même fréquence. »',
    'home.testimonials.mainAuthor': '— COO, Industrie Tech, 52 ans',
    'home.testimonials.professional': 'The Date Alchemy favorise des relations saines dans un cadre sûr et confidentiel. Me lancer dans ce voyage m\'a aidé à écouter plus profondément les autres et à mieux me comprendre—me permettant de devenir une meilleure version de moi-même.',
    'home.testimonials.professionalAuthor': '— Scientifique, 37',
    'home.testimonials.expert': 'Je recommande sans hésitation The Date Alchemy aux professionnels célibataires qui n\'ont pas le temps — ou l\'envie — de s\'aventurer dans les méthodes traditionnelles de matchmaking ou les applications de rencontres.',
    'home.testimonials.expertAuthor': '- Professionelle IT, 32 ans',
    
    // Team section (French)
    'home.team.title': 'Vos Alchimistes',
    'home.team.founders': 'Pratik Malia, Celine Delacharlerie, Sagarika Sarkar - Co-fondateurs',
    'home.team.story1': 'Il y a trois ans, nous avons quitté nos carrières en entreprise à Singapour pour poser nos valises à Maurice, animés par l\'envie de créer quelque chose de plus personnel, de plus porteur de sens.\nTrouver notre partenaire de vie avec qui nous avons une profonde connexion a véritablement transformé nos vies — au point de vouloir offrir cette chance à d\'autres.',
    'home.team.story2': 'Mais le chemin n\'a pas été facile. Nous avons nous-mêmes connu la frustration des apps de rencontre, la déception des  soirées pleines de promesses qui ne mènent à rien, les heures perdues à swiper… et l\'épuisement émotionnel de relations avec des personnes incapables de s\'investir affectivement, ou toxiques.',
    'home.team.quote': 'Nous avons investi notre énergie émotionnelle dans des personnes qui n\'étaient pas prêtes à s\'engager dans une relation. Nous avons affronté les silences radio, l\'anxiété, le doute de soi et la confusion. Et, au fond, nous savions qu\'il devait y avoir une meilleure façon de faire des rencontres.',
    'home.team.story3': 'C\'est pourquoi nous avons créé The Date Alchemy — le service de rencontres que nous aurions rêvé d\'avoir.',
    'home.team.story4': 'Une expérience respectueuse, valorisante et pensée pour favoriser de véritables connexions profondes. Nous ne promettons pas l\'amour, mais nous vous promettons notre engagement total : professionnalisme, intégrité, implication sincère dans votre parcours et un processus éprouvé qui a  mené à des histoires durables.',
    
    // Nominate section (French)
    'home.nominate.title': 'Répandez l\'amour',
    'home.nominate.subtitle': 'Connaissez-vous un célibataire prêt à rencontrer la bonne personne ?',
    'home.nominate.description': 'Nominez-le/la — anonymement ou pas - ils pourraient bien vous remercier bientôt !',
    'home.nominate.cta': 'Nominer quelqu\'un',
    
    // Blog section (French)
    'home.blog.title': 'conseils et astuces de rencontres',
    'home.blog.subtitle': 'conseils d\'experts pour des rencontres intentionnelles',
    'home.blog.latestTitle': 'Derniers Conseils',
    'home.blog.viewAll': 'Voir Tous les Articles',
    
    // Newsletter section (French)
    'home.newsletter.title': 'Les secrets de l\'alchimie — directement dans votre boîte mail',
    'home.newsletter.subtitle': 'Rejoignez plus de 1 000 célibataires avisés qui reçoivent tous les 15 jours nos conseils exclusifs pour réussir leurs rencontres.',
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
    'home.research.title': 'Les recherches sont formelles : les applis de rencontres ne sont pas à la hauteur',
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
    
    // Footer (French)
    'footer.tagline': 'L\'expérience de dating réinventée pour les professionnels connectés au monde à Maurice.',
    'footer.quickLinks': 'Liens Rapides',
    'footer.legal': 'Légal',
    'footer.contact': 'Contact',
    'footer.privacyPolicy': 'Politique de Confidentialité',
    'footer.termsOfUse': 'Conditions d\'Utilisation',
    
    // Language switcher (French)
    'language.english': 'English',
    'language.french': 'Français',
  }
};