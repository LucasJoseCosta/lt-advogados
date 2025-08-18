import imgNoticiasRecentes from '../images/img-noticias-recentes.jpg';
import setaDireita from '../images/seta-direita.png';
import setaEsquerda from '../images/seta-esquerda.png';
import '../styles/NoticiasRecentes.css';

const NoticiasRecentes = () => {
  return (
    <section className="noticias-section">
      <div className="noticias-container">
        <h3 className="noticias-title">Notícias recentes</h3>

        <div className="noticias-card">
          <div
            className="noticias-image"
            style={{ backgroundImage: `url(${imgNoticiasRecentes})` }}
          >
            <div className="image-content">
              <h4 className="news-headline">
                Vitória Judicial: Justiça suspende cobrança de dívida rural indeferida em pedido anterior
              </h4>
            </div>
          </div>

          <div className="noticias-content">
            <div className="news-text">
              <p>
                Nosso escritório conquistou uma importante vitória judicial para uma produtora rural que buscava a prorrogação compulsória de sua dívida agrícola. Após negativa em primeira instância, recorremos ao Tribunal, comprovando o cumprimento de todos os requisitos legais, incluindo frustração de safra, laudos técnicos e tentativa de negociação com o banco.
              </p>

              <p>
                Com isso, o Tribunal reformou a decisão e concedeu tutela recursal para:
              </p>

              <ul>
                <li>Suspender a exigência da dívida;</li>
                <li>Retirar o nome da cliente dos cadastros de inadimplentes;</li>
                <li>Impedir novas negativações enquanto o processo estiver em curso.</li>
              </ul>

              <p>
                A decisão destaca o papel da Justiça na proteção da atividade rural e na garantia de mecanismos legais para o reequilíbrio contratual em momentos de crise.
              </p>
            </div>

            <div className="actions-container">
              <button className="arrow-button">
                <img src={setaEsquerda} alt="Seta Esquerda" width="33" height="33" />
              </button>

              <button className="saiba-mais-button">Quero saber mais</button>

              <button className="arrow-button">
                <img src={setaDireita} alt="Seta Direita" width="33" height="33" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NoticiasRecentes;
