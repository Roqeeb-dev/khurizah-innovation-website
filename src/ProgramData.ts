import type { ElementType } from "react";

export interface LearningOutcome {
  icon: React.ElementType;
  title: string;
  description: string;
}

export interface WeekContent {
  weeks: string;
  title: string;
  topics: string[];
}

export interface Project {
  title: string;
  skillFocus: string;
  outcome: string;
}

export interface Program {
  id: string;
  cover: string;
  icon: ElementType;
  title: string;
  mode?: string;
  description: string;
  duration?: string;
  skillLevel?: string;
  prerequisites?: string[];
  learningOutcomes?: LearningOutcome[];
  targetAudience?: string[];
  programStructure?: WeekContent[];
  projects?: Project[];
  certificateDescription?: string;
  careerApplications?: string[];
}

import webDevImage from "./assets/web-development-image.jpg";
import fashionImage from "./assets/fashion-designing-image.jpg";
import autoKhurizahImage from "./assets/auto-khurizah-image.jpg";
import podcastingImage from "./assets/podcasting-image.jpg";
import cateringImage from "./assets/catering-image.jpg";
import ghostWritingImage from "./assets/ghost-writing-image.jpg";
import dataAnalyticsImage from "./assets/data-analytics-image.jpg";
import realEstateImage from "./assets/real-estate-image.jpg";
import graphicImage from "./assets/graphic-design-image.jpg";
import {
  Code,
  Code2,
  TrendingUp,
  Database,
  Globe,
  Smartphone,
  Users,
  ChefHat,
  BarChart2,
  Scissors,
  Mic,
  PenTool,
  Palette,
  Home,
  Truck,
} from "lucide-react";

export const programs: Program[] = [
  {
    id: "web-development",
    cover: webDevImage,
    title: "Web Development",
    description:
      "Learn to build responsive websites and web apps using HTML, CSS, and JavaScript. Master frontend and backend essentials for modern web development.",
    icon: Code,
    duration: "12 Weeks",
    skillLevel: "Beginner to Intermediate",
    mode: "Online / Hybrid",
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
    id: "catering",
    cover: cateringImage,
    title: "Catering",
    description:
      "Acquire professional culinary skills and event catering expertise. From menu planning to food presentation, get hands-on experience for a successful catering career.",
    icon: ChefHat,
  },
  {
    id: "data-analytics",
    cover: dataAnalyticsImage,
    title: "Data Analytics",
    description:
      "Analyze and interpret data to drive informed decisions. Learn tools like Excel, SQL, and data visualization techniques for real-world business insights.",
    icon: BarChart2,
  },
  {
    id: "fashion-design",
    cover: fashionImage,
    title: "Fashion Designing",
    description:
      "Explore fashion design principles, from sketching to garment creation. Develop your style and learn industry techniques to create stunning apparel.",
    icon: Scissors,
  },
  {
    id: "podcasting",
    cover: podcastingImage,
    title: "Podcasting",
    description:
      "Master the art of storytelling through audio. Learn recording, editing, and publishing to build an engaging podcast audience.",
    icon: Mic,
  },
  {
    id: "ghostwriting",
    cover: ghostWritingImage,
    title: "Ghostwriting",
    description:
      "Develop writing skills to craft compelling content for clients. From blogs to books, learn to write professionally under others’ bylines.",
    icon: PenTool,
  },
  {
    id: "real-estate",
    cover: realEstateImage,
    title: "Real Estate",
    description:
      "Learn the fundamentals of buying, selling, and managing property. Gain practical knowledge to thrive in the competitive real estate market.",
    icon: Home,
  },
  {
    id: "auto-khurizah",
    cover: autoKhurizahImage,
    title: "Auto-Khurizah",
    description:
      "Hands-on training in automotive repair and maintenance. Learn diagnostics, servicing, and troubleshooting to become a skilled auto technician.",
    icon: Truck,
  },
  {
    id: "graphic-design",
    cover: graphicImage,
    title: "Graphics Design",
    description:
      "Learn to create stunning visuals for digital and print media. Master tools like Photoshop, Illustrator, and Figma to bring your creative ideas to life.",
    icon: Palette,
  },
];
