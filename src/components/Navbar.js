import { motion } from "framer-motion";
import logo from "../assets/logo.jpg";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Tooltip } from "./Tooltip";

export const Navbar = () => {
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Resume.pdf";
    link.download = "resume.pdf";
    link.click();
  };

  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <Tooltip text={"Download Resume"}>
        <div
          onClick={handleDownloadResume}
          className="flex flex-shrink-0 items-center cursor-pointer "
        >
          <img src={logo} alt="logo" className="mx-2 w-10 rounded-md" />
        </div>
      </Tooltip>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        {navItems.map(({ Icon, href, tooltipText }) => (
          <Tooltip key={href} text={tooltipText}>
            <motion.a
              whileHover={{ scale: 1.5 }}
              className="cursor-pointer"
              href={href}
              target="_blank"
            >
              <Icon />
            </motion.a>
          </Tooltip>
        ))}
      </div>
    </nav>
  );
};

const navItems = [
  {
    Icon: FaLinkedin,
    href: "https://www.linkedin.com/in/vinayak-jadhav-70027b144",
    tooltipText: "LinkedIn",
  },
  {
    Icon: FaGithub,
    href: "https://github.com/vinayak52525",
    tooltipText: "Github",
  },
  {
    Icon: FaInstagram,
    href: "https://www.instagram.com/_vinayak_jadhav",
    tooltipText: "Instagram",
  },
  {
    Icon: FaSquareXTwitter,
    href: "https://www.x.com/Vinayak47683802",
    tooltipText: "X",
  },
];
