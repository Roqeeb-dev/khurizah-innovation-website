import type { Program } from "../ProgramData";
import webDevImage from "../assets/web-development-image.jpg";
import dataAnalyticsImage from "../assets/data-analytics-image.jpg";
import {
  Code,
  BarChart2,
  Code2,
  Database,
  Globe,
  Smartphone,
  Users,
  TrendingUp,
} from "lucide-react";

export const techData: Program[] = [
  {
    id: "web-development",
    cover: webDevImage,
    title: "Web Development",
    description:
      "Learn to build responsive websites and web apps using HTML, CSS, and JavaScript. Master frontend and backend essentials for modern web development.",
    icon: Code,
    duration: "12 Weeks",
    skillLevel: "Beginner to Intermediate",
    mode: "Online",
    targetAudience: [
      "Aspiring web developers with no prior experience",
      "Career switchers looking to enter tech",
      "Entrepreneurs wanting to build their own platforms",
      "Students seeking practical programming skills",
    ],
    prerequisites: [
      "Basic computer literacy",
      "Access to a laptop/computer",
      "Willingness to learn and practice daily",
      "No coding experience required",
    ],
    learningOutcomes: [
      {
        icon: Code2,
        title: "Frontend Development",
        description:
          "Master HTML, CSS, JavaScript, and React to build beautiful, responsive user interfaces",
      },
      {
        icon: Database,
        title: "Backend Development",
        description:
          "Learn Node.js, Express, and databases to create robust server-side applications",
      },
      {
        icon: Globe,
        title: "Full-Stack Integration",
        description:
          "Connect frontend and backend to build complete, production-ready web applications",
      },
      {
        icon: Smartphone,
        title: "Responsive Design",
        description:
          "Create websites that work seamlessly across all devices and screen sizes",
      },
      {
        icon: Users,
        title: "Version Control & Collaboration",
        description:
          "Use Git and GitHub for professional code management and team collaboration",
      },
      {
        icon: TrendingUp,
        title: "Deployment & Optimization",
        description:
          "Launch your applications live and optimize for performance and SEO",
      },
    ],
    programStructure: [
      {
        weeks: "Week 1-3",
        title: "Frontend Fundamentals",
        topics: [
          "HTML5 structure and semantic markup",
          "CSS3 styling, Flexbox, and Grid layouts",
          "JavaScript basics and DOM manipulation",
          "Responsive design principles",
          "Project: Build a professional portfolio website",
        ],
      },
      {
        weeks: "Week 4-6",
        title: "Modern JavaScript & React",
        topics: [
          "ES6+ features and modern JavaScript",
          "React components and state management",
          "React Hooks and lifecycle methods",
          "API integration and data fetching",
          "Project: Interactive web application with React",
        ],
      },
      {
        weeks: "Week 7-9",
        title: "Backend Development",
        topics: [
          "Node.js and Express server setup",
          "RESTful API design and implementation",
          "Database design with MongoDB/PostgreSQL",
          "Authentication and authorization",
          "Project: Build a complete backend API",
        ],
      },
      {
        weeks: "Week 10-12",
        title: "Full-Stack Integration & Deployment",
        topics: [
          "Connect frontend and backend applications",
          "State management with Redux/Context API",
          "Deployment on cloud platforms (Vercel, Heroku)",
          "Testing and debugging best practices",
          "Final Project: Full-stack web application",
        ],
      },
    ],
    projects: [
      {
        title: "Portfolio Website",
        skillFocus: "HTML, CSS, JavaScript, Responsive Design",
        outcome:
          "A professional portfolio showcasing your work and skills, deployed live on the web",
      },
      {
        title: "E-Commerce Platform",
        skillFocus: "React, State Management, API Integration",
        outcome:
          "A fully functional online store with product listings, cart, and checkout flow",
      },
      {
        title: "Full-Stack Social App",
        skillFocus: "MERN Stack, Authentication, Real-time Features",
        outcome:
          "A complete social media application with user authentication and real-time updates",
      },
    ],
    certificateDescription:
      "Upon completion, you'll receive a recognized Certificate of Completion from Khurizah Innovation, validating your expertise in modern web development. This certificate demonstrates your ability to build production-ready applications and is valued by employers worldwide.",
    careerApplications: [
      "Apply for Frontend, Backend, or Full-Stack Developer positions",
      "Freelance as a web developer and build client projects",
      "Start your own web development agency or SaaS business",
      "Contribute to open-source projects and collaborate globally",
      "Transition into tech roles like Product Manager or Tech Lead",
    ],
  },

  {
    id: "data-analytics",
    cover: dataAnalyticsImage,
    title: "Data Analytics",
    description:
      "Learn how to collect, analyze, and visualize data to support decision-making using industry-standard tools.",
    icon: BarChart2,
    duration: "10 Weeks",
    skillLevel: "Beginner to Intermediate",
    mode: "Online",
    targetAudience: [
      "Business professionals",
      "Students and career switchers",
      "Entrepreneurs seeking data-driven insights",
    ],
    prerequisites: ["Basic computer skills", "Comfort with numbers is a plus"],
    learningOutcomes: [
      {
        icon: Database,
        title: "Data Handling",
        description: "Work with structured data using Excel and SQL",
      },
      {
        icon: BarChart2,
        title: "Data Visualization",
        description: "Create dashboards and visual insights",
      },
    ],
    programStructure: [
      {
        weeks: "Week 1-4",
        title: "Foundations of Data",
        topics: [
          "Data types and sources",
          "Excel fundamentals",
          "Data cleaning techniques",
        ],
      },
      {
        weeks: "Week 5-7",
        title: "SQL & Analysis",
        topics: [
          "SQL queries",
          "Joins and aggregations",
          "Business data analysis",
        ],
      },
      {
        weeks: "Week 8-10",
        title: "Visualization & Reporting",
        topics: [
          "Charts and dashboards",
          "Storytelling with data",
          "Final data analysis project",
        ],
      },
    ],
    projects: [
      {
        title: "Business Sales Dashboard",
        skillFocus: "Excel, SQL, Visualization",
        outcome: "Interactive dashboard for decision-making",
      },
    ],
    certificateDescription:
      "Certificate validating your data analysis and visualization skills.",
    careerApplications: [
      "Junior Data Analyst",
      "Business Intelligence Assistant",
      "Operations and marketing analytics roles",
    ],
  },
];
