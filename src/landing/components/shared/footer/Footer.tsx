import { Link } from "react-router-dom";
import { LogoFooter, NavFooter, SocialNetworks } from "./components";
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

            <LogoFooter />

            <NavFooter />

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
