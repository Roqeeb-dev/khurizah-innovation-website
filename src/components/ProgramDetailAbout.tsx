import type { Program } from "../ProgramData";

interface AboutProps {
  selectedProgram: Program;
}

export default function ProgramDetailAbout({ selectedProgram }: AboutProps) {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-12">
      <div className="md:col-span-2">
        <span className="inline-block mb-4 px-4 py-1 text-sm rounded-full bg-blue-100 text-blue-600">
          About This Program
        </span>

        <h2 className="text-3xl font-semibold mb-4">What You’ll Experience</h2>

        <p className="text-gray-600 leading-relaxed">
          {selectedProgram.description}
        </p>
      </div>

      <div className="bg-blue-100 border rounded-xl p-6 space-y-6">
        {selectedProgram.targetAudience && (
          <div>
            <h4 className="font-semibold mb-3">Who This Is For</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              {selectedProgram.targetAudience.map((item, index) => (
                <li key={index}>✓ {item}</li>
              ))}
            </ul>
          </div>
        )}

        {selectedProgram.prerequisites && (
          <div>
            <h4 className="font-semibold mb-3">Prerequisites</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              {selectedProgram.prerequisites.map((item, index) => (
                <li key={index}>✓ {item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
