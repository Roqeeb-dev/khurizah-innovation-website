import type { ElementType } from "react";
import Pill from "./Pill";
import { NotebookTabs, Code } from "lucide-react";

interface Program {
  cover: string;
  icon: ElementType;
  title: string;
  description: string;
  link: string;
}

export default function Programs() {
  const programs: Program[] = [
    { cover: "", title: "", description: "", link: "", icon: Code },
    { cover: "", title: "", description: "", link: "", icon: Code },
    { cover: "", title: "", description: "", link: "", icon: Code },
    { cover: "", title: "", description: "", link: "", icon: Code },
    { cover: "", title: "", description: "", link: "", icon: Code },
    { cover: "", title: "", description: "", link: "", icon: Code },
    { cover: "", title: "", description: "", link: "", icon: Code },
    { cover: "", title: "", description: "", link: "", icon: Code },
  ];

  return (
    <main className="bg-white min-h-[50vh]">
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
    </main>
  );
}
