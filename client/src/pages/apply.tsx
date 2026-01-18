import { useEffect } from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { useI18n } from "@/lib/i18n";
import { useSEO } from "@/hooks/use-seo";
import { Shield, Lock, Eye } from "lucide-react";
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
      title: "Start Your Journey",
      subtitle: "Complete your application to join our exclusive matchmaking network",
      confidentialTitle: "Your Privacy is Our Priority",
      confidentialText: "All information you share is 100% confidential. We never share your personal details with anyone outside our matchmaking team.",
      features: [
        { icon: Shield, text: "Secure & encrypted application" },
        { icon: Lock, text: "Information never shared externally" },
        { icon: Eye, text: "Only our matchmakers review your profile" }
      ]
    },
    fr: {
      title: "Commencez Votre Parcours",
      subtitle: "Complétez votre candidature pour rejoindre notre réseau de matchmaking exclusif",
      confidentialTitle: "Votre Confidentialité est Notre Priorité",
      confidentialText: "Toutes les informations que vous partagez sont 100% confidentielles. Nous ne partageons jamais vos données personnelles avec quiconque en dehors de notre équipe de matchmaking.",
      features: [
        { icon: Shield, text: "Candidature sécurisée et cryptée" },
        { icon: Lock, text: "Informations jamais partagées à l'extérieur" },
        { icon: Eye, text: "Seuls nos matchmakers examinent votre profil" }
      ]
    }
  };

  const c = content[language];
  const formId = language === 'fr' ? '85BTsRpeJYus' : 'cxX2zKbtj9us';

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{c.title}</h1>
            <p className="text-xl text-gray-600">{c.subtitle}</p>
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <Lock className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-xl font-semibold">{c.confidentialTitle}</h2>
            </div>
            <p className="text-gray-700 mb-4">{c.confidentialText}</p>
            <div className="grid md:grid-cols-3 gap-4">
              {c.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                  <feature.icon className="w-4 h-4 text-primary" />
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>
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
        </div>
      </main>

      <Footer />
    </div>
  );
}
