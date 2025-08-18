import React from 'react';
import '../styles/SolucoesJuridicas.css';

const SolucoesJuridicas = () => {
  const areasAtuacao = [
    "Bancário",
    "Imobiliário", 
    "Previdenciário",
    "Direito do Agronegócio",
    "Assessoria Jurídica"
  ];

  return (
    <section className="solucoes-section">
      <div className="solucoes-container">
        <h3 className="solucoes-title">
          Soluções jurídicas com agilidade,<br />
          clareza e foco em resultados
        </h3>

        <div className="solucoes-content">
          <div className="content-text">
            <p>
              Somos um escritório que acredita que advocacia vai além de processos e contratos. Para nós se de entender histórias, proteger conquistas e construir caminhos seguros. 
              <strong> Atuamos com estratégia e visão nas áreas Bancária, Imobiliária, do Agronegócio e Previdenciária</strong>, sempre atentos às necessidades de quem confia no nosso trabalho.
            </p>

            <p>
              Aqui, cada causa importa. <strong>Não enxergamos casos, mas pessoas, negócios, famílias e projetos que precisam de apoio jurídico claro, eficiente e comprometido.</strong>
            </p>

            <p>
              Nosso jeito de trabalhar é simples: escutamos com atenção, explicamos com clareza e agimos com agilidade. Mais do que soluções jurídicas, entregamos segurança para decisões importantes e tranquilidade para seguir em frente.
            </p>

            <p>
              Seja para proteger seu patrimônio, planejar o futuro ou resolver um conflito, estamos ao seu lado. <strong>Com inteligência, estratégia e, acima de tudo, respeito pela sua história.</strong>
            </p>
          </div>
        </div>

        <div className="areas-atuacao">
          <h4 className="areas-title">Áreas de atuação</h4>
          
          <div className="areas-buttons">
            {areasAtuacao.map((area, index) => (
              <button 
                key={index}
                className="area-button"
              >
                {area}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolucoesJuridicas;