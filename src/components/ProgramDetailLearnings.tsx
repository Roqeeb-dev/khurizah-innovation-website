import type { Program } from "../ProgramData";

interface LearningProps {
  selectedProgram: Program;
}

export default function ProgramDetailLearnings({
  selectedProgram,
}: LearningProps) {
  return (
    <section className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden">
      {/* soft glow background */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-[120px]" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-indigo-400/20 rounded-full blur-[120px]" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 mb-4 px-5 py-1.5 text-sm rounded-full bg-blue-600/10 text-blue-700 border border-blue-600/20">
            Core Value
          </span>

          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 mb-3">
            What You’ll Learn
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Practical skills that translate directly into real-world
            opportunities and measurable career growth.
          </p>
        </div>

        {/* Learning Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {selectedProgram.learningOutcomes.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white/80 backdrop-blur-sm border border-gray-200/70 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-blue-500/30"
            >
              {/* subtle gradient hover overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-600/0 via-indigo-600/0 to-blue-600/0 group-hover:from-blue-600/5 group-hover:via-indigo-600/5 group-hover:to-blue-600/10 transition" />

              <div className="relative">
                <div className="w-10 h-10 mb-4 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white font-semibold shadow-md">
                  {index + 1}
                </div>

                <h4 className="font-semibold text-gray-900 mb-2">
                  {item.title}
                </h4>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
