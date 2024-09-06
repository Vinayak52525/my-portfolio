import { animate, motion } from "framer-motion";
import { RiReactjsLine } from "react-icons/ri";
import {
  SiTypescript,
  SiJavascript,
  SiRedux,
  SiReactquery,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { getMotion } from "../constants";
import { Tooltip } from "./Tooltip";

const iconVarients = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const TechnologiesArray = [
  {
    IconComponent: RiReactjsLine,
    colorClass: "text-cyan-400",
    animationDelay: 2.4,
    tooltipText: "ReactJs",
  },
  {
    IconComponent: TbBrandNextjs,
    colorClass: "",
    animationDelay: 3,
    tooltipText: "NextJs",
  },
  {
    IconComponent: SiJavascript,
    colorClass: "text-yellow-500",
    animationDelay: 5,
    tooltipText: "Javascript",
  },
  {
    IconComponent: SiTypescript,
    colorClass: "text-blue-900",
    animationDelay: 2,
    tooltipText: "Typescript",
  },
  {
    IconComponent: SiRedux,
    colorClass: "text-purple-900",
    animationDelay: 6,
    tooltipText: "Redux",
  },
  {
    IconComponent: SiReactquery,
    colorClass: "text-red-500",
    animationDelay: 4,
    tooltipText: "React Query",
  },
];

export const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        {...getMotion({ x: 0, y: -100 }, { y: 0 }, 1.5)}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <TechnologiesList />
    </div>
  );
};

const TechnologiesList = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.5 }}
      {...getMotion({ x: -100 }, {}, 1.5)}
      className="flex flex-wrap items-center justify-center gap-4"
    >
      {TechnologiesArray.map(
        ({ IconComponent, colorClass, animationDelay, tooltipText }, index) => {
          return (
            <motion.div
              variants={iconVarients(animationDelay)}
              initial="initial"
              animate="animate"
              key={index}
              className="rounded-2xl border-4 border-neutral-800 p-4"
            >
              <Tooltip text={tooltipText}>
                <IconComponent className={`text-7xl ${colorClass}`} />
              </Tooltip>
            </motion.div>
          );
        }
      )}
    </motion.div>
  );
};
