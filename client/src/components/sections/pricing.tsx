import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { EXTERNAL_LINKS } from "@/lib/constants";
import { useI18n } from '@/lib/i18n';

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
    titleKey: "home.guarantees.guarantee2Title", 
    descriptionKey: "home.guarantees.guarantee2Description"
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
  const { t } = useI18n();
  
  return (
    <>
      {/* Trust Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-16">{t('home.trust.title')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustStats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold text-primary mb-2">{stat.percentage}</div>
                <p className="text-gray-700">{t(stat.descriptionKey)}</p>
              </div>
            ))}
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
          
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-12 rounded-2xl mb-12 premium-shadow">
            <p className="text-xl mb-6 body-text text-gray-800">
              {t('home.pricing.urgencyMessage')}
            </p>
            <p className="text-primary font-bold text-xl body-text">{t('home.pricing.priceIncrease')}</p>
          </div>
          
          <a 
            href={EXTERNAL_LINKS.applicationForm} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button className="bg-primary hover:bg-primary/90 text-white px-12 py-6 text-xl font-semibold mb-8 rounded-full">
              {t('home.pricing.applyNow')}
            </Button>
          </a>
          
          <p className="text-gray-500 text-base body-text">
            {t('home.pricing.notReady')}{" "}
            <Link href="/network" onClick={() => window.scrollTo(0, 0)}>
              <span className="text-primary hover:underline cursor-pointer">
                {t('home.pricing.joinNetwork')}
              </span>
            </Link>
            <br />
            <Link href="/network" onClick={() => window.scrollTo(0, 0)}>
              <span className="text-primary hover:underline cursor-pointer">{t('home.pricing.createProfile')}</span>
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
