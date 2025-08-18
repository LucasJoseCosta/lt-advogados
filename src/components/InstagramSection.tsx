import React from 'react';
import logoAdvogados from '../images/logo-advogados.jpg';
import imagemInstagram from '../images/imagem-instagram.jpg';
import '../styles/InstagramSection.css';

const InstagramSection = () => {
  return (
    <section className="instagram-section">
      <div className="instagram-container">
        <div className="instagram-card">
          <div className="instagram-header">
            <img 
              src={logoAdvogados} 
              alt="LST Advogados" 
              className="profile-image"
            />
            <div className="profile-info">
              <h5 className="profile-name">lorenzonitoaldo</h5>
            </div>
            <button className="follow-button">
              Ver Perfil
            </button>
          </div>
          
          <div className="instagram-image-container">
            <img 
              src={imagemInstagram} 
              alt="Instagram Feed" 
              className="instagram-image"
            />
          </div>
          
          <div className="instagram-footer">
            <p className="instagram-link">Ver mais no Instagram</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;