import Pill from "./Pill";
import Stats from "./Stats";
import { Lightbulb } from "lucide-react";
import ReasonsGrid from "./ReasonsGrid";

export default function WhyUs() {
  return (
    <main id="about" className="bg-gray-100 min-h-[50vh] py-10">
      <section className="flex flex-col items-center py-7 px-6 text-center">
        {/* Pill / Badge */}
        <Pill message="Why Us" icon={Lightbulb} />

        <h1 className="mt-6 text-5xl font-semibold tracking-tight text-gray-900">
          Why Choose Khurizah Innovation?
        </h1>

        <p className="text-gray-600 text-lg sm:text-xl mt-4 max-w-3xl leading-relaxed">
          We're committed to providing the best learning experience with proven
          results
        </p>
      </section>

      <ReasonsGrid />

      <Stats />
    </main>
  );
}
