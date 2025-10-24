import React, { useState, useEffect } from 'react';
import { ChevronRight, CreditCard, ArrowUpDown, Phone, Repeat, ArrowDownToLine, Battery, Signal } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/manypaycash.png';

const ServicesSection = () => {
  const [activeService, setActiveService] = useState(0);

  const servicesLeft = [
    {
      id: 'depot',
      title: 'DÉPÔT CASH',
      description: 'Déposez de l\'argent liquide dans votre compte via nos points de service partenaires.',
      icon: <ArrowDownToLine className="w-6 h-6" />
    },
    {
      id: 'retrait',
      title: 'RETRAIT CASH',
      description: 'Retirez vos fonds facilement dans nos points de service ou distributeurs partenaires.',
      icon: <CreditCard className="w-6 h-6" />
    }
  ];

  const servicesRight = [
    {
      id: 'transfert',
      title: 'TRANSFERT COMPTE À COMPTE',
      description: 'Transférez de l\'argent instantanément vers d\'autres comptes ManyPayCash.',
      icon: <Repeat className="w-6 h-6" />
    },
    {
      id: 'credit',
      title: 'CRÉDIT D\'APPEL',
      description: 'Rechargez votre crédit téléphonique directement depuis votre portefeuille.',
      icon: <Phone className="w-6 h-6" />
    }
  ];

  const allServices = [...servicesLeft, ...servicesRight];

  // Animation plus légère - change toutes les 4 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService(prev => (prev + 1) % allServices.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [allServices.length]);

  const ServiceCard = ({ service, side, index }) => (
    <div
      className={`group bg-gradient-to-br from-indigo-100 via-white to-indigo-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:scale-105
        animate-bounce
      `}
      style={{
        animationDuration: '4.5s',
        animationDelay: `${index * 0.9}s`,
        animationIterationCount: 'infinite',
      }}
    >
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-r from-[#6c234c] to-[#AE3D7D] flex items-center justify-center text-white shadow-lg">
          {service.icon}
        </div>
        
        <div className="flex-1">
          <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-[#635bff] transition-colors">
            {service.title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            {service.description}
          </p>
          <button className="inline-flex items-center text-[#AE3D7D] hover:text-[#5249ff] font-medium text-sm transition-all duration-200 group-hover:translate-x-1">
            En savoir plus
            <ChevronRight className="w-4 h-4 ml-1" />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#521b3a] to-[#AE3D7D]">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez notre gamme complète de services financiers numériques
          </p>
        </div>

        {/* Layout principal */}
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            
            {/* Services à gauche */}
            <div className="space-y-6">
              {servicesLeft.map((service) => (
                <ServiceCard key={service.id} service={service} side="left" />
              ))}
            </div>

            {/* Mockup Tablette au centre */}
            <div className="flex justify-center">
              <div className="relative">
                {/* Tablette Frame - Mode Paysage */}
                <div className="relative w-80 h-60 bg-gray-800 rounded-2xl p-1 shadow-2xl animate-pulse">
                  <div className="w-full h-full bg-gradient-to-br from-white via-indigo-50 to-blue-100 rounded-2xl relative overflow-hidden border border-gray-200">
                    {/* Barre de tablette (statut) */}
                    <div className="flex items-center justify-between relative px-2 py-1">
                      {/* Heure */}
                      <p className="text-xs font-semibold text-gray-700">10:00</p>
                      {/* Caméra */}
                      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-gray-400 rounded-full shadow-inner"></div>
                      {/* Icônes statut */}
                      <div className="flex items-center space-x-2">
                      <Signal className="w-4 h-4 text-gray-600" />
                      <Battery className="w-5 h-5 text-gray-600" />
                      </div>
                    </div>
                    {/* Interface */}
                    <div className="p-6 h-full flex flex-col">
                      {/* Header */}
                      <div className="flex justify-between items-center mb-6">
                        <div>
                          <img src={Logo} alt="" className='h-4' />
                          <p className="text-sm text-gray-600">Tableau de bord</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs text-gray-500">Solde disponible</p>
                          <p className="text-md font-bold text-[#AE3D7D]">125,000 XOF</p>
                        </div>
                      </div>

                      {/* Services Grid */}
                      <div className="grid grid-cols-2 gap-3 flex-1">
                        {allServices.map((service, index) => (
                          <div
                            key={service.id}
                            className={`relative bg-white/80 backdrop-blur-sm rounded-xl p-3 border transition-all duration-500 ${
                              activeService === index
                                ? 'border-[#AE3D7D] shadow-lg scale-105 bg-gradient-to-br from-[#635bff]/5 to-[#AE3D7D]/5'
                                : 'border-gray-200'
                            }`}
                          >
                            <div className="flex items-center space-x-2">
                              <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
                                activeService === index
                                  ? 'bg-gradient-to-r from-[#471632] to-[#AE3D7D] text-white'
                                  : 'bg-gray-100 text-gray-600'
                              }`}>
                                {React.cloneElement(service.icon, { className: 'w-4 h-4' })}
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className={`font-medium text-xs truncate transition-colors duration-300 ${
                                  activeService === index ? 'text-[#AE3D7D]' : 'text-gray-700'
                                }`}>
                                  {service.title}
                                </p>
                                <p className="text-xs text-gray-500">Actif</p>
                              </div>
                            </div>
                            
                            {/* Indicator dot */}
                            {activeService === index && (
                              <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-green-800 rounded-full animate-pulse"></div>
                            )}
                          </div>
                        ))}
                      </div>

                      {/* Bottom Stats */}
                      <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-200">
                        <div className="text-center">
                          <p className="text-xs text-gray-500">Transactions</p>
                          <p className="text-sm font-semibold text-gray-700">1,247</p>
                        </div>
                        <div className="text-center">
                          <p className="text-xs text-gray-500">Ce mois</p>
                          <p className="text-sm font-semibold text-green-600">+18%</p>
                        </div>
                        <div className="text-center">
                          <p className="text-xs text-gray-500">Économies</p>
                          <p className="text-sm font-semibold text-blue-600">2,450 XOF</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-b-8 border-t-1 bg-gray-800 h-2 rounded-lg w-full"></div>

                {/* Subtle glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#AE3D7D]/10 to-[#221d7f]/10 rounded-3xl blur-xl -z-10"></div>
              </div>
            </div>

            {/* Services à droite */}
            <div className="space-y-6">
              {servicesRight.map((service) => (
                <ServiceCard key={service.id} service={service} side="right" />
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <Link to="/services" className="bg-gradient-to-r from-[#AE3D7D] to-[#1FB0FB] text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-bounce">
              Découvrir tous nos services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;