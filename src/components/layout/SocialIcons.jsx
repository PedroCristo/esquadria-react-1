import { Link } from "react-router-dom";
function SocialIcons() {
  return (
    <div className="media-icons">
      <Link to="https://www.facebook.com/esquadria" target="_blank">
        <i className="fab fa-facebook-f"></i>
      </Link>
      <Link to="" target="_blank">
        <i className="fab fa-instagram"></i>
      </Link>
      <Link to="mailto:info@esquadria-sa.pt">
        <i className="far fa-envelope"></i>
      </Link>
    </div>
  );
}

export default SocialIcons;
