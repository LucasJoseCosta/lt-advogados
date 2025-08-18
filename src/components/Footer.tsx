import InstagramImg from '../images/Union.png';
import WhatsappImg from '../images/Whatsapp.png';
import YoutubeImg from '../images/Youtube.png';
import '../styles/Footer.css';

const Footer = () => {

  const iconStyle = {
    maxWidth: '28px',
    width: '100%',
    height: 'auto',
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="contact-info">
            <div className="contact-sociais">
              <div className="contact-number">
                <h5 className="section-title">Contato</h5>
                <p className="contact-phone">(45) 93300-5571</p>
              </div>
              <div className="social-media">
                <h5 className="section-title">Redes Sociais</h5>
                <div className="social-icons">
                  <img src={YoutubeImg} alt="YouTube" style={iconStyle} />
                  <img src={InstagramImg} alt="Instagram" style={iconStyle} />
                  <img src={WhatsappImg} alt="WhatsApp" style={iconStyle} />
                </div>
              </div>
            </div>
            <h5 className="section-title">Endereço</h5>
            <div className="address">
              <p>R. Guanabara, 920</p>
              <p>Pioneiros Catarinenses, Cascavel - PR, 85805-400</p>
            </div>

            <p className="instagram-handle">@lorenzonitoaldo</p>

            <p className="copyright">
              © 2025 Lorenzoni & Toaldo. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;