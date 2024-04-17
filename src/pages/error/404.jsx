import { Link } from "react-router-dom";

function Page404() {
  return (
    <div className="page404">
      <div className="container">
        <div className="row">
            <h1>404</h1>
          <h2>Página Não Encontrada.</h2>
          <p>
            Lamentamos, mas a página que está a tentar aceder não foi
            encontrada.
          </p>
          <Link to="/página-principal" className="btn">Voltar</Link>
        </div>
      </div>
    </div>
  );
}

export default Page404;
