import { useNavigate } from "react-router-dom";
import "./LogoFooter.css";

export const LogoFooter = () => {

  const navigate = useNavigate();

  const handleNavigateHome = () => {
    navigate('/');
  }

  return (
    <>
      <img
        className="main-logo__footer"
        src="/assets/logo.svg"
        alt="logo-footer"
        onClick={handleNavigateHome}
      />
    </>
  );
};
