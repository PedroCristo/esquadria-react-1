import { Link } from "react-router-dom";
import social_linksDB from "../../data/social_links";

function SocialIcons() {
  return (
    <div className="media-icons">
      {social_linksDB.map((social_item) => (
        <Link to={social_item.linkUrl} target="_blank" key={social_item.id}>
          <i className={social_item.socialClass}></i>
        </Link>
      ))}
    </div>
  );
}

export default SocialIcons;
