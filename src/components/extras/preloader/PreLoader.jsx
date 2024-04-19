import React, { useEffect } from "react";

import "./PreLoader.css";

function PreLoader() {
  useEffect(() => {
    setTimeout(() => {
      const loader = document.getElementById("preloader");
      loader.style.display = "none"; // Set display to "none" to hide the loader
    }, 2000);
  }, []);

  return <div id="preloader" className="preloader"></div>;
}

export default PreLoader;
