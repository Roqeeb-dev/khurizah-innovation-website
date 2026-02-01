import { useParams } from "react-router-dom";

export default function ProgramDetail() {
  const { id } = useParams();
  console.log(id);
  return (
    <main>
      {/* Header section */}
      <header></header>

      {/* About the program */}
      <section></section>

      {/* What you'll learn */}
      <section></section>

      {/* Program structure */}
      <section></section>

      {/* Real world project */}
      <section></section>

      {/* Career impact */}
      <section></section>
    </main>
  );
}
