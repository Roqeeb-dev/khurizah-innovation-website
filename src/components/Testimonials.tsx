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
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      name: "Roqeeb",
      jobTitle: "Web Developer",
      program: "Web Development",
    },
    {
      cover: image,
      text: "Testimonial 2",
      name: "Ramadan",
      jobTitle: "Web Developer",
      program: "Web Development",
    },
    {
      cover: image,
      text: "Testimonial 3",
      name: "Sultan",
      jobTitle: "Web Developer",
      program: "Web Development",
    },
    {
      cover: image,
      text: "Testimonial 4",
      name: "Gbotaye",
      jobTitle: "Web Developer",
      program: "Web Development",
    },
  ];

  const displayedTestimonial = testimonials[currentIndex];

  function incrementIndex() {
    if (currentIndex === testimonials.length) {
      setCurrentIndex(testimonials.length % currentIndex);
    }
    setCurrentIndex(currentIndex + 1);
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
      <section className="max-w-6xl mx-auto my-5 bg-white p-8 rounded-[50px]">
        <article className="flex items-center p-6 space-x-7">
          {/* left image */}
          <div className="max-w-sm">
            <img
              src={displayedTestimonial.cover}
              alt={`${displayedTestimonial.name} testimonial cover image`}
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>

          {/* right text group */}
          <div className="flex-1">
            <p className="text-xl text-gray-800 leading-tight">{`"${displayedTestimonial.text}"`}</p>
            {/* name + title */}
            <div className="my-4 flex flex-col">
              <p className="text-xl font-medium">{displayedTestimonial.name}</p>
              <p className="text-gray-800 text-lg">
                {displayedTestimonial.jobTitle} - {displayedTestimonial.program}
              </p>
            </div>

            {/* control buttons */}
            <div className="flex items-center space-x-5">
              <ChevronLeft
                onClick={() => setCurrentIndex(currentIndex - 1)}
                className="bg-gray-200 hover:bg-gray-300 p-2 w-12 h-12 rounded-full"
              />
              <div className="flex items-center space-x-2">
                {testimonials.map((t, index) => (
                  <div
                    key={index}
                    className={`h-2 w-2 rounded-full ${index === currentIndex ? "bg-blue-600" : "bg-gray-400"}`}
                  ></div>
                ))}
              </div>
              <ChevronRight
                onClick={incrementIndex}
                className="bg-gray-200 hover:bg-gray-300 p-2 w-12 h-12 rounded-full"
              />
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}
