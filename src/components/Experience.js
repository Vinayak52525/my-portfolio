import { motion } from "framer-motion";
import { EXPERIENCES, getMotion } from "../constants";

export const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        {...getMotion({ x: 0, y: -100 }, { y: 0 }, 1.5)}
        className="my-20 text-center text-4xl"
      >
        Experience
      </motion.h2>
      <ExperienceDetails />
    </div>
  );
};

const ExperienceDetails = () => {
  return (
    <div>
      {EXPERIENCES.map((experience, index) => {
        return (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <Timeline year={experience.year} />
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <Designation
                role={experience.role}
                company={experience.company}
              />
              <Responsibilities description={experience.description} />
              {experience.technologies.map((technology, index) => (
                <Technology key={index} technology={technology} />
              ))}
            </motion.div>
          </div>
        );
      })}
    </div>
  );
};

const Timeline = ({ year }) => {
  return (
    <motion.div
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: -100 }}
      transition={{ duration: 1 }}
      className="w-full lg:w-1/4"
    >
      <p className="mb-2 text-sm text-neutral-400">{year}</p>
    </motion.div>
  );
};
const Designation = ({ role, company }) => {
  return (
    <h6 className="mb-2 font-semibold">
      {role} - <span className="text-sm text-purple-100">{company}</span>
    </h6>
  );
};
const Responsibilities = ({ description }) => {
  return <p className="mb-4 text-neutral-400">{description}</p>;
};

const Technology = ({ technology }) => {
  return (
    <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
      {technology}
    </span>
  );
};
