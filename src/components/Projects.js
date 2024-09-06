import { motion } from "framer-motion";
import { getMotion, PROJECTS } from "../constants";
import { Tooltip } from "./Tooltip";

export const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        className="my-20 text-center text-4xl"
        {...getMotion({ x: 0, y: -100 }, { y: 0 }, 0.5)}
      >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => {
          return (
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
              <motion.div
                className="w-full lg:w-1/4"
                {...getMotion({ x: -100 }, {})}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  width={150}
                  height={150}
                  className="mb-6 rounded"
                />
              </motion.div>
              <motion.div
                className="w-full max-w-xl lg:w-3/4"
                {...getMotion({ x: -100 }, {})}
              >
                <h6 className="mb-2 font-semibold">{project.title}</h6>
                <p className="mb-4 text-neutral-400">{project.description}</p>
                {project.technologies.map((tech, index) => {
                  return (
                    <span
                      key={index}
                      className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900"
                    >
                      {tech}
                    </span>
                  );
                })}
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
