import { Link } from "react-router-dom";
import { useEffect } from "react";

function ThanksPage(){
    useEffect(() => {
        document.title = "Esquadria | Página de Agradeciemnto";
      }, []);
    return(
        <section className="home thanks-page">
        <div className="content active">
            <h2>Cozinhas Sintra</h2>
            <h3>esquadria</h3>
            <p>Obrigado pelo o seu e-mail. <br />
                Entraremos em contacto o mais breve possível.
            </p>
            <Link to="/página-principal" className="btn nav-link">Voltar</Link>
        </div>
    </section>
    )
}
export default ThanksPage;