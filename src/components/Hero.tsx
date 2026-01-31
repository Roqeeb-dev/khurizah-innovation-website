import { Plane } from "lucide-react";
import image from "../assets/hero-image.jpg";

export default function Hero() {
  return (
    <main className="max-w-[1400px] mx-auto flex items-center justify-between space-x-5 min-h-screen px-6">
      {/* left */}
      <section className="text-white max-w-[50%]">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-blue-400/40 bg-white/90 backdrop-blur text-blue-900 font-medium text-sm rounded-full shadow-sm">
          <Plane className="w-4 h-4" />
          <span>Transform your future today</span>
        </div>

        <h1 className="text-[4.25rem] mt-6 leading-[1.1] font-semibold tracking-tight">
          Unlock Your Skills with{" "}
          <span className="bg-gradient-to-r from-blue-200 to-blue-400 bg-clip-text text-transparent">
            Khurizah Innovation
          </span>
        </h1>

        <p className="text-lg text-blue-100/90 my-6 max-w-xl leading-relaxed">
          Empowering you through practical skills, innovation, and
          industry-ready learning experiences.
        </p>

        <div className="flex items-center space-x-4">
          <button className="bg-white text-blue-900 rounded-2xl px-6 py-3 font-medium shadow-md hover:shadow-lg hover:bg-blue-50 transition-all duration-300">
            View Programs
          </button>
          <button className="bg-blue-600 text-white rounded-2xl px-6 py-3 font-medium shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-300">
            Get Started
          </button>
        </div>
      </section>

      {/* Right image */}
      <div className="w-1/2 relative">
        <img
          src={image}
          alt="Laptop on a desk"
          className="w-full h-full object-cover rounded-3xl shadow-2xl"
        />
        <div className="absolute inset-0 rounded-3xl ring-1 ring-white/10" />
      </div>
    </main>
  );
}
