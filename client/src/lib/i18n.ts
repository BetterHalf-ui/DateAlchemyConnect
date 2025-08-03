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
    
    'home.testimonials.title': 'Success Stories',
    'home.testimonials.singapore': 'Thanks to The Date Alchemy, I met my partner who complements my lifestyle perfectly. Their understanding of cultural nuances made all the difference.',
    'home.testimonials.singapore.author': 'Management Consultant, Singapore',
    'home.testimonials.mauritius': 'The discretion and personalized approach helped me find someone who truly understands my values and ambitions.',
    'home.testimonials.mauritius.author': 'Investment Banker, Mauritius',
    
    'home.membership.title': 'Exclusive Membership',
    'home.membership.subtitle': 'Designed for professionals who value quality over quantity',
    'home.membership.feature1': 'Video screening & ID verification',
    'home.membership.feature2': 'Personal matchmaker consultation',
    'home.membership.feature3': 'Curated introductions',
    'home.membership.feature4': 'Ongoing relationship coaching',
    'home.membership.cta': 'Apply for Membership',
    
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
    'home.blog.viewAll': 'View All Articles',
    
    'home.newsletter.title': 'Stay Connected',
    'home.newsletter.subtitle': 'Get dating insights and relationship tips delivered to your inbox.',
    'home.newsletter.placeholder': 'Enter your email',
    'home.newsletter.cta': 'Subscribe',
    
    // Footer
    'footer.tagline': 'Redefining the dating experience for global professionals in Mauritius.',
    'footer.quickLinks': 'Quick Links',
    'footer.legal': 'Legal',
    'footer.contact': 'Contact',
    'footer.privacyPolicy': 'Privacy Policy',
    'footer.termsOfUse': 'Terms of Use',
    
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
    // Navigation
    'nav.home': 'Accueil',
    'nav.howItWorks': 'Comment Ça Marche',
    'nav.insights': 'Conseils',
    'nav.applyNow': 'Postuler',
    'nav.network': 'Rejoindre le Réseau',
    
    // Common
    'common.learnMore': 'En Savoir Plus',
    'common.getStarted': 'Commencer',
    'common.readMore': 'Lire Plus',
    'common.loading': 'Chargement...',
    
    // Home page
    'home.hero.title': 'Où Les Professionnels Internationaux Trouvent L\'Amour à Maurice',
    'home.hero.subtitle': 'Service de mise en relation premium pour des relations intentionnelles. Discret, personnalisé et efficace.',
    'home.hero.cta': 'Commencez Votre Parcours',
    'home.hero.memberCount': 'Membres Actifs',
    
    'home.help.title': 'Comment Nous Aidons',
    'home.help.curated.title': 'Réseau Sélectionné',
    'home.help.curated.desc': 'Chaque membre est personnellement vérifié par appels vidéo et vérification des antécédents.',
    'home.help.personalized.title': 'Mise en Relation Personnalisée',
    'home.help.personalized.desc': 'Nous comprenons vos valeurs, votre style de vie et vos objectifs relationnels pour trouver des partenaires compatibles.',
    'home.help.discreet.title': 'Discrétion Complète',
    'home.help.discreet.desc': 'Votre confidentialité est primordiale. Nous coordonnons les présentations en toute confidentialité.',
    
    'home.testimonials.title': 'Histoires de Succès',
    'home.testimonials.singapore': 'Grâce à The Date Alchemy, j\'ai rencontré mon partenaire qui complète parfaitement mon style de vie. Leur compréhension des nuances culturelles a fait toute la différence.',
    'home.testimonials.singapore.author': 'Consultant en Gestion, Singapour',
    'home.testimonials.mauritius': 'La discrétion et l\'approche personnalisée m\'ont aidé à trouver quelqu\'un qui comprend vraiment mes valeurs et mes ambitions.',
    'home.testimonials.mauritius.author': 'Banquier d\'Investissement, Maurice',
    
    'home.membership.title': 'Adhésion Exclusive',
    'home.membership.subtitle': 'Conçu pour les professionnels qui privilégient la qualité à la quantité',
    'home.membership.feature1': 'Entretien vidéo et vérification d\'identité',
    'home.membership.feature2': 'Consultation avec un entremetteur personnel',
    'home.membership.feature3': 'Présentations sélectionnées',
    'home.membership.feature4': 'Accompagnement relationnel continu',
    'home.membership.cta': 'Postuler pour l\'Adhésion',
    
    'home.pricing.title': 'Investissement dans Votre Avenir',
    'home.pricing.price': 'Rs 8,000',
    'home.pricing.period': '/an',
    'home.pricing.description': 'Un investissement annuel unique pour des présentations illimitées et un service personnalisé.',
    'home.pricing.cta': 'Commencez Votre Parcours',
    
    'home.journey.title': 'Commencez Votre Parcours',
    'home.journey.step1.title': 'Postuler pour l\'Adhésion',
    'home.journey.step1.desc': 'Vous commencerez par remplir notre candidature initiale : un questionnaire qui nous aide à comprendre vos antécédents, vos valeurs et ce que vous recherchez vraiment chez un partenaire.',
    'home.journey.step2.title': 'Consultation Privée',
    'home.journey.step2.desc': 'Ensuite, vous rencontrerez votre entremetteur personnel lors d\'une consultation vidéo individuelle pour créer votre profil personnalisé.',
    'home.journey.step3.title': 'Présentation Sélectionnée',
    'home.journey.step3.desc': 'Une fois qu\'une connexion mutuellement alignée est identifiée, nous coordonnons votre premier rendez-vous avec une discrétion et un soin complets.',
    'home.journey.step4.title': 'Affinement et Suivi',
    'home.journey.step4.desc': 'Après chaque présentation, nous recueillons vos commentaires pour affiner continuellement notre approche et assurer des connexions significatives.',
    
    'home.blog.title': 'Conseils et Astuces de Rencontres',
    'home.blog.subtitle': 'Conseils d\'experts pour des rencontres intentionnelles',
    'home.blog.viewAll': 'Voir Tous les Articles',
    
    'home.newsletter.title': 'Restez Connecté',
    'home.newsletter.subtitle': 'Recevez des conseils de rencontres et des astuces relationnelles dans votre boîte de réception.',
    'home.newsletter.placeholder': 'Entrez votre email',
    'home.newsletter.cta': 'S\'abonner',
    
    // Footer
    'footer.tagline': 'Redéfinir l\'expérience de rencontres pour les professionnels internationaux à Maurice.',
    'footer.quickLinks': 'Liens Rapides',
    'footer.legal': 'Légal',
    'footer.contact': 'Contact',
    'footer.privacyPolicy': 'Politique de Confidentialité',
    'footer.termsOfUse': 'Conditions d\'Utilisation',
    
    // Network page
    'network.title': 'Le Réseau Date Alchemy',
    'network.subtitle': 'Où les vraies relations commencent — quand le timing (et la personne) est bon.',
    'network.description': 'Pas tout à fait prêt à investir dans notre adhésion — mais ouvert à l\'amour si la bonne personne se présente et prêt à attendre ? Vous êtes au bon endroit.',
    'network.benefits.title': 'Gratuit. Confidentiel. Soigneusement considéré.',
    'network.benefits.description': 'Le Réseau Date Alchemy est pour les célibataires émotionnellement prêts pour une relation — mais pas encore prêts à rejoindre en tant que client complet. C\'est gratuit de rejoindre et complètement discret.',
    'network.benefits.analogy': 'Pensez-y comme être sur la touche — assez proche de l\'action, mais pas tout à fait sur le terrain.',
    'network.step1.title': 'Remplissez votre profil privé',
    'network.step1.desc': 'Dites-nous qui vous êtes, ce qui compte pour vous, et ce que vous cherchez.',
    'network.step2.title': 'Vous êtes ajouté à notre bassin de célibataires sélectionnés',
    'network.step2.desc': 'Nous examinons régulièrement ce bassin pour nos membres.',
    'network.step3.title': 'Vous entendrez parler de nous si nous repérons une correspondance forte',
    'network.step3.desc': 'Nous ne vous contacterons que si nous croyons qu\'il y a un vrai potentiel des deux côtés.',
    'network.note.title': 'Veuillez noter :',
    'network.note.description': 'Nous priorisons les correspondances entre clients. En tant que membre gratuit du Réseau Date Alchemy, nous ne cherchons pas en votre nom — et vous pourriez ne pas entendre parler de nous pendant un moment.',
    'network.cta.title': 'Voulez-vous rejoindre le réseau ?',
    'network.cta.description': 'Remplissez votre profil ci-dessous — et nous vous contacterons si la bonne personne se présente.',
    'network.cta.button': 'Créer Votre Profil',
    'network.cta.membership': 'Prêt à être proactif à la place ?',
    'network.cta.membershipLink': 'En savoir plus sur l\'adhésion',
    
    // Blog page
    'blog.title': 'Conseils et Astuces de Rencontres',
    'blog.subtitle': 'Conseils d\'experts, insights scientifiques et astuces pratiques pour des rencontres intentionnelles et des relations significatives.',
    'blog.search.placeholder': 'Rechercher des articles...',
    'blog.readTime': 'min de lecture',
    'blog.publishedOn': 'Publié le',
    
    // Language switcher
    'language.english': 'English',
    'language.french': 'Français',
  }
};