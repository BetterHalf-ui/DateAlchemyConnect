import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import RebrandBanner from "@/components/layout/rebrand-banner";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useI18n } from "@/lib/i18n";
import { useApplicationLink } from "@/hooks/use-application-link";

export default function HowItWorks() {
  const { t, language } = useI18n();
  const applicationLink = useApplicationLink();
  
  return (
    <div className="min-h-screen">
      <RebrandBanner />
      <Header />
      
      {/* Hero Section with Image and Text */}
      <section className="bg-white py-20" style={{ paddingTop: '120px' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="order-2 lg:order-1">
              <h1 className="text-5xl md:text-6xl font-bold mb-8 subtitle text-gray-900">
                {t('howItWorks.hero.title')}
              </h1>
              
              {/* Call to Action Section */}
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 subtitle text-gray-900">{t('howItWorks.hero.ctaTitle')}</h3>
                <p className="text-lg text-gray-700 leading-relaxed body-text mb-6">
                  {t('howItWorks.hero.ctaDescription')}
                </p>
                <a 
                  href={applicationLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-block bg-primary text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 body-text"
                >
                  {t('howItWorks.hero.ctaButton')}
                </a>
              </div>
            </div>
            
            {/* Image */}
            <div className="order-1 lg:order-2">
              <img 
                src="/attached_assets/WhatsApp Image 2025-07-30 at 12.49.09 PM (1)_1754165583551.jpeg"
                alt="Professional consultation session"
                className="w-full h-96 lg:h-[500px] object-cover rounded-xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Process - Desktop Version */}
      <section className="py-20 bg-gray-50 hidden lg:block">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 subtitle text-gray-900">
            {t('howItWorks.journey.title')}
          </h2>
          <p className="text-xl text-gray-600 text-center mb-20 body-text">
            {t('howItWorks.journey.subtitle')}
          </p>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-primary"></div>
            
            {/* Step 01 */}
            <div className="relative flex items-center mb-20">
              <div className="w-1/2 pr-8 text-right">
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h3 className="text-2xl font-bold mb-4 subtitle text-gray-900">{t('howItWorks.step1.title')}</h3>
                  <p className="text-gray-700 mb-4 body-text">
                    {t('howItWorks.step1.description1')}
                  </p>
                  <p className="text-gray-700 body-text">
                    {t('howItWorks.step1.description2')}
                  </p>
                </div>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold z-10">
                01
              </div>
              <div className="w-1/2 pl-8"></div>
            </div>
            
            {/* Step 02 */}
            <div className="relative flex items-center mb-20">
              <div className="w-1/2 pr-8"></div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold z-10">
                02
              </div>
              <div className="w-1/2 pl-8">
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h3 className="text-2xl font-bold mb-4 subtitle text-gray-900">{t('howItWorks.step2.title')}</h3>
                  <p className="text-gray-700 mb-4 body-text">
                    {t('howItWorks.step2.description1')}
                  </p>
                  <p className="text-gray-700 mb-4 body-text">
                    {t('howItWorks.step2.description2')}
                  </p>
                  <p className="text-gray-700 body-text">
                    {t('howItWorks.step2.description3')}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Step 03 */}
            <div className="relative flex items-center mb-20">
              <div className="w-1/2 pr-8 text-right">
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h3 className="text-2xl font-bold mb-4 subtitle text-gray-900">{t('howItWorks.step3.title')}</h3>
                  <p className="text-gray-700 mb-4 body-text">
                    {t('howItWorks.step3.description1')}
                  </p>
                  <p className="text-gray-700 mb-4 body-text">
                    {t('howItWorks.step3.description2')}
                  </p>
                  <p className="text-gray-700 body-text">
                    {t('howItWorks.step3.description3')}
                  </p>
                </div>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold z-10">
                03
              </div>
              <div className="w-1/2 pl-8"></div>
            </div>
            
            {/* Step 04 */}
            <div className="relative flex items-center">
              <div className="w-1/2 pr-8"></div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold z-10">
                04
              </div>
              <div className="w-1/2 pl-8">
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h3 className="text-2xl font-bold mb-4 subtitle text-gray-900">{t('howItWorks.step4.title')}</h3>
                  <p className="text-gray-700 mb-4 body-text">
                    {t('howItWorks.step4.description1')}
                  </p>
                  <p className="text-gray-700 body-text">
                    {t('howItWorks.step4.description2')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Process - Mobile Version */}
      <section className="py-20 bg-gray-50 lg:hidden">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 subtitle text-gray-900">
            {t('howItWorks.journey.title')}
          </h2>
          <p className="text-xl text-gray-600 text-center mb-20 body-text">
            {t('howItWorks.journey.subtitle')}
          </p>
          
          <div className="space-y-8">
            {/* Step 01 Mobile */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center text-lg font-bold mr-4">
                  01
                </div>
                <h3 className="text-xl font-bold subtitle text-gray-900">{t('howItWorks.step1.title')}</h3>
              </div>
              <p className="text-gray-700 mb-4 body-text">
                {t('howItWorks.step1.description1')}
              </p>
              <p className="text-gray-700 body-text">
                {t('howItWorks.step1.description2')}
              </p>
            </div>
            
            {/* Step 02 Mobile */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center text-lg font-bold mr-4">
                  02
                </div>
                <h3 className="text-xl font-bold subtitle text-gray-900">{t('howItWorks.step2.title')}</h3>
              </div>
              <p className="text-gray-700 mb-4 body-text">
                {t('howItWorks.step2.description1')}
              </p>
              <p className="text-gray-700 mb-4 body-text">
                {t('howItWorks.step2.description2')}
              </p>
              <p className="text-gray-700 body-text">
                {t('howItWorks.step2.description3')}
              </p>
            </div>
            
            {/* Step 03 Mobile */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center text-lg font-bold mr-4">
                  03
                </div>
                <h3 className="text-xl font-bold subtitle text-gray-900">{t('howItWorks.step3.title')}</h3>
              </div>
              <p className="text-gray-700 mb-4 body-text">
                {t('howItWorks.step3.description1')}
              </p>
              <p className="text-gray-700 mb-4 body-text">
                {t('howItWorks.step3.description2')}
              </p>
              <p className="text-gray-700 body-text">
                {t('howItWorks.step3.description3')}
              </p>
            </div>
            
            {/* Step 04 Mobile */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center text-lg font-bold mr-4">
                  04
                </div>
                <h3 className="text-xl font-bold subtitle text-gray-900">{t('howItWorks.step4.title')}</h3>
              </div>
              <p className="text-gray-700 body-text">
                {t('howItWorks.step4.description1')}
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Call to Action */}
      <section className="py-20 bg-gray-50 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 subtitle text-gray-900">{t('howItWorks.finalCta.readyTitle')}</h2>
          <p className="text-xl text-gray-700 mb-8 body-text">
            {t('howItWorks.finalCta.readyDescription')}
          </p>
          <a 
            href={applicationLink} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button className="bg-primary hover:bg-primary/90 text-white px-12 py-4 text-xl font-semibold mb-6">
              {t('howItWorks.finalCta.readyButton')}
            </Button>
          </a>
          <div className="text-gray-600">
            <p className="mb-2">{t('howItWorks.finalCta.notReadyTitle')}</p>
            <Link href="/dating-patterns-guide" onClick={() => window.scrollTo(0, 0)}>
              <span className="text-primary hover:underline cursor-pointer">
                {t('howItWorks.finalCta.notReadyDescription')}
              </span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}