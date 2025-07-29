import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const experienceCards = [
  "Curated introductions with pre-screened singles",
  "Compatibility assessment based on lifestyle and values", 
  "Human-centered matching — handpicked by experts",
  "Attachment-aware matchmaking to avoid mismatches",
  "Full access to vetted profiles — client remains in control",
  "Scheduling concierge — we handle all logistics",
  "Post-date feedback and guidance",
  "Private Singles Socials — curated brunches/dinners"
];

export default function ExperienceCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsToShow = 3;
  const maxIndex = Math.max(0, experienceCards.length - cardsToShow);

  const nextSlide = () => {
    setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };

  return (
    <section id="alchemy" className="section-white py-32">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl serif-title mb-8 text-gray-900">
            The Date Alchemy Experience
          </h2>
          <p className="text-xl sans-body text-gray-600 mb-12 max-w-4xl mx-auto">
            Everything you need for a transformative dating experience — from premium matchmaking to personal growth guidance.
          </p>
          <p className="text-lg sans-body text-gray-700 max-w-5xl mx-auto leading-relaxed">
            We begin by organising quality dates with intentional and compatible singles who match your standards, removing the dating app fatigue and confusion from the equation.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="flex items-center justify-between mb-8">
            <button 
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="p-2 rounded-full border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed luxury-hover"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={nextSlide}
              disabled={currentIndex === maxIndex}
              className="p-2 rounded-full border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed luxury-hover"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * (100 / Math.min(cardsToShow, window.innerWidth < 768 ? 1 : cardsToShow))}%)` }}
            >
              {experienceCards.map((card, index) => (
                <div 
                  key={index} 
                  className="flex-shrink-0 px-4"
                  style={{ width: `${100 / Math.min(cardsToShow, window.innerWidth < 768 ? 1 : cardsToShow)}%` }}
                >
                  <div className="carousel-card p-8 rounded-2xl h-48 flex items-center justify-center text-center">
                    <p className="text-lg serif-title font-medium text-gray-900 leading-relaxed">
                      {card}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-primary' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}