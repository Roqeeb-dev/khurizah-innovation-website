import type { Program } from "../ProgramData";

interface AboutProps {
  selectedProgram: Program;
}

export default function ProgramDetailAbout({ selectedProgram }: AboutProps) {
  return (
    <section className="relative py-20 bg-gradient-to-br from-white via-blue-50 to-indigo-50 overflow-hidden">
      {/* ambient glow */}
      <div className="absolute -top-32 -left-32 w-[450px] h-[450px] bg-blue-400/20 rounded-full blur-[120px]" />
      <div className="absolute -bottom-32 -right-32 w-[450px] h-[450px] bg-indigo-400/20 rounded-full blur-[120px]" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 grid gap-12 md:grid-cols-3">
        {/* Main Content */}
        <div className="md:col-span-2">
          <span className="inline-flex items-center gap-2 mb-4 px-5 py-1.5 text-sm rounded-full bg-blue-600/10 text-blue-700 border border-blue-600/20">
            About This Program
          </span>

          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 mb-4">
            What You’ll Experience
          </h2>

          <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
            {selectedProgram.description}
          </p>
        </div>

        {/* Side Card */}
        <aside className="relative bg-white/80 backdrop-blur-md border border-gray-200/60 rounded-3xl p-6 sm:p-8 shadow-lg">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-600/0 to-indigo-600/10 pointer-events-none" />

          <div className="relative space-y-8">
            {selectedProgram.targetAudience && (
              <div>
                <h4 className="font-semibold mb-4 text-gray-900">
                  Who This Is For
                </h4>
                <ul className="space-y-3 text-sm sm:text-base text-gray-600">
                  {selectedProgram.targetAudience.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-blue-600 mt-1">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {selectedProgram.prerequisites && (
              <div>
                <h4 className="font-semibold mb-4 text-gray-900">
                  Prerequisites
                </h4>
                <ul className="space-y-3 text-sm sm:text-base text-gray-600">
                  {selectedProgram.prerequisites.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-blue-600 mt-1">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </aside>
      </div>
    </section>
  );
}
