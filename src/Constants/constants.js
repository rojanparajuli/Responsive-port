

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faX,
  faBars,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import {
  faReact,
  faGithub,
  faLinkedin,
  faFlutter,
} from '@fortawesome/free-brands-svg-icons';

import {
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  awsIcon,
  javaIcon,
  gitIcon,
  githubIcon,
  psqlIcon,
  eslintIcon,
  pyIcon,
  viteIcon,
  nodeIcon,
  raspIcon,
  neoIcon,
  figmaIcon,
  pawsitivePrototype,
  memoryGame,
  avatar,
} from '../assets';

library.add(faX, faBars, faWindowRestore, faBagShopping, faDiceD6);

const media = {
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  awsIcon,
  javaIcon,
  gitIcon,
  githubIcon,
  psqlIcon,
  eslintIcon,
  pyIcon,
  viteIcon,
  nodeIcon,
  raspIcon,
  neoIcon,
  figmaIcon,
  avatar,
};

const icons = {
  faBars,
  faX,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faReact,
  faGithub,
  faLinkedin,
  faEnvelope,
};

const introduction = {
  text: [
    "Hello there, I'm so happy you are here! 👋",
    "My name is Rojan Parajuli, and I am a Flutter developer from Nepal. I'm currently pursuing my studies at Tribhuvan University. I have a strong passion for Android development and networking technologies.",
    "Beyond my technical interests, I enjoy exploring new innovations, collaborating with like-minded individuals, and honing my skills to create impactful applications.",
    "Thank you for taking the time to visit my portfolio. Your interest means a lot to me!",
    "Feel free to download my resume here."
  ],
};


export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'skills',
    title: 'Skills',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const projects = [
  {
    name: "Pokémon",
    description: '  This Flutter app utilizes the **Flutter BLoC** state management pattern and integrates with a **REST API** to provide an engaging Pokémon search experience. Users can search for Pokémon by name or ID and view detailed information such as stats, abilities, and images. The app is designed with a clean, responsive UI, ensuring smooth performance and real-time updates powered by BLoC. Perfect for Pokémon enthusiasts looking for a sleek and functional way to explore their favorite creatures!',
    image: "https://m.media-amazon.com/images/M/MV5BMzE0ZDU1MzQtNTNlYS00YjNlLWE2ODktZmFmNDYzMTBlZTBmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    source_code_link: 'https://github.com/rojanparajuli/Pok-mon',
    demo_link: 'https://github.com/rojanparajuli/Pok-mon',
  },
  {
    name: 'News App',
    description: "This Flutter app uses Flutter BLoC for efficient state management and integrates with the Hacker News API to provide users with the latest tech-related news. The app allows users to browse and view the most popular and recent articles from Hacker News, including story titles, links, and user comments. With a clean, intuitive interface, the app ensures smooth navigation and real-time updates. It's perfect for tech enthusiasts who want quick access to the latest stories from the Hacker News community.",
    image: "https://github.com/rojanparajuli/News-App/blob/master/assets/unnamed.jpg?raw=true",
    source_code_link: 'https://github.com/rojanparajuli/News-App',
    demo_link: 'https://github.com/rojanparajuli/News-App',
  },
  {
    name: 'Horoscope',
    description: "This Flutter app leverages Flutter BLoC for efficient state management and integrates with a REST API to provide daily, weekly, and monthly horoscopes. Users can easily select their zodiac sign to receive personalized astrology readings, including predictions related to love, career, and health. The app features a sleek and user-friendly interface with smooth navigation, ensuring an engaging experience. Perfect for astrology enthusiasts seeking reliable, real-time horoscope updates in one convenient app.",
    image: "https://github.com/rojanparajuli/Horoscope/blob/master/assets/applogo.png?raw=true",
    source_code_link: 'https://github.com/rojanparajuli/Horoscope',
    demo_link: 'https://github.com/rojanparajuli/Horoscope',
  },
  {
    name: 'Weather App',
    description: "This Flutter app uses Flutter BLoC for state management and integrates with a REST API to provide real-time weather information. Users can search for weather updates by location, view current conditions (temperature, humidity, wind speed), and access forecasts for the upcoming days. The app offers a sleek and responsive UI, displaying weather details with interactive elements like icons, backgrounds, and charts. Perfect for users who need up-to-date and accurate weather information with a smooth, intuitive experience.",
    image: "https://github.com/rojanparajuli/Weather-Application/blob/master/android/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png?raw=true",
    source_code_link: 'https://github.com/rojanparajuli/Weather-Application',
    demo_link: 'https://github.com/rojanparajuli/Weather-Application',
  },
  {
    name: 'Finance',
    description: "This Flutter app utilizes Flutter BLoC for state management and integrates with Firebase for authentication, featuring Google OAuth for secure sign-in. The app helps users manage their personal finances by allowing them to track income, expenses, set budgets, and view financial reports. With Firebase, user data is securely stored and synced in real-time. The sleek, intuitive interface enables easy tracking of spending habits and financial goals, providing valuable insights to help users maintain control over their finances. Ideal for those looking for a simple, effective way to manage their money while enjoying seamless authentication and secure data handling.",
    image: "https://github.com/rojanparajuli/Finance_app/blob/master/assets/Firebase.png?raw=true",
    source_code_link: 'https://github.com/rojanparajuli/Finance_app',
    demo_link: 'https://github.com/rojanparajuli/Finance_app',
  },
  {
    name: 'Memory Game',
    description: "This is a simple Memory Game built using vanilla JavaScript, where players match pairs of cards by flipping them over. The game challenges the player's memory and attention by requiring them to remember the positions of cards and match identical pairs. It includes a timer to track how quickly the player can complete the game and keeps a count of moves to encourage efficient gameplay. The game has a responsive design, making it enjoyable on both desktop and mobile devices. It offers an engaging way to test and improve memory skills while providing a fun, interactive experience.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/900px-JavaScript-logo.png",
    source_code_link: 'https://github.com/rojanparajuli/memory_game',
    demo_link: 'https://github.com/rojanparajuli/memory_game',
  },
  {
    name: 'Youtube Video on Git and Github',
    description: "This YouTube video, created by Rojan Parajuly, provides a comprehensive guide to Git and GitHub, making it perfect for beginners looking to understand version control and collaboration in software development. The video covers essential topics such as setting up Git, basic Git commands, creating repositories, and pushing changes to GitHub. It also demonstrates how to effectively collaborate with others using GitHub's features like branches, pull requests, and version history. With clear explanations and practical examples, this tutorial helps viewers master Git and GitHub for seamless development workflows. Ideal for anyone looking to start using version control in their projects.",
    image: "https://yt3.ggpht.com/eA5M8xS6XMcWFZN42p2byKfTPAkoP5EPwJsRsNVWFUPBECgL-uWXSZlN7TJLcBLole9bizsN=s600-c-k-c0x00ffffff-no-rj-rp-mo",
    source_code_link: 'https://www.youtube.com/watch?v=Cmz6D57OPGc',
    demo_link: 'https://www.youtube.com/watch?v=Cmz6D57OPGc',
  },
  {
    name: 'How to take .com.np domain name',
    description: "In this detailed YouTube video, Rojan Parajuly walks viewers through the process of registering a .com.np domain name, which is specifically intended for businesses and organizations in Nepal. The video covers the steps involved in checking domain availability, selecting a reliable domain registrar, and completing the registration process. Rojan also explains the requirements for owning a .com.np domain, such as providing proof of a business or organization based in Nepal. With clear instructions and practical tips, this video is perfect for anyone looking to secure a local domain for their website in Nepal.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/An_annotated_example_of_a_domain_name.png/330px-An_annotated_example_of_a_domain_name.png",
    source_code_link: 'https://www.youtube.com/watch?v=_HcH-Fabcjg',
    demo_link: 'https://www.youtube.com/watch?v=_HcH-Fabcjg',
  },
  {
    name: 'What is Dns?',
    description: "In this informative YouTube video, Rojan Parajuly explains the concept of DNS (Domain Name System), breaking down how it works and why it's essential for the functioning of the internet. The video covers key topics such as how DNS translates human-readable domain names (like www.example.com) into IP addresses, the role of DNS servers, and the process of resolving a domain name. With clear, easy-to-understand explanations and visuals, this tutorial is ideal for beginners looking to grasp the fundamentals of DNS and its crucial role in web browsing and network communication. Perfect for those interested in learning about internet infrastructure and networking.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Domain_name_space.svg/600px-Domain_name_space.svg.png",
    source_code_link: 'https://www.youtube.com/watch?v=EaNTnhr0ae4',
    demo_link: 'https://www.youtube.com/watch?v=EaNTnhr0ae4',
  }
];

const memoji = {
  image: [avatar],
};

const skills = [
  {
    id: 'html',
    title: 'HTML',
    icon: htmlIcon,
    description:
      'I have a strong command of HTML for organizing web pages and generating meaningful content that can be accessed by all users.',
  },
  {
    id: 'css',
    title: 'CSS',
    icon: cssIcon,
    description:
      'I possess expertise in utilizing CSS to design web pages and craft visually captivating layouts that enhance the overall user experience.',
  },
  {
    id: 'javascript',
    title: 'JavaScript',
    icon: jsIcon,
    description:
      'I have substantial experience in employing JavaScript to introduce interactivity and functionality into web pages, resulting in dynamic user interfaces.',
  },
  {
    id: 'react',
    title: 'React',
    icon: reactIcon,
    description:
      'I am well-versed in React, proficient in creating reusable components and managing application state using hooks and context.',
  },
  // {
  //   id: 'java',
  //   title: 'Java',
  //   icon: javaIcon,
  //   description:
  //     'I have extensive experience utilizing Java for object-oriented programming (OOP) and implementing data structures.',
  // },
  // {
  //   id: 'aws',
  //   title: 'Amazon Web Services',
  //   icon: awsIcon,
  //   description:
  //     'I am certified in AWS and proficient in working with EC2 and RDS instances, leveraging the power of cloud computing for scalable and reliable infrastructure.',
  // },
  {
    id: 'figma',
    title: 'Figma',
    icon: figmaIcon,
    description:
      'In my Figma skills, I unleash creativity, designing captivating user interfaces and collaborating seamlessly with designers and developers.',
  },
  {
    id: 'git',
    title: 'Git',
    icon: gitIcon,
    description:
      'I am proficient in Git, managing code changes, collaborating with others, and resolving conflicts effectively.',
  },
  {
    id: 'github',
    title: 'GitHub',
    icon: githubIcon,
    description:
      'I am skilled in using GitHub for seamless project collaboration, code sharing, and issue tracking. Through GitHub, I efficiently create and manage repositories and effectively present my work to potential employers.',
  },
  {
    id: 'psql',
    title: 'Postgresql',
    icon: psqlIcon,
    description:
      'I have a strong command of PostgreSQL, encompassing a wide range of skills such as database normalization, triggers, front-end connectivity, and data analysis using software like Power BI.',
  },
  {
    id: 'vite',
    title: 'Vite',
    icon: viteIcon,
    description:
      'I have gained considerable experience working with Vite for approximately six months, leveraging its capabilities to build React websites and seamlessly deploy them on platforms like Netlify.',
  },
  {
    id: 'py',
    title: 'Python',
    icon: pyIcon,
    description:
      'With 3 years of Python experience, I am adept at coding functions and creating graphic interfaces using Tkinter.',
  },
  {
    id: 'scss',
    title: 'Scss',
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/182px-Sass_Logo_Color.svg.png",
    description:
      "I utilize SCSS linters to identify and resolve code issues, as well as standardize the structure of my stylesheets. With SCSS linters, I ensure code quality, consistency, and maintainability throughout my development process.",
  },
  {
    id: 'mySQL',
    title: 'MySQL',
    icon: "https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/MySQL_logo.svg/150px-MySQL_logo.svg.png",
    description:
      "I utilize MySQL's query optimizer and SQL linting tools to identify and resolve issues in database queries, as well as standardize the structure of my database schema. With these tools, I ensure the performance, quality, and consistency of my MySQL database throughout the development process.",
  },
  {
    id: 'php',
    title: 'PHP',
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/1067px-PHP-logo.svg.png",
    description:
      "I utilize PHP CodeSniffer to identify and resolve code issues, as well as standardize the structure of my projects. With PHP CodeSniffer, I ensure code quality and consistency throughout my development process.",
  },
  {
    id: 'kotlin',
    title: 'Kotlin',
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Kotlin_Icon.png/900px-Kotlin_Icon.png",
    description:
      "I utilize Kotlin's Lint tools to identify and resolve code issues, as well as standardize the structure of my projects. With Kotlin Lint, I ensure code quality and consistency throughout my development process.",
  },
  {
    id: 'flutter',
    title: 'Flutter',
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Google-flutter-logo.svg/768px-Google-flutter-logo.svg.png",
    description:
     "I utilize Dart Analysis in Flutter to identify and resolve code issues, as well as standardize the structure of my projects. With Dart Analysis, I ensure code quality and consistency throughout my development process.",
  },
];

const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="black" cx="14" cy="14" r="7"></circle>
  </svg>`;

export {
  media,
  introduction,
  projects,
  memoji,
  skills,
  markerSvg,
  icons,
};
