import {
  java,
  frontend,
  backend,
  ux,
  redux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  python,
  mongodb,
  bootstrap,
  mysql,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  axios,
  url,
  password,
  capstone,
  formik,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: frontend,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI/UX Design",
    icon: ux,
  },
  {
    title: "Software Testing",
    icon: prototyping,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Redux",
    icon: redux,
  },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "Azetech Solution pvt ltd",
    icon: coverhunt,
    iconBg: "#333333",
    date: "June 2018 - June 2018",
  },
  {
    title: "Quality Analyst",
    company_name: "Mastech Infotrellis pvt ltd",
    icon: microverse,
    iconBg: "#333333",
    date: "July 2022 - Dec 2022",
  },
  {
    title: "Full Stack Developer",
    company_name: "Diversity Cyber Council",
    icon: dcc,
    iconBg: "#333333",
    date: "Sep 2022 - Present",
  },
];

const projects = [
  {
    id: "project-1",
    name: "Capstone Project",
    description:
      "This is my Capstone Project allows users to view and manage Markdown files using MongoDB, Express.js, React.js, and Node.js.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: capstone,
    repo: "https://github.com/Harsha-2324/Capstone_React-Markdown-Viewer-Frontend.git",
    demo: "https://capstone-react-markdown-viewer-frontend.vercel.app/",
  },

  {
    id: "project-2",
    name: "context api shopping cart",
    description:
      "A Shopping Cart that allows users to view products with details and images with add and remove products, adjust quantities.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: axios,
    repo: "https://github.com/Harsha-2324/ReactTask_5.git",
    demo: "https://contextapi-react-task-5.netlify.app/",
  },

  {
    id: "project-3",
    name: "Password Reset App",
    description:
      "This is a Password Reset App that allows users to securely reset their passwords using JWT authentication. ",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: password,
    repo: "https://github.com/Harsha-2324/NodeJSTask_4_Password_Reset_FrontEnd.git",
    demo: "https://harsha-mern-password-reset.netlify.app/",
  },

  {
    id: "project-4",
    name: "url shortner App",
    description:
      "A URL Shortener app that allows users to convert long, complex URLs into concise, easy-to-share links.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: url,
    repo: "https://github.com/Harsha-2324/URL-Shortener-FrontEnd.git",
    demo: "https://url-shortener-front-end-three.vercel.app/",
  },

  {
    id: "project-5",
    name: "Formik Library Management",
    description: `A Library Management application that allows users to add, delete, edit and pick a book and return it again.`,
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: formik,
    repo: "https://github.com/Harsha-2324/ReactTask_7.git",
    demo: "https://formik-validation-react-task-7.netlify.app/",
  },
];

export { services, technologies, experiences, projects };
