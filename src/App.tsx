import React from 'react';
import { HashRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Hero from './components/Hero';
import Partners from './components/Partners';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Industries from './components/Industries';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Services from './components/Services';
import Documentation from './components/Documentation';
import ServicesPage from './components/ServicesPage';
import StackedCardsSection from './components/StackedCardsSection';
import PartnersSection from './components/PartnersSection';
// import ContactSection from './components/ContactSection';

// Créons un composant Home qui contient toutes vos sections
const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <Services />
      <Partners />
      <HowItWorks />
      <PartnersSection />
      <StackedCardsSection />
      <Industries />
      <FAQ />
      {/* <ContactSection /> */}
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
                    <Route path="/services" element={<ServicesPage />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/docs/:section?" element={<Documentation />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;