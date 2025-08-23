import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import Logo from '../images/Logo.svg';
import '../styles/Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-text">
        <div className="header-container flex items-center justify-between w-full">
          {/* Logo à esquerda */}
          <div className="header-logo">
            <img
              src={Logo}
              alt="LST Advogados"
              className="logo-image"
            />
          </div>

          {/* Navegação Desktop à direita */}
          <nav className="desktop-nav">
            <a href="#inicio" className="nav-link">Plano de Resolução</a>
            <a href="#servicos" className="nav-link">Sobre Nós</a>
            <a href="#noticias" className="nav-link">Áreas de Atuação</a>
            <a href="#contato" className="nav-link">Contatos</a>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="menu-button"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
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
