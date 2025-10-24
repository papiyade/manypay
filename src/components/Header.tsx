import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/manypaycash.png';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const location = useLocation();

  const menuItems = [
    {
      title: "Features",
      href: "#fonctionnalites",
      hasDropdown: true,
      type: 'scroll',
      subItems: [
        { title: "Paiements en ligne", href: "#paiements-ligne", type: 'scroll' },
        { title: "API de paiement", href: "#api-paiement", type: 'scroll' },
        { title: "Tableau de bord", href: "#dashboard", type: 'scroll' },
        { title: "Sécurité avancée", href: "#securite", type: 'scroll' }
      ]
    },
        {
      title: "Services",
      href: "/services",
      hasDropdown: false,
      type: 'route'
    },
    {
      title: "La démarche",
      href: "#howitworks",
      hasDropdown: false,
      type: 'scroll',
      subItems: [
        { title: "Intégration simple", href: "#integration", type: 'scroll' },
        { title: "Configuration", href: "#configuration", type: 'scroll' },
        { title: "Tests & Validation", href: "#tests", type: 'scroll' }
      ]
    },
    {
      title: "Secteurs",
      href: "#secteurs",
      hasDropdown: true,
      type: 'scroll',
      subItems: [
        { title: "E-commerce", href: "#ecommerce", type: 'scroll' },
        { title: "Services financiers", href: "#finance", type: 'scroll' },
        { title: "Télécommunications", href: "#telecom", type: 'scroll' },
        { title: "Education", href: "#education", type: 'scroll' }
      ]
    },
    // {
    //   title: "FAQ",
    //   href: "#faq",
    //   hasDropdown: false,
    //   type: 'scroll'
    // },
    {
      title: "Documentation",
      href: "/documentation",
      hasDropdown: false,
      type: 'route'
    }
  ];

  const handleMouseEnter = (index: number) => {
    setActiveDropdown(index);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const toggleMobileDropdown = (index: number) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const handleScrollLink = (href: string) => {
    if (location.pathname !== '/') {
      // Si on n'est pas sur la page d'accueil, y aller d'abord
      window.location.href = '/' + href;
    } else {
      // Scroll vers la section
      const elementId = href.replace('#', '');
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false); // Fermer le menu mobile
  };

  const renderDesktopLink = (item: any) => {
    if (item.type === 'route') {
      return (
        <Link
          to={item.href}
          className="flex items-center font-medium text-black hover:text-[#AE3D7D] transition-colors duration-200 py-2"
        >
          {item.title}
        </Link>
      );
    } else {
      return (
        <button
          onClick={() => handleScrollLink(item.href)}
          className="flex items-center font-medium text-black hover:text-[#AE3D7D] transition-colors duration-200 py-2"
        >
          {item.title}
          {item.hasDropdown && (
            <ChevronDown
              size={16}
              className={`ml-1 transition-transform duration-300 ${
                activeDropdown !== null ? 'rotate-180' : 'rotate-0'
              }`}
            />
          )}
        </button>
      );
    }
  };

  const renderMobileLink = (item: any) => {
    if (item.type === 'route') {
      return (
        <Link
          to={item.href}
          onClick={() => setIsMenuOpen(false)}
          className="text-gray-600 hover:text-[#AE3D7D] transition-colors"
        >
          {item.title}
        </Link>
      );
    } else {
      return (
        <button
          onClick={() => handleScrollLink(item.href)}
          className="text-gray-600 hover:text-[635bff] transition-colors text-left"
        >
          {item.title}
        </button>
      );
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-gradient-to-t from-blue-50 via-white to-indigo-200 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img
                src={logo}
                alt="Manypaycash"
                className="h-8 w-auto"
              />
            </Link>
          </div>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center space-x-4 relative ml-4">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                {/* Lien principal */}
                {renderDesktopLink(item)}

                {/* Sous-menu Desktop */}
                {item.hasDropdown && (
                  <div
                    className={`absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50 transition-all duration-300 ${
                      activeDropdown === index
                        ? 'opacity-100 visible transform translate-y-0'
                        : 'opacity-0 invisible transform -translate-y-2'
                    }`}
                  >
                    {/* Flèche pointant vers le haut */}
                    <div className="absolute -top-2 left-6 w-4 h-4 bg-blue-900 border-l border-t border-gray-100 transform rotate-45"></div>
                    
                    {item.subItems?.map((subItem, subIndex) => (
                      <button
                        key={subIndex}
                        onClick={() => handleScrollLink(subItem.href)}
                        className="block w-full text-left font-medium px-4 py-3 text-sm text-gray-700 hover:bg-blue-100 hover:text-[#AE3D7D] transition-colors duration-200"
                      >
                        {subItem.title}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Bouton CTA Desktop */}
          <div className="hidden md:flex items-center flex-shrink-0 lg:ml-16">
            <button className="bg-gradient-to-r from-[#AE3D7D] to-[#1FB0FB] text-white font-medium px-6 py-2 rounded-lg hover:bg-[#5249ff] transition-all duration-200 hover:shadow-lg">
              Ouvrir un compte
            </button>
          </div>

          {/* Bouton menu mobile */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menu mobile */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-3">
              {menuItems.map((item, index) => (
                <div key={index}>
                  {/* Lien principal mobile */}
                  <div
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() => item.hasDropdown ? toggleMobileDropdown(index) : null}
                  >
                    {renderMobileLink(item)}
                    {item.hasDropdown && (
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-300 ${
                          activeDropdown === index ? 'rotate-180' : 'rotate-0'
                        }`}
                      />
                    )}
                  </div>

                  {/* Sous-menu mobile */}
                  {item.hasDropdown && activeDropdown === index && (
                    <div className="ml-4 mt-2 space-y-2 border-l-2 border-gray-100 pl-4">
                      {item.subItems?.map((subItem, subIndex) => (
                        <button
                          key={subIndex}
                          onClick={() => handleScrollLink(subItem.href)}
                          className="block text-sm text-gray-500 hover:text-[#635bff] transition-colors text-left"
                        >
                          {subItem.title}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <div className="flex flex-col space-y-2 pt-3 border-t border-gray-100">
                <button className="bg-gradient-to-r from-[#AE3D7D] to-[#1FB0FB] text-white px-6 py-2 rounded-lg hover:bg-[#5249ff] transition-colors">
                  Ouvrir un compte
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;