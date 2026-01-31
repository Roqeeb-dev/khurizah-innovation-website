import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Programs from "../components/Programs";

export default function Landing() {
  return (
    <main className="bg-blue-700">
      <Navbar />
      <Hero />
      <Programs />
    </main>
  );
}
