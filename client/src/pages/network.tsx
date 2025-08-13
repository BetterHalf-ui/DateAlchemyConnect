import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import RebrandBanner from "@/components/layout/rebrand-banner";
import PictureCoupleImg from "@assets/PictureCouple_1754227660398.jpeg";
import { useI18n } from '@/lib/i18n';
import { EXTERNAL_LINKS } from "@/lib/constants";
import { trackFreeSignup } from "@/lib/meta-pixel";

export default function Network() {
  const { t } = useI18n();

  return (
    <div className="min-h-screen">
      <RebrandBanner />
      <Header />
      
      <section className="py-20 bg-white min-h-screen" style={{ paddingTop: '120px' }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            {/* Text Content */}
            <div>
              <h1 className="text-5xl font-bold mb-6">{t('network.title')}</h1>
              <p className="text-2xl text-gray-700 mb-8">
                {t('network.subtitle')}
              </p>
              <p className="text-lg text-gray-600">
                {t('network.description')}
              </p>
            </div>
            
            {/* Image */}
            <div className="relative">
              <img 
                src={PictureCoupleImg}
                alt="Professional couple connecting"
                className="w-full h-96 lg:h-[500px] object-cover rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-lg"></div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-xl mb-12">
            <h2 className="text-3xl font-bold text-center mb-8">{t('network.benefits.title')}</h2>
            <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
              {t('network.benefits.description')}
            </p>
            <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mt-4">
              {t('network.benefits.poolDescription')}
            </p>
            <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mt-4 italic">
              {t('network.benefits.analogy')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-3">{t('network.step1.title')}</h3>
              <p className="text-gray-600">{t('network.step1.desc')}</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-3">{t('network.step2.title')}</h3>
              <p className="text-gray-600">{t('network.step2.desc')}</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-3">{t('network.step3.title')}</h3>
              <p className="text-gray-600">{t('network.step3.desc')}</p>
            </div>
          </div>
          
          <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-xl mb-12">
            <h3 className="font-bold mb-3">{t('network.note.title')}</h3>
            <p className="text-gray-700 mb-3">
              {t('network.note.description')}
            </p>
          </div>
          
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6">{t('network.cta.title')}</h3>
            <p className="text-lg text-gray-700 mb-8">
              {t('network.cta.description')}
            </p>
            <a 
              href="https://betterhalf.fillout.com/t/45wXDMu31Aus" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => trackFreeSignup()}
            >
              <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold mb-4">
                {t('network.cta.button')}
              </Button>
            </a>
            <p className="text-gray-600">
              {t('network.cta.membership')}{" "}
              <Link href="/" onClick={() => window.scrollTo(0, 0)}>
                <span className="text-primary hover:underline cursor-pointer">{t('network.cta.membershipLink')}</span>
              </Link>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
