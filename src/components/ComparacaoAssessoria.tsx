import { X } from 'lucide-react';
import '../styles/ComparacaoAssessoria.css';

const ComparacaoAssessoria = () => {
  const semAssessoria = [
    "Recebe notificação judicial e não entende prazos",
    "Não apresenta defesa no tempo correto",
    "Tem os bens penhorados rapidamente",
    "Corre o risco de perder o bem e ainda continuar devendo",
    "Enfrenta dificuldade para renegociar com o banco",
    "Sente-se perdido no processo"
  ];

  const comAssessoria = [
    "Avaliação imediata da legalidade da ação do banco",
    "Defesa técnica apresentada dentro do prazo",
    "Pedido de liminar para suspender atos do banco (quando cabível)",
    "Abertura de negociação com melhores condições",
    "Garantia de que seus direitos estão sendo respeitados",
    "Redução de perdas e chances reais de manter o patrimônio"
  ];

  return (
    <section className="comparacao-section">
      <div className="comparacao-container">
        <div className="comparacao-header">
          <h3 className="comparacao-title">Com ou sem assessoria jurídica?</h3>
          <p className="comparacao-subtitle">Veja a diferença no desfecho do seu caso.</p>
        </div>

        <div className="comparacao-grid">
          <div className="comparacao-column">
            <div className="column-header">
              <div className="icon-container red">
                <X className="icon" />
              </div>
              <div className="comparacao-one">
                <h4 className="column-title">Sem assessoria</h4>
                <p className="column-subtitle">jurídica especializada</p>
              </div>
            </div>

            <div className="items-list">
              {semAssessoria.map((item, index) => (
                <div key={index} className="item-card red">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="comparacao-column">
            <div className="column-header">
              <div className="icon-container green">
                <div className="check-icon"></div>
              </div>
              <div className="acessorias">
                <h4 className="column-title">Com assessoria</h4>
                <p className="column-subtitle">jurídica especializada</p>
              </div>
            </div>

            <div className="items-list">
              {comAssessoria.map((item, index) => (
                <div key={index} className="item-card green">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="comparacao-footer">
          <p className="text-comparação">
            Contar com a orientação de um advogado desde o início é fundamental e evita prejuízos desnecessários, ganha tempo, e aumenta as chances de manter seu bem ou renegociar de forma justa.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ComparacaoAssessoria;