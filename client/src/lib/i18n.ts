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
    'home.hero.title': 'l\'expérience dating réinventée pour les professionnels internationaux à Maurice',
    'home.hero.subtitle': 'service de mise en relation premium pour des relations intentionnelles. discret, personnalisé et efficace.',
    'home.hero.cta': 'devenir membre',
    'home.hero.memberCount': 'membres actifs',
    
    'home.help.title': 'comment nous aidons',
    'home.help.curated.title': 'réseau sélectionné',
    'home.help.curated.desc': 'chaque membre est personnellement vérifié par appels vidéo et vérification des antécédents.',
    'home.help.personalized.title': 'mise en relation personnalisée',
    'home.help.personalized.desc': 'nous comprenons vos valeurs, votre style de vie et vos objectifs relationnels pour trouver des partenaires compatibles.',
    'home.help.discreet.title': 'discrétion complète',
    'home.help.discreet.desc': 'votre confidentialité est primordiale. nous coordonnons les présentations en toute confidentialité.',
    
    'home.testimonials.title': 'histoires de succès',
    'home.testimonials.singapore': 'grâce à The Date Alchemy, j\'ai rencontré mon partenaire qui complète parfaitement mon style de vie. leur compréhension des nuances culturelles a fait toute la différence.',
    'home.testimonials.singapore.author': 'consultant en gestion, Singapour',
    'home.testimonials.mauritius': 'la discrétion et l\'approche personnalisée m\'ont aidé à trouver quelqu\'un qui comprend vraiment mes valeurs et mes ambitions.',
    'home.testimonials.mauritius.author': 'banquier d\'investissement, Maurice',
    
    'home.membership.title': 'adhésion exclusive',
    'home.membership.subtitle': 'conçu pour les professionnels qui privilégient la qualité à la quantité',
    'home.membership.feature1': 'entretien vidéo et vérification d\'identité',
    'home.membership.feature2': 'consultation avec un entremetteur personnel',
    'home.membership.feature3': 'présentations sélectionnées',
    'home.membership.feature4': 'accompagnement relationnel continu',
    'home.membership.cta': 'postuler pour l\'adhésion',
    
    'home.pricing.title': 'investissement dans votre avenir',
    'home.pricing.price': 'Rs 8,000',
    'home.pricing.period': '/an',
    'home.pricing.description': 'un investissement annuel unique pour des présentations illimitées et un service personnalisé.',
    'home.pricing.cta': 'commencez votre parcours',
    
    'home.journey.title': 'commencez votre parcours',
    'home.journey.step1.title': 'postuler pour l\'adhésion',
    'home.journey.step1.desc': 'vous commencerez par remplir notre candidature initiale : un questionnaire qui nous aide à comprendre vos antécédents, vos valeurs et ce que vous recherchez vraiment chez un partenaire.',
    'home.journey.step2.title': 'consultation privée',
    'home.journey.step2.desc': 'ensuite, vous rencontrerez votre entremetteur personnel lors d\'une consultation vidéo individuelle pour créer votre profil personnalisé.',
    'home.journey.step3.title': 'présentation sélectionnée',
    'home.journey.step3.desc': 'une fois qu\'une connexion mutuellement alignée est identifiée, nous coordonnons votre premier rendez-vous avec une discrétion et un soin complets.',
    'home.journey.step4.title': 'affinement et suivi',
    'home.journey.step4.desc': 'après chaque présentation, nous recueillons vos commentaires pour affiner continuellement notre approche et assurer des connexions significatives.',
    
    'home.blog.title': 'conseils et astuces de rencontres',
    'home.blog.subtitle': 'conseils d\'experts pour des rencontres intentionnelles',
    
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
    
    // Home page detailed content (French)
    'home.intro.p1': 'Trouver une véritable connexion à Maurice n\'est pas chose facile—surtout quand on est un professionnel occupé avec des standards élevés.',
    'home.intro.p2': 'Les applications de rencontres promettent des options infinies, mais livrent trop souvent déception et frustration : ghosting, signaux contradictoires, détachement émotionnel… Elles sont conçues pour vous faire swiper sans fin, pas pour vous aider à créer du lien. La plupart des utilisateurs ne cherchent rien de sérieux, et cela fait des dégâts—plus de 80 % déclarent se sentir épuisés ou désabusés par les rencontres en ligne (Rapport Singles).',
    'home.intro.p3': 'Chez The Date Alchemy, nous savons que rencontrer la bonne personne est trop important pour être laissé aux algorithmes ou au hasard. Nous vous invitons à vous lancer—intentionnellement, avec discrétion, et avec le respect que vous méritez. Nous faisons le travail de recherche et de sélection, pour que vous puissiez vous concentrer sur l\'essentiel : vivre pleinement votre vie pendant que l\'amour trouve naturellement son chemin vers vous.',
    
    'home.expectations.title': 'À Quoi S\'Attendre En Tant Que Membre',
    'home.expectations.curated.title': 'Introductions Sélectionnées',
    'home.expectations.curated.desc': 'Nous vous présentons des célibataires qui répondent à vos standards et partagent votre vibe, sont soigneusement interviewés et également sérieux à propos de trouver un partenaire à vie à Maurice.',
    'home.expectations.privacy.title': 'Votre Confidentialité Est Notre Priorité',
    'home.expectations.privacy.desc': 'Nous protégeons votre confidentialité comme si c\'était la nôtre—vos informations sont toujours sûres, confidentielles, et jamais partagées sans votre consentement. Chaque introduction est gérée avec le plus grand soin et respect pour votre confidentialité.',
    'home.expectations.noPressure.title': 'Sans pression',
    'home.expectations.noPressure.desc': 'Aucune pression de la famille à gérer. Rencontrez votre match pour un café, échangez vos numéros si vous voulez, ou sortez pendant des mois, ou rencontrez quelqu\'un d\'autre qui vous convient mieux. Tout se fait selon vos conditions.',
    'home.expectations.support.title': 'Support Humain Attentionné',
    'home.expectations.support.desc': 'Nous sommes avec vous à chaque étape—offrant des conseils attentionnés, un support logistique, et des suivis post-rendez-vous. Pas de fantômes, pas de devinettes—juste du respect et un support authentique de personnes qui se soucient vraiment.',
    
    'home.cta.applyNow': 'Postuler Maintenant',
    'home.cta.notReady': 'Pas prêt à investir dans un abonnement ?',
    'home.cta.joinNetwork': 'Rejoignez notre réseau gratuitement pour voir si vous correspondez avec l\'un de nos clients exceptionnels.',
    'home.cta.createProfile': 'Créez votre profil gratuit.',
    
    'home.stats.activeMembers': 'Membres actifs',
    'home.stats.memberDesc': 'Nos membres sont ambitieux, amusants et dynamiques—locaux et expatriés de tous âges. Tous cherchent une relation sérieuse.',
    'home.stats.reviewNote': 'Nos entremetteurs examinent CHAQUE candidature',
    
    // Testimonials - Additional ones for image sections (French)
    'home.testimonials.main': 'Merci pour une correspondance qui va bien au-delà d\'un simple algorithme. Vous avez aidé à mettre deux cœurs sur la même longueur d\'onde.',
    'home.testimonials.mainAuthor': '— COO, Industrie Tech, 52',
    'home.testimonials.professional': 'The Date Alchemy favorise des relations saines dans un cadre sûr et confidentiel. Me lancer dans ce voyage m\'a aidé à écouter plus profondément les autres et à mieux me comprendre—me permettant de devenir une meilleure version de moi-même.',
    'home.testimonials.professionalAuthor': '— Scientifique, 37',
    'home.testimonials.expert': 'Je recommanderais sans réserve The Date Alchemy aux professionnels célibataires qui n\'ont peut-être pas le temps—ou l\'envie—de naviguer dans les méthodes traditionnelles d\'entremettage ou les applications de rencontres.',
    'home.testimonials.expertAuthor': '— Professionnel IT, 32',
    
    // Team section (French)
    'home.team.title': 'Vos Alchimistes de Rencontres',
    'home.team.founders': 'Pratik Malia, Celine Delacharlerie, Sagarika Sarkar - Co-fondateurs',
    'home.team.story1': 'Il y a trois ans, nous avons quitté nos carrières d\'entreprise à Singapour et avons déménagé à Maurice pour faire quelque chose de plus personnel, plus impactant. Trouver un partenaire de vie avec qui nous nous connectons vraiment a été une expérience si bouleversante pour nous, que nous voulions que plus de gens vivent ce genre d\'amour.',
    'home.team.story2': 'Mais y arriver n\'était pas facile. Nous avons vécu la frustration nous-mêmes — assister à d\'innombrables événements qui ne menaient nulle part, passer des heures à glisser sur des applications de rencontres pour finir désabusés, nous retrouver dans des relations avec des personnes émotionnellement indisponibles ou toxiques.',
    'home.team.quote': 'Nous avons gaspillé de l\'énergie émotionnelle sur des gens qui n\'étaient pas sérieux. Nous avons fait face aux fantômes, à l\'anxiété, au doute de soi et à la confusion. Et nous savions qu\'il devait y avoir une meilleure façon.',
    'home.team.story3': 'C\'est pourquoi nous avons créé The Date Alchemy— le service de rencontres que nous aurions voulu avoir.',
    'home.team.story4': 'Une expérience respectueuse et autonomisante conçue pour de vraies connexions significatives. Nous ne pouvons pas promettre l\'amour, mais nous pouvons promettre l\'effort, le professionnalisme, l\'intégrité, un investissement authentique dans votre parcours, et un processus éprouvé qui a mené à des relations durables.',
    
    // Nominate section (French)
    'home.nominate.title': 'Répandre l\'Amour',
    'home.nominate.subtitle': 'Nominez un célibataire que vous connaissez',
    'home.nominate.description': 'Ils pourront vous remercier une fois qu\'on leur aura trouvé la bonne personne !',
    'home.nominate.cta': 'Nominer Quelqu\'un',
    
    // Blog section (French)
    'home.blog.latestTitle': 'Derniers Conseils',
    'home.blog.viewAll': 'Voir Tous les Articles',
    
    // Language switcher
    'language.english': 'English',
    'language.french': 'Français',
  }
};