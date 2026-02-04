import autoKhurizahImage from "../assets/auto-khurizah-image.jpg";
import cateringImage from "../assets/catering-image.jpg";
import realEstateImage from "../assets/real-estate-image.jpg";
import {
  TrendingUp,
  Database,
  ChefHat,
  Home,
  Truck,
  Users,
} from "lucide-react";
import type { Program } from "../ProgramData";

export const vocationalData: Program[] = [
  {
    id: "catering",
    cover: cateringImage,
    title: "Catering",
    description:
      "Acquire professional culinary skills and event catering expertise. Learn food preparation, menu planning, hygiene standards, and business management for a successful catering career.",
    icon: ChefHat,
    duration: "8 Weeks",
    skillLevel: "Beginner to Intermediate",
    mode: "Online",
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
];
