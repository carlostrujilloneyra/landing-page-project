import { cubicBezier, motion } from "framer-motion";
import "./Hero.css";

const container = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      ease: cubicBezier(0.6, 0.01, -0.05, 0.75),
      duration: 1.8,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      ease: "easeInOut",
      duration: 1.8,
    },
  },
};

export const Hero = () => {
  return (
    <>
      <div className="container-main-hero container">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <h1>
            Find the best <span className="main-hero__span">talent</span>
          </h1>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <p>
            Finding the right people and building high performing teams can be
            hard. Most companies aren’t tapping into the abundance of global
            talent. We’re about to change that.
          </p>
        </motion.div>
      </div>
    </>
  );
};
