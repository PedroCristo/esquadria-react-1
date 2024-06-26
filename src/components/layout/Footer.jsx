import { Link } from "react-router-dom";
import social_linksDB from "../../data/social_links";
function Footer() {
  const currentYear = new Date().getFullYear(); // Get the current year
  return (
    <section id="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <img
              src="images/logos/esquadria-logo_1.png"
              className="footer-logo"
              alt="Esquadria Logo"
            />
            <p className="text-footer">
              A cozinha é o coração de cada casa. Evoca memórias da história da
              sua família.
            </p>
          </div>
          <div className="col-md-3">
            <h4>Horário</h4>
            <p>
              <i className="far fa-calendar"></i>De segunda-feira a sábado
            </p>
            <p>
              <i className="fas fa-clock"></i>Das 9.30H às 18.30H
            </p>
          </div>
          <div className="col-md-3">
            <h4>Contacto</h4>
            <p>
              <i className="fas fa-phone"></i>+351 219 288 190
            </p>
            <p>
              <i className="far fa-envelope"></i>info@esquadria-sa.pt
            </p>
            <p>
              <i className="fas fa-home"></i> Rua da Industria, 34 - 34A
              <br />
              <span className="contact-span"> Mucifal - 2710-414 Sintra</span>
            </p>
          </div>
          <div className="col-md-3">
            <h4>Siga-nos</h4>
            <ul>
              {social_linksDB.map(
                (linkItem) =>
                  linkItem.id !== 3 && (
                    <li key={linkItem.id}>
                      <a href={linkItem.linkUrl} target="_blank">
                        <i className={linkItem.socialClass}></i>
                        {linkItem.title}
                      </a>
                    </li>
                  )
              )}
            </ul>
          </div>
          <hr />
          <p className="copyright">
            <i className="far fa-copyright"></i>Copyright |{" "}
            <span className="esquadria">esquadria</span> | 2022 -{" "}
            <span>{currentYear}</span>
            <br />
            <Link to="/política-privacidade">
              Política de Privacidade
            </Link> | <Link to="/política-cookies">Política de Cookies</Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
