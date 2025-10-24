import React from 'react';
import { Mail, MapPin, Phone, ArrowRight } from 'lucide-react';
import {Link, useLocation} from 'react-router-dom';
import logo from '../assets/manypaycash.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-[#2b0f1f] via-[#69254b] to-[#AE3D7D] text-white">
      {/* CTA Section */}
      <div className="bg gradient-to-b from-[#5e2244] to-[#AE3D7D] py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Prêt à transformer vos paiements avec Manypaycash ?
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Rejoignez les milliers d'entreprises qui font confiance à Manypaycash pour leurs transactions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#AE3D7D] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-all duration-200 hover:shadow-lg flex items-center justify-center">
              Ouvrir un compte gratuitement
              <ArrowRight size={20} className="ml-2" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-[#AE3D7D] transition-all duration-200">
              Contactez-nous
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-2 md:col-span-1">
              <img 
                src={logo}
                alt="Manypaycash" 
                className="h-10 w-auto mb-6"
              />
              <p className="text-gray-300 mb-6 leading-relaxed">
                Manypaycash, la solution de paiement pensée pour l'Afrique. Acceptez tous les moyens de paiement locaux avec une plateforme sécurisée et facile à intégrer.
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-gray-300">
                  <Mail size={16} className="mr-3" />
                  <span>contact@manypaycash.com</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Phone size={16} className="mr-3" />
                  <span>+221 776919799</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <MapPin size={16} className="mr-3" />
                  <span>Dakar, Sénégal</span>
                </div>
              </div>
            </div>

            {/* Solutions */}
            <div>
              <h3 className="font-semibold text-white mb-4">Solutions</h3>
              <ul className="space-y-3 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">API de paiement</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Plugins E-commerce</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Liens de paiement</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Dashboard Analytics</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Mobile Money</a></li>
              </ul>
            </div>

            {/* Secteurs */}
            <div>
              <h3 className="font-semibold text-white mb-4">Secteurs</h3>
              <ul className="space-y-3 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">E-commerce</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Éducation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Fintech</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Assurance</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Transport</a></li>
                <li><a href="#" className="hover:text-white transition-colors">SaaS</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="font-semibold text-white mb-4">Support</h3>
              <ul className="space-y-3 text-gray-300">
                <li><Link to="/documentation" className="hover:text-white transition-colors">Documentation</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                {/* <li><a href="#" className="hover:text-white transition-colors">Support technique</a></li> */}
                {/* <li><a href="#" className="hover:text-white transition-colors">Statut des services</a></li> */}
                {/* <li><a href="#" className="hover:text-white transition-colors">Blog</a></li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-300 text-sm mb-4 md:mb-0">
              © 2025 Manypaycash. Tous droits réservés.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Conditions d'utilisation</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Politique de confidentialité</a>
              {/* <a href="#" className="text-gray-400 hover:text-white transition-colors">Mentions légales</a> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;