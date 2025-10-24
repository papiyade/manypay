import React, { useState, useEffect } from 'react';
import { 
  CreditCard, 
  ArrowDownToLine, 
  ArrowUpFromLine, 
  Repeat, 
  Smartphone, 
  Globe,
  Check,
  ArrowRight,
  Zap,
  Shield,
  Clock,
  Users
} from 'lucide-react';

const ServicesPage: React.FC = () => {
  const [activeService, setActiveService] = useState(0);
  const [visibleServices, setVisibleServices] = useState(new Set());

  const services = [
    {
      id: 'depot',
      icon: ArrowDownToLine,
      title: 'Dépôt Cash',
      subtitle: 'Alimentez votre portefeuille',
      description: 'Déposez de l\'argent liquide dans votre compte ManyPayCash via nos points de service partenaires répartis dans toute l\'Afrique.',
      longDescription: 'Le service de dépôt cash vous permet d\'alimenter votre portefeuille numérique en quelques minutes. Rendez-vous simplement dans l\'un de nos 10 000+ points de service partenaires, présentez votre code QR ou numéro de compte, et effectuez votre dépôt en toute sécurité.',
      features: [
        'Plus de 10 000 points de service',
        'Disponible 24h/24 et 7j/7',
        'Confirmation instantanée',
        'Frais compétitifs dès 0.5%',
        'Support multidevises'
      ],
      stats: [
        { label: 'Dépôts traités', value: '2.5M+' },
        { label: 'Temps moyen', value: '< 2 min' },
        { label: 'Taux de réussite', value: '99.8%' }
      ],
      gradient: 'from-blue-500 to-cyan-600',
      bgColor: 'from-blue-50 to-cyan-50'
    },
    {
      id: 'retrait',
      icon: ArrowUpFromLine,
      title: 'Retrait Cash',
      subtitle: 'Retirez vos fonds facilement',
      description: 'Convertissez votre argent numérique en espèces dans nos points de service ou distributeurs automatiques partenaires.',
      longDescription: 'Le retrait cash vous offre la flexibilité de récupérer vos fonds quand vous en avez besoin. Utilisez votre smartphone pour générer un code de retrait sécurisé et retirez vos espèces dans l\'un de nos points de service ou DAB partenaires.',
      features: [
        'Retrait via code sécurisé',
        'DAB et points de service',
        'Limites de retrait flexibles',
        'Historique des transactions',
        'Notifications en temps réel'
      ],
      stats: [
        { label: 'Retraits mensuels', value: '1.8M+' },
        { label: 'Points de retrait', value: '15 000+' },
        { label: 'Satisfaction client', value: '98%' }
      ],
      gradient: 'from-green-500 to-emerald-600',
      bgColor: 'from-green-50 to-emerald-50'
    },
    {
      id: 'transfert',
      icon: Repeat,
      title: 'Transfert Compte à Compte',
      subtitle: 'Envoyez de l\'argent instantanément',
      description: 'Transférez de l\'argent entre comptes ManyPayCash ou vers d\'autres portefeuilles mobiles en quelques secondes.',
      longDescription: 'Notre système de transfert instantané vous permet d\'envoyer de l\'argent à vos proches ou partenaires commerciaux en temps réel. Que ce soit pour un paiement, un remboursement ou un don, vos transferts sont sécurisés et instantanés.',
      features: [
        'Transferts instantanés',
        'Frais réduits pour les transferts',
        'Support multi-opérateurs',
        'Programmation de transferts',
        'Limites personnalisables'
      ],
      stats: [
        { label: 'Transferts quotidiens', value: '500K+' },
        { label: 'Vitesse moyenne', value: '< 5 sec' },
        { label: 'Économies clients', value: '40%' }
      ],
      gradient: 'from-purple-500 to-indigo-600',
      bgColor: 'from-purple-50 to-indigo-50'
    },
    {
      id: 'recharge',
      icon: Smartphone,
      title: 'Recharge Paiement',
      subtitle: 'Rechargez vos comptes facilement',
      description: 'Rechargez votre crédit téléphonique, payez vos factures et achetez des forfaits data directement depuis votre portefeuille.',
      longDescription: 'Simplifiez vos paiements quotidiens avec notre service de recharge. Payez vos factures d\'électricité, d\'eau, rechargez votre crédit téléphonique ou achetez des forfaits internet sans vous déplacer.',
      features: [
        'Recharge crédit téléphone',
        'Paiement de factures',
        'Forfaits internet',
        'Recharge transport',
        'Cashback sur certains services'
      ],
      stats: [
        { label: 'Recharges mensuelles', value: '3.2M+' },
        { label: 'Partenaires actifs', value: '200+' },
        { label: 'Cashback moyen', value: '2.5%' }
      ],
      gradient: 'from-orange-500 to-red-600',
      bgColor: 'from-orange-50 to-red-50'
    },
    {
      id: 'international',
      icon: Globe,
      title: 'Transfert International',
      subtitle: 'Envoyez de l\'argent à l\'international',
      description: 'Transférez de l\'argent vers plus de 50 pays avec des taux de change compétitifs et des frais transparents.',
      longDescription: 'Notre service de transfert international vous connecte avec vos proches à travers le monde. Bénéficiez de taux de change avantageux, de frais transparents et d\'une livraison rapide dans plus de 50 pays.',
      features: [
        'Transferts vers 50+ pays',
        'Taux de change compétitifs',
        'Livraison en 24h maximum',
        'Suivi en temps réel',
        'Conformité réglementaire'
      ],
      stats: [
        { label: 'Pays desservis', value: '50+' },
        { label: 'Délai moyen', value: '< 24h' },
        { label: 'Économies vs banques', value: '60%' }
      ],
      gradient: 'from-[#635bff] to-[#221d7f]',
      bgColor: 'from-indigo-50 to-purple-50'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const serviceIndex = parseInt(entry.target.getAttribute('data-service') || '0');
            setVisibleServices(prev => new Set(prev).add(serviceIndex));
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll('[data-service]').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService(prev => (prev + 1) % services.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#635bff]/5 via-transparent to-[#221d7f]/5"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-[#635bff]/10 to-[#221d7f]/10 rounded-full mb-6">
              <span className="text-[#635bff] font-semibold">NOS SERVICES</span>
            </div>
            
            <h1 className="text-5xl sm:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Tous nos
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#635bff] to-[#221d7f]"> Services</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-600 mb-12 leading-relaxed">
              Découvrez notre gamme complète de services financiers numériques conçus pour simplifier vos transactions au quotidien
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {[
                { icon: Users, label: '5M+ Utilisateurs', color: 'text-blue-600' },
                { icon: Zap, label: 'Transactions Instantanées', color: 'text-green-600' },
                { icon: Shield, label: '100% Sécurisé', color: 'text-purple-600' },
                { icon: Clock, label: 'Support 24/7', color: 'text-orange-600' }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 bg-white rounded-xl shadow-lg flex items-center justify-center">
                    <item.icon size={24} className={item.color} />
                  </div>
                  <p className="text-sm font-medium text-gray-700">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-[#635bff]/20 to-[#221d7f]/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-[#221d7f]/20 to-[#635bff]/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      </section>

      {/* Services Grid */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => {
              const isVisible = visibleServices.has(index);
              const isActive = activeService === index;
              const Icon = service.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={service.id}
                  data-service={index}
                  className={`transform transition-all duration-1000 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                    !isEven ? 'lg:grid-flow-col-dense' : ''
                  }`}>
                    
                    {/* Contenu */}
                    <div className={`space-y-8 ${!isEven ? 'lg:col-start-2' : ''}`}>
                      <div>
                        <div className="flex items-center space-x-4 mb-6">
                          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center shadow-xl ${
                            isActive ? 'scale-110' : ''
                          } transition-transform duration-500`}>
                            <Icon size={28} className="text-white" />
                          </div>
                          <div>
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">{service.title}</h2>
                            <p className="text-lg text-gray-600 font-medium">{service.subtitle}</p>
                          </div>
                        </div>

                        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                          {service.longDescription}
                        </p>

                        <div className="space-y-3 mb-8">
                          {service.features.map((feature, fIndex) => (
                            <div key={fIndex} className="flex items-center space-x-3">
                              <div className="w-6 h-6 bg-gradient-to-r from-[#635bff] to-[#221d7f] rounded-full flex items-center justify-center flex-shrink-0">
                                <Check size={14} className="text-white" />
                              </div>
                              <span className="text-gray-700 font-medium">{feature}</span>
                            </div>
                          ))}
                        </div>

                        <div className="grid grid-cols-3 gap-6 mb-8">
                          {service.stats.map((stat, sIndex) => (
                            <div key={sIndex} className="text-center">
                              <div className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#635bff] to-[#221d7f]">
                                {stat.value}
                              </div>
                              <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                            </div>
                          ))}
                        </div>

                        <button className={`inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r ${service.gradient} text-white rounded-xl font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300`}>
                          <span>Découvrir ce service</span>
                          <ArrowRight size={20} />
                        </button>
                      </div>
                    </div>

                    {/* Illustration */}
                    <div className={`relative ${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                      <div className={`relative bg-gradient-to-br ${service.bgColor} rounded-3xl p-12 border border-white/50 backdrop-blur-sm ${
                        isActive ? 'scale-105 shadow-2xl' : 'shadow-xl'
                      } transition-all duration-700`}>
                        
                        {/* Main Icon */}
                        <div className="text-center mb-8">
                          <div className={`w-32 h-32 mx-auto bg-gradient-to-r ${service.gradient} rounded-3xl flex items-center justify-center shadow-2xl ${
                            isActive ? 'animate-pulse' : ''
                          }`}>
                            <Icon size={64} className="text-white" />
                          </div>
                        </div>

                        {/* Feature Cards */}
                        <div className="space-y-4">
                          {service.features.slice(0, 3).map((feature, fIndex) => (
                            <div key={fIndex} className={`bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-white/50 transform transition-all duration-500 ${
                              isActive ? 'translate-x-0 opacity-100' : fIndex % 2 === 0 ? '-translate-x-4 opacity-70' : 'translate-x-4 opacity-70'
                            }`} style={{ transitionDelay: `${fIndex * 200}ms` }}>
                              <div className="flex items-center space-x-3">
                                <div className={`w-8 h-8 bg-gradient-to-r ${service.gradient} rounded-lg flex items-center justify-center`}>
                                  <Check size={16} className="text-white" />
                                </div>
                                <span className="font-medium text-gray-800">{feature}</span>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Decorative elements */}
                        <div className={`absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r ${service.gradient} rounded-full opacity-60`}></div>
                        <div className={`absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r ${service.gradient} rounded-full opacity-40`}></div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#635bff] to-[#221d7f] relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Prêt à transformer votre façon de payer ?
            </h2>
            <p className="text-xl text-white/90 mb-10">
              Rejoignez plus de 5 millions d'utilisateurs qui font confiance à ManyPayCash
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#635bff] px-10 py-4 rounded-xl text-lg font-bold hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                Ouvrir un compte gratuitement
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-[#635bff] transition-all duration-300">
                Contacter un expert
              </button>
            </div>
          </div>
        </div>
        
        {/* Decorative circles */}
        <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-white/10 rounded-full blur-3xl"></div>
      </section>
    </div>
  );
};

export default ServicesPage;