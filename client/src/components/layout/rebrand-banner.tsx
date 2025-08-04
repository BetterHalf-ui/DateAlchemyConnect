import { Link } from "wouter";
import { X } from "lucide-react";
import { useState } from "react";

export default function RebrandBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-primary text-white py-2 px-4 relative fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex-1 text-center">
          <span className="text-sm md:text-base">
            We've rebranded from Betterhalf to The Date Alchemy! 
            <Link href="/rebrand-announcement">
              <span className="underline hover:no-underline ml-2 cursor-pointer font-medium">
                Learn more →
              </span>
            </Link>
          </span>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="ml-4 p-1 hover:bg-white/20 rounded"
          aria-label="Close banner"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
}