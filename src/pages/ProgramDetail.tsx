import { useParams } from "react-router-dom";

export default function ProgramDetail() {
  const { id } = useParams();
  return (
    <main>
      {/* Header section */}
      <header>
        <h1>This is {id} page</h1>
      </header>

      {/* About the program */}
      <section></section>
    </main>
  );
}
