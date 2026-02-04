import { useParams, useNavigate } from "react-router-dom";
import { programs } from "../ProgramData";
import DetailHeader from "../components/DetailHeader";
import ProgramDetailAbout from "../components/ProgramDetailAbout";
import ProgramDetailLearnings from "../components/ProgramDetailLearnings";
import ProgramDetailCurriculum from "../components/ProgramDetailCurriculum";
import ProgramCTA from "../components/ProgramCTA";

export default function ProgramDetail() {
  const { id } = useParams();
  const selectedProgram = programs.find((p) => p.id === id);
  const navigate = useNavigate();

  if (!selectedProgram) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Program not found.</p>
      </main>
    );
  }

  return (
    <main className="w-full">
      <DetailHeader
        selectedProgram={selectedProgram}
        onBack={() => navigate(-1)}
      />

      <ProgramDetailAbout selectedProgram={selectedProgram} />

      {selectedProgram.learningOutcomes && (
        <ProgramDetailLearnings selectedProgram={selectedProgram} />
      )}

      {selectedProgram.programStructure && (
        <ProgramDetailCurriculum selectedProgram={selectedProgram} />
      )}

      <ProgramCTA />
    </main>
  );
}
