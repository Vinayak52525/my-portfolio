export const HERO_CONTENT = `I am passionate and results-driven Frontend React Developer with over 5 years of experience, I have honed my skills in creating dynamic and responsive user interfaces that enhance user experiences and drive engagement. My expertise lies in leveraging React.js to build scalable and efficient web applications, with a deep understanding of modern frontend technologies, including Redux, TypeScript, and RESTful APIs. Throughout my career, I have successfully led and contributed to a variety of projects, from designing intuitive user interfaces to optimizing performance and ensuring cross-browser compatibility. My approach combines a keen eye for detail with a strong emphasis on best practices in code quality and maintainability. I thrive in collaborative environments, where I can contribute to team goals and continuously learn and adapt to new technologies.`;

export const ABOUT_TEXT = `My journey in web development began with a fascination for how technology can transform ideas into interactive digital experiences, and it has evolved into a career dedicated to creating seamless, responsive interfaces using React.js and its ecosystem. I specialize in translating complex requirements into intuitive, visually appealing designs while ensuring optimal performance and accessibility. My toolkit includes React.js, Redux, TypeScript, and various other modern frontend technologies, which I use to build scalable and maintainable solutions. I’m particularly passionate about clean code and continuous learning. I thrive in environments that challenge me to grow, whether that’s by exploring new technologies, optimizing existing systems, or collaborating with cross-functional teams to achieve project goals. When I’m not coding, you might find me experimenting with the latest frontend frameworks, diving into design patterns. I’m excited to take on new challenges and contribute to innovative solutions that push the boundaries of what’s possible in web development.`;

export const EXPERIENCES = [
  {
    year: "2021 - Present",
    role: "UI Engineer",
    company: "LogicMonitor",
    description: `I developed and maintained web applications utilizing JavaScript, React.js, and various other front-end libraries. My responsibilities included designing, documenting, and implementing new features and system enhancements using React, adhering to best practices and coding standards to ensure high-quality deliverables. I focused on creating reusable and optimized React components based on detailed specifications, with an emphasis on performance, scalability, and maintainability. To streamline the release process and ensure continuous deployment readiness, I planned and prioritized development tasks within a 2-week Scrum cycle, followed by a week dedicated to regression testing.`,
    technologies: ["React", "Redux", "Routers", "Tanstack Query"],
  },
  {
    year: "2019 - 2021",
    role: "Frontend Developer",
    company: "Infosys",
    description: `I actively contributed to the development of web applications using JavaScript, React.js, and Node.js. This involved engaging in detailed discussions and brainstorming sessions with various project teams to gain a comprehensive understanding of development requirements. I collaborated closely with product managers to prioritize features and enhancements effectively. My role also included developing reusable components with JavaScript and React, and working alongside the UX design team to build user-friendly and interactive interfaces. Additionally, I focused on monitoring and improving application performance and conducted regular technical reviews with clients to keep them informed about the application's progress.`,
    technologies: ["HTML", "CSS", "Javascript", "React"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa6qanhR3y1qXrBdqwbsYr0oT_hjL2O2TUlw&s",
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image:
      "https://www.thefactsite.com/wp-content/uploads/2013/02/100-technology-facts.webp",
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image:
      "https://bs-uploads.toptal.io/blackfish-uploads/components/open_graph_image/8960020/og_image/optimized/0627-Create_Data_from_Random_Noise_with_Generative_Adversarial_Networks_Dan_Social-e1db0aa9e525a3187256ef1d63aeee51.png",
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv0kfErL2fvde4BKmydc5UXUYg3_c1qqiH9-j7Cik2PfCEx8weeFzy-bmdSl9pdqspMyo&usqp=CAU",
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "Hinjewadi Phase 1, Pune-411057",
  phoneNo: "+91 7757963611",
  email: "vinayak52525@gmail.com",
};

export const getMotion = (initial, whileInView, transitionDuration = 1) => ({
  initial: { opacity: 0, x: 100, ...initial },
  whileInView: { opacity: 1, x: 0, ...whileInView },
  transition: { duration: transitionDuration },
});
