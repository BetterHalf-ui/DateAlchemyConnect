import { useState } from "react";
import { Link } from "wouter";
import { useI18n } from "@/lib/i18n";
import { useSEO } from "@/hooks/use-seo";
import { trackApplicationClick } from "@/lib/analytics";
import { trackApplicationSubmit } from "@/lib/meta-pixel";
import { COMPANY_INFO, CONTACT_INFO } from "@/lib/constants";
import LanguageSwitcher from "@/components/i18n/language-switcher";
import { ChevronDown, ChevronUp, Star, Check, Users, ShieldCheck, Heart, MessageCircle } from "lucide-react";
import teamPhoto from "@assets/team_(1)_1753896165937_1771060680133.png";
import heroImage from "@assets/Screenshot_2026-02-16_at_3.51.43_PM_1771237368788.png";

const content = {
  en: {
    hero: {
      headline: "Experience Ultra-Curated Matchmaking.",
      headlineLine2: "Without the Annual Commitment.",
      subheadline: "We are briefly opening the doors to a 'Discovery' offer. Experience the discretion and precision of Mauritius' ultra-curated matchmaking service without the full membership fee. Modern, private, and designed for busy singles like you.",
      urgency: "Limited availability through March 31st.",
      cta: "View Access Options",
      memberCount: "Join 400+ Curated Members",
      memberDesc: "Sophisticated, dynamic, and serious about finding love—locals and foreigners from all age groups and backgrounds."
    },
    testimonials: [
      { text: "Thanks to The Date Alchemy, I found love. The team has always been there providing discreet support and expertly advising without ever becoming too intrusive.", profession: "Veterinarian, 30" },
      { text: "The Date Alchemy is by far the best matchmaking agency in Mauritius. The team is very dedicated and committed to ensuring a smooth and seamless experience.", profession: "AI Consultant, 41" },
      { text: "In addition to detailed profiles, they also offer personality assessments, allowing users to gain deeper self-awareness and grow individually.", profession: "IT Professional, 32" },
      { text: "The communication with the team is open, consistent, and collaborative. Feedback is encouraged after each date, which helps foster a supportive environment.", profession: "Scientist, 37" }
    ],
    approach: {
      title: "Our Approach",
      items: [
        { title: "Curated & Vetted Matches", desc: "Our matchmaking goes beyond checklists. We prioritize compatibility in relationship needs, lifestyles, values, and attachment patterns. All matches are interviewed, screened, and serious about finding a partner." },
        { title: "Your Privacy is Priority", desc: "We protect your privacy like it's our own. Your detailed profile, photo, and phone number are never shared without your consent." },
        { title: "Date Preparation", desc: "Once matched, your date is custom-planned based on preferences. You'll receive tips and tools to help the conversation flow naturally. Just show up and enjoy." },
        { title: "Feedback & Support", desc: "Your matchmaker gets your feedback after the date. We offer coaching resources and thoughtful support to help you succeed." }
      ]
    },
    howItWorks: {
      title: "How It Works",
      steps: [
        { num: "01", title: "Apply", desc: "Complete our questionnaire to help us understand who you are and your preferences." },
        { num: "02", title: "Private Consultation", desc: "Meet with your personal matchmaker (video call) to craft your personalized profile." },
        { num: "03", title: "Curated Introduction", desc: "We share the profile of a compatible match for your review. If there is mutual interest, we coordinate your date." },
        { num: "04", title: "Refinement", desc: "If the match didn't feel right, we seek your feedback to fine-tune our approach for the next one." }
      ]
    },
    offers: {
      title: "The Offers",
      pricingNote: "Only Pay When We Deliver",
      pricingDesc: "We believe in results. To start your dedicated search (Interview + Profile Creation), a Rs 800 onboarding fee is required. The remaining balance (Rs 2,200 or Rs 7,200) is paid only once you accept a match we find you.",
      discovery: {
        badge: "Limited Time Offer",
        name: "THE DISCOVERY PASS",
        tagline: "Experience the magic of alchemy once.",
        price: "Rs 3,000",
        period: "/ one-time",
        cta: "Get Discovery Pass",
        footer: "Limited availability until 31st of March",
        footer2: "Offer capped to the first 50 people.",
        mainFeature: "1 Curated Date",
      },
      membership: {
        badge: "Best Value / Recommended",
        name: "UNLIMITED MEMBERSHIP",
        tagline: "Your full year of curated introductions.",
        price: "Rs 8,000",
        period: "/ per year",
        cta: "Apply for Membership",
        footer: "Valid for 12 Months",
        mainFeature: "Unlimited Curated Dates for 1 Year",
      },
      sharedFeatures: [
        "Success based model*",
        "Profile Crafting with Matchmaker",
        "Date Coordination",
        "Relationship needs self-assessment",
        "Attachment Style analysis",
        "Dating Tendency analysis",
        "100% Privacy",
        "Pre Date advice in your inbox",
        "Post Date follow up",
        "Direct access to our matchmaking team (via Whatsapp & Email)"
      ],
      membershipExtras: [
        "Priority Matching",
        "Post date feedback and search recalibration if needed",
        "Invitation to Singles Socials Events"
      ],
      whatsIncluded: "What's Included:"
    },
    why: {
      title: "Why The Date Alchemy?",
      desc: "We are a human-first matchmaking service designed for Mauritius. We discreetly serve professionals and expats who value privacy and quality over quantity.",
      points: [
        "100% Verified Profiles: No fakes, no catfishing.",
        "Private & Discreet: Your profile is never public. Only your potential match sees you.",
        "Personalized: Matches are hand-picked by our founders."
      ]
    },
    faq: {
      title: "FAQ",
      items: [
        { q: "What happens if I buy the Discovery Pass and want to upgrade?", a: "If you'd like to continue the experience, you can upgrade to the Annual Membership within 30 days, and we'll credit your Rs 3,000 toward the full membership." },
        { q: "When does this offer end?", a: "This is an offer available for a strictly limited window in March. Once the spots are filled, we will close the Discovery tier." },
        { q: "How do I make the payment?", a: "Presently we only accept payment via Juice/Bank Transfer for both clients within and outside Mauritius." },
        { q: "How much do the dates know about each other beforehand?", a: "Confidentiality and discretion are fundamental to our service. We do not share last names before the date, and we share photographs and phone numbers only if you have explicitly agreed. We provide both sides with a complete description into the match's lifestyle, career, interests, age, height, nationality, location, marital status, long term plans, ideal partner, smoking habits and even diet." },
        { q: "Do you cater to applicants who are divorced or single parents?", a: "Absolutely! We welcome individuals who are divorced or single parents, as long as the separation is legally documented and amicable. If you're ready to begin the next chapter of your life, we're here to assist you. We're upfront about your past with potential matches, so it's not a topic that needs to be discussed during your date." },
        { q: "What is the company behind The Date Alchemy?", a: "The Date Alchemy is a service offered by the registered Mauritian entity Frolic Ltd (C23201149), also owner of the lifestyle platform Frolic.mu." }
      ]
    },
    footer: {
      rights: `\u00A9 2026 ${COMPANY_INFO.name}. All Rights Reserved.`,
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      contact: "Contact Support"
    }
  },
  fr: {
    hero: {
      headline: "Le matchmaking sur mesure.",
      headlineLine2: "Libre de tout engagement annuel.",
      subheadline: "Nous ouvrons exceptionnellement les portes d'une offre « Découverte ». Profitez de la discrétion et de la précision du service de matchmaking le plus sélectif de l'île Maurice, sans les frais d'adhésion annuels. Moderne, privé et conçu pour les célibataires exigeants comme vous.",
      urgency: "Disponibilité limitée jusqu'au 31 mars.",
      cta: "Voir les Options d'Accès",
      memberCount: "Rejoignez plus de 400 Membres sélectionnés",
      memberDesc: "Sophistiqués, dynamiques et prêts pour une relation sérieuse—locaux et expatriés de tous âges et horizons."
    },
    testimonials: [
      { text: "Grâce à The Date Alchemy, j'ai trouvé l'amour. L'équipe a toujours été là, offrant un soutien discret et des conseils experts sans jamais devenir trop intrusifs.", profession: "Vétérinaire, 30" },
      { text: "The Date Alchemy est de loin la meilleure agence de matchmaking à Maurice. L'équipe est très dévouée et engagée à assurer une expérience fluide et sans faille.", profession: "Consultant IA, 41" },
      { text: "En plus des profils détaillés, ils proposent également des évaluations de personnalité, permettant aux utilisateurs de mieux se connaître et de grandir individuellement.", profession: "Professionnel IT, 32" },
      { text: "La communication avec l'équipe est ouverte, constante et collaborative. Les retours sont encouragés après chaque rendez-vous, ce qui favorise un environnement de soutien.", profession: "Scientifique, 37" }
    ],
    approach: {
      title: "Notre Approche",
      items: [
        { title: "Rencontres sélectionnées et vérifiées", desc: "Notre approche va au-delà des critères superficiels. Nous priorisons la compatibilité en matière de besoins relationnels, styles de vie, valeurs et types d'attachement. Chaque match potentiel a été interviewé et vérifié—tous sont aussi sérieux que vous dans leur recherche." },
        { title: "Votre confidentialité, notre priorité absolue", desc: "Nous protégeons votre vie privée comme la nôtre. Votre profil, photos et coordonnées restent strictement confidentiels et ne sont jamais partagés sans votre consentement explicite. Chaque introduction est orchestrée avec discrétion et respect." },
        { title: "Préparation des rencontres", desc: "Une fois le match établi, nous organisons votre rendez-vous selon vos préférences. Vous recevez également des conseils et outils pratiques pour que la rencontre se déroule naturellement. Il ne vous reste qu'à vous présenter et profiter du moment." },
        { title: "Retour et Soutien", desc: "Votre matchmaker recueille vos retours après le rendez-vous. Nous offrons des ressources de coaching et un soutien attentionné pour vous aider à réussir." }
      ]
    },
    howItWorks: {
      title: "Comment Ça Marche",
      steps: [
        { num: "01", title: "Postulez", desc: "Remplissez notre questionnaire pour nous aider à comprendre qui vous êtes et vos préférences." },
        { num: "02", title: "Consultation Privée", desc: "Rencontrez votre matchmaker personnel (appel vidéo) pour créer votre profil personnalisé." },
        { num: "03", title: "Introduction Curée", desc: "Nous partageons le profil d'un match compatible pour votre examen. S'il y a un intérêt mutuel, nous coordonnons votre rendez-vous." },
        { num: "04", title: "Affinage", desc: "Si le match ne vous convenait pas, nous recueillons vos retours pour affiner notre approche pour le prochain." }
      ]
    },
    offers: {
      title: "Les Offres",
      pricingNote: "Payez uniquement lorsque nous délivrons",
      pricingDesc: "Nous croyons aux résultats. Pour démarrer votre recherche dédiée (Interview + Création de Profil), un paiement initial de Rs 800 est requis. Le solde restant (Rs 2 200 ou Rs 7 200) est payé uniquement une fois que vous acceptez un match que nous trouvons pour vous.",
      discovery: {
        badge: "Offre Limitée",
        name: "LE PASS DÉCOUVERTE",
        tagline: "Vivez la magie de l'alchimie une fois.",
        price: "Rs 3 000",
        period: "/ unique",
        cta: "Obtenir le Pass Découverte",
        footer: "Disponibilité limitée jusqu'au 31 mars",
        footer2: "Offre limitée aux 50 premières personnes.",
        mainFeature: "1 Rencontre Ultra-sélectionnée",
      },
      membership: {
        badge: "Recommandé",
        name: "ADHÉSION ILLIMITÉE",
        tagline: "Votre année complète d'introductions ultra-sélectionnées.",
        price: "Rs 8 000",
        period: "/ par an",
        cta: "Postuler pour l'Adhésion",
        footer: "Valable 12 Mois",
        mainFeature: "Rencontres Ultra-sélectionnées pour 1 an",
      },
      sharedFeatures: [
        "Payez uniquement lorsque nous délivrons*",
        "Création de Profil avec Matchmaker",
        "Coordination du Rendez-vous",
        "Auto-évaluation des besoins relationnels",
        "Analyse du Style d'Attachement",
        "Analyse des Tendances de Dating",
        "100% Confidentiel",
        "Conseils pré-rendez-vous dans votre boîte mail",
        "Suivi post-rendez-vous",
        "Accès direct à notre équipe de matchmaking (via Whatsapp & Email)"
      ],
      membershipExtras: [
        "Matching Prioritaire",
        "Retour post-rendez-vous et recalibration de recherche si nécessaire",
        "Invitation aux Événements Singles Socials"
      ],
      whatsIncluded: "Ce qui est inclus :"
    },
    why: {
      title: "Pourquoi The Date Alchemy ?",
      desc: "Nous sommes un service de matchmaking centré sur l'humain, conçu pour Maurice. Nous servons discrètement les professionnels et expatriés qui valorisent la confidentialité et la qualité plutôt que la quantité.",
      points: [
        "100% de Profils Vérifiés : Pas de faux, pas de catfishing.",
        "Privé et Discret : Votre profil n'est jamais public. Seul votre match potentiel le verra.",
        "Personnalisé : Les matchs sont sélectionnés personnellement par nos fondateurs."
      ]
    },
    faq: {
      title: "FAQ",
      items: [
        { q: "Que se passe-t-il si j'achète le Pass Découverte et que je veux passer à l'adhésion ?", a: "Si vous souhaitez continuer l'expérience, vous pouvez passer à l'Adhésion Illimitée dans les 30 jours, et nous créditerons vos Rs 3 000 vers l'adhésion complète." },
        { q: "Quand cette offre prend-elle fin ?", a: "Cette offre est exclusivement réservée pour une durée strictement limitée en mars. Une fois les places comblées, nous clôturerons notre offre « Découverte »." },
        { q: "Comment effectuer le paiement ?", a: "Actuellement, nous n'acceptons que les paiements par Juice/Virement bancaire pour les clients à Maurice et à l'étranger." },
        { q: "Que savent les partenaires l'un de l'autre avant la rencontre ?", a: "La confidentialité et la discrétion sont les piliers de notre service. Nous ne communiquons jamais les noms de famille avant le rendez-vous, et nous ne partageons les photos et numéros de téléphone qu'avec votre accord explicite. Nous fournissons aux deux parties un profil complet incluant le mode de vie, la carrière, les centres d'intérêt, l'âge, la taille, la nationalité, le lieu de résidence, le statut matrimonial, les projets à long terme, le partenaire idéal, ainsi que les habitudes en matière de tabac et même le régime alimentaire." },
        { q: "Accueillez-vous les candidats divorcés ou parents célibataires ?", a: "Absolument ! Nous accueillons les personnes divorcées ou parents célibataires, à condition que la séparation soit légalement documentée et à l'amiable. Si vous êtes prêt à commencer le prochain chapitre de votre vie, nous sommes là pour vous aider. Nous sommes transparents sur votre passé avec les matchs potentiels, donc ce n'est pas un sujet qui doit être discuté lors de votre rendez-vous." },
        { q: "Quelle est l'entreprise derrière The Date Alchemy ?", a: "The Date Alchemy est un service offert par l'entité mauricienne enregistrée Frolic Ltd (C23201149), également propriétaire de la plateforme lifestyle Frolic.mu." }
      ]
    },
    footer: {
      rights: `\u00A9 2026 ${COMPANY_INFO.name}. Tous Droits Réservés.`,
      privacy: "Politique de Confidentialité",
      terms: "Conditions d'Utilisation",
      contact: "Contacter le Support"
    }
  }
};

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full flex justify-between items-center py-5 text-left"
        onClick={() => setOpen(!open)}
      >
        <span className="text-lg font-semibold text-gray-900 pr-4">{question}</span>
        {open ? <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />}
      </button>
      {open && (
        <div className="pb-5 text-gray-600 leading-relaxed">{answer}</div>
      )}
    </div>
  );
}

function FeatureCheck({ text, bold }: { text: string; bold?: boolean }) {
  return (
    <div className="flex items-start gap-3 py-2">
      <div className="w-5 h-5 bg-green-500 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
        <Check className="w-3.5 h-3.5 text-white" />
      </div>
      <span className={bold ? "font-bold text-gray-900" : "text-gray-700"}>{text}</span>
    </div>
  );
}

export default function DiscoveryOffer() {
  const { language } = useI18n();
  const c = content[language];

  useSEO({
    title: language === 'en'
      ? "Discovery Offer | The Date Alchemy - Premium Matchmaking Mauritius"
      : "Offre Découverte | The Date Alchemy - Matchmaking Premium Maurice",
    description: language === 'en'
      ? "Experience ultra-curated matchmaking without the annual commitment. Try our Discovery Pass — limited availability through March 31st."
      : "Vivez le matchmaking ultra-curé sans l'engagement annuel. Essayez notre Pass Découverte — disponibilité limitée jusqu'au 31 mars.",
    canonical: `${window.location.origin}/discovery-offer`
  });

  const scrollToOffers = () => {
    document.getElementById('offers-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Minimal Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
          <Link href="/">
            <span className="font-bold text-3xl text-primary cursor-pointer logo">{COMPANY_INFO.name}</span>
          </Link>
          <LanguageSwitcher className="text-gray-700" />
        </div>
      </header>

      {/* 1. HERO SECTION */}
      <section
        className="relative pt-32 pb-16 md:pt-40 md:pb-24 min-h-[90vh] flex items-center"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: '35% center',
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            {c.hero.headline}<br />{c.hero.headlineLine2}
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-6 leading-relaxed">
            {c.hero.subheadline}
          </p>
          <div className="inline-block bg-white/15 backdrop-blur-sm border border-white/30 text-white px-4 py-2 rounded-full text-sm font-semibold mb-8">
            {c.hero.urgency}
          </div>
          <div>
            <button
              onClick={scrollToOffers}
              className="inline-block bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              {c.hero.cta}
            </button>
          </div>

          <div className="mt-16 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Users className="w-5 h-5 text-primary" />
              <h3 className="text-xl font-bold text-white">{c.hero.memberCount}</h3>
            </div>
            <p className="text-gray-200">{c.hero.memberDesc}</p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6">
            {c.testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">"{t.text}"</p>
                <p className="text-sm font-semibold text-gray-500">— {t.profession}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. OUR APPROACH */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">{c.approach.title}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {c.approach.items.map((item, i) => {
              const icons = [ShieldCheck, Heart, MessageCircle, Users];
              const Icon = icons[i];
              return (
                <div key={i} className="bg-gray-50 rounded-xl p-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. HOW IT WORKS */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">{c.howItWorks.title}</h2>
          <div className="space-y-8">
            {c.howItWorks.steps.map((step, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">
                  {step.num}
                </div>
                <div className="pt-2">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. THE OFFERS */}
      <section id="offers-section" className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">{c.offers.title}</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Discovery Pass */}
            <div className="border border-gray-200 rounded-2xl overflow-hidden">
              <div className="bg-gray-50 p-6 border-b border-gray-200">
                <span className="inline-block bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1 rounded-full uppercase mb-3">{c.offers.discovery.badge}</span>
                <h3 className="text-2xl font-bold text-gray-900">{c.offers.discovery.name}</h3>
                <p className="text-gray-500 italic mt-1">{c.offers.discovery.tagline}</p>
              </div>
              <div className="p-6">
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">{c.offers.discovery.price}</span>
                  <span className="text-gray-500 ml-2">{c.offers.discovery.period}</span>
                </div>
                <p className="font-semibold text-gray-900 mb-3">{c.offers.whatsIncluded}</p>
                <FeatureCheck text={c.offers.discovery.mainFeature} bold />
                {c.offers.sharedFeatures.map((f, i) => <FeatureCheck key={i} text={f} />)}
                <div className="mt-6">
                  <Link
                    href="/apply?source=Discovery"
                    onClick={() => {
                      trackApplicationClick(language, 'discovery_offer_discovery_pass');
                      trackApplicationSubmit();
                      window.scrollTo(0, 0);
                    }}
                  >
                    <button className="w-full bg-primary text-white py-3 rounded-full font-semibold text-lg hover:bg-opacity-90 transition-all">
                      {c.offers.discovery.cta}
                    </button>
                  </Link>
                </div>
                <p className="text-sm text-red-600 font-semibold mt-4 italic">{c.offers.discovery.footer}</p>
                <p className="text-sm text-red-600 italic">{c.offers.discovery.footer2}</p>
              </div>
            </div>

            {/* Inner Circle / Membership */}
            <div className="border-2 border-primary rounded-2xl overflow-hidden relative">
              <div className="bg-primary/5 p-6 border-b border-primary/20">
                <span className="inline-block bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase mb-3">{c.offers.membership.badge}</span>
                <h3 className="text-2xl font-bold text-gray-900">{c.offers.membership.name}</h3>
                <p className="text-gray-500 italic mt-1">{c.offers.membership.tagline}</p>
              </div>
              <div className="p-6">
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">{c.offers.membership.price}</span>
                  <span className="text-gray-500 ml-2">{c.offers.membership.period}</span>
                </div>
                <p className="font-semibold text-gray-900 mb-3">{c.offers.whatsIncluded}</p>
                <FeatureCheck text={c.offers.membership.mainFeature} bold />
                {c.offers.sharedFeatures.map((f, i) => <FeatureCheck key={i} text={f} />)}
                {c.offers.membershipExtras.map((f, i) => <FeatureCheck key={`extra-${i}`} text={f} bold />)}
                <div className="mt-6">
                  <Link
                    href="/apply?source=Membership"
                    onClick={() => {
                      trackApplicationClick(language, 'discovery_offer_membership');
                      trackApplicationSubmit();
                      window.scrollTo(0, 0);
                    }}
                  >
                    <button className="w-full bg-primary text-white py-3 rounded-full font-semibold text-lg hover:bg-opacity-90 transition-all">
                      {c.offers.membership.cta}
                    </button>
                  </Link>
                </div>
                <p className="text-sm text-gray-500 font-semibold mt-4">{c.offers.membership.footer}</p>
              </div>
            </div>
          </div>

          {/* Pricing Note */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 max-w-3xl mx-auto text-center">
            <p className="text-sm text-amber-800">
              <span className="font-bold">* {c.offers.pricingNote}: </span>
              {c.offers.pricingDesc}
            </p>
          </div>
        </div>
      </section>

      {/* 5. WHY THE DATE ALCHEMY */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{c.why.title}</h2>
              <p className="text-gray-600 leading-relaxed mb-8">{c.why.desc}</p>
              <div className="space-y-4">
                {c.why.points.map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-green-500 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src={teamPhoto}
                alt="The Date Alchemy Team"
                className="rounded-2xl shadow-lg max-w-sm w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">{c.faq.title}</h2>
          <div>
            {c.faq.items.map((item, i) => (
              <FAQItem key={i} question={item.q} answer={item.a} />
            ))}
          </div>
        </div>
      </section>

      {/* 7. SIMPLIFIED FOOTER */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-400 text-sm mb-4">{c.footer.rights}</p>
          <div className="flex justify-center gap-6 text-sm">
            <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
              {c.footer.privacy}
            </Link>
            <span className="text-gray-600">|</span>
            <a href={`mailto:${CONTACT_INFO.email}`} className="text-gray-400 hover:text-white transition-colors">
              {c.footer.contact}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
