import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import Logo from '../images/Logo.svg';
import '../styles/Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container grid grid-cols-3 items-center w-100">
        <div className="header-logo col-start-2 justify-self-center">
          <img
            src={Logo}
            alt="LST Advogados"
            className="logo-image"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <a href="#inicio" className="nav-link">Plano de Resolução</a>
          <a href="#servicos" className="nav-link">Sobre Nós</a>
          <a href="#noticias" className="nav-link">Áreas de Atuação</a>
          <a href="#contato" className="nav-link">Contatos</a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="menu-button justify-self-end"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <nav className="mobile-nav">
            <a href="#inicio" className="nav-link">Plano de Resolução</a>
            <a href="#servicos" className="nav-link">Sobre Nós</a>
            <a href="#noticias" className="nav-link">Áreas de Atuação</a>
            <a href="#contato" className="nav-link">Contatos</a>
          </nav>
          <div className="image-logo-menu">
            <img src={Logo} alt="Logo" className="logo-image" />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;