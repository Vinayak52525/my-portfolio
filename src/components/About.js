import { motion } from "framer-motion";
import aboutMePicture from "../assets/aboutMePicture.png";
import { ABOUT_TEXT, getMotion } from "../constants";

export const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">
        About <span className="text-neutral-500">Me</span>
      </h2>
      <div className="flex flex-wrap">
        <AboutMePicture />
        <AboutMeContent />
      </div>
    </div>
  );
};

const AboutMePicture = () => {
  return (
    <motion.div
      className="w-full lg:w-1/2 lg:p-8"
      {...getMotion({ x: -100 }, {}, 0.5)}
    >
      <div className="flex items-center justify-center">
        <img className="rounded-2xl " src={aboutMePicture} alt="about me" />
      </div>
    </motion.div>
  );
};

const AboutMeContent = () => {
  return (
    <motion.div {...getMotion({}, {}, 0.5)} className="w-full lg:w-1/2">
      <div className="flex justify-center lg:justify-start">
        <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
      </div>
    </motion.div>
  );
};
