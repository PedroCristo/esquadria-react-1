import PropTypes from "prop-types";

function CookiesPrivacy({ title, content }) {
  return (
    <div>
      <section id="cookies" className="cookies">
        <div className="container">
          <h2>{title}</h2>
          <p>{content}</p>
        </div>
      </section>
    </div>
  );
}

CookiesPrivacy.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
export default CookiesPrivacy;
