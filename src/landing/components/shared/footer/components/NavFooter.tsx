import { Link } from "react-router-dom";
import "./NavFooter.css";

export const NavFooter = () => {
  return (
    <>
      <nav>
        <ul className="main-footer__list">
          <li>
            <Link to="/" className="link-footer">
              home
            </Link>
          </li>

          <li>
            <Link to="/about" className="link-footer">
              about
            </Link>
          </li>

          <li>
            <Link to="/contact" className="link-footer">
              contact
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
