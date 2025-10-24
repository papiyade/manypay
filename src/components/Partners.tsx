import React from 'react';
import { Shield, Award, Users, CreditCard } from 'lucide-react';
import visaLogo from '../assets/visa.png';
import masterCardLogo from '../assets/mastercard.png';
import unionPayLogo from '../assets/unionpay.png';
import orangeMoneyLogo from '../assets/orangeMoney.png';
import logoWave from '../assets/logoWave.png';
import logoMtn from '../assets/MTN.jpg';
import logoFree from '../assets/free.png';
import logoMoov from '../assets/moov.webp';

const Partners: React.FC = () => {
  const badges = [
    { icon: Shield, text: "Conforme PCI DSS" },
    { icon: Award, text: "Certifié ISO 27001" },
    { icon: Users, text: "21+ Partenaires" }
  ];

  // 21 emplacements pour les logos partenaires
  const partnerLogos = Array.from({ length: 21 }, (_, i) => ({
    id: i + 1,
    name: `Partenaire ${i + 1}`,
    logo: `/partners/partner-${i + 1}.png`
  }));

  // Logos des moyens de paiement
  const paymentMethods = [
    { name: 'Visa', logo: visaLogo },
    { name: 'Mastercard', logo: masterCardLogo },
    { name: 'UnionPay', logo: unionPayLogo },
    { name: 'Orange Money', logo: orangeMoneyLogo },
    { name: 'Wave', logo: logoWave },
    { name: 'MTN Mobile Money', logo: logoMtn },
    { name: 'Free Money', logo: logoFree },
    { name: 'Moov Money', logo: logoMoov }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#491834] to-[#AE3D7D] border-y border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Moyens de paiement acceptés */}
        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold text-white mb-8">
            Moyens de paiement acceptés
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
            {paymentMethods.map((method, index) => (
              <div key={index} className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <img 
                  src={method.logo} 
                  alt={method.name}
                  className="h-8 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ils nous font confiance
          </h2>
          <p className="text-gray-200 max-w-2xl mx-auto">
            Plus de 21 entreprises africaines utilisent déjà Manypaycash pour leurs paiements
          </p>
        </div>

        {/* Badges de confiance */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {badges.map((badge, index) => (
            <div key={index} className="flex items-center bg-gray-50 px-6 py-3 rounded-full">
              <badge.icon size={20} className="text-[#AE3D7D] mr-2" />
              <span className="text-gray-700 font-medium">{badge.text}</span>
            </div>
          ))}
        </div>

        {/* Carrousel de logos partenaires */}
        {/* <div className="relative overflow-hidden"> */}
          {/* <div className="flex animate-scroll space-x-8"> */}
            {/* Premier set de logos */}
            {/* {partnerLogos.map((partner) => (
              <div key={partner.id} className="flex-shrink-0 w-32 h-20 flex items-center justify-center bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain opacity-60 hover:opacity-100 transition-opacity"
                />
              </div>
            ))} */}
            {/* Duplication pour l'effet de boucle infinie */}
            {/* {partnerLogos.map((partner) => (
              <div key={`duplicate-${partner.id}`} className="flex-shrink-0 w-32 h-20 flex items-center justify-center bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain opacity-60 hover:opacity-100 transition-opacity"
                />
              </div>
            ))} */}
          {/* </div> */}
        {/* </div> */}
      </div>
    </section>
  );
};

export default Partners;