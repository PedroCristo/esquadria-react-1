import React, { useEffect } from "react";
import privacyPolicyDB from "../data/privacy_policy";
import CookiesPrivacy from "../components/layout/CookiesPrivacy";

function PrivacyPolicyPage() {
  useEffect(() => {
    document.title = "Esquadria | Política de Privacidade";
  }, []);

  return (
    <div>
      <div className="container-title">
        <h1 className="title">Política de Privacidade</h1>
      </div>
      {privacyPolicyDB.map((privacy) => (
        <div key={privacy.id} className="cookies privacy-policy">
          <div className="container">
            <h2>{privacy.title}</h2>
            <h3>{privacy.subtitle}</h3>
          </div>
          {privacy.content.map((paragraph) => (
            <CookiesPrivacy
              key={paragraph.id}
              subtitle={paragraph.subtitle}
              content={paragraph.content_paragraph}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default PrivacyPolicyPage;
