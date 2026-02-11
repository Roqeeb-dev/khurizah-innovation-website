import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import ProgramDetail from "./pages/ProgramDetail";
import GetStarted from "./pages/GetStarted";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/program/:id" element={<ProgramDetail />} />
        <Route path="/get-started" element={<GetStarted />} />
      </Routes>
    </>
  );
}
