
import PropTypes from "prop-types";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function Layout( {children}) {
    return(
        <div>
            <Navbar />
            {children}
            <Footer />

        </div>
    )
}

export default Layout;

Layout.propTypes = {
    children: PropTypes.string.isRequired,
  };