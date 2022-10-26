import React, { useState, useEffect } from "react";

import { Link } from "react-scroll";
import { FaAngleUp } from "react-icons/fa";
const ScrollTopButton = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  return (
    <div className="top-to-btm">
      <Link
        activeClass="active"
        to="home"
        spy={true}
        smooth={true}
        offset={-60}
        duration={200}
      >
        {" "}
        {showTopBtn && <FaAngleUp className="icon-position icon-style" />}{" "}
      </Link>
    </div>
  );
};

export default ScrollTopButton;
