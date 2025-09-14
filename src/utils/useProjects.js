import { ref, computed } from "vue";

export const projects = {
  AdRetriever: {
    title: "AdRetriever",
    company: "KnowerTech",
    category: "workExp",
    description:
      "AdRetriever is a web-based platform built to help businesses streamline the creation, management, and analysis of digital advertising campaigns.\n\nUsing AI and Machine Learning, it ingests company-specific data—such as product listings and brand guidelines—to automatically generate ad creatives tailored to target demographics.\n\nI worked on developing and maintaining key features including: dynamic ad generation using brand-aligned, editable templates; campaign performance tracking with real-time analytics and insights; and integration with external APIs and internal ML services to personalize ad content based on user behavior and product data.\n\nThe app was built with a focus on scalability, ease of use, and automation—reducing the time and expertise required to launch effective ad campaigns.",
    images: ["AdRetrieverMockup.png"],
    videos: [],
    link: "https://adretriever.com",
  },
  "Twenty Eighty": {
    title: "Twenty Eighty",
    company: "Catch Digital",
    category: "workExp",
    description:
      "Twenty Eighty is a modern accounting firm with a forward-thinking approach to small business finance.\n\nDuring my time at Catch Digital, I developed their website using Webflow, focusing on delivering a highly interactive and animated experience that reflects their dynamic brand.\n\nThe site features smooth transitions, engaging scroll effects, and intuitive navigation to clearly communicate Twenty Eighty’s value-driven, future-focused services.\n\nI worked closely with the design team to ensure the final product was both visually striking and easy for the client to update and maintain.",
    images: ["TwentyEightyMockup.png"],
    videos: [],
    link: "https://www.twentyeighty.co/",
  },
  WasteWaterPro: {
    title: "WasteWaterPro",
    company: "FreeLance",
    category: "workExp",
    description:
      "WasteWaterPro is an industrial and municipal wastewater treatment company specializing in tailored, modern solutions, including container-based mobile dewatering systems.\n\nAs a freelance developer, I designed and built their website to effectively communicate their expertise and plug-and-play product offerings.\n\nThe site highlights key services, features technical product overviews, and supports lead generation through clear CTAs and contact forms.\n\nBuilt with a focus on clarity and professionalism, the website delivers a clean, responsive experience for both desktop and mobile users.",
    images: ["WasteWaterMockup.png"],
    videos: [],
    link: "https://www.wastewaterpro.ca/",
  },
  "Boom Broom": {
    title: "Boom Broom",
    category: "devExp",
    description:
      "This is a custom-built Minesweeper game developed using Vue.js.\n\nThe game features customizable grid size and difficulty levels, allowing users to adjust the number of rows, columns, and bombs to their preference.\n\nThe most challenging part of the implementation was replicating the classic Minesweeper behavior of automatically revealing connected empty squares when one is clicked.\n\nThis required building a recursive (or queue-based) logic to flood-fill all adjacent blank cells and accurately calculate and display the number of neighboring bombs for each tile.\n\nThe game showcases Vue's reactivity and component structure, providing a smooth and dynamic gameplay experience.",
    images: ["MineSweeperMockup.png"],
    videos: [],
    link: "https://main.d2idek4o563rm4.amplifyapp.com/",
  },
  "Expense Tracker": {
    title: "Expense Tracker",
    category: "devExp",
    description:
      "This is a custom-built expense tracker application developed using Next.js.\n\nThe application features user authentication, data visualization, and integration with Prisma and Neon APIs and Databases.\n\nThe most challenging part of the implementation was ensuring data consistency and accuracy across different views and components.\n\nThis required building a robust state management solution and implementing thorough testing strategies to catch and fix bugs early.\n\nThe application showcases Reacts's reactivity and component structure, providing a smooth and dynamic user experience.",
    images: ["ExpenseTrackerMockup.png"],
    videos: ["ExpenseTrackerVid.webm"],
    link: "https://expense-tracker-4y8u.vercel.app/",
  },
};

export const workExp = {
  KnowerTech: {
    company: "KnowerTech",
    title: "Intermediate Frontend Developer",
    date: "2022 - 2025",
    description:
      "At KnowerTech, I worked as a Frontend Developer on AdRetriever, a web application designed to generate ads and custom templates at scale, based on users' websites, services, and products.\n\nI collaborated with a team of developers to build responsive, accessible interfaces and focused on delivering a seamless user experience.\n\nMy responsibilities included designing and implementing new features, optimizing UI components, and continuously improving the application’s usability.",
    projects: ["AdRetriever"],
  },
  "Catch Digital": {
    company: "Catch Digital",
    title: "Web Developer",
    date: "2021 - 2022",
    description:
      "At Catch Digital, I was responsible for developing client websites using Webflow, a no-code platform that enables easy content management while allowing for highly customizable and visually distinct designs.\n\nI collaborated closely with designers and project managers to ensure each website aligned with client goals and was delivered on schedule.\n\nIn addition to new builds, I provided ongoing support and maintenance for existing sites, ensuring they remained up-to-date and fully functional.",
    projects: ["Twenty Eighty"],
  },
  FreeLance: {
    company: "FreeLance",
    title: "Web Developer",
    date: "2020 - Present",
    description:
      "As a freelance developer, I worked directly with clients to design and build custom web applications tailored to their business needs.\n\nUsing modern tools like Vue.js and Django, I created intuitive, responsive interfaces and robust backends that delivered seamless user experiences.\n\nI managed projects end-to-end, from gathering requirements and defining scope to deployment and post-launch support, while maintaining clear communication and timely delivery.\n\nIn addition to new builds, I provided ongoing maintenance, feature enhancements, and performance optimizations to ensure long-term value for clients.",
    projects: ["WasteWaterPro"],
  },
};

export const selectedWork = ref("KnowerTech");
export const currentWork = computed(() => workExp[selectedWork.value]);

export const education = {
  title: "Interactive Media Development",
  institution: "Fanshawe College",
  date: "2019 - 2021",
  description:
    "I graduated from Fanshawe College with a diploma in Interactive Media Development.\n\nThe program provided me with a strong foundation in web development, design principles, and user experience.\n\nI learned to work with various programming languages and frameworks, including HTML, CSS, JavaScript, React, Node, Python, SQL, etc.\n\nThe program also emphasized the importance of collaboration and communication in the development process, which has been invaluable in my career.",
};

export const devExp = {
  "Expense Tracker": {
    company: "Expense Tracker",
    title: "Expense Tracker With Ai Utility",
    description:
      "A customizable React-based expense tracker application that utilizes AI for smart categorization, expense analysis and suggestions.\n\nFeatures include user authentication, data visualization, and integration with Vercel Deployment, Prisma Databases, and Neon APIs.",
    projects: ["Expense Tracker"],
  },
  "Boom Broom": {
    company: "Boom Broom",
    title: "Custom Minesweeper Game",
    description:
      "A customizable Vue-based version of Minesweeper with adjustable grid size and difficulty.\n\nIncludes logic for revealing connected empty tiles and showing nearby bombs.",
    projects: ["Boom Broom"],
  },
};

export const selectedDev = ref("Expense Tracker");
export const currentDev = computed(() => devExp[selectedDev.value]);
