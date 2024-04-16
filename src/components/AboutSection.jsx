function AboutSection() {
  return (
    <section className="about-us" id="about">
      <h1 className="title">Quem Somos</h1>
      <img
        src="images/logos/esquadria_logo.png"
        className="img-title"
        alt="Esquadria Logo"
      />
      <div className="row">
        <div className="about-us-col">
          <h1>Uma História com mais de 50 anos!</h1>
          <p>
            A <span className="esquadria">Esquadria SA </span>apresenta-se no
            mercado com uma gama de produtos nos quais a qualidade assume um
            papel determinante, procurando uma empresa responder aos elevados
            índices de exigência qualitativa, de forma a melhor atingir os
            níveis de satisfação atualizado pela procura.
            <br />
            <br />
            Design, inovação, qualidade e total satisfação do cliente, além de
            um estilo único, fazem da Esquadria uma referência sempre que pensa
            em cozinhas.
          </p>
        </div>
        <div className="about-us-col">
          <img
            src="images/desktop/esquadria-cozinhas/esquadria_cozinha_19.jpg"
            alt="QUEM SOMOS Imagem 1"
          />
        </div>
      </div>
      <div className="row row-reverse">
        <div className="about-us-col">
          <img
            src="images/desktop/esquadria-cozinhas/esquadria_cozinha_15.jpg"
            alt="QUEM SOMOS Imagem 2"
          />
        </div>
        <div className="about-us-col">
          <h1>A Escolha Perfeita para Cozinhas de Excelência!</h1>
          <p>
            Sendo das mais antigas empresas de cozinhas em Portugal, a{" "}
            <span className="esquadria">Esquadria</span>
            alia o conhecimento, o rigor e 40 anos de experiência ao elevado
            potencial das novas tecnologias e da engenharia.
            <br />
            <br />
            Desde os anos 70, que a esquadria produz, nas suas instalações, no
            Mucifal, mobiliário de cozinha. Com a viragem do século deu início à
            produção de casas de banho.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="about-us-col">
          <h1>Tecnologia e Qualidade a Preços Competitivos!</h1>
          <p>
            A <span className="esquadria">Esquadria</span> apresenta a dimensão
            de uma área total de 33.000 m2 e área coberta de 13.500 m2e da
            tecnologia adequada que lhe permitem garantir uma excelente relação
            de qualidade / preço.
            <br />
            <br />A tecnologia de fabrico utilizada na Esquadria S.A., é o
            resultado da conjugação dos diversos equipamentos, com os meios
            todos de trabalho instituídos, de forma a proporcionar os níveis de
            qualidade pretendidos.
          </p>
        </div>
        <div className="about-us-col">
          <img
            src="images/desktop/esquadria-cozinhas/esquadria_cozinha_18.jpg"
            alt="QUEM SOMOS Imagem 3"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
