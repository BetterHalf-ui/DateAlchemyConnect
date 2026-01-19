import { useEffect } from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { useI18n } from "@/lib/i18n";
import { useSEO } from "@/hooks/use-seo";
import { trackApplicationClick } from "@/lib/analytics";

export default function Apply() {
  const { t, language } = useI18n();

  const seoConfig = {
    en: {
      title: "Apply for Membership | The Date Alchemy - Premium Matchmaking Mauritius",
      description: "Apply to join The Date Alchemy's exclusive matchmaking network. Complete your profile confidentially and start your journey to meaningful connections in Mauritius."
    },
    fr: {
      title: "Demande d'adhésion | The Date Alchemy - Matchmaking Premium Maurice",
      description: "Postulez pour rejoindre le réseau exclusif de matchmaking The Date Alchemy. Complétez votre profil en toute confidentialité et commencez votre parcours vers des connexions significatives à Maurice."
    }
  };

  useSEO({
    title: seoConfig[language].title,
    description: seoConfig[language].description,
    canonical: `${window.location.origin}/apply`
  });

  useEffect(() => {
    trackApplicationClick(language, 'apply_page_view');

    const script = document.createElement('script');
    script.src = 'https://server.fillout.com/embed/v1/';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      const existingScript = document.querySelector('script[src="https://server.fillout.com/embed/v1/"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [language]);

  const content = {
    en: {
      eyebrow: "Join 400+ vetted members of The Date Alchemy network in Mauritius.",
      heading: "Get Started Today",
      subheadline: "Take the first step toward meeting your match. Fill out the preliminary details below.",
      trustFooter: "Your Privacy is Our Priority",
      trustText: "All information you share is 100% confidential. We never share your personal details with anyone outside our matchmaking team."
    },
    fr: {
      eyebrow: "Rejoignez plus de 400 membres vérifiés du réseau The Date Alchemy à Maurice.",
      heading: "Commencez Aujourd'hui",
      subheadline: "Faites le premier pas vers votre rencontre. Remplissez les détails préliminaires ci-dessous.",
      trustFooter: "Votre Confidentialité est Notre Priorité",
      trustText: "Toutes les informations que vous partagez sont 100% confidentielles. Nous ne partageons jamais vos données personnelles avec quiconque en dehors de notre équipe de matchmaking."
    }
  };

  const c = content[language];
  const formId = language === 'fr' ? '85BTsRpeJYus' : 'cxX2zKbtj9us';

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <p className="text-sm uppercase tracking-wide text-gray-500 mb-4">{c.eyebrow}</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{c.heading}</h1>
            <p className="text-xl text-gray-600">{c.subheadline}</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-4 md:p-8">
            <div 
              style={{ width: '100%', minHeight: '600px' }} 
              data-fillout-id={formId}
              data-fillout-embed-type="standard" 
              data-fillout-inherit-parameters 
              data-fillout-dynamic-resize
            />
          </div>

          <div className="mt-6 bg-gray-100 border border-gray-200 rounded-lg p-4 text-center">
            <p className="text-sm text-gray-600">
              <span className="mr-2">🔒</span>
              <span className="font-semibold">{c.trustFooter}</span>
              {" "}{c.trustText}
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
