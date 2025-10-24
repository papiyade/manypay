import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, Volume2, VolumeX, Loader2 } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [speakingIndex, setSpeakingIndex] = useState<number | null>(null);
  const [visibleItems, setVisibleItems] = useState(new Set());
  const [speechSupported, setSpeechSupported] = useState(false);

  const faqs = [
    {
      question: "Comment intégrer ManyPayCash à mon site web ?",
      answer: "L'intégration est très simple. Nous proposons une API RESTful complète, des plugins pour les CMS populaires (WordPress, WooCommerce, Magento) et des SDK dans plusieurs langages. Notre équipe technique vous accompagne durant tout le processus."
    },
    {
      question: "Quels pays sont supportés par votre solution ?",
      answer: "ManyPayCash couvre actuellement 15 pays d'Afrique de l'Ouest et du Centre, incluant le Sénégal, la Côte d'Ivoire, le Mali, le Burkina Faso, le Ghana, le Cameroun, et bien d'autres. Nous étendons régulièrement notre couverture."
    },
    {
      question: "Combien de temps faut-il pour recevoir les fonds ?",
      answer: "Les fonds sont généralement disponibles sous 24-48h ouvrées après une transaction réussie. Pour les gros volumes, nous pouvons proposer des règlements plus rapides avec notre plan Business."
    },
    {
      question: "Votre solution est-elle sécurisée ?",
      answer: "Absolument. Nous sommes certifiés PCI DSS Level 1, conformes aux normes bancaires internationales et utilisons un chiffrement de bout en bout. Toutes les données sensibles sont tokenisées et jamais stockées sur nos serveurs."
    },
    {
      question: "Y a-t-il des frais d'installation ou d'abonnement ?",
      answer: "Non, aucun frais d'installation ni d'abonnement mensuel. Vous ne payez que sur les transactions réussies selon notre grille tarifaire transparente. Pas de frais cachés, pas de surprises."
    },
    {
      question: "Proposez-vous un support technique ?",
      answer: "Oui ! Notre équipe technique est disponible 24/7 en français et en anglais. Nous proposons un support par email, chat et téléphone, ainsi qu'une documentation complète et des guides d'intégration."
    },
    {
      question: "Puis-je tester la solution avant de l'adopter ?",
      answer: "Bien sûr ! Nous proposons un environnement de test (sandbox) complet et gratuit. Vous pouvez tester toutes les fonctionnalités sans limitation pendant 30 jours, avec des données fictives."
    }
  ];

  // Vérifier le support de la synthèse vocale
  useEffect(() => {
    setSpeechSupported('speechSynthesis' in window);
  }, []);

  // Observer pour animations d'apparition
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-faq-index') || '0');
            setVisibleItems(prev => new Set(prev).add(index));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-faq-index]').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleToggle = (index: number) => {
    // Arrêter la lecture si on ferme une FAQ en cours de lecture
    if (speakingIndex === index && openIndex === index) {
      stopSpeaking();
    }
    setOpenIndex(openIndex === index ? null : index);
  };

  const speakText = (text: string, index: number) => {
    if (!speechSupported) return;

    // Arrêter toute lecture en cours
    window.speechSynthesis.cancel();

    setSpeakingIndex(index);

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'fr-FR';
    utterance.rate = 0.9;
    utterance.pitch = 1.0;
    utterance.volume = 0.9;

    utterance.onend = () => {
      setSpeakingIndex(null);
    };

    utterance.onerror = () => {
      setSpeakingIndex(null);
    };

    window.speechSynthesis.speak(utterance);
  };

  const stopSpeaking = () => {
    if (speechSupported) {
      window.speechSynthesis.cancel();
      setSpeakingIndex(null);
    }
  };

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-indigo-50 via-white to-blue-50 relative overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-24 h-24 bg-gradient-to-r from-[#AE3D7D]/10 to-[#AE3D7D]/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-r from-[#AE3D7D]/10 to-[#AE3D7D]/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-[#AE3D7D]/10 to-[#221d7f]/10 rounded-full mb-6">
            <span className="text-[#AE3D7D] font-semibold">SUPPORT CLIENT</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Questions <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#AE3D7D] to-[#491c36]">fréquentes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Trouvez rapidement les réponses à vos questions les plus courantes sur notre solution de paiement
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              const isVisible = visibleItems.has(index);
              const isSpeaking = speakingIndex === index;

              return (
                <div
                  key={index}
                  data-faq-index={index}
                  className={`transform transition-all duration-700 ease-out ${
                    isVisible 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-8 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className={`border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 ${
                    isOpen 
                      ? 'shadow-xl border-[#AE3D7D]/30 bg-gradient-to-br from-white to-[#635bff]/5' 
                      : 'shadow-lg hover:shadow-xl hover:border-[#AE3D7D]/20 bg-white'
                  }`}>
                    
                    {/* Question */}
                    <button
                      className="w-full px-6 py-6 text-left flex items-center justify-between transition-all duration-200 hover:bg-gray-50/50 group"
                      onClick={() => handleToggle(index)}
                    >
                      <span className={`font-semibold text-lg pr-4 transition-colors duration-200 ${
                        isOpen ? 'text-[#AE3D7D]' : 'text-gray-900 group-hover:text-[#AE3D7D]'
                      }`}>
                        {faq.question}
                      </span>
                      
                      <div className="flex items-center space-x-3">
                        {/* Bouton lecture vocale */}
                        {speechSupported && isOpen && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              if (isSpeaking) {
                                stopSpeaking();
                              } else {
                                speakText(faq.answer, index);
                              }
                            }}
                            className={`p-2 rounded-full transition-all duration-200 ${
                              isSpeaking
                                ? 'bg-gradient-to-r from-[#AE3D7D] to-[#4c1c37] text-white animate-pulse'
                                : 'bg-gray-100 text-gray-600 hover:bg-[#AE3D7D] hover:text-white'
                            }`}
                            title={isSpeaking ? 'Arrêter la lecture' : 'Écouter la réponse'}
                          >
                            {isSpeaking ? (
                              <Loader2 size={16} className="animate-spin" />
                            ) : (
                              <Volume2 size={16} />
                            )}
                          </button>
                        )}

                        {/* Chevron */}
                        <div className={`transform transition-all duration-300 ${
                          isOpen ? 'rotate-180 text-[#AE3D7D]' : 'text-gray-400'
                        }`}>
                          <ChevronDown size={24} />
                        </div>
                      </div>
                    </button>

                    {/* Réponse avec animation */}
                    <div className={`transition-all duration-500 ease-in-out ${
                      isOpen 
                        ? 'max-h-96 opacity-100' 
                        : 'max-h-0 opacity-0'
                    }`}>
                      <div className={`px-6 pb-6 transform transition-all duration-300 ${
                        isOpen ? 'translate-y-0' : '-translate-y-4'
                      }`}>
                        <div className="border-t border-gray-100 pt-4">
                          <p className={`text-gray-700 leading-relaxed text-lg transition-all duration-300 ${
                            isSpeaking ? 'bg-gradient-to-r from-[#AE3D7D]/5 to-[#221d7f]/5 p-4 rounded-lg border-l-4 border-[#635bff]' : ''
                          }`}>
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section CTA */}
        <div className="text-center mt-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-[#AE3D7D] mb-4">
              Besoin d'aide supplémentaire ?
            </h3>
            <p className="text-gray-600 mb-6 text-lg">
              Notre équipe d'experts est là pour répondre à toutes vos questions spécifiques
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-[#AE3D7D] to-[#1FB0FB] text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Contactez notre support
              </button>
              {/* <button className="border-2 border-[#635bff] text-[#635bff] px-8 py-4 rounded-xl font-semibold hover:bg-[#635bff] hover:text-white transition-all duration-300">
                Documentation complète
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;