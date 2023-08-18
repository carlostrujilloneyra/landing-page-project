import { Link } from "react-router-dom";
import "./NavFooter.css";

export const NavFooter = () => {

  const handleTopZero = () => {
    window.scrollTo(0, 0);
  }

  return (
    <>
      <nav>
        <ul className="main-footer__list">
          <li>
            <Link
              to="/"
              className="link-footer"
              onClick={handleTopZero}
            >
              home
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              className="link-footer"
              onClick={handleTopZero}
            >
              about
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              className="link-footer"
              onClick={handleTopZero}
            >
              contact
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
