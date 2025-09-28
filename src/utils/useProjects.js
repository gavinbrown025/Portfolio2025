import stack from "daisyui/components/stack";
import { ref, computed } from "vue";

export const projects = {
  AdRetriever: {
    title: "AdRetriever",
    company: "KnowerTech",
    category: "workExp",
    intro:
      "AdRetriever is an **AI-powered** web platform that automates the **creation**, **management**, and **analysis** of digital advertising campaigns for businesses.",
    about:
      "The platform leverages **company-specific data**, such as **product listings** and **brand guidelines**, to automatically generate tailored ad creatives for **target demographics**. It is designed for **scalability**, **ease of use**, and **automation**, reducing the expertise and time required to launch effective ad campaigns.",
    features:
      "**AI & Machine Learning**, **Dynamic Ad Generation**, **Editable Brand-Aligned Templates**, **Real-Time Analytics**, **Campaign Performance Tracking**, **API & ML Service Integrations**, **Automated Personalization**, **Scalable Architecture**, **User-Friendly Interface**",
    description:
      "AdRetriever is a web-based platform built to help businesses streamline the creation, management, and analysis of digital advertising campaigns.\n\nUsing AI and Machine Learning, it ingests company-specific data—such as product listings and brand guidelines—to automatically generate ad creatives tailored to target demographics.\n\nI worked on developing and maintaining key features including: dynamic ad generation using brand-aligned, editable templates; campaign performance tracking with real-time analytics and insights; and integration with external APIs and internal ML services to personalize ad content based on user behavior and product data.\n\nThe app was built with a focus on scalability, ease of use, and automation—reducing the time and expertise required to launch effective ad campaigns.",
    stack: ["Vue.js", "Tailwind CSS", "Django", "PostgreSQL", "AWS"],
    images: ["AdRetrieverMockup.png"],
    videos: [],
    link: "https://adretriever.com",
    thumb: "",
  },
  "Twenty Eighty": {
    title: "Twenty Eighty",
    company: "Catch Digital",
    category: "workExp",
    intro:
      "Twenty Eighty is a **modern accounting firm** with a **forward-thinking approach** to small business finance, offering innovative solutions and a dynamic brand experience.",
    about:
      "The website was built to deliver a **highly interactive** and **animated experience** that reflects the firm's energetic and value-driven ethos. Emphasis was placed on **smooth transitions**, **engaging scroll effects**, and **intuitive navigation** to clearly communicate the firm's services and future-focused mindset. Collaboration with the design team ensured the final product was both visually striking and easy for the client to update and maintain.",
    features:
      "**Webflow Development**, **Responsive Design**, **CMS Integration**, **Animated UI**, **Smooth Transitions**, **Engaging Scroll Effects**, **Intuitive Navigation**, **Client-Friendly Editing**",
    description:
      "During my time at Catch Digital, I developed their website using Webflow, focusing on delivering a highly interactive and animated experience that reflects their dynamic brand.\n\nThe site features smooth transitions, engaging scroll effects, and intuitive navigation to clearly communicate Twenty Eighty’s value-driven, future-focused services.\n\nI worked closely with the design team to ensure the final product was both visually striking and easy for the client to update and maintain.",
    stack: ["Webflow", "Figma"],
    images: ["TwentyEightyMockup.png"],
    videos: ["TwentyEightyDemo.webm"],
    link: "https://www.twentyeighty.co/",
    thumb: "",
  },
  WasteWaterPro: {
    title: "WasteWaterPro",
    company: "FreeLance",
    category: "workExp",
    intro:
      "A **wastewater treatment company** specializing in **tailored, modern solutions** for industrial and municipal clients, including **container-based mobile dewatering systems**.",
    about:
      "The website was designed and built to **effectively communicate expertise** and **plug-and-play product offerings**. It highlights key services, features technical product overviews, and supports lead generation through clear CTAs and contact forms. The focus was on **clarity**, **professionalism**, and a **responsive experience** for both desktop and mobile users.",
    features:
      "**Custom Web Design**, **Service Highlighting**, **Technical Product Overviews**, **Lead Generation CTAs**, **Responsive Layout**, **Mobile Dewatering System Info**, **Professional Branding**",
    description:
      "WasteWaterPro is an industrial and municipal wastewater treatment company specializing in tailored, modern solutions, including container-based mobile dewatering systems.\n\nAs a freelance developer, I designed and built their website to effectively communicate their expertise and plug-and-play product offerings.\n\nThe site highlights key services, features technical product overviews, and supports lead generation through clear CTAs and contact forms.\n\nBuilt with a focus on clarity and professionalism, the website delivers a clean, responsive experience for both desktop and mobile users.",
    stack: [],
    images: ["WasteWaterMockup.png"],
    videos: [],
    link: "https://www.wastewaterpro.ca/",
    thumb: "",
  },
  "Expense Tracker": {
    title: "Expense Tracker",
    company: "Expense Tracker",
    category: "devExp",
    intro:
      "A **custom-built web app** for tracking and analyzing your **spending habits**. Add expenses, set **daily goals**, and view **spending trends** across selected time periods. Explore **category breakdowns** with multiple graph types, monitor **averages and stats**, and get **AI-powered insights** with automatic categorization.",
    about:
      "Built with **Next.js**, this application features **user authentication**, **data visualization**, and seamless integration with **Prisma** and **Neon** APIs and databases. The focus was on delivering a **smooth and dynamic user experience** through robust state management and thorough testing strategies, ensuring data consistency and accuracy across all views and components.",
    features:
      "**User Authentication**, **Data Visualization**, **Prisma & Neon Integration**, **AI-Powered Categorization**, **Custom Graphs & Stats**, **Responsive UI**, **Robust State Management**, **Thorough Testing**",
    description:
      "This is a custom-built expense tracker application developed using Next.js.\n\nThe application features user authentication, data visualization, and integration with Prisma and Neon APIs and Databases.\n\nThe most challenging part of the implementation was ensuring data consistency and accuracy across different views and components.\n\nThis required building a robust state management solution and implementing thorough testing strategies to catch and fix bugs early.\n\nThe application showcases Reacts's reactivity and component structure, providing a smooth and dynamic user experience.",
    stack: ["Next.js", "Tailwind CSS", "Vercel", "Neon"],
    images: ["ExpenseTrackerMockup.png"],
    videos: ["ExpenseTrackerDemo.webm"],
    link: "https://expense-tracker-4y8u.vercel.app/",
    thumb: "ExpenseThumb.png",
  },
  "Boom Broom": {
    title: "Boom Broom",
    company: "Boom Broom",
    category: "devExp",
    intro:
      "A **custom-built Minesweeper game** developed with **Vue.js**, featuring **customizable grid size** and **difficulty levels** for a classic puzzle experience.",
    about:
      "Players can adjust the number of rows, columns, and bombs to their preference, creating a personalized challenge. The game faithfully replicates the classic Minesweeper behavior, including automatic revealing of connected empty squares and accurate bomb counts for each tile. Built to showcase **Vue's reactivity** and component structure, it delivers a **smooth and dynamic gameplay experience**.",
    features:
      "**Customizable Grid & Difficulty**, **Recursive Flood-Fill Logic**, **Classic Minesweeper Mechanics**, **Vue.js Reactivity**, **Responsive UI**, **Accurate Bomb Counting**, **Smooth Gameplay**",
    description:
      "This is a custom-built Minesweeper game developed using Vue.js.\n\nThe game features customizable grid size and difficulty levels, allowing users to adjust the number of rows, columns, and bombs to their preference.\n\nThe most challenging part of the implementation was replicating the classic Minesweeper behavior of automatically revealing connected empty squares when one is clicked.\n\nThis required building a recursive (or queue-based) logic to flood-fill all adjacent blank cells and accurately calculate and display the number of neighboring bombs for each tile.\n\nThe game showcases Vue's reactivity and component structure, providing a smooth and dynamic gameplay experience.",
    stack: [],
    images: ["MineSweeperMockup.png"],
    videos: [],
    link: "https://main.d2idek4o563rm4.amplifyapp.com/",
    thumb: "",
  },
};

export const workExp = {
  KnowerTech: {
    company: "KnowerTech",
    title: "Intermediate Frontend Developer",
    date: "2022 - 2025",
    location: "Calgary, AB",
    description:
      "At KnowerTech, I worked as a Frontend Developer on AdRetriever, a web application designed to generate ads and custom templates at scale, based on users' websites, services, and products.\n\nI collaborated with a team of developers to build responsive, accessible interfaces and focused on delivering a seamless user experience.\n\nMy responsibilities included designing and implementing new features, optimizing UI components, and continuously improving the application’s usability.",
    projects: ["AdRetriever"],
  },
  "Catch Digital": {
    company: "Catch Digital",
    title: "Web Developer",
    date: "2021 - 2022",
    location: "Calgary, AB",
    description:
      "At Catch Digital, I was responsible for developing client websites using Webflow, a no-code platform that enables easy content management while allowing for highly customizable and visually distinct designs.\n\nI collaborated closely with designers and project managers to ensure each website aligned with client goals and was delivered on schedule.\n\nIn addition to new builds, I provided ongoing support and maintenance for existing sites, ensuring they remained up-to-date and fully functional.",
    projects: ["Twenty Eighty"],
  },
  FreeLance: {
    company: "FreeLance",
    title: "Web Developer",
    date: "2020 - Present",
    location: "Remote",
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
