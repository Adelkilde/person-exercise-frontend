import "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import PersonsPage from "./routes/PersonsPage";
import HomePage from "./routes/HomePage";
import PersonPage from "./routes/PersonPage";
import PersonEditPage from "./routes/PersonEditPage";
import PersonCreatePage from "./routes/PersonCreatePage";

function App() {
  return (
    <>
      <main>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/create-new" element={<PersonCreatePage />} />
            <Route path="/persons" element={<PersonsPage />} />
            <Route path="/persons/:id" element={<PersonPage />} />
            <Route path="/persons/:id/edit" element={<PersonEditPage />} />
          </Routes>
        </div>
      </main>
    </>
  );
}

export default App;
