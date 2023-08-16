import { cubicBezier, motion } from "framer-motion";
import { benefits } from "../../data/benefits";
import { Detail, Form } from "./components";
import "./MainContact.css";

export const MainContact = () => {
  return (
    <>
      <main className="main-contact container">
				<motion.div
					initial={{ opacity: 0, y: 400 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{
						duration: 1,
						ease: cubicBezier(0.6, 0.01, -0.05, 0.75)
					}}
				>
          <h1 className="main-contact__title">Contact</h1>
          <h2 className="main-contact__subtitle">Ask us about</h2>
          <div className="container-grid__benefits">
            {benefits.map((benefit) => {
              return <Detail key={benefit.id} benefit={benefit} />;
            })}
          </div>
				</motion.div>
				
				<Form />

      </main>
    </>
  );
};
