import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const coachingCards = [
  "Your Needs Assessment",
  "Attachment Style Assessment", 
  "Dating Tendencies Assessment",
  "Direct Access to Our Matchmaking Team",
  "Pre-Date and Pre-Dating Advice via Email",
  "Reflection Rituals after Each Date",
  "Bi-weekly Science-Based Insights"
];

export default function CoachingCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsToShow = 3;
  const maxIndex = Math.max(0, coachingCards.length - cardsToShow);

  const nextSlide = () => {
    setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };

  return (
    <section className="section-earthy py-32">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl serif-title mb-8 text-gray-900">
            Self-Discovery & Coaching
          </h2>
          <p className="text-xl sans-body text-gray-600 max-w-5xl mx-auto leading-relaxed">
            We don't just help you meet the right person. Our process addresses the inner patterns that shape your relationships, often without you realizing it.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="flex items-center justify-between mb-8">
            <button 
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="p-2 rounded-full border border-gray-300 hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed luxury-hover"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={nextSlide}
              disabled={currentIndex === maxIndex}
              className="p-2 rounded-full border border-gray-300 hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed luxury-hover"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * (100 / Math.min(cardsToShow, window.innerWidth < 768 ? 1 : cardsToShow))}%)` }}
            >
              {coachingCards.map((card, index) => (
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