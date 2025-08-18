import React from 'react';
import Header from './components/Header';
import HeroCarousel from './components/HeroCarousel';
import NoticiasRecentes from './components/NoticiasRecentes';
import ComparacaoAssessoria from './components/ComparacaoAssessoria';
import SolucoesJuridicas from './components/SolucoesJuridicas';
import InstagramSection from './components/InstagramSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroCarousel />
      <NoticiasRecentes />
      <ComparacaoAssessoria />
      <SolucoesJuridicas />
      <InstagramSection />
      <Footer />
    </div>
  );
}

export default App;