// LandingPage.js
import React, { useState } from "react";
import LandingNav from "../components/layout/LandingPage/LandingNavbar";
import Showcase from "../components/layout/LandingPage/Showcase";

function LandingPage() {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <div>
      {/* Showcase component */}
      <Showcase isActive={isActive} toggleMenu={toggleMenu} />
      {/* LandingNav component */}
      <LandingNav isActive={isActive} toggleMenu={toggleMenu} />
    </div>
  );
}

export default LandingPage;
