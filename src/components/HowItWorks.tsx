import React, { useState, useEffect } from 'react';
import { Puzzle, Power, DollarSign, FileText, ArrowRight } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const [visibleSteps, setVisibleSteps] = useState(new Set());
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      icon: Puzzle,
      title: "Intégration",
      description: "Intégrez notre API REST ou utilisez nos SDKs prêts à l'emploi. Documentation complète et support technique inclus.",
      details: "En moins de 10 minutes"
    },
    {
      icon: Power,
      title: "Configuration",
      description: "Configurez vos moyens de paiement depuis votre tableau de bord. Tests en sandbox inclus.",
      details: "Interface intuitive"
    },
    {
      icon: DollarSign,
      title: "Transactions",
      description: "Vos clients paient avec leur méthode favorite : Mobile Money, cartes bancaires, virements.",
      details: "Taux de réussite 99.5%"
    },
    {
      icon: FileText,
      title: "Analytics",
      description: "Suivez vos revenus en temps réel avec des rapports détaillés et des insights avancés.",
      details: "Données en temps réel"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stepIndex = parseInt(entry.target.getAttribute('data-step') || '0');
            setVisibleSteps(prev => new Set(prev).add(stepIndex));
          }
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll('[data-step]').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep(prev => (prev + 1) % steps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="howitworks" className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-gradient-to-r from-[#AE3D7D]/10 to-[#221d7f]/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-10 w-24 h-24 bg-gradient-to-r from-[#AE3D7D]/10 to-[#635bff]/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* En-tête */}
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#AE3D7D]/10 to-[#221d7f]/10 rounded-full mb-6">
            <span className="text-[#AE3D7D] font-semibold text-sm">PROCESSUS SIMPLE</span>
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            Comment ça 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#AE3D7D] to-[#221d7f]"> marche ?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Démarrez en 4 étapes simples et commencez à accepter des paiements dès aujourd'hui. 
            Notre processus optimisé vous fait gagner du temps.
          </p>
        </div>

        {/* Étapes */}
        <div className="relative">
          {/* Ligne de connexion */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-[#AE3D7D]/20 via-[#221d7f]/40 to-[#AE3D7D]/20"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {steps.map((step, index) => {
              const isVisible = visibleSteps.has(index);
              const isActive = activeStep === index;
              const Icon = step.icon;
              
              return (
                <div
                  key={index}
                  data-step={index}
                  className={`relative group transform transition-all duration-700 ease-out ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  {/* Card */}
                  <div className={`relative bg-white/70 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                    isActive 
                      ? 'border-[#AE3D7D] shadow-xl shadow-[#635bff]/20' 
                      : 'border-gray-200/50 hover:border-[#AE3D7D]/30'
                  }`}>
                    
                    {/* Numéro d'étape */}
                    <div className="absolute -top-4 -right-4 w-10 h-10 bg-gradient-to-r from-[#481934] to-[#AE3D7D] text-white rounded-full flex items-center justify-center text-lg font-bold shadow-lg">
                      {index + 1}
                    </div>

                    {/* Icône principale */}
                    <div className="relative mb-6">
                      <div className={`w-16 h-16 rounded-2xl mx-auto flex items-center justify-center transition-all duration-500 ${
                        isActive 
                          ? 'bg-gradient-to-r from-[#461933] to-[#AE3D7D] scale-110 shadow-xl' 
                          : 'bg-gradient-to-r from-gray-100 to-gray-200 group-hover:from-[#AE3D7D]/10 group-hover:to-[#221d7f]/10'
                      }`}>
                        <Icon 
                          size={28} 
                          className={`transition-colors duration-500 ${
                            isActive ? 'text-white' : 'text-gray-600 group-hover:text-[#AE3D7D]'
                          }`} 
                        />
                      </div>
                    </div>

                    {/* Contenu */}
                    <div className="text-center">
                      <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 ${
                        isActive ? 'text-[#AE3D7D]' : 'text-gray-900 group-hover:text-[#AE3D7D]'
                      }`}>
                        {step.title}
                      </h3>
                      
                      <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                        {step.description}
                      </p>
                      
                      <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                        isActive 
                          ? 'bg-gradient-to-r from-[#3f182e] to-[#AE3D7D] text-white' 
                          : 'bg-gray-100 text-gray-600 group-hover:bg-[#AE3D7D]/10 group-hover:text-[#AE3D7D]'
                      }`}>
                        {step.details}
                      </div>
                    </div>

                    {/* Effet de glow au hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#AE3D7D]/5 to-[#221d7f]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                  </div>

                  {/* Flèche de connexion */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:flex absolute top-8 -right-6 w-12 h-12 items-center justify-center">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${
                        isActive 
                          ? 'bg-gradient-to-r from-[#3b152b] to-[#AE3D7D] shadow-lg' 
                          : 'bg-gray-200 group-hover:bg-[#AE3D7D]/20'
                      }`}>
                        <ArrowRight 
                          size={16} 
                          className={`transition-colors duration-500 ${
                            isActive ? 'text-white' : 'text-gray-500'
                          }`} 
                        />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center space-x-4">
            <button className="bg-gradient-to-r from-[#AE3D7D] to-[#1FB0FB] text-white px-10 py-4 rounded-xl text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2">
              <span>Commencer maintenant</span>
              <ArrowRight size={20} />
            </button>
          </div>
          
          <p className="text-sm text-gray-500 mt-6">
            ✓ Configuration en quelques minutes  •  ✓ Support 24/7  •  ✓ Pas de frais cachés
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;