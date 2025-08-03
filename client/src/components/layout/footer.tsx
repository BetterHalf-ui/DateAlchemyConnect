import { Link } from "wouter";
import { Facebook, Instagram } from "lucide-react";
import { COMPANY_INFO, CONTACT_INFO, EXTERNAL_LINKS } from "@/lib/constants";
import { useI18n } from "@/lib/i18n";

export default function Footer() {
  const { t } = useI18n();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-xl mb-4">{COMPANY_INFO.name}</h3>
            <p className="text-gray-400 mb-4">
              {t('footer.tagline')}
            </p>
            <div className="flex space-x-4">
              <a 
                href={EXTERNAL_LINKS.instagram} 
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a 
                href={EXTERNAL_LINKS.facebook} 
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a 
                  href={EXTERNAL_LINKS.applicationForm} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  {t('nav.applyNow')}
                </a>
              </li>
              <li>
                <Link href="/network">
                  <span className="hover:text-primary transition-colors cursor-pointer">{t('nav.network')}</span>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <span className="hover:text-primary transition-colors cursor-pointer">{t('nav.insights')}</span>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">{t('footer.legal')}</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/privacy-policy">
                  <span className="hover:text-primary transition-colors cursor-pointer">{t('footer.privacyPolicy')}</span>
                </Link>
              </li>
              <li>
                <Link href="/terms-of-use">
                  <span className="hover:text-primary transition-colors cursor-pointer">{t('footer.termsOfUse')}</span>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">{t('footer.contact')}</h4>
            <div className="text-gray-400 space-y-2">
              <p>{CONTACT_INFO.phone}</p>
              <p>{CONTACT_INFO.email}</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>{COMPANY_INFO.parentCompany}</p>
        </div>
      </div>
    </footer>
  );
}
