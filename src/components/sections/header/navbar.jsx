import { useState, useEffect } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const [hidden, setHidden] = useState(null);
  useEffect(() => {
    setHidden(false);
  }, []);

  const pressNav = () => {
    setHidden(!hidden);
  };
  return (
    <header>
      <a href="/" className="logo">
        <i className="fab fa-react"></i> Mohammad
      </a>

      <div
        id="menu"
        className={`fas fa-bars ${hidden ? "fa-times" : ""}`}
        onClick={() => pressNav()}
      ></div>
      <nav className={`navbar ${hidden ? "nav-toggle" : ""}`}>
        <ul>
          <li>
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-60}
              duration={400}
            >
              home
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-60}
              duration={400}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              offset={-60}
              duration={400}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="work"
              spy={true}
              smooth={true}
              offset={-60}
              duration={400}
            >
              Work
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-60}
              duration={400}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Navbar;
