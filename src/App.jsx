import "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import PeoplePage from "./routes/PeoplePage";
import HomePage from "./routes/HomePage";
import PersonPage from "./routes/PersonPage";

function App() {
  return (
    <>
      <main>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/people" element={<PeoplePage />} />
          <Route path="/people/:id" element={<PersonPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
