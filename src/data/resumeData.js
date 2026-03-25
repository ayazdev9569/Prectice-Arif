import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

export const resumeData = {
  header: {
    name: "Jenny",
    title: "Product Designer & Frontend Developer",
    contacts: [
      { icon: Mail, value: "jenny@example.com", link: "mailto:jenny@example.com" },
      { icon: Phone, value: "+1 (555) 123-4567", link: "tel:+15551234567" },
      { icon: MapPin, value: "San Francisco, CA", link: "#" },
      { icon: Linkedin, value: "linkedin.com/in/jenny", link: "https://linkedin.com" },
      { icon: Github, value: "github.com/jenny", link: "https://github.com" },
    ]
  },
  summary: "A passionate Product Designer and Frontend Developer with a knack for creating intuitive, visually stunning, and highly functional web applications. Experienced in bridging the gap between design and engineering to deliver seamless user experiences.",
  skills: [
    { name: "UI/UX Design", category: "Design" },
    { name: "Figma", category: "Design" },
    { name: "React / Next.js", category: "Frontend" },
    { name: "Tailwind CSS", category: "Frontend" },
    { name: "JavaScript / TypeScript", category: "Frontend" },
    { name: "Node.js / Express", category: "Backend" },
    { name: "MongoDB / PostgreSQL", category: "Backend" },
    { name: "Git & GitHub", category: "Tools" },
  ],
  experience: [
    {
      id: 1,
      role: "Senior Frontend Developer",
      company: "Tech Innovators Inc.",
      duration: "2022 - Present",
      description: "Leading the frontend development team in building scalable and highly interactive web applications using React and Next.js. Improved performance by 40% through code splitting and optimized rendering.",
    },
    {
      id: 2,
      role: "UI/UX Designer",
      company: "Creative Studio",
      duration: "2019 - 2022",
      description: "Designed user-centric interfaces for diverse clients ranging from startups to enterprise companies. Created wireframes, prototypes, and design systems in Figma.",
    },
    {
      id: 3,
      role: "Web Developer Intern",
      company: "Digital Solutions",
      duration: "2018 - 2019",
      description: "Developed and maintained responsive landing pages and internal dashboards using HTML, CSS, and vanilla JavaScript.",
    }
  ],
  education: [
    {
      id: 1,
      degree: "Bachelor of Science in Computer Science",
      institution: "State University",
      year: "2015 - 2019",
      details: "Graduated with Honors. Specialized in Human-Computer Interaction and Software Engineering."
    }
  ],
  projects: [
    {
      id: 1,
      title: "E-commerce Platform Revamp",
      description: "Redesigned and rebuilt the entire frontend of an e-commerce platform, resulting in a 25% increase in conversion rate.",
      techStack: ["React", "Tailwind CSS", "Redux"],
      link: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A full-stack productivity tool with real-time updates, drag-and-drop mechanics, and custom team workspaces.",
      techStack: ["Next.js", "Node.js", "MongoDB", "Socket.io"],
      link: "#"
    }
  ]
};
