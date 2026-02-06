import Pill from "./Pill";
import { NotebookTabs } from "lucide-react";
import { Link } from "react-router-dom";
import { programs } from "../ProgramData";

export default function Programs() {
  return (
    <main id="programs" className="bg-white py-16">
      {/* Header */}
      <section className="flex flex-col items-center py-12 px-5 sm:px-8 text-center">
        <Pill message="Our Programs" icon={NotebookTabs} />

        <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-gray-900">
          What We Offer
        </h1>

        <p className="text-gray-600 text-base sm:text-lg md:text-xl mt-4 max-w-3xl leading-relaxed">
          Choose from our diverse range of skills training programs, carefully
          designed to meet industry demands and empower you for real-world
          success.
        </p>
      </section>

      {/* Programs grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-5 sm:px-8 lg:px-20">
        {programs.map((obj) => {
          const Icon = obj.icon;

          return (
            <article
              key={obj.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col transition-transform duration-300 hover:scale-[1.02]"
            >
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

              {/* Learn More */}
              <div className="px-4 pb-4 mt-4">
                <Link
                  to={`/program/${obj.id}`}
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
