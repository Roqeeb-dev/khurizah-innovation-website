import type { ElementType } from "react";

interface Program {
  id: string;
  cover: string;
  icon: ElementType;
  title: string;
  description: string;
  link: string;
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
    link: "",
    icon: Code,
  },
  {
    id: "catering",
    cover: cateringImage,
    title: "Catering",
    description:
      "Acquire professional culinary skills and event catering expertise. From menu planning to food presentation, get hands-on experience for a successful catering career.",
    link: "",
    icon: ChefHat,
  },
  {
    id: "data-analytics",
    cover: dataAnalyticsImage,
    title: "Data Analytics",
    description:
      "Analyze and interpret data to drive informed decisions. Learn tools like Excel, SQL, and data visualization techniques for real-world business insights.",
    link: "",
    icon: BarChart2,
  },
  {
    id: "fashion-design",
    cover: fashionImage,
    title: "Fashion Designing",
    description:
      "Explore fashion design principles, from sketching to garment creation. Develop your style and learn industry techniques to create stunning apparel.",
    link: "",
    icon: Scissors,
  },
  {
    id: "podcasting",
    cover: podcastingImage,
    title: "Podcasting",
    description:
      "Master the art of storytelling through audio. Learn recording, editing, and publishing to build an engaging podcast audience.",
    link: "",
    icon: Mic,
  },
  {
    id: "ghostwriting",
    cover: ghostWritingImage,
    title: "Ghostwriting",
    description:
      "Develop writing skills to craft compelling content for clients. From blogs to books, learn to write professionally under others’ bylines.",
    link: "",
    icon: PenTool,
  },
  {
    id: "real-estate",
    cover: realEstateImage,
    title: "Real Estate",
    description:
      "Learn the fundamentals of buying, selling, and managing property. Gain practical knowledge to thrive in the competitive real estate market.",
    link: "",
    icon: Home,
  },
  {
    id: "auto-khurizah",
    cover: autoKhurizahImage,
    title: "Auto-Khurizah",
    description:
      "Hands-on training in automotive repair and maintenance. Learn diagnostics, servicing, and troubleshooting to become a skilled auto technician.",
    link: "",
    icon: Truck,
  },
  {
    id: "graphic-design",
    cover: graphicImage,
    title: "Graphics Design",
    description:
      "Learn to create stunning visuals for digital and print media. Master tools like Photoshop, Illustrator, and Figma to bring your creative ideas to life.",
    link: "",
    icon: Palette,
  },
];
