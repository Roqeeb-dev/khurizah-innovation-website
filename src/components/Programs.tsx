import type { ElementType } from "react";
import Pill from "./Pill";
import {
  NotebookTabs,
  Code,
  ChefHat,
  BarChart2,
  Scissors,
  Mic,
  PenTool,
  Home,
  Truck,
} from "lucide-react";
import webDevImage from "../assets/web-development-image.jpg";
import fashionImage from "../assets/fashion-designing-image.jpg";
import autoKhurizahImage from "../assets/auto-khurizah-image.jpg";
import podcastingImage from "../assets/podcasting-image.jpg";
import cateringImage from "../assets/catering-image.jpg";
import ghostWritingImage from "../assets/ghost-writing-image.jpg";
import dataAnalyticsImage from "../assets/data-analytics-image.jpg";
import realEstateImage from "../assets/real-estate-image.jpg";
import { Link } from "react-router-dom";

interface Program {
  cover: string;
  icon: ElementType;
  title: string;
  description: string;
  link: string;
}

export default function Programs() {
  const programs: Program[] = [
    {
      cover: webDevImage,
      title: "Web Development",
      description:
        "Learn to build responsive websites and web apps using HTML, CSS, and JavaScript. Master frontend and backend essentials for modern web development.",
      link: "",
      icon: Code,
    },
    {
      cover: cateringImage,
      title: "Catering",
      description:
        "Acquire professional culinary skills and event catering expertise. From menu planning to food presentation, get hands-on experience for a successful catering career.",
      link: "",
      icon: ChefHat,
    },
    {
      cover: dataAnalyticsImage,
      title: "Data Analysis",
      description:
        "Analyze and interpret data to drive informed decisions. Learn tools like Excel, SQL, and data visualization techniques for real-world business insights.",
      link: "",
      icon: BarChart2,
    },
    {
      cover: fashionImage,
      title: "Fashion Designing",
      description:
        "Explore fashion design principles, from sketching to garment creation. Develop your style and learn industry techniques to create stunning apparel.",
      link: "",
      icon: Scissors,
    },
    {
      cover: podcastingImage,
      title: "Podcasting",
      description:
        "Master the art of storytelling through audio. Learn recording, editing, and publishing to build an engaging podcast audience.",
      link: "",
      icon: Mic,
    },
    {
      cover: ghostWritingImage,
      title: "Ghostwriting",
      description:
        "Develop writing skills to craft compelling content for clients. From blogs to books, learn to write professionally under others’ bylines.",
      link: "",
      icon: PenTool,
    },
    {
      cover: realEstateImage,
      title: "Real Estate",
      description:
        "Learn the fundamentals of buying, selling, and managing property. Gain practical knowledge to thrive in the competitive real estate market.",
      link: "",
      icon: Home,
    },
    {
      cover: autoKhurizahImage,
      title: "Auto-Khurizah",
      description:
        "Hands-on training in automotive repair and maintenance. Learn diagnostics, servicing, and troubleshooting to become a skilled auto technician.",
      link: "",
      icon: Truck,
    },
  ];

  return (
    <main className="bg-white min-h-[50vh] py-10">
      <section className="flex flex-col items-center py-12 px-6 text-center">
        {/* Pill / Badge */}
        <Pill message="Our Programs" icon={NotebookTabs} color="bg-black/90" />

        <h1 className="mt-6 text-5xl font-semibold tracking-tight text-gray-900">
          What We Offer
        </h1>

        <p className="text-gray-600 text-lg sm:text-xl mt-4 max-w-3xl leading-relaxed">
          Choose from our diverse range of skills training programs, carefully
          designed to meet industry demands and empower you for real-world
          success.
        </p>
      </section>

      {/* Programs grid */}
      <section className="grid grid-cols-3 gap-10 px-20">
        {programs.map((obj) => {
          const Icon = obj.icon;
          return (
            <article className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col transition-transform duration-300 hover:scale-[1.02]">
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={obj.cover}
                  alt={`${obj.title} image`}
                  className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Icon + Title */}
              <div className="flex items-center gap-2 px-4 pt-4">
                <Icon className="w-5 h-5 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-900">
                  {obj.title}
                </h3>
              </div>

              {/* Description */}
              <p className="px-4 mt-2 text-gray-600 text-sm flex-1">
                {obj.description}
              </p>

              {/* Learn More Link */}
              <div className="px-4 pb-4 mt-4">
                <Link
                  to={obj.link}
                  className="inline-flex items-center text-blue-600 font-medium group transition-colors duration-300"
                >
                  Learn more
                  <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
}
