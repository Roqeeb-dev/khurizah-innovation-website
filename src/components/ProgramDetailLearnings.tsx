import type { Program } from "../ProgramData";

interface LearningProps {
  selectedProgram: Program;
}

export default function ProgramDetailLearnings({
  selectedProgram,
}: LearningProps) {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block mb-4 px-4 py-1 text-sm rounded-full bg-blue-600 text-white">
            Core Value
          </span>
          <h2 className="text-3xl font-semibold mb-3">What You’ll Learn</h2>
          <p className="text-gray-600">
            Practical skills that translate directly to real-world
            opportunities.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {selectedProgram.learningOutcomes.map((item, index) => (
            <div
              key={index}
              className="bg-white border rounded-xl p-6 hover:shadow-md transition"
            >
              <h4 className="font-semibold mb-2">{item.title}</h4>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
