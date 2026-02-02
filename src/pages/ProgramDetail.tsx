import { useParams } from "react-router-dom";
import { programs } from "../ProgramData";

export default function ProgramDetail() {
  const { id } = useParams();
  const selectedProgram = programs.find((p) => p.id === id);
  return (
    <main>
      {/* Header section */}
      <header
        className="min-h-[50vh] bg-cover bg-center bg-no-repeat text-white"
        style={{ backgroundImage: `url(${selectedProgram?.cover})` }}
      >
        <h1 className="text-5xl font-semibold">{selectedProgram?.title}</h1>
        <p>{selectedProgram?.description}</p>
      </header>

      {/* About the program */}
      <section></section>
    </main>
  );
}
