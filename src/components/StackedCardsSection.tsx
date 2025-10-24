import React, { useState } from 'react';
import { Send, CreditCard, Repeat, Smartphone, Globe } from 'lucide-react';

const HorizontalStackedCards = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const cards = [
    {
      id: 'send',
      title: 'Envoyez vos fonds',
      description: 'Transferts instantanés vers vos proches partout en Afrique',
      icon: <Send className="w-6 h-6" />
    },
    {
      id: 'pay',
      title: 'Payez vos factures',
      description: 'Électricité, eau, internet - Tout en un seul endroit',
      icon: <CreditCard className="w-6 h-6" />
    },
    {
      id: 'exchange',
      title: 'Transférez entre comptes',
      description: 'Gérez vos comptes et transférez en temps réel',
      icon: <Repeat className="w-6 h-6" />
    },
    {
      id: 'mobile',
      title: 'Rechargez vos mobiles',
      description: 'Crédit d\'appel et forfaits data instantanément',
      icon: <Smartphone className="w-6 h-6" />
    },
    {
      id: 'international',
      title: 'Transactions internationales',
      description: 'Envoyez vers 50+ pays avec les meilleurs taux',
      icon: <Globe className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Tout ce dont vous avez besoin
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Une plateforme complète pour toutes vos transactions financières
          </p>
        </div>

        {/* Cards Container - Desktop */}
        <div className="hidden md:flex relative max-w-6xl mx-auto h-80 items-center justify-center overflow-hidden">
          {cards.map((card, index) => (
            <div
              key={card.id}
              className="absolute w-72 h-64 lg:w-80 lg:h-72 cursor-pointer transition-all duration-500"
              style={{
                left: hoveredCard === null 
                  ? `${index * 15}%` 
                  : hoveredCard === index 
                    ? `${index * 20}%`
                    : index < hoveredCard 
                      ? `${index * 10}%` 
                      : `${index * 30 - 10}%`,
                zIndex: hoveredCard === index ? 50 : 10 + index
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`w-full h-full rounded-2xl bg-gradient-to-br from-[#351326] to-[#AE3D7D] p-6 lg:p-8 shadow-xl border border-[#561f3e] transition-all duration-500 ${
                hoveredCard === index ? 'shadow-2xl border-[#AE3D7D]' : ''
              }`}>
                
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center text-white mb-4 transition-all duration-300 ${
                  hoveredCard === index ? 'bg-white/20 scale-110' : ''
                }`}>
                  {card.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-3">
                  {card.title}
                </h3>

                {/* Description */}
                <p className={`text-sm lg:text-base text-blue-100 leading-relaxed transition-all duration-300 ${
                  hoveredCard === index ? 'opacity-100' : 'opacity-70'
                }`}>
                  {card.description}
                </p>

                {/* Decorative line */}
                <div className={`absolute bottom-6 lg:bottom-8 left-6 lg:left-8 right-6 lg:right-8 h-1 bg-white/20 rounded-full transition-all duration-500 ${
                  hoveredCard === index ? 'bg-white/40' : ''
                }`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Cards Container - Mobile Vertical */}
        <div className="md:hidden space-y-4 max-w-sm mx-auto">
          {cards.map((card) => (
            <div
              key={card.id}
              className="rounded-2xl bg-gradient-to-br from-blue-900 to-blue-800 p-6 shadow-lg border border-blue-700/50 hover:shadow-xl hover:border-blue-600 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center text-white mb-3">
                {card.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-white mb-2">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-blue-100">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 md:mt-24">
          <button className="bg-gradient-to-r from-[#AE3D7D] to-[#1FB0FB] text-white px-8 py-3 sm:py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 text-sm sm:text-base">
            Découvrir tous nos services
          </button>
        </div>
      </div>
    </section>
  );
};

export default HorizontalStackedCards;