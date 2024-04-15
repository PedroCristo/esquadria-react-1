
import PropTypes from "prop-types";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

function Layout( {children, showFullMenu}) {
    return (
      <div>
        <Navbar showFullMenu={showFullMenu} />
        {children}
        <Footer />
      </div>
    );
}

export default Layout;

Layout.propTypes = {
    children: PropTypes.string.isRequired,
    showFullMenu: PropTypes.string.isRequired,
  };