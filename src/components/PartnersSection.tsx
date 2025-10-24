import React, { useState, useEffect } from 'react';
import { Building2, Handshake, Globe, TrendingUp, Users, Star, ArrowRight } from 'lucide-react';

const PartnersSection = () => {
  const [visibleStats, setVisibleStats] = useState(false);
  const [animatedNumbers, setAnimatedNumbers] = useState({
    partners: 0,
    countries: 0,
    transactions: 0,
    users: 0
  });

  const finalNumbers = {
    partners: 21,
    countries: 15,
    transactions: 5000000,
    users: 2500000
  };

  const partnerCategories = [
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Institutions Bancaires",
      count: 8,
      description: "Partenariats avec les principales banques d'Afrique"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Opérateurs Mobile Money",
      count: 7,
      description: "Intégration avec tous les portefeuilles mobiles majeurs"
    },
    {
      icon: <Handshake className="w-6 h-6" />,
      title: "Partenaires Fintech",
      count: 6,
      description: "Collaboration avec l'écosystème fintech africain"
    }
  ];

  const partnerLogos = [
    "Orange Money", "Wave", "MTN Mobile Money", "Moov Money", 
    "Free Money", "Wizall", "Ecobank", "BOA", "UBA", "Société Générale",
    "CBAO", "BNP Paribas", "Standard Bank", "Access Bank", "Orabank",
    "PayPal", "Stripe", "Flutterwave", "Paystack", "Chipper Cash", "Kuda"
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleStats(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('stats-section');
    if (element) observer.observe(element);
    
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (visibleStats) {
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;

        setAnimatedNumbers({
          partners: Math.floor(finalNumbers.partners * progress),
          countries: Math.floor(finalNumbers.countries * progress),
          transactions: Math.floor(finalNumbers.transactions * progress),
          users: Math.floor(finalNumbers.users * progress)
        });

        if (currentStep >= steps) {
          clearInterval(timer);
          setAnimatedNumbers(finalNumbers);
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [visibleStats]);

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(0) + 'K';
    }
    return num.toString();
  };

  return (
    <section className="py-24 bg-gradient-to-br from-[#391429] to-[#AE3D7D] relative overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/10 to-transparent"></div>
        <div className="absolute top-20 left-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-white/3 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-cyan-400/10 rounded-full blur-2xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20">
            <span className="text-white font-semibold text-sm">ÉCOSYSTÈME PARTENAIRES</span>
          </div>
          
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight">
            Plus de <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1FB0FB] to-white">21 partenaires</span>
            <br />nous font confiance
          </h2>
          
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Un réseau solide d'institutions financières, d'opérateurs télécom et de fintechs 
            pour vous offrir la meilleure expérience de paiement en Afrique
          </p>
        </div>

        {/* Stats animées */}
        <div id="stats-section" className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          <div className="text-center group">
            <div className="w-20 h-20 mx-auto mb-4 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20 group-hover:bg-white/20 transition-all duration-300">
              <Handshake className="w-10 h-10 text-white" />
            </div>
            <div className="text-4xl sm:text-5xl font-bold text-white mb-2">
              {animatedNumbers.partners}+
            </div>
            <p className="text-[#1FB0FB] font-medium">Partenaires actifs</p>
          </div>

          <div className="text-center group">
            <div className="w-20 h-20 mx-auto mb-4 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20 group-hover:bg-white/20 transition-all duration-300">
              <Globe className="w-10 h-10 text-white" />
            </div>
            <div className="text-4xl sm:text-5xl font-bold text-white mb-2">
              {animatedNumbers.countries}
            </div>
            <p className="text-[#1FB0FB] font-medium">Pays couverts</p>
          </div>

          <div className="text-center group">
            <div className="w-20 h-20 mx-auto mb-4 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20 group-hover:bg-white/20 transition-all duration-300">
              <TrendingUp className="w-10 h-10 text-white" />
            </div>
            <div className="text-4xl sm:text-5xl font-bold text-white mb-2">
              {formatNumber(animatedNumbers.transactions)}+
            </div>
            <p className="text-[#1FB0FB] font-medium">Transactions traitées</p>
          </div>

          <div className="text-center group">
            <div className="w-20 h-20 mx-auto mb-4 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20 group-hover:bg-white/20 transition-all duration-300">
              <Users className="w-10 h-10 text-white" />
            </div>
            <div className="text-4xl sm:text-5xl font-bold text-white mb-2">
              {formatNumber(animatedNumbers.users)}+
            </div>
            <p className="text-[#1FB0FB] font-medium">Utilisateurs actifs</p>
          </div>
        </div>

        {/* Catégories de partenaires */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {partnerCategories.map((category, index) => (
            <div key={index} className="group">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-white to-[#1FB0FB] rounded-xl flex items-center justify-center text-blue-900 mr-4 group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{category.title}</h3>
                    <div className="text-2xl font-bold text-white">{category.count} partenaires</div>
                  </div>
                </div>
                <p className="text-blue-100 leading-relaxed">
                  {category.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Logos des partenaires */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Ils nous font confiance
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-7 gap-6">
            {partnerLogos.map((logo, index) => (
              <div key={index} className="group">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 flex items-center justify-center h-20">
                  <span className="text-white/80 font-medium text-sm text-center group-hover:text-white transition-colors">
                    {logo}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-2xl mx-auto">
            <Star className="w-12 h-12 text-white mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-white mb-4">
              Rejoignez notre écosystème
            </h3>
            <p className="text-blue-100 mb-8 text-lg">
              Devenez partenaire ManyPayCash et accédez à un réseau de millions d'utilisateurs à travers l'Afrique
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-900 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2">
                <span>Devenir partenaire</span>
                <ArrowRight size={20} />
              </button>
              <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:border-white hover:bg-white/10 transition-all duration-300">
                En savoir plus
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;