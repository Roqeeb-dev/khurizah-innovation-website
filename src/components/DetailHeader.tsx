import type { Program } from "../ProgramData";

interface HeaderProps {
  selectedProgram: Program;
}

export default function DetailHeader({ selectedProgram }: HeaderProps) {
  return (
    <header
      className="relative min-h-[60vh] bg-cover bg-center bg-no-repeat text-white flex items-center"
      style={{ backgroundImage: `url(${selectedProgram.cover})` }}
    >
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative max-w-6xl mx-auto px-6 py-20">
        <h1 className="text-4xl md:text-5xl font-semibold mb-4">
          {selectedProgram.title}
        </h1>

        <p className="max-w-2xl text-lg text-gray-200 mb-6">
          {selectedProgram.description}
        </p>

        {/* Meta pills */}
        <div className="flex flex-wrap gap-3 mb-8">
          {selectedProgram.duration && (
            <span className="px-4 py-2 bg-white/10 rounded-full text-sm">
              {selectedProgram.duration}
            </span>
          )}
          {selectedProgram.skillLevel && (
            <span className="px-4 py-2 bg-white/10 rounded-full text-sm">
              {selectedProgram.skillLevel}
            </span>
          )}
          {selectedProgram.mode && (
            <span className="px-4 py-2 bg-white/10 rounded-full text-sm">
              {selectedProgram.mode}
            </span>
          )}
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4">
          <button className="bg-white text-blue-700 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition">
            Enroll Now →
          </button>
          <button className="border border-white/60 px-6 py-3 rounded-full hover:bg-white/10 transition">
            Download Curriculum
          </button>
        </div>
      </div>
    </header>
  );
}
