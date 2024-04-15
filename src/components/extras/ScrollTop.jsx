import PropTypes from "prop-types";

import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = (props) => {
  const location = useLocation();
  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return <>{props.children}</>
};

ScrollToTop.propTypes = {
    children: PropTypes.string.isRequired,
   }

export default ScrollToTop;