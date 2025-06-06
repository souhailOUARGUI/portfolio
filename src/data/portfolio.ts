import { PersonalInfo, Project, Education, Experience, Award, Activity, Skill, Club } from '@/types';

export const personalInfo: PersonalInfo = {
  name: "SOUHAIL OUARGUI",
  title: "Software Engineering Student",
  email: "ouargui550@gmail.com",
  phone: "+212 608963887",
  location: "Mohammedia, Morocco",
  bio: "I'm a full-stack(MERN) web and mobile developer with a knack for inventing smart IOT solutions. My expertise in both front-end and back-end development allows me to create seamless digital experiences that work across platforms and devices. Let's connect and explore how I can help take your projects to the next level.",
  profileImage: "/images/profile.jpeg", // You'll place your photo here
  socialLinks: {
    github: "https://github.com/souhailOUARGUI",
    linkedin: "https://www.linkedin.com/in/souhail-ouargui-228b9b212/",
    twitter: "https://twitter.com/SouhailOuargui_",
    website: "https://yourwebsite.com"
  }
};

export const projects: Project[] = [
 
  {
    id: "1",
    title: "Pet SmartHouse",
    description: "Like any PetHouse, Our Pet SmartHouse is designed to provide shelter for dogs, regardless of the weather. However, the new design incorporates several new features such as an automatic dog feeding source, a water bowl with level detection, and an integrated monitoring system inside the kennel, including a camera and a presence detector, all is controller ith a mobile app.",
    technologies: ["Flutter", "Firebase", "IOT"],
    githubUrl: "https://github.com/souhailOUARGUI/PETBOT.git",
    // liveUrl: "",
    imageUrl: "/images/projects/petbot.jpeg",
    featured: true
  },
  {
    id: "2",
    title: "Factory machines monitoring app",
    description: "This is a mobile application developed to provide real-time supervision and monitoring of SITI factory machines, It aims to enhance productivity, improve operational efficiency, and enable proactive maintenance in the factory environment.",
    technologies: ["React-Native", "Mongo-DB",],
    githubUrl: "https://github.com/souhailOUARGUI/SiTi_Factory_Dashboard.git",
    // liveUrl: "",
    imageUrl: "/images/projects/sitiTea.jpeg",
    featured: true
  }, 
   {
    id: "3",
    title: "E-Banking Platform",
    description: "A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product catalog, shopping cart, and payment integration.",
    technologies: ["Spring-boot", "Angular", "MySql", "Swagger-UI","JWT"],
    githubUrl: "https://github.com/souhailOUARGUI/ebanking-backend.git",
    // liveUrl: "https://your-ecommerce-demo.com",
    imageUrl: "/images/projects/ecommerce.jpg",
    featured: false
  },
  {
    id: "4",
    title: "Network Packets Inspection Tool using PCap4j",
    description: "This is a mobile application developed to provide real-time supervision and monitoring of SITI factory machines, It aims to enhance productivity, improve operational efficiency, and enable proactive maintenance in the factory environment.",
    technologies: ["Java", "JavaFX",],
    githubUrl: "https://github.com/souhailOUARGUI/packet_inspection_java_project.git",
    liveUrl: "",
    imageUrl: "/images/projects/weather.jpg",
    featured: false
  }
];

export const education: Education[] = [
  {
    id: "1",
    institution: "ENSET Mohammedia",
    degree: "Engineer's degree",
    field: "Software Engineering",
    startDate: "2024",
    endDate: "2026",
    // gpa: "3.8/4.0",
    // description: "Relevant coursework: Data Structures & Algorithms, Software Design Patterns, Database Systems, Web Development, Mobile App Development, Computer Networks"
  },
  {
    id: "3",
    institution: "Higher School of Technology of Essaouira - Cadi Ayyad University",
    degree: "Bachelor's degree",
    field: "Software Engineering",
    startDate: "2023",
    endDate: "2023",
    // gpa: "3.9/4.0",
    // description: "Graduated with honors. Active in computer science club and mathematics competitions."
  },
   {
    id: "2",
    institution: "Higher School of Technology of Essaouira - Cadi Ayyad University",
    degree: "university diploma in technology",
    field: "Computer science",
    startDate: "2021",
    endDate: "2022",
    // gpa: "3.9/4.0",
    // description: "Graduated with honors. Active in computer science club and mathematics competitions."
  },
  
];

export const experiences: Experience[] = [
  // {
  //   id: "1",
  //   company: "Tech Startup Inc.",
  //   position: "Software Development Intern",
  //   startDate: "June 2024",
  //   endDate: "August 2024",
  //   description: "Developed and maintained web applications using React and Node.js. Collaborated with senior developers on feature implementation and bug fixes. Participated in code reviews and agile development processes.",
  //   technologies: ["React", "Node.js", "PostgreSQL", "Git", "Docker"],
  //   type: "internship"
  // },
  // {
  //   id: "2",
  //   company: "University IT Department",
  //   position: "Student Developer",
  //   startDate: "September 2023",
  //   endDate: "Present",
  //   description: "Part-time position developing internal tools and maintaining university websites. Responsible for frontend development and user experience improvements.",
  //   technologies: ["Vue.js", "PHP", "MySQL", "WordPress"],
  //   type: "part-time"
  // },
  {
    id: "1",
    company: "Centre provinciale de meteorologie Essaouira",
    position: "Backend and Mobile Developer",
    startDate: "July 2024",
    endDate: "August 2024",
    description: "Weather messages management system.",
    technologies: ["React Native", "Node.js", "MongoDB", "Socket.io"],
    type: "internship"
  },
  {
    id: "2",
    company: "Siti Tea",
    position: "Mobile Developer",
    startDate: "April 2023",
    endDate: "Mai 2023",
    description: "Developed a mobile application for the Siti Tea factory to monitor and control the factory machines.",
    technologies: ["React Native.js", "MongoDB"],
    type: "internship"},
  {
    id: "3",
    company: "WebPick",
    position: "Mobile Developer",
    startDate: "April 2022",
    endDate: "Mai 2022",
    description: "Developed a Fully remote controlled DogHouse equiped with automated feeding and monitoring system.",
    technologies: ["Flutter.js", "IOT", "Firebase"],
    type: "internship"
  }
];

export const awards: Award[] = [
  {
    id: "1",
    title: "ENSET Mohamed Best Public Speaker 2024",
    organization: "ENSET Mohammedia",
    date: "April 2024",
    description: "Under the context of GEIW 2024. I won te public speaking competition held at ENSET Mohammedia."
  },
  {
    id: "2",
    title: "Hassan II University Public Speaking Champion 2025",
    organization: "Hassan II University",
    date: "April 2025",
    description: "Under the context of SIEL (Book Festival), I won first place in a duo public speaking competition."
  },
  {
    id: "3",
    title: "ENSET Ping Pong Champion",
    organization: "ENSET Sports Club",
    date: "Mai 2025",
    description: "1st place in Ping Pong competition"
  },
  {
    id: "4",
    title: "EST Essaouira Ping Pong Champion",
    organization: "EST Sports Club",
    date: "November 2022",
    description: "1st place in Ping Pong competition"
  }
];

export const activities: Activity[] = [
  {
    id: "1",
    title: "Enset Challenge (Hackathon + CTF) 2025 Organizer",
    organization: "N7Geeks Club",
    role: "Organizer",
    startDate: "April 2025",
    endDate: "Mai 2025",
    description: "Active contributor to open source projects on GitHub. Focus on web development tools and educational resources."
  },
  {
    id: "2",
    title: "L'gana Hackathon", 
    organization: "FNF Foundation",
    role: "Participant",
    startDate: "November 2024",
    endDate: "November 2024",
    description: ""
  }, 
   {
    id: "3",
    title: "Luth Player(Musician) at Mogador Choir",
    organization: "EST Essaouira",
    role: "Musician",
    startDate: "April 2023",
    endDate: "April 2023",
    description: ""
  }
];

export const clubs: Club[] = [
  {
    id: "1",
    name: "N7 Geeks Club",
    organization: "ENSET Mohammedia",
    role: "President",
    startDate: "September 2024",
    endDate: "Present",
    description: "Organize coding workshops, tech talks, and tech Competitions. Mentor junior students in programming and career development.",
    achievements: [
      "organized a national Hackathon and CTF",
      // "More than 80 teams registered in the hackathon",
      "more than 400 adherents"
    ],
    // technologies: ["React", "Node.js", "Python", "Git"]
  },
  {
    id: "2",
    name: "GDG-Enset Mohammedia",
    organization: "ENSET Mohammedia",
    role: "Core team member",
    startDate: "Sptember 2023",
    endDate: "June 2024",
    description: "Served the team as a Mobile developersz.",
    achievements: [
      "Organized Enset Challenge 2024",
      // "Organized inter-university debate competition",
      // "Trained 50+ students in public speaking"
    ]
  }
  // {
  //   id: "3",
  //   name: "ENSPEC Club",
  //   organization: "ENSET Mohammedia",
  //   role: "Best Public Speaker",
  //   startDate: "April 2024",
  //   endDate: "April 2024",
  //   description: "I won the 1st place of a public speaking competition organized by ENSPEC Club.",
  //   // achievements: [
  //   //   "1st pri",
  //   //   "Led team of 8 developers",
  //   //   "Presented at regional innovation fair"
  //   // ],
  //   // technologies: ["Flutter", "Firebase", "IoT", "Arduino"]
  // },
  //  {
  //   id: "3",
  //   name: "Innovation Club",
  //   organization: "Higher School of Technology Essaouira",
  //   role: "Technical Lead",
  //   startDate: "September 2022",
  //   endDate: "June 2023",
  //   description: "Led technical projects and innovation initiatives, focusing on IoT solutions and mobile app development.",
  //   achievements: [
  //     "Developed Pet SmartHouse project",
  //     "Led team of 8 developers",
  //     "Presented at regional innovation fair"
  //   ],
  //   technologies: ["Flutter", "Firebase", "IoT", "Arduino"]
  // },
  //  {
  //   id: "3",
  //   name: "Innovation Club",
  //   organization: "Higher School of Technology Essaouira",
  //   role: "Technical Lead",
  //   startDate: "September 2022",
  //   endDate: "June 2023",
  //   description: "Led technical projects and innovation initiatives, focusing on IoT solutions and mobile app development.",
  //   achievements: [
  //     "Developed Pet SmartHouse project",
  //     "Led team of 8 developers",
  //     "Presented at regional innovation fair"
  //   ],
  //   technologies: ["Flutter", "Firebase", "IoT", "Arduino"]
  // }
];

export const skills: Skill[] = [
  // Frontend
  { name: "React", category: "frontend", proficiency: "intermediate" },
  { name: "Angular.js", category: "frontend", proficiency: "beginner" },
  { name: "TypeScript", category: "frontend", proficiency: "intermediate" },
  { name: "JavaScript", category: "frontend", proficiency: "advanced" },
  { name: "HTML/CSS", category: "frontend", proficiency: "advanced" },
  { name: "Tailwind CSS", category: "frontend", proficiency: "intermediate" },
  // { name: "Vue.js", category: "frontend", proficiency: "intermediate" },
  
  // Backend
  { name: "Node.js", category: "backend", proficiency: "advanced" },
  { name: "Express.js", category: "backend", proficiency: "intermediate" },
  { name: "Java", category: "backend", proficiency: "advanced" },
  { name: "Spring-boot", category: "backend", proficiency: "intermediate" },
  
  // Database
  { name: "MongoDB", category: "database", proficiency: "intermediate" },
  { name: "Oracle", category: "database", proficiency: "advanced" },
  // { name: "PostgreSQL", category: "database", proficiency: "intermediate" },
  { name: "MySQL", category: "database", proficiency: "intermediate" },
  { name: "Firebase", category: "database", proficiency: "intermediate" },
  
  // Tools
  { name: "Git", category: "tools", proficiency: "advanced" },
  { name: "Docker", category: "tools", proficiency: "beginner" },
  { name: "VS Code", category: "tools", proficiency: "advanced" },
  // { name: "Figma", category: "tools", proficiency: "intermediate" },
  
  // Languages
  { name: "Arabic", category: "languages", proficiency: "advanced" },
  { name: "English", category: "languages", proficiency: "advanced" },
  { name: "French", category: "languages", proficiency: "advanced" },
  { name: "Spanish", category: "languages", proficiency: "beginner" }
];
