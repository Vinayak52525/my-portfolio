import React from "react";
import { motion } from "framer-motion";
import { HERO_CONTENT } from "../constants";
import profilePicture from "../assets/profilePicture.png";

export const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-36">
      <div className="flex flex-wrap">
        <LeftContent />
        <ProfilePicture />
      </div>
    </div>
  );
};

const LeftContent = () => {
  return (
    <div className="w-full lg:w-1/2">
      <div className="flex flex-col items-center lg:items-start">
        <motion.h1
          className="pb-16 text-5xl font-thin tracking-normal lg:mt-16 lg:text-8xl"
          {...applyMotionWithDelay(0)}
        >
          Vinayak Jadhav
        </motion.h1>
        <motion.span
          className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
          {...applyMotionWithDelay(0.5)}
        >
          Frontend Developer
        </motion.span>
        <motion.p
          className="my-2 max-w-xl py-6 font-light tracking-tighter"
          {...applyMotionWithDelay(1)}
        >
          {HERO_CONTENT}
        </motion.p>
      </div>
    </div>
  );
};

const ProfilePicture = () => {
  return (
    <div className="w-full lg:w-1/2 lg:p-8">
      <div className="flex justify-center">
        <motion.img
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          style={{ height: "500px" }}
          src={profilePicture}
          alt="Vinayak Jadhav Picture"
        />
      </div>
    </div>
  );
};

const applyMotionWithDelay = (delay) => ({
  variants: {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, delay },
    },
  },
  initial: "hidden",
  animate: "visible",
});
