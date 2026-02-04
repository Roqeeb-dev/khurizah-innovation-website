import type { Program } from "../ProgramData";

interface CurriculumProps {
  selectedProgram: Program;
}

export default function ProgramDetailCurriculum({
  selectedProgram,
}: CurriculumProps) {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-semibold mb-10">Program Curriculum</h2>

      <div className="space-y-8">
        {selectedProgram.programStructure.map((module, index) => (
          <div
            key={index}
            className="relative border rounded-xl p-6 bg-gray-50"
          >
            <span className="text-sm text-blue-600 font-medium">
              {module.weeks}
            </span>

            <h3 className="text-xl font-semibold mt-2 mb-4">{module.title}</h3>

            <ul className="space-y-2 text-sm text-gray-600 mb-4">
              {module.topics.map((topic, i) => (
                <li key={i}>✓ {topic}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
