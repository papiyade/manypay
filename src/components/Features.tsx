import React from 'react';
import { CreditCard, Smartphone, QrCode, Link, Code, BarChart3 } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: CreditCard,
      title: "Cartes bancaires",
      description: "Acceptez Visa, Mastercard, UnionPay avec sécurité 3D Secure",
    },
    {
      icon: Smartphone,
      title: "Mobile Money",
      description: "Orange, Wave, MTN, Free, Moov et tous les wallets populaires",
    },
    {
      icon: QrCode,
      title: "QR Code & USSD",
      description: "Paiements sans contact et codes USSD pour tous les téléphones",
    },
    {
      icon: Link,
      title: "Liens de paiement",
      description: "Générez des liens sécurisés pour vos factures et commandes",
    },
    {
      icon: Code,
      title: "API & Plugins",
      description: "Intégration WordPress, WooCommerce, Magento et API RESTful",
    },
    {
      icon: BarChart3,
      title: "Dashboard Analytics",
      description: "Suivi temps réel, rapports détaillés et gestion des remboursements",
    }
  ];

  return (
    <section id="fonctionnalites" className="py-24 bg-gradient-to-br from-slate-50 via-white to-purple-50/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-purple-100/60 rounded-full text-[#221d7f] text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-[#AE3D7D] rounded-full mr-2"></span>
            Solution complète
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-[#AE3D7D] to-[#635bff] bg-clip-text text-transparent mb-6">
            Manypaycash
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Tous les moyens de paiement africains dans une seule plateforme, 
            avec les outils pour gérer et analyser vos transactions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group relative bg-white/90 backdrop-blur-sm p-8 rounded-3xl border border-indigo-100/50 hover:border-[#1FB0FB] shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50/0 to-purple-100/0 group-hover:from-[#AE3D7D] group-hover:to-[#4d0930] rounded-3xl transition-all duration-500"></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon 
                    size={26} 
                    className="text-[#AE3D7D] group-hover:[#AE3D7D] transition-colors duration-300" 
                  />
                </div>
                
                <h3 className="text-xl font-bold text-[#AE3D7D] mb-4 group-hover:text-white transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>

              {/* Subtle accent line */}
              <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-purple-200 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Bottom decorative element */}
        <div className="flex justify-center mt-16">
          <div className="flex space-x-2">
            <div className="w-2 h-2 bg-[#b8558d] rounded-full"></div>
            <div className="w-2 h-2 bg-[#AE3D7D] rounded-full"></div>
            <div className="w-2 h-2 bg-[#380f26] rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;