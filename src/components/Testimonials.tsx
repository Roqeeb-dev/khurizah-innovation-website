import Pill from "./Pill";
import { Book, ChevronLeft, ChevronRight } from "lucide-react";
import image from "../assets/fashion-designing-image.jpg";
import { useState } from "react";

interface Testimonial {
  cover: string;
  text: string;
  name: string;
  jobTitle: string;
  program: string;
}

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials: Testimonial[] = [
    {
      cover: image,
      text: "The Web Development program helped me move from writing basic HTML and CSS to building structured, responsive applications. I gained a solid understanding of JavaScript fundamentals and modern frontend workflows, which made collaborating on real projects much easier.",
      name: "Roqeeb Ahmed",
      jobTitle: "Frontend Engineer",
      program: "Web Development",
    },

    {
      cover: image,
      text: "What I appreciated most was the emphasis on real-world practices. I learned how to structure projects, write reusable components, and debug efficiently. The program gave me the confidence to apply for junior developer roles.",
      name: "Ramadan Bello",
      jobTitle: "Junior Software Developer",
      program: "Web Development",
    },
    {
      cover: image,
      text: "The Data Analysis program taught me how to work with real datasets using Excel, SQL, and Python. I learned how to clean data, perform analysis, and present insights using visualizations that actually make sense to stakeholders.",
      name: "Sultan Adeyemi",
      jobTitle: "Data Analyst",
      program: "Data Analysis",
    },
    {
      cover: image,
      text: "Before this program, data felt overwhelming. Now I can confidently analyze trends, build dashboards, and communicate findings clearly. The practical approach made it easy to transition into entry-level data roles.",
      name: "Aisha Lawal",
      jobTitle: "Business Intelligence Analyst",
      program: "Data Analysis",
    },
    {
      cover: image,
      text: "What stood out was the balance between creativity and strategy. I now approach design problems with clarity, delivering visuals that communicate clearly and meet client needs across digital and print platforms.",
      name: "Deborah Okafor",
      jobTitle: "Visual Designer",
      program: "Graphic Design",
    },
    {
      cover: image,
      text: "This program helped me turn my passion for cooking into a business mindset. From menu planning to food costing and customer service, the training prepared me to manage catering jobs efficiently.",
      name: "Funke Adebayo",
      jobTitle: "Catering Entrepreneur",
      program: "Catering",
    },
  ];

  const displayedTestimonial = testimonials[currentIndex];

  function incrementIndex() {
    currentIndex >= testimonials.length - 1
      ? setCurrentIndex(0)
      : setCurrentIndex(currentIndex + 1);
  }

  function decrementIndex() {
    currentIndex === 0
      ? setCurrentIndex(testimonials.length - 1)
      : setCurrentIndex(currentIndex - 1);
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-800 via-blue-900 to-indigo-700">
      <section className="flex flex-col text-white items-center py-7 px-6 text-center">
        {/* Pill / Badge */}
        <Pill message="Testimonials" icon={Book} />

        <h1 className="mt-6 text-5xl font-semibold tracking-tight">
          Success Stories
        </h1>

        <p className="text-lg sm:text-xl mt-4 max-w-3xl leading-relaxed">
          Hear from our successful graduates who have transformed their careers
        </p>
      </section>

      {/* testimonials */}
      <section className="max-w-6xl mx-auto my-10 bg-white/90 backdrop-blur-md p-8 rounded-[48px] shadow-lg border border-gray-100">
        <article className="flex flex-col md:flex-row items-center gap-10">
          {/* left image */}
          <div className="w-full md:max-w-sm overflow-hidden rounded-3xl shadow-md">
            <img
              src={displayedTestimonial.cover}
              alt={`${displayedTestimonial.name} testimonial cover image`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* right text group */}
          <div className="flex-1">
            <p className="text-lg md:text-xl leading-relaxed text-gray-700 italic">
              “{displayedTestimonial.text}”
            </p>

            {/* name + title */}
            <div className="mt-6">
              <p className="text-xl font-semibold text-gray-900">
                {displayedTestimonial.name}
              </p>
              <p className="text-gray-500">
                {displayedTestimonial.jobTitle} · {displayedTestimonial.program}
              </p>
            </div>

            {/* control buttons */}
            <div className="mt-8 flex items-center gap-6">
              <ChevronLeft
                onClick={decrementIndex}
                className="w-11 h-11 p-2 rounded-full bg-gray-100 hover:bg-blue-600 hover:text-white transition cursor-pointer shadow-sm"
              />

              <div className="flex items-center gap-2">
                {testimonials.map((t, index) => (
                  <span
                    key={t.name}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "bg-blue-600 w-6"
                        : "bg-gray-400 w-2"
                    }`}
                  />
                ))}
              </div>

              <ChevronRight
                onClick={incrementIndex}
                className="w-11 h-11 p-2 rounded-full bg-gray-100 hover:bg-blue-600 hover:text-white transition cursor-pointer shadow-sm"
              />
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}
