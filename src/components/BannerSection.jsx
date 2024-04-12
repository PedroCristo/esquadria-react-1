function BannerSection() {
  return (
    <section id="banner">
      <div className="banner-highlights">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h1>Esquadria ShowRoom</h1>
              <h4>Aberto de segunda-feira a sábado</h4>
              <p>Agende já uma visita</p>
            </div>
            <div className="col-md-4">
              <a href="tel:+351219288190" className="btn">
                <i className="fas fa-phone"></i>Ligar
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BannerSection;
