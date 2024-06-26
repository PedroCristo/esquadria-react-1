import React, { useState, useEffect } from 'react';
import "./Cookies.css"
import { Link } from 'react-router-dom';

function Cookies() {
  const [showCookies, setShowCookies] = useState(true);

  useEffect(() => {
    const localPref = JSON.parse(window.localStorage.getItem('cookies-pref'));
    if (localPref) activateFunctions(localPref);
  }, []); // Only run once on component mount

  function activateFunctions(pref) {
    setShowCookies(false);
    window.localStorage.setItem('cookies-pref', JSON.stringify(pref));
  }

  function getFormPref() {
    return [...document.querySelectorAll('[data-function]')]
      .filter((el) => el.checked)
      .map((el) => el.getAttribute('data-function'));
  }

  function handleSave() {
    const pref = getFormPref();
    activateFunctions(pref);
  }

  return (
    showCookies && (
      <div className="cookies-container cookies-container-index">
        <div className="cookies-content">
          <p>
            Utilizamos pequenos arquivos de texto denominados cookies, para fins de navegação,
            performance, funcionalidade e marketing. Ao pressionar “Aceitar” está a consentir o
            alojamento de cookies do nosso website no seu computador ou dispositivo móvel.
            <br />
            <Link to="política-privacidade">Política de Privacidade</Link>
          </p>
          <div className="cookies-button cookies-button-index">
            <a className="cookies-save" onClick={handleSave}>
              Aceitar
            </a>
            <Link to="https://www.google.com/" className="cookies-exit">
              Sair
            </Link>
          </div>
        </div>
      </div>
    )
  );
}

export default Cookies;



