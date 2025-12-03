import React, { useState, useEffect } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import imageGateway from '../assets/cover.webp';
import bbsLogo from '../assets/bbs-logo.png';

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const benefits = [
    "Intégration API en moins de 30 minutes",
    "Conformité PCI DSS et normes bancaires",
    "Support technique 24/7 en français"
  ];

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section 
      className="relative pt-24 pb-16 bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: `url(${imageGateway})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/70 z-0"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* BBS Master Group Badge */}
        <div className={`flex justify-center mb-8 transform transition-all duration-1000 ${
          isLoaded ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}>
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:bg-white/15 transition-all duration-300">
            <img src={bbsLogo} alt="BBS Master Group" className="w-6 h-6" />
            <span className="text-white font-semibold text-sm">By BBS Master Group</span>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center min-h-[60vh]">
          <div className="text-center max-w-4xl mx-auto">
            
            {/* Titre */}
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 transform transition-all duration-1000 delay-200 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}>
              Acceptez tous les moyens de paiement
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#AE3D7D] to-blue-300"> en Afrique</span>
            </h1>

            {/* Description */}
            <div className={`flex justify-center mb-8 transform transition-all duration-1000 delay-300 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}>
              <p className="text-lg sm:text-xl text-white/90 max-w-3xl leading-relaxed drop-shadow-lg">
                Solution de paiement multicanale et sécurisée, intégrable à tous vos systèmes. ManyPayCash simplifie vos transactions en Afrique.
              </p>
            </div>

            {/* Bénéfices */}
            <div className={`flex flex-col items-center mb-10 transform transition-all duration-1000 delay-400 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center justify-center group hover:translate-x-1 transition-transform duration-300">
                    <div className="flex-shrink-0 w-5 h-5 bg-[#1FB0FB] rounded-full flex items-center justify-center mr-3 shadow-lg">
                      <Check size={12} className="text-gray-900 font-bold" />
                    </div>
                    <span className="text-white font-medium drop-shadow-md">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className={`flex justify-center transform transition-all duration-1000 delay-500 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href='https://manypaycash.bbsmastergroup.com/auth/sign-in/' className="bg-gradient-to-r from-[#AE3D7D] to-[#1FB0FB] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-2xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 flex items-center justify-center drop-shadow-lg">
                  Commencer
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;