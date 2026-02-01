import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import ProgramDetail from "./pages/ProgramDetail";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/program/:id" element={<ProgramDetail />} />
      </Routes>
    </>
  );
}
