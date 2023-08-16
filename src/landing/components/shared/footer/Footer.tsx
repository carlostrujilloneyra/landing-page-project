import { Link } from "react-router-dom";
import { SocialNetworks } from "./components";
import "./Footer.css";
import { motion } from "framer-motion";

const item = {
	visible: {
		opacity: 1,
	},
	hidden: {
		opacity: 0
	}
}

export const Footer = () => {
  return (
    <>
      <motion.footer
        className="main-footer"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={item}
        transition={{ duration: 1.5 }}
      >
        <div className="main-footer__two-columns">
          <div className="main-footer__fp">
            <img
              className="main-logo__footer"
              src="/assets/logo.svg"
              alt="logo-footer"
            />

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
					</div>
					
					<div className="main-footer__sp">
						<p>987 Hillcrest Lane</p>
						<p>Irvine, CA</p>
						<p>California 92714</p>
						<p>Call Us: 949-833-7432</p>
					</div>

				</div>
				
				<div className="main-footer__two-columns main-footer__two-columns--different">
					<div className="developed-by">
						<p>Developed by: Carlos Trujillo</p>
					</div>

					<SocialNetworks />

				</div>

      </motion.footer>
    </>
  );
};
