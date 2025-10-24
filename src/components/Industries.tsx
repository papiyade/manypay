import React from 'react';
import { ShoppingCart, GraduationCap, Banknote, Shield, Truck, Monitor } from 'lucide-react';

const Industries: React.FC = () => {
  const industries = [
    {
      icon: ShoppingCart,
      title: "E-commerce",
      description: "Boutiques en ligne, marketplaces, dropshipping",
      examples: ["Paiement à la livraison", "Abonnements", "Vente en gros"]
    },
    {
      icon: GraduationCap,
      title: "Éducation",
      description: "Écoles, universités, formations en ligne",
      examples: ["Frais de scolarité", "Formations", "Certifications"]
    },
    {
      icon: Banknote,
      title: "Fintech",
      description: "Applications financières, néobanques, prêts",
      examples: ["Transferts", "Épargne", "Microcrédits"]
    },
    {
      icon: Shield,
      title: "Assurance",
      description: "Compagnies d'assurance, courtiers, mutuelles",
      examples: ["Primes", "Sinistres", "Cotisations"]
    },
    {
      icon: Truck,
      title: "Transport",
      description: "Taxis, livraisons, transport en commun",
      examples: ["Réservations", "Courses", "Abonnements"]
    },
    {
      icon: Monitor,
      title: "SaaS",
      description: "Logiciels, applications, services cloud",
      examples: ["Abonnements", "Licences", "API calls"]
    }
  ];

  return (
    <section id="secteurs" className="py-24 bg-gradient-to-b from-white via-slate-50/50 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-[#AE3D7D]/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-[#AE3D7D]/15 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-5 py-2 bg-gradient-to-r from-[#635bff]/10 to-[#AE3D7D]/10 rounded-full border border-[#635bff]/20 text-[#221d7f] text-sm font-medium mb-6">
            <div className="w-2 h-2 bg-gradient-to-r from-[#AE3D7D] to-[#AE3D7D] rounded-full mr-2"></div>
            Secteurs d'activité
          </div>
          
          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-[#5f2144] to-[#AE3D7D] bg-clip-text text-transparent">
              Pour tous les secteurs
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Notre solution s'adapte parfaitement à tous les secteurs d'activité en Afrique
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div 
              key={index} 
              className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-[#AE3D7D]/10 hover:border-[#AE3D7D]/30 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#AE3D7D]/0 via-transparent to-[#AE3D7D]/0 group-hover:from-[#635bff]/5 group-hover:to-[#221d7f]/10 rounded-3xl transition-all duration-500"></div>
              
              {/* Animated border glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#3c162c] via-[#7f2d5c] to-[#AE3D7D] opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                {/* Icon container with enhanced styling */}
                <div className="relative w-16 h-16 mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#AE3D7D]/20 to-[#221d7f]/20 rounded-2xl group-hover:scale-110 transition-transform duration-300"></div>
                  <div className="absolute inset-0.5 bg-white rounded-2xl group-hover:bg-gradient-to-br group-hover:from-[#67244a] group-hover:to-[#AE3D7D] transition-all duration-300"></div>
                  <div className="relative w-full h-full flex items-center justify-center">
                    <industry.icon 
                      size={28} 
                      className="text-[#AE3D7D] group-hover:text-white transition-all duration-300 group-hover:scale-110" 
                    />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#AE3D7D] transition-colors duration-300">
                  {industry.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {industry.description}
                </p>

                {/* Enhanced examples list */}
                <div className="space-y-3">
                  {industry.examples.map((example, idx) => (
                    <div key={idx} className="flex items-center text-sm group/item">
                      <div className="relative mr-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-[#4b1b37] to-[#AE3D7D] rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                        <div className="absolute inset-0 w-2 h-2 bg-gradient-to-r from-[#561f3e] to-[#AE3D7D] rounded-full animate-pulse opacity-50"></div>
                      </div>
                      <span className="text-gray-500 group-hover:text-[#AE3D7D] transition-colors duration-300">
                        {example}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom accent bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#AE3D7D] to-[#491c36] rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          ))}
        </div>

        {/* Bottom section with call-to-action hint */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-1">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-[#AE3D7D] rounded"></div>
            <div className="w-3 h-3 bg-gradient-to-r from-[#AE3D7D] to-[#1FB0FB] rounded-full"></div>
            <div className="w-12 h-0.5 bg-gradient-to-r from-[#AE3D7D] to-transparent rounded"></div>
          </div>
          <p className="text-gray-500 text-sm mt-4">
            Et bien d'autres secteurs...
          </p>
        </div>
      </div>
    </section>
  );
};

export default Industries;