import { title } from "process";
import { ref, computed } from "vue";

export const projects = {
  AdRetriever: {
    title: "AdRetriever",
    company: "KnowerTech",
    category: "workExp",
    description:
      "AdRetriever is a web-based platform built to help businesses streamline the creation, management, and analysis of digital advertising campaigns. Using AI and Machine Learning, it ingests company-specific data—such as product listings and brand guidelines—to automatically generate ad creatives tailored to target demographics.  I worked on developing and maintaining key features including: Dynamic ad generation using brand-aligned, editable templates. Campaign performance tracking with real-time analytics and insights. Integration with external APIs and internal ML services to personalize ad content based on user behavior and product data. The app was built with a focus on scalability, ease of use, and automation—reducing the time and expertise required to launch effective ad campaigns.",
    images: ["AdRetrieverMockup.png"],
    link: "https://adretriever.com",
  },
  "Twenty Eighty": {
    title: "Twenty Eighty",
    company: "Catch Digital",
    category: "workExp",
    description:
      "Twenty Eighty is a modern accounting firm with a forward-thinking approach to small business finance. During my time at Catch Digital, I developed their website using Webflow, focusing on delivering a highly interactive and animated experience that reflects their dynamic brand. The site features smooth transitions, engaging scroll effects, and intuitive navigation to clearly communicate Twenty Eighty’s value-driven, future-focused services. I worked closely with the design team to ensure the final product was both visually striking and easy for the client to update and maintain.",
    images: ["TwentyEightyMockup.png"],
    link: "https://www.twentyeighty.co/",
  },
  // {
  //   title: "Miramonte Companies",
  //   company: "Catch",
  //   category: "workExp",
  //   description:
  //     "Miramonte Companies is a real estate developer specializing in elegant home communities, upscale rental residences, and commercial spaces that balance innovation with luxury. While working at Catch Digital, I helped design and build their new website using Webflow. The project required a visually polished, content-rich site that showcased Miramonte’s high-end properties while maintaining ease of use for content updates.",
  //   images: ["MiramonteMockup.png", "spotifyMockup.png"],
  //   link: "https://example.com/project1",
  // },
  WasteWaterPro: {
    title: "WasteWaterPro",
    company: "FreeLance",
    category: "workExp",
    description:
      "WasteWaterPro is an industrial and municipal wastewater treatment company specializing in tailored, modern solutions, including container-based mobile dewatering systems. As a freelance developer, I designed and built their website to effectively communicate their expertise and plug-and-play product offerings. The site highlights key services, features technical product overviews, and supports lead generation through clear CTAs and contact forms. Built with a focus on clarity and professionalism, the website delivers a clean, responsive experience for both desktop and mobile users.",
    images: ["WasteWaterMockup.png"],
    link: "https://www.wastewaterpro.ca/",
  },
  "Boom Broom": {
    title: "Boom Broom",
    category: "devExp",
    description:
      "This is a custom-built Minesweeper game developed using Vue.js. The game features customizable grid size and difficulty levels, allowing users to adjust the number of rows, columns, and bombs to their preference. The most challenging part of the implementation was replicating the classic Minesweeper behavior of automatically revealing connected empty squares when one is clicked. This required building a recursive (or queue-based) logic to flood-fill all adjacent blank cells and accurately calculate and display the number of neighboring bombs for each tile. The game showcases Vue's reactivity and component structure, providing a smooth and dynamic gameplay experience.",
    images: ["MineSweeperMockup.png"],
    link: "https://main.d2idek4o563rm4.amplifyapp.com/",
  },
  // "Spotify Clone": {
  //   title: "Spotify Clone",
  //   category: "devExp",
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis rem et labore voluptates quas soluta nemo magni culpa nobis id. Facere atque quas alias totam, neque magni obcaecati officia libero.",
  //   images: ["spotifyMockup.png"],
  //   link: "https://example.com/project3",
  // },
};

export const workExp = {
  KnowerTech: {
    company: "KnowerTech",
    title: "Intermediate Frontend Developer",
    date: "2022 - 2025",
    description:
      "At KnowerTech, I worked as a Frontend Developer on AdRetriever, a web application designed to generate ads and custom templates at scale, based on users' websites, services, and products. I collaborated with a team of developers to build responsive, accessible interfaces and focused on delivering a seamless user experience. My responsibilities included designing and implementing new features, optimizing UI components, and continuously improving the application’s usability.",
    projects: ["AdRetriever"],
  },
  "Catch Digital": {
    company: "Catch Digital",
    title: "Web Developer",
    date: "2021 - 2022",
    description:
      "At Catch Digital, I was responsible for developing client websites using Webflow, a no-code platform that enables easy content management while allowing for highly customizable and visually distinct designs. I collaborated closely with designers and project managers to ensure each website aligned with client goals and was delivered on schedule. In addition to new builds, I provided ongoing support and maintenance for existing sites, ensuring they remained up-to-date and fully functional.",
    projects: ["Twenty Eighty"],
  },
  FreeLance: {
    company: "FreeLance",
    title: "Web Developer",
    date: "2020 - Present",
    description:
      "As a freelance developer, I worked directly with clients to design and build custom web applications tailored to their business needs. Using modern tools like Vue.js and Django, I created intuitive, responsive interfaces and robust backends that delivered seamless user experiences. I managed projects end-to-end, from gathering requirements and defining scope to deployment and post-launch support, while maintaining clear communication and timely delivery. In addition to new builds, I provided ongoing maintenance, feature enhancements, and performance optimizations to ensure long-term value for clients.",
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
    "I graduated from Fanshawe College with a diploma in Interactive Media Development. The program provided me with a strong foundation in web development, design principles, and user experience. I learned to work with various programming languages and frameworks, including HTML, CSS, JavaScript, React, Node, Python, SQL, etc. The program also emphasized the importance of collaboration and communication in the development process, which has been invaluable in my career.",
};

export const devExp = {
  "Boom Broom": {
    company: "Boom Broom",
    title: "Custom Minesweeper Game",
    description:
      "A customizable Vue-based version of Minesweeper with adjustable grid size and difficulty. Includes logic for revealing connected empty tiles and showing nearby bombs.",
    projects: ["Boom Broom"],
  },
};

export const selectedDev = ref("Boom Broom");
export const currentDev = computed(() => devExp[selectedDev.value]);


