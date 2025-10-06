const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 3, suffix: "+", label: "Years of Experience" },
  { value: 10, suffix: "+", label: "Satisfied Clients" },
  { value: 30, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

// Updated constants
const techStackImgs = [
  {
    name: "JavaScript",
    imgPath: "/images/logos/jsweb.svg",
  },
  {
    name: "React",
    imgPath: "/images/logos/react.svg",
  },
  {
    name: "Nextjs",
    imgPath: "/images/logos/OIP.jpg",
  },
  {
    name: "Svelte",
    imgPath: "/images/logos/svelte.svg",
  },
  {
    name: "Node/Express",
    imgPath: "/images/logos/node.png",
  },
  // {
  //   name: "State Management (Redux)",
  //   imgPath: "/images/logos/redux.png",
  // },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
  // {
  //   name: "Svelte.js Developer",
  //   imgPath: "/images/svelte-icon.svg",
  //   type: "image",
  // },
  // {
  //   name: "JavaScript",
  //   imgPath: "/images/js.png",
  //   type: "image",
  // },
];

const expCards = [
  {
    review:
      "Adrian brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Software Solutions Engineer",
    // date: "December 2024 - Present",
    company: "Emdad Solutions",
    responsibilities: [
      "Developed and maintained user-facing features for the Hostinger website.",
      "Collaborated closely with UI/UX designers to ensure seamless user experiences.",
      "Optimized web applications for maximum speed and scalability.",
    ],
  },
  {
    review:
      "Adrian’s contributions to Docker's web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Software Engineer",
    // date: "January 2023 - Present",
    company: "Business Analytics",
    responsibilities: [
      "Led the development of Docker's web applications, focusing on scalability.",
      "Worked with backend engineers to integrate APIs seamlessly with the frontend.",
      "Contributed to open-source projects that were used with the Docker ecosystem.",
    ],
  },
  {
    review:
      "Adrian’s work on Appwrite’s mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "Software Developer",
    // date: "March 2019 - May 2020",
    company: "Zaxiss",
    responsibilities: [
      "Built cross-platform mobile apps using React Native, integrating with Appwrite's backend services.",
      "Improved app performance and user experience through code optimization and testing.",
      "Coordinated with the product team to implement features based on feedback.",
    ],
  },
];

const expCardsWithAlternatives = [
  {
    imgPath: "/images/exp1.png",
    logoPath: "/images/logos/emdad_logo.png",
    title: "Software Solutions Engineer",
    company: "Emdad Solutions",
    responsibilities: [
      "Developed and maintained user-facing features for the Hostinger website.",
      "Collaborated closely with UI/UX designers to ensure seamless user experiences.",
      "Optimized web applications for maximum speed and scalability.",
    ],
    // Option 1 data
    technologies: [
      "React",
      "Node.js",
      "TypeScript",
      "AWS",
      "Docker",
      "MongoDB",
    ],
    // Option 2 data
    achievements: [
      "Improved website loading speed by 40%",
      "Successfully delivered 15+ feature releases",
      "Reduced bug reports by 60% through better testing",
    ],
    // Option 3 data
    projects: [
      {
        name: "Sharek V3",
        description: "Built responsive shopping cart with payment integration",
      },
      {
        name: "Admin ",
        description:
          "Created analytics dashboard with real-time data visualization",
      },
    ],
    // Option 4 data
    duration: "1 Year",
    teamSize: "8 People",
    impact: "Led frontend development that improved user engagement by 35%",
  },
  {
    imgPath: "/images/exp2.png",
    logoPath: "/images/logos/business.png",
    title: "Software Engineer",
    company: "Business Analytics",
    responsibilities: [
      "Led the development of Docker's web applications, focusing on scalability.",
      "Worked with backend engineers to integrate APIs seamlessly with the frontend.",
      "Contributed to open-source projects that were used with the Docker ecosystem.",
    ],
    // Option 1 data
    technologies: [
      "React.js",
      "Next.js",
      "JavaScript",
      "GraphQL",
      "Kubernetes",
      "PostgreSQL",
    ],
    // Option 2 data
    achievements: [
      "Enhanced application scalability to handle 10x more traffic",
      "Integrated 20+ APIs for seamless data flow",
      "Contributed to 5 open-source repositories with 100+ stars combined",
    ],
    // Option 3 data
    projects: [
      {
        name: "Scalable Web App Platform",
        description:
          "Developed a containerized web app framework for rapid deployment",
      },
      {
        name: "API Integration Hub",
        description:
          "Built a centralized hub for managing and monitoring API integrations",
      },
    ],
    // Option 4 data
    duration: "2+ Years",
    teamSize: "10 People",
    impact:
      "Improved overall system performance and developer productivity by 50%",
  },
  {
    imgPath: "/images/exp3.png",
    logoPath: "/images/logos/zaxiss.jpg",
    title: "Software Developer",
    company: "Zaxiss",
    responsibilities: [
      "Built cross-platform mobile apps using React Native, integrating with Appwrite's backend services.",
      "Improved app performance and user experience through code optimization and testing.",
      "Coordinated with the product team to implement features based on feedback.",
    ],
    // Option 1 data
    technologies: [
      "React Native",
      "JavaScript",
      "Appwrite",
      "Firebase",
      "Redux",
      "Jest",
    ],
    // Option 2 data
    achievements: [
      "Optimized app load times by 30%",
      "Implemented features that increased user retention by 25%",
      "Conducted thorough testing reducing production bugs by 70%",
    ],
    // Option 3 data
    projects: [
      {
        name: "Cross-Platform Mobile App",
        description:
          "Developed a mobile app for real-time collaboration using React Native",
      },
      {
        name: "Performance Optimization Suite",
        description:
          "Created tools and scripts to monitor and enhance app performance",
      },
    ],
    // Option 4 data
    duration: "1+ Year",
    teamSize: "6 People",
    impact:
      "Delivered high-quality mobile solutions that met product goals and enhanced user experience",
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

export const logoIconsLists = [
  { name: "React", imgPath: "/images/logos/react.svg" },
  { name: "Nextjs", imgPath: "/images/logos/OIP.jpg" },
  { name: "JavaScript", imgPath: "/images/logos/jsweb.svg" },
  { name: "TypeScript", imgPath: "/images/tech/typescript.svg" },
  { name: "Svelte", imgPath: "/images/logos/svelte.svg" },
  { name: "Redux", imgPath: "/images/logos/redux.png" },
  { name: "Tailwind CSS", imgPath: "/images/tech/tailwind.svg" },
  { name: "Node.js", imgPath: "/images/tech/nodejs.svg" },
  { name: "Git", imgPath: "/images/tech/git.svg" },
  { name: "Figma", imgPath: "/images/tech/figma.svg" },
  { name: "GSAP", imgPath: "/images/tech/gsap.svg" },
  // Add more...
];

const testimonials = [
  {
    name: "Anter Gaber",
    mentions: "@anter-gaber",
    review:
      "I had the chance to work with Zahid during the last year he helped us to re-implement our legacy correspondence management system as a new modern, user friendly and secure application with better performance, Zahid was very supportive and always following best practices during the implementation, he owned the whole front-end layer of the system starting from solution design until we finished implementation and testing.Thank you Zahid for all your support, I was really lucky to work with a professional Senior developer like you.",
    imgPath: "/images/client1.png",
    linkedin: "https://www.linkedin.com/in/anter-gaber/",
  },
  {
    name: "Farhan Ul Haq",
    mentions: "@farhan-ul-haq",
    review:
      "Zahid has worked with me as a front end React JS developer. From day one, he had demonstrated exceptional professionalism, strong work ethic and a commitment to excellence that consistently exceeded expectations. He has good technical skills. He played a key role in working on in different React JS projects, where his problem-solving ability, creativity and professionalism truly stood out.",
    imgPath: "/images/client1.png",
    linkedin: "https://www.linkedin.com/in/farhan-ul-haq-502031a4/",
  },

  {
    name: "Omair Ahmed",
    mentions: "@ahmed-omair",
    review:
      " I’ve had the pleasure of working with Zahid Hussain, and I can confidently say he is an exceptional React developer. Zahid has a deep understanding of modern frontend practices and consistently delivers clean, scalable, and efficient code.He excels at building reusable functional components with hooks, ensuring that applications remain modular and easy to maintain. His expertise in state management using both Redux and Context API allows him to handle complex application flows with ease.One of Zahid’s standout qualities is his focus on performance optimization. From implementing lazy loading to leveraging memoization, he ensures that applications are fast, responsive, and user-friendly. He also has strong experience in building dynamic forms with validations and integrating APIs seamlessly using fetch, Axios, and React Query.Beyond his technical skills, Zahid brings a collaborative and problem-solving mindset to every project. He’s proactive, detail-oriented, and always eager to learn and share knowledge with his peers.I highly recommend Zahid to any team looking for a skilled React developer who can balance technical excellence with practical, real-world application needs.",
    imgPath: "/images/client3.png",
    linkedin: "https://www.linkedin.com/in/ahmed-omair/",
  },
  {
    name: "Asif Mushtaq",
    mentions: "@asifmushtaq829",
    review:
      "I’ve had the privilege of working with Zahid on multiple projects, and he consistently brings a thoughtful and professional approach to his work. He is a true team player—collaborative, clear in his communication, and a positive influence on those around him. It has been rewarding to witness his growth, and I am confident he is ready to take on even greater responsibilities in the future. I strongly recommend Zahid for any front-end development role—he would be a valuable asset to any team.",
    imgPath: "/images/client2.png",
    linkedin: "https://www.linkedin.com/in/asifmushtaq829/",
  },
  {
    name: "Muhammad Muttaraf Rasool",
    mentions: "@muhammad-muttraf-rasool-421819202",
    review:
      "I’ve had the privilege of working closely with Zahid Hussain on multiple frontend development projects, and he consistently impresses with his deep expertise in React.js. His mastery of component-based architecture, performance optimization, and modern web practices sets him apart. He also excels at quickly adapting to new technologies, delivering high-quality features with the same efficiency in Svelte as he does in React.What truly stands out is Zahid Hussain's ability to solve complex problems with elegant, efficient solutions. He is reliable, always meeting deadlines while maintaining the highest standards of quality. His strong communication and sense of responsibility make him a true asset to any team.",
    imgPath: "/images/client5.png",
    linkedin: "https://www.linkedin.com/in/muhammad-muttraf-rasool-421819202/",
  },
  {
    name: "Muhammad Afrasyab",
    mentions: "@afrasyab11",
    review:
      "I had the pleasure of working with Zahid Hussain on a project, and I was thoroughly impressed by his expertise as a Frontend Developer. His technical skills are exceptional, and he consistently delivers high-quality work with great attention to detail. Zahid is also an excellent team player — proactive in communication, highly collaborative, and always ready to support others to achieve project goals. His professionalism, dedication, and problem-solving abilities make him an asset to any team. I would gladly work with him again in the future.",
    imgPath: "/images/client4.png",
    linkedin: "https://www.linkedin.com/in/afrasyab11/",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
    url: "https://www.instagram.com/zahid_hosyn?igsh=dHpzOGF4anoyNDdy&utm_source=qr",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
    url: "https://www.facebook.com/share/16pnEatqMB/?mibextid=wwXIfr",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
    url: "https://x.com/zahidreacts?s=21",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    url: "https://www.linkedin.com/in/zahid-hussain-850a80175/",
  },
  {
    name: "Github",
    imgPath: "/images/github.png",
    url: "https://github.com/zahidhussain123",
  },
];

const gradientThemes = [
  { name: "Dark", bg: "#000000", gradient: null, id: "dark" },
  {
    name: "Blue Twilight",
    bg: "linear-gradient(135deg, #0a0e27 0%, #1a1f3a 100%)",
    gradient: true,
    id: "blue",
  },
  {
    name: "Purple Dreams",
    bg: "linear-gradient(135deg, #1a0b2e 0%, #2d1b4e 100%)",
    gradient: true,
    id: "purple",
  },
  {
    name: "Deep Ocean",
    bg: "linear-gradient(135deg, #0d1b1e 0%, #0f2027 100%)",
    gradient: true,
    id: "forest",
  },
  {
    name: "Velvet Night",
    bg: "linear-gradient(135deg, #1a0a0f 0%, #2d1520 100%)",
    gradient: true,
    id: "burgundy",
  },
  {
    name: "Cosmic Blue",
    bg: "linear-gradient(135deg, #0c1445 0%, #1a2a6c 100%)",
    gradient: true,
    id: "navy",
  },
  {
    name: "Aurora",
    bg: "linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)",
    gradient: true,
    id: "teal",
  },
  {
    name: "Galaxy",
    bg: "linear-gradient(135deg, #1e0836 0%, #2d1b4e 50%, #3a2463 100%)",
    gradient: true,
    id: "violet",
  },
  {
    name: "Midnight Fade",
    bg: "linear-gradient(135deg, #1c1c1c 0%, #2d2d2d 100%)",
    gradient: true,
    id: "charcoal",
  },
  {
    name: "Nebula",
    bg: "linear-gradient(135deg, #1a1f3a 0%, #2e3a59 50%, #1a1f3a 100%)",
    gradient: true,
    id: "slate",
  },
  {
    name: "Emerald Mist",
    bg: "linear-gradient(135deg, #0a1612 0%, #1a2f26 100%)",
    gradient: true,
    id: "emerald",
  },
  {
    name: "Cosmic Void",
    bg: "linear-gradient(135deg, #1b0e2e 0%, #3d1f5c 50%, #1b0e2e 100%)",
    gradient: true,
    id: "cosmic",
  },
];

const themes = [
  { name: "Dark", bg: "#000000", id: "dark" },
  { name: "Deep Blue", bg: "#0a0e27", id: "blue" },
  //   { name: "Purple Night", bg: "#1a0b2e", id: "purple" },
  { name: "Forest", bg: "#0d1b1e", id: "forest" },
  { name: "Burgundy", bg: "#1a0a0f", id: "burgundy" },
  //   { name: "Navy", bg: "#0c1445", id: "navy" },
  { name: "Midnight Teal", bg: "#0f2027", id: "teal" },
  //   { name: "Deep Violet", bg: "#1e0836", id: "violet" },
  { name: "Charcoal", bg: "#1c1c1c", id: "charcoal" },
  //   { name: "Slate Blue", bg: "#1a1f3a", id: "slate" },
  { name: "Dark Emerald", bg: "#0a1612", id: "emerald" },
  //   { name: "Cosmic Purple", bg: "#1b0e2e", id: "cosmic" },
];

const techStack = {
  frontend: [
    { name: "React", icon: "react", proficiency: 95 },
    { name: "Next.js", icon: "nextjs", proficiency: 90 },
    { name: "Svelte.js", icon: "svelte", proficiency: 80 },
    { name: "JavaScript", icon: "js", proficiency: 100 },
    { name: "TypeScript", icon: "ts", proficiency: 85 },
    { name: "HTML5", icon: "html", proficiency: 100 },
    { name: "CSS3", icon: "css", proficiency: 95 },
  ],
  uiDesign: [
    { name: "Tailwind CSS", icon: "tailwind", proficiency: 90 },
    { name: "Bootstrap", icon: "bootstrap", proficiency: 75 },
    { name: "Material-UI", icon: "materialui", proficiency: 80 },
    { name: "SCSS", icon: "scss", proficiency: 85 },
    { name: "Figma", icon: "figma", proficiency: 70 },
  ],
  backend: [
    { name: "Node.js", icon: "nodejs", proficiency: 85 },
    { name: "MongoDB", icon: "mongodb", proficiency: 80 },
    { name: "MySQL", icon: "mysql", proficiency: 75 },
  ],
  devOps: [
    { name: "Redux", icon: "redux", proficiency: 90 },
    { name: "React Query", icon: "reactquery", proficiency: 85 }, // Uses custom URL from before
    { name: "Git", icon: "git", proficiency: 100 },
    { name: "GitHub", icon: "github", proficiency: 100 },
  ],
};


export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
  expCardsWithAlternatives,
  themes,
  techStack,
};
