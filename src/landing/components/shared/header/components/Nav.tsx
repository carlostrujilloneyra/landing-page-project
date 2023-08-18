import { useContext, useEffect, useRef } from "react";
import { StateContext } from "../../../../context/StateContext";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Nav.css";

export const Nav = () => {

  const { menuOpen, setMenuOpen } = useContext(StateContext);

  const menuRef = useRef<HTMLDivElement>(null);

  const handleOutsideTap = (event: TouchEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {

    if (menuOpen) {
      document.addEventListener('touchstart', handleOutsideTap);
    } else {
      document.removeEventListener('touchstart', handleOutsideTap);
    }

    return () => {
      document.removeEventListener('touchstart', handleOutsideTap);
    };
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`main-nav-header ${menuOpen ? "showNav" : ""}`}
        ref={menuRef}
      >
        <ul className="main-nav-header__list">
          <li>
            <Link className="link-header" to="/">
              home
            </Link>
          </li>

          <li>
            <Link className="link-header" to="/about">
              about
            </Link>
          </li>
        </ul>

        <Button />
      </nav>
    </>
  );
};
