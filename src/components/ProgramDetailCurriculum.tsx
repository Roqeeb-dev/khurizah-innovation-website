import type { Program } from "../ProgramData";

interface CurriculumProps {
  selectedProgram: Program;
}

export default function ProgramDetailCurriculum({
  selectedProgram,
}: CurriculumProps) {
  return (
    <section className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute -top-32 -right-32 w-[400px] h-[400px] bg-blue-400/20 rounded-full blur-[120px]" />
      <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-indigo-400/20 rounded-full blur-[120px]" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-12 text-center sm:text-left">
          Program Curriculum
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {selectedProgram.programStructure.map((module, index) => (
            <div
              key={index}
              className="relative group bg-white/80 backdrop-blur-md border border-gray-200/60 rounded-3xl p-6 sm:p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-600/0 to-indigo-600/0 group-hover:from-blue-600/5 group-hover:to-indigo-600/10 transition" />

              <div className="relative">
                <span className="text-sm sm:text-base text-blue-600 font-medium">
                  {module.weeks}
                </span>

                <h3 className="text-xl sm:text-2xl font-semibold mt-2 mb-4 text-gray-900">
                  {module.title}
                </h3>

                <ul className="space-y-2 text-sm sm:text-base text-gray-600">
                  {module.topics.map((topic, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">✓</span>
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
