import { Plane, ArrowRight } from "lucide-react";
import image from "../assets/hero-image.jpg";

export default function Hero() {
  return (
    <main className="max-w-[1400px] mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12 min-h-screen p-5 md:px-8">
      {/* Left */}
      <section className="text-white w-full lg:max-w-[50%] text-center lg:text-left">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-blue-400/40 bg-white/90 backdrop-blur text-blue-900 font-medium text-sm rounded-full shadow-sm">
          <Plane className="w-4 h-4" />
          <span>Transform your future today</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[4.25rem] mt-6 leading-[1.1] font-semibold tracking-tight">
          Unlock Your Skills with{" "}
          <span className="bg-gradient-to-r from-blue-200 to-blue-400 bg-clip-text text-transparent">
            Khurizah Innovation
          </span>
        </h1>

        <p className="text-base sm:text-lg text-blue-100/90 my-6 max-w-xl mx-auto lg:mx-0 leading-relaxed">
          Empowering you through practical skills, innovation, and
          industry-ready learning experiences.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
          <button className="bg-white text-blue-900 rounded-2xl flex items-center justify-center gap-2 px-6 py-3 font-medium shadow-md hover:shadow-lg hover:bg-blue-50 transition-all duration-300 w-full sm:w-auto">
            <span>View Programs</span>
            <ArrowRight className="w-5 h-5" />
          </button>
          <button className="bg-blue-600 text-white rounded-2xl px-6 py-3 font-medium shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-300 w-full sm:w-auto">
            Get Started
          </button>
        </div>
      </section>

      {/* Right image */}
      <div className="w-full lg:w-1/2 relative">
        <img
          src={image}
          alt="Laptop on a desk"
          className="w-full h-[280px] sm:h-[380px] lg:h-full object-cover rounded-3xl shadow-2xl"
        />
        <div className="absolute inset-0 rounded-3xl ring-1 ring-white/10" />
      </div>
    </main>
  );
}
