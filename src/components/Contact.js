import { motion } from "framer-motion";
import { CONTACT, getMotion } from "../constants";

export const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2
        {...getMotion({ x: 0, y: -100 }, { y: 0 }, 0.5)}
        className="my-10 text-center text-4xl"
      >
        Get in Touch
      </motion.h2>
      <div className="text-center tracking-tighter">
        <motion.p {...getMotion({ x: -100 }, {})} className="my-4">
          {CONTACT.address}
        </motion.p>
        <motion.p {...getMotion({ x: 100 }, {})} className="my-4">
          <a href={`tel:${CONTACT.phoneNo}`}>{CONTACT.phoneNo}</a>
        </motion.p>
        <a href={`mailto:${CONTACT.email}`} className="border-b">
          {CONTACT.email}
        </a>
      </div>
    </div>
  );
};
