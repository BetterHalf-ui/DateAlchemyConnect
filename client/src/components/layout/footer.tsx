import { Link } from "wouter";
import { Facebook, Instagram } from "lucide-react";
import { COMPANY_INFO, CONTACT_INFO, EXTERNAL_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-xl mb-4">{COMPANY_INFO.name}</h3>
            <p className="text-gray-400 mb-4">
              Built for real connection with exceptional professionals in Mauritius.
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
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a 
                  href={EXTERNAL_LINKS.applicationForm} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Apply Now
                </a>
              </li>
              <li>
                <Link href="/network">
                  <a className="hover:text-primary transition-colors">Join Network</a>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <a className="hover:text-primary transition-colors">Blog</a>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Terms of Use
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
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
