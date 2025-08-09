import { useState, useEffect, useRef } from 'react';
import { useI18n } from '@/lib/i18n';

const membershipFeatures = {
  premiumMatchmaking: {
    titleKey: "home.membership.premiumTitle",
    descriptionKey: "home.membership.premiumSubtitle",
    featureKeys: [
      "home.membership.feature1",
      "home.membership.feature2", 
      "home.membership.feature3",
      "home.membership.feature4",
      "home.membership.feature5",
      "home.membership.feature6",
      "home.membership.feature7",
      "home.membership.bonus"
    ]
  },
  innerWork: {
    titleKey: "home.membership.innerWorkTitle",
    descriptionKey: "home.membership.innerWorkDescription",
    subtitleKey: "home.membership.innerWorkSubtitle",
    subsections: [
      {
        titleKey: "home.membership.innerWork1Title",
        featureKeys: [
          "home.membership.innerWork1Feature1",
          "home.membership.innerWork1Feature2",
          "home.membership.innerWork1Feature3"
        ]
      },
      {
        titleKey: "home.membership.innerWork2Title",
        featureKeys: [
          "home.membership.innerWork2Feature1",
          "home.membership.innerWork2Feature2",
          "home.membership.innerWork2Feature3",
          "home.membership.innerWork2Feature4"
        ]
      }
    ]
  }
};

export default function Membership() {
  const { t } = useI18n();
  const [visibleFeatures, setVisibleFeatures] = useState<Set<string>>(new Set());
  const featureRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    const handleScroll = () => {
      Object.entries(featureRefs.current).forEach(([key, element]) => {
        if (element) {
          const rect = element.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight - 100 && rect.bottom > 0;
          
          if (isVisible && !visibleFeatures.has(key)) {
            setVisibleFeatures(prev => new Set(Array.from(prev).concat(key)));
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial visibility

    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleFeatures]);

  return (
    <section className="py-32 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6 subtitle text-gray-900">{t('home.membership.title')}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto body-text">
            {t('home.membership.subtitle')}
          </p>
        </div>
        
        <div className="space-y-16">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2 bg-white rounded-3xl p-12 premium-shadow hover-lift">
              <h3 className="text-3xl font-bold mb-6 text-primary subtitle">
                {t(membershipFeatures.premiumMatchmaking.titleKey)}
              </h3>
              <p className="text-lg text-gray-700 mb-8 body-text leading-relaxed">
                {t(membershipFeatures.premiumMatchmaking.descriptionKey)}
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {membershipFeatures.premiumMatchmaking.featureKeys.map((featureKey, index) => {
                  const feature = t(featureKey);
                  const animationKey = `premium-${index}`;
                  const isVisible = visibleFeatures.has(animationKey);
                  
                  // Parse bold formatting
                  const renderFeatureText = (text: string) => {
                    const parts = text.split('**');
                    return parts.map((part, i) => {
                      if (i % 2 === 1) {
                        return <strong key={i}>{part}</strong>;
                      }
                      return part;
                    });
                  };
                  
                  return (
                    <div 
                      key={index} 
                      ref={el => featureRefs.current[animationKey] = el}
                      className={`flex items-start transition-all duration-700 ${
                        isVisible 
                          ? 'opacity-100 translate-y-0' 
                          : 'opacity-0 translate-y-4'
                      }`}
                      style={{ transitionDelay: `${index * 150}ms` }}
                    >
                      <div className="w-2 h-2 bg-primary rounded-full mt-3 mr-4 flex-shrink-0"></div>
                      <span className="text-gray-700 body-text leading-relaxed">
                        {renderFeatureText(feature)}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div className="h-full">
              <img 
                src="/attached_assets/Screenshot 2025-07-30 at 17.02.42_1753881255839.png" 
                alt="Happy couple enjoying intimate moment together" 
                className="rounded-2xl shadow-lg w-full h-full object-cover hover-lift"
              />
            </div>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <div className="h-full">
              <img 
                src="/attached_assets/74c7b6d9-723b-48f4-8ad3-88de4e6dabe9_1753881262177.jpeg" 
                alt="Professional woman reflecting confidently" 
                className="rounded-2xl shadow-lg w-full h-full object-cover hover-lift"
              />
            </div>
            
            <div className="lg:col-span-2 bg-white rounded-3xl p-12 premium-shadow hover-lift">
              <h3 className="text-3xl font-bold mb-6 text-primary subtitle">
                {t(membershipFeatures.innerWork.titleKey)}
              </h3>
              <p className="text-lg text-gray-700 mb-8 body-text leading-relaxed">
                {t(membershipFeatures.innerWork.descriptionKey)}
              </p>
              <h4 className="text-xl font-semibold mb-6 text-gray-900 subtitle">{t(membershipFeatures.innerWork.subtitleKey)}</h4>
              <div className="space-y-8">
                {membershipFeatures.innerWork.subsections.map((subsection, sectionIndex) => (
                  <div key={sectionIndex} className="space-y-4">
                    <h5 className="text-lg font-semibold text-gray-900 subtitle mb-4">
                      {t(subsection.titleKey)}
                    </h5>
                    <div className="space-y-3 ml-4">
                      {subsection.featureKeys.map((featureKey, featureIndex) => {
                        const feature = t(featureKey);
                        const animationKey = `inner-${sectionIndex}-${featureIndex}`;
                        const isVisible = visibleFeatures.has(animationKey);
                        
                        // Parse bold formatting
                        const renderFeatureText = (text: string) => {
                          const parts = text.split('**');
                          return parts.map((part, i) => {
                            if (i % 2 === 1) {
                              return <strong key={i}>{part}</strong>;
                            }
                            return part;
                          });
                        };
                        
                        return (
                          <div 
                            key={featureIndex} 
                            ref={el => featureRefs.current[animationKey] = el}
                            className={`flex items-start transition-all duration-700 ${
                              isVisible 
                                ? 'opacity-100 translate-y-0' 
                                : 'opacity-0 translate-y-4'
                            }`}
                            style={{ transitionDelay: `${(sectionIndex * 4 + featureIndex) * 150}ms` }}
                          >
                            <div className="w-2 h-2 bg-primary rounded-full mt-3 mr-4 flex-shrink-0"></div>
                            <span className="text-gray-700 body-text leading-relaxed">
                              {renderFeatureText(feature)}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
