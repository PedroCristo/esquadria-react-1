import { Link } from "react-router-dom";

function ThanksPage(){
    return(
        <section className="home thanks-page">
        <div className="content active">
            <h2>Cozinhas Sintra</h2>
            <h3>esquadria</h3>
            <p>Obrigado pelo o seu e-mail. <br />
                Entraremos em contacto o mais breve possível.
            </p>
            <Link to="/página-principal" className="btn">Voltar</Link>
        </div>
    </section>
    )
}
export default ThanksPage;