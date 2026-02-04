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
      "Acquire professional culinary skills and event catering expertise. Learn food preparation, menu planning, hygiene standards, and business management for a successful catering career.",
    icon: ChefHat,
    duration: "8 Weeks",
    skillLevel: "Beginner to Intermediate",
    mode: "Physical / Hybrid",
    targetAudience: [
      "Aspiring caterers and food entrepreneurs",
      "Home cooks looking to go professional",
      "Event planners seeking catering skills",
    ],
    prerequisites: [
      "Basic cooking knowledge is helpful but not required",
      "Passion for food and hospitality",
    ],
    learningOutcomes: [
      {
        icon: ChefHat,
        title: "Professional Cooking Skills",
        description:
          "Learn food preparation techniques used in commercial kitchens",
      },
      {
        icon: Users,
        title: "Event Catering",
        description:
          "Handle catering for weddings, parties, and corporate events",
      },
    ],
    programStructure: [
      {
        weeks: "Week 1-3",
        title: "Culinary Foundations",
        topics: [
          "Kitchen safety and hygiene",
          "Knife skills and food preparation",
          "Local and continental dishes",
        ],
      },
      {
        weeks: "Week 4-6",
        title: "Event Catering",
        topics: [
          "Menu planning and costing",
          "Large-scale cooking techniques",
          "Food presentation and plating",
        ],
      },
      {
        weeks: "Week 7-8",
        title: "Catering Business",
        topics: [
          "Customer service",
          "Pricing and profit management",
          "Marketing your catering services",
        ],
      },
    ],
    projects: [
      {
        title: "Event Catering Simulation",
        skillFocus: "Menu Planning, Cooking, Presentation",
        outcome: "Plan and execute a mock catering event",
      },
    ],
    certificateDescription:
      "Receive a Certificate of Completion recognizing your professional catering and event management skills.",
    careerApplications: [
      "Start a catering business",
      "Work with event planners",
      "Restaurant or hotel kitchen roles",
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

  {
    id: "fashion-design",
    cover: fashionImage,
    title: "Fashion Designing",
    description:
      "Learn fashion design from concept to creation, including sketching, fabric selection, and garment construction.",
    icon: Scissors,
    duration: "10 Weeks",
    skillLevel: "Beginner",
    mode: "Physical",
    targetAudience: ["Aspiring fashion designers", "Creative individuals"],
    prerequisites: ["Creativity and interest in fashion"],
    learningOutcomes: [
      {
        icon: Palette,
        title: "Design & Illustration",
        description: "Create fashion sketches and mood boards",
      },
      {
        icon: Scissors,
        title: "Garment Construction",
        description: "Cut, sew, and finish garments professionally",
      },
    ],
    programStructure: [
      {
        weeks: "Week 1-5",
        title: "Design Basics",
        topics: [
          "Fashion illustration",
          "Textiles and fabrics",
          "Pattern drafting",
        ],
      },
      {
        weeks: "Week 6-10",
        title: "Garment Creation",
        topics: [
          "Sewing techniques",
          "Fittings and alterations",
          "Final fashion piece",
        ],
      },
    ],
    projects: [
      {
        title: "Custom Outfit Design",
        skillFocus: "Sketching, Sewing",
        outcome: "Completed wearable garment",
      },
    ],
    certificateDescription:
      "Certificate recognizing foundational fashion design skills.",
    careerApplications: [
      "Fashion designer assistant",
      "Tailoring business",
      "Clothing brand startup",
    ],
  },

  {
    id: "podcasting",
    cover: podcastingImage,
    title: "Podcasting",
    description:
      "Learn how to plan, record, edit, and publish professional podcasts that engage audiences.",
    icon: Mic,
    duration: "6 Weeks",
    skillLevel: "Beginner",
    mode: "Online",
    targetAudience: [
      "Content creators",
      "Media enthusiasts",
      "Brand storytellers",
    ],
    prerequisites: ["Basic communication skills"],
    learningOutcomes: [
      {
        icon: Mic,
        title: "Audio Production",
        description: "Record and edit high-quality audio content",
      },
    ],
    programStructure: [
      {
        weeks: "Week 1-3",
        title: "Podcast Foundations",
        topics: ["Podcast formats", "Equipment setup", "Recording techniques"],
      },
      {
        weeks: "Week 4-6",
        title: "Publishing & Growth",
        topics: [
          "Editing and sound design",
          "Distribution platforms",
          "Audience growth strategies",
        ],
      },
    ],
    projects: [
      {
        title: "Podcast Episode",
        skillFocus: "Recording, Editing",
        outcome: "Published podcast episode",
      },
    ],
    certificateDescription:
      "Certificate validating your podcast production skills.",
    careerApplications: [
      "Podcast host",
      "Audio content creator",
      "Media production roles",
    ],
  },

  {
    id: "ghostwriting",
    cover: ghostWritingImage,
    title: "Ghostwriting",
    description:
      "Learn how to write compelling content for clients while maintaining their voice and brand. This program covers blogs, articles, books, and professional client communication.",
    icon: PenTool,
    duration: "8 Weeks",
    skillLevel: "Beginner to Intermediate",
    mode: "Online",
    targetAudience: [
      "Aspiring writers",
      "Freelancers and content creators",
      "Professionals looking to monetize writing skills",
    ],
    prerequisites: [
      "Basic writing ability",
      "Strong interest in storytelling and research",
    ],
    learningOutcomes: [
      {
        icon: PenTool,
        title: "Client-Focused Writing",
        description:
          "Adapt writing style to match different client voices and goals",
      },
      {
        icon: Users,
        title: "Professional Collaboration",
        description:
          "Work with clients ethically, confidentially, and efficiently",
      },
    ],
    programStructure: [
      {
        weeks: "Week 1-3",
        title: "Writing Foundations",
        topics: [
          "Understanding ghostwriting",
          "Voice matching techniques",
          "Research and outlining",
        ],
      },
      {
        weeks: "Week 4-6",
        title: "Content Types",
        topics: [
          "Blog and article writing",
          "eBooks and memoirs",
          "Editing and revision techniques",
        ],
      },
      {
        weeks: "Week 7-8",
        title: "Freelancing & Ethics",
        topics: [
          "Client communication",
          "Contracts and NDAs",
          "Building a writing portfolio",
        ],
      },
    ],
    projects: [
      {
        title: "Client-Style Writing Project",
        skillFocus: "Voice Adaptation, Research",
        outcome: "Ghostwritten article matching a client persona",
      },
    ],
    certificateDescription:
      "Certificate recognizing professional ghostwriting and client communication skills.",
    careerApplications: [
      "Freelance ghostwriter",
      "Content strategist",
      "Editorial assistant",
    ],
  },

  {
    id: "real-estate",
    cover: realEstateImage,
    title: "Real Estate",
    description:
      "Gain practical knowledge of property sales, leasing, valuation, and real estate investment strategies.",
    icon: Home,
    duration: "8 Weeks",
    skillLevel: "Beginner",
    mode: "Physical / Hybrid",
    targetAudience: [
      "Aspiring real estate agents",
      "Property investors",
      "Entrepreneurs",
    ],
    prerequisites: [
      "Basic communication skills",
      "Interest in property and sales",
    ],
    learningOutcomes: [
      {
        icon: Home,
        title: "Property Transactions",
        description: "Understand buying, selling, and leasing processes",
      },
      {
        icon: TrendingUp,
        title: "Market Analysis",
        description: "Evaluate property value and market trends",
      },
    ],
    programStructure: [
      {
        weeks: "Week 1-4",
        title: "Real Estate Fundamentals",
        topics: [
          "Types of real estate",
          "Property laws and documentation",
          "Land valuation basics",
        ],
      },
      {
        weeks: "Week 5-8",
        title: "Sales & Investment",
        topics: [
          "Client negotiation",
          "Marketing properties",
          "Real estate investment strategies",
        ],
      },
    ],
    projects: [
      {
        title: "Property Listing Project",
        skillFocus: "Valuation, Marketing",
        outcome: "Create and pitch a property listing",
      },
    ],
    certificateDescription:
      "Certificate validating foundational real estate and property management skills.",
    careerApplications: [
      "Real estate agent",
      "Property consultant",
      "Real estate marketer",
    ],
  },

  {
    id: "auto-khurizah",
    cover: autoKhurizahImage,
    title: "Auto-Khurizah",
    description:
      "Hands-on automotive training covering vehicle diagnostics, maintenance, and repair for modern automobiles.",
    icon: Truck,
    duration: "12 Weeks",
    skillLevel: "Beginner to Intermediate",
    mode: "Physical",
    targetAudience: [
      "Aspiring auto technicians",
      "Workshop assistants",
      "Automobile enthusiasts",
    ],
    prerequisites: [
      "Basic mechanical interest",
      "Willingness to learn hands-on",
    ],
    learningOutcomes: [
      {
        icon: Truck,
        title: "Vehicle Maintenance",
        description: "Perform routine servicing and preventive maintenance",
      },
      {
        icon: Database,
        title: "Diagnostics",
        description: "Identify and fix common mechanical and electrical faults",
      },
    ],
    programStructure: [
      {
        weeks: "Week 1-6",
        title: "Automotive Basics",
        topics: [
          "Engine fundamentals",
          "Brake and suspension systems",
          "Safety practices",
        ],
      },
      {
        weeks: "Week 7-12",
        title: "Advanced Diagnostics",
        topics: [
          "Electrical systems",
          "Fault detection tools",
          "Workshop management basics",
        ],
      },
    ],
    projects: [
      {
        title: "Vehicle Diagnostic Project",
        skillFocus: "Troubleshooting, Repair",
        outcome: "Diagnose and repair a vehicle fault",
      },
    ],
    certificateDescription:
      "Certificate recognizing practical automotive repair and maintenance skills.",
    careerApplications: [
      "Automobile technician",
      "Workshop assistant",
      "Vehicle maintenance entrepreneur",
    ],
  },

  {
    id: "graphic-design",
    cover: graphicImage,
    title: "Graphics Design",
    description:
      "Learn to create visually compelling designs for branding, marketing, and digital products using industry-standard tools.",
    icon: Palette,
    duration: "10 Weeks",
    skillLevel: "Beginner to Intermediate",
    mode: "Online / Hybrid",
    targetAudience: [
      "Aspiring designers",
      "Content creators",
      "Marketing professionals",
    ],
    prerequisites: ["Basic computer skills", "Creative interest"],
    learningOutcomes: [
      {
        icon: Palette,
        title: "Visual Design",
        description: "Apply design principles to create appealing visuals",
      },
      {
        icon: Smartphone,
        title: "Digital Tools",
        description: "Use Photoshop, Illustrator, and Figma effectively",
      },
    ],
    programStructure: [
      {
        weeks: "Week 1-4",
        title: "Design Foundations",
        topics: ["Color theory", "Typography", "Layout and composition"],
      },
      {
        weeks: "Week 5-7",
        title: "Design Tools",
        topics: [
          "Photoshop essentials",
          "Illustrator vector graphics",
          "Figma for UI design",
        ],
      },
      {
        weeks: "Week 8-10",
        title: "Branding & Portfolio",
        topics: [
          "Logo and brand identity",
          "Marketing creatives",
          "Portfolio development",
        ],
      },
    ],
    projects: [
      {
        title: "Brand Identity Project",
        skillFocus: "Branding, Visual Design",
        outcome: "Complete brand kit and design portfolio",
      },
    ],
    certificateDescription:
      "Certificate validating professional graphic design skills.",
    careerApplications: [
      "Graphic designer",
      "UI/UX designer",
      "Brand and marketing designer",
    ],
  },
];
