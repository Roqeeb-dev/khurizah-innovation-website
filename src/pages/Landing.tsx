import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Programs from "../components/Programs";
import WhyUs from "../components/WhyUs";
import bgImage from "../assets/shridhar-thorat-6AKLKt-KmdY-unsplash.jpg";

export default function Landing() {
  return (
    <main
      className="relative bg-cover bg-center min-h-screen"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Programs />
        <WhyUs />
      </div>
    </main>
  );
}
