import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { COMPANY_INFO, EXTERNAL_LINKS } from "@/lib/constants";

export default function Header() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/">
            <div className="font-bold text-xl text-gray-900 hover:text-primary transition-colors cursor-pointer">
              {COMPANY_INFO.name}
            </div>
          </Link>
          <a 
            href={EXTERNAL_LINKS.applicationForm} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button className="bg-primary hover:bg-primary/90 text-white px-6 py-2 font-medium">
              Apply Now
            </Button>
          </a>
        </div>
      </div>
    </nav>
  );
}
