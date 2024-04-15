import cookiesPolicyDB from "../data/cookies_policy";
import CookiesPrivacy from "../components/layout/cookiesPrivacy";

function CookiesPage() {
  return (
    <div>
      <div className="container-title">
        <h1 className="title">Política de Cookies</h1>
      </div>
      {cookiesPolicyDB.map((cookies) => (
        <CookiesPrivacy
          key={cookies.id}
          title={cookies.title}
          content={cookies.content}
        />
      ))}
    </div>
  );
}

export default CookiesPage;
