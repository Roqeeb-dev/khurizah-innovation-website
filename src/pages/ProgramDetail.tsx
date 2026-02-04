import { useParams } from "react-router-dom";
import { programs } from "../ProgramData";
import DetailHeader from "../components/DetailHeader";
import ProgramDetailAbout from "../components/ProgramDetailAbout";
import ProgramDetailLearnings from "../components/ProgramDetailLearnings";
import ProgramDetailCurriculum from "../components/ProgramDetailCurriculum";

export default function ProgramDetail() {
  const { id } = useParams();
  const selectedProgram = programs.find((p) => p.id === id);

  if (!selectedProgram) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Program not found.</p>
      </main>
    );
  }

  return (
    <main className="w-full">
      <DetailHeader selectedProgram={selectedProgram} />
      <ProgramDetailAbout selectedProgram={selectedProgram} />

      {selectedProgram.learningOutcomes && (
        <ProgramDetailLearnings selectedProgram={selectedProgram} />
      )}

      {selectedProgram.programStructure && (
        <ProgramDetailCurriculum selectedProgram={selectedProgram} />
      )}

      {/* ================= FINAL CTA ================= */}
      <section className="bg-blue-600 text-white py-16 text-center">
        <h2 className="text-3xl font-semibold mb-4">Ready to Get Started?</h2>
        <p className="mb-6 text-blue-100">
          Take the next step toward building real, practical skills.
        </p>
        <button className="bg-white text-blue-700 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition">
          Enroll Now
        </button>
      </section>
    </main>
  );
}
