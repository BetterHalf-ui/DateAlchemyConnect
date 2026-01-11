import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useI18n } from '@/lib/i18n';
import { useApplicationLink } from "@/hooks/use-application-link";
import { trackApplicationClick } from "@/lib/analytics";
import { trackApplicationSubmit } from "@/lib/meta-pixel";

const trustStats = [
  { percentage: "99%", descriptionKey: "home.trust.stat1" },
  { percentage: "88%", descriptionKey: "home.trust.stat2" },
  { percentage: "32%", descriptionKey: "home.trust.stat3" },
  { percentage: "22%", descriptionKey: "home.trust.stat4" }
];

const guarantees = [
  {
    titleKey: "home.guarantees.guarantee1Title",
    descriptionKey: "home.guarantees.guarantee1Description"
  },
  {
    titleKey: "home.guarantees.guarantee3Title",
    descriptionKey: "home.guarantees.guarantee3Description"
  },
  {
    titleKey: "home.guarantees.guarantee4Title",
    descriptionKey: "home.guarantees.guarantee4Description"
  }
];

export default function Pricing() {
  const { t, language } = useI18n();
  const applicationLink = useApplicationLink();
  
  return (
    <>
      {/* New Comparison Table Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl serif-title font-bold text-center mb-8 text-gray-900">
            {t('home.comparison.title')}
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 sans-body">
            {t('home.comparison.subtitle')}
          </p>
          
          {/* Comparison Table */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="overflow-x-auto">
              <table className="w-full">
                {/* Header */}
                <thead>
                  <tr className="bg-primary">
                    <th className="text-left py-6 px-6 font-bold text-lg text-white sans-body">{t('home.comparison.headerIssue')}</th>
                    <th className="text-center py-6 px-6 font-bold text-lg text-white sans-body">{t('home.comparison.headerDatingApps')}</th>
                    <th className="text-center py-6 px-6 font-bold text-lg text-white sans-body">{t('home.comparison.headerDateAlchemy')}</th>
                  </tr>
                </thead>
                
                {/* Body */}
                <tbody className="divide-y divide-gray-100">
                  {/* User Mindset */}
                  <tr className="hover:bg-gray-50/50 transition-colors">
                    <td className="py-6 px-6 font-bold text-gray-900 sans-body">{t('home.comparison.userMindset.issue')}</td>
                    <td className="py-6 px-6 text-center text-red-700 sans-body font-bold">
                      {t('home.comparison.userMindset.datingApps')}
                    </td>
                    <td className="py-6 px-6 text-center text-green-700 sans-body font-bold">
                      {t('home.comparison.userMindset.dateAlchemy')}
                    </td>
                  </tr>
                  
                  {/* Confidentiality */}
                  <tr className="hover:bg-gray-50/50 transition-colors">
                    <td className="py-6 px-6 font-bold text-gray-900 sans-body">{t('home.comparison.confidentiality.issue')}</td>
                    <td className="py-6 px-6 text-center text-red-700 sans-body font-bold">
                      {t('home.comparison.confidentiality.datingApps')}
                    </td>
                    <td className="py-6 px-6 text-center text-green-700 sans-body font-bold">
                      {t('home.comparison.confidentiality.dateAlchemy')}
                    </td>
                  </tr>
                  
                  {/* Time Cost */}
                  <tr className="hover:bg-gray-50/50 transition-colors">
                    <td className="py-6 px-6 font-bold text-gray-900 sans-body">{t('home.comparison.timeCost.issue')}</td>
                    <td className="py-6 px-6 text-center text-red-700 sans-body font-bold">
                      {t('home.comparison.timeCost.datingApps')}
                    </td>
                    <td className="py-6 px-6 text-center text-green-700 sans-body font-bold">
                      {t('home.comparison.timeCost.dateAlchemy')}
                    </td>
                  </tr>
                  
                  {/* Overall Experience */}
                  <tr className="hover:bg-gray-50/50 transition-colors">
                    <td className="py-6 px-6 font-bold text-gray-900 sans-body">{t('home.comparison.overallExperience.issue')}</td>
                    <td className="py-6 px-6 text-center text-red-700 sans-body font-bold">
                      {t('home.comparison.overallExperience.datingApps')}
                    </td>
                    <td className="py-6 px-6 text-center text-green-700 sans-body font-bold">
                      {t('home.comparison.overallExperience.dateAlchemy')}
                    </td>
                  </tr>
                  
                  {/* Scams / Fake Profiles */}
                  <tr className="hover:bg-gray-50/50 transition-colors">
                    <td className="py-6 px-6 font-bold text-gray-900 sans-body">{t('home.comparison.scamsFakeProfiles.issue')}</td>
                    <td className="py-6 px-6 text-center text-red-700 sans-body font-bold">
                      {t('home.comparison.scamsFakeProfiles.datingApps')}
                    </td>
                    <td className="py-6 px-6 text-center text-green-700 sans-body font-bold">
                      {t('home.comparison.scamsFakeProfiles.dateAlchemy')}
                    </td>
                  </tr>
                  
                  {/* Disrespectful Messages */}
                  <tr className="hover:bg-gray-50/50 transition-colors">
                    <td className="py-6 px-6 font-bold text-gray-900 sans-body">{t('home.comparison.disrespectfulMessages.issue')}</td>
                    <td className="py-6 px-6 text-center text-red-700 sans-body font-bold">
                      {t('home.comparison.disrespectfulMessages.datingApps')}
                    </td>
                    <td className="py-6 px-6 text-center text-green-700 sans-body font-bold">
                      {t('home.comparison.disrespectfulMessages.dateAlchemy')}
                    </td>
                  </tr>
                  
                  {/* Persistent / Unwanted Contact */}
                  <tr className="hover:bg-gray-50/50 transition-colors">
                    <td className="py-6 px-6 font-bold text-gray-900 sans-body">{t('home.comparison.persistentContact.issue')}</td>
                    <td className="py-6 px-6 text-center text-red-700 sans-body font-bold">
                      {t('home.comparison.persistentContact.datingApps')}
                    </td>
                    <td className="py-6 px-6 text-center text-green-700 sans-body font-bold">
                      {t('home.comparison.persistentContact.dateAlchemy')}
                    </td>
                  </tr>
                  
                  {/* Insults / Threats */}
                  <tr className="hover:bg-gray-50/50 transition-colors">
                    <td className="py-6 px-6 font-bold text-gray-900 sans-body">{t('home.comparison.insultsThreats.issue')}</td>
                    <td className="py-6 px-6 text-center text-red-700 sans-body font-bold">
                      {t('home.comparison.insultsThreats.datingApps')}
                    </td>
                    <td className="py-6 px-6 text-center text-green-700 sans-body font-bold">
                      {t('home.comparison.insultsThreats.dateAlchemy')}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            {/* Footnote */}
            <div className="bg-gray-50 px-8 py-4 border-t border-gray-100">
              <p className="text-sm text-gray-600 sans-body italic">
                {t('home.comparison.source')}
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <a 
              href={applicationLink} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button className="bg-primary hover:bg-primary/90 text-white px-12 py-4 text-xl serif-title luxury-hover">
                {t('home.comparison.cta')}
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">{t('home.guarantees.title')}</h2>
          <div className="space-y-8">
            {guarantees.map((guarantee, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-primary">{t(guarantee.titleKey)}</h3>
                <p className="text-gray-700">{t(guarantee.descriptionKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-32 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-5xl font-bold mb-8 subtitle text-gray-900">{t('home.pricing.membershipTitle')}</h2>
          <div className="text-7xl font-bold text-primary mb-4">Rs8000</div>
          <p className="text-2xl mb-2 body-text text-gray-700">{t('home.pricing.membershipPeriod')}</p>
          <p className="text-gray-500 mb-12 text-lg body-text">{t('home.pricing.membershipCompare')}</p>
          
          <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-12 rounded-2xl mb-12 premium-shadow">
            <p className="text-primary font-bold text-xl body-text">{t('home.pricing.priceIncrease')}</p>
            <p className="text-gray-600 text-sm mt-4 body-text">{t('home.pricing.priceIncreaseDisclaimer')}</p>
          </div>
          
          <a 
            href={applicationLink} 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={() => {
              trackApplicationClick(language, 'pricing_membership');
              trackApplicationSubmit();
            }}
          >
            <Button className="bg-primary hover:bg-primary/90 text-white px-12 py-6 text-xl font-semibold mb-8 rounded-full">
              {t('home.pricing.applyNow')}
            </Button>
          </a>
          
          <p className="text-gray-500 text-base body-text">
            {t('home.pricing.notReady')}{" "}
            <Link href="/dating-patterns-guide" onClick={() => window.scrollTo(0, 0)}>
              <span className="text-primary hover:underline cursor-pointer">
                {t('home.pricing.freeReport')}
              </span>
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
