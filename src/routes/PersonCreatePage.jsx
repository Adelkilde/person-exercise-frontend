import { useNavigate } from "react-router-dom";
import PersonForm from "../components/PersonForm";

export default function PersonCreatePage() {
  const navigate = useNavigate();

  async function handleCreatePerson(newPerson) {
    const response = await fetch(`http://localhost:8080/persons`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPerson),
    });
    if (response.ok) {
      navigate(`/persons`);
    } else {
      alert("Failed to create person");
    }
  }

  return (
    <div>
      <h1>Create person</h1>
      <PersonForm handleSave={handleCreatePerson} />
    </div>
  );
}
