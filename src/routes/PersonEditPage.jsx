import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PersonForm from "../components/PersonForm";

export default function PersonEditPage() {
  const { id } = useParams();
  const [person, setPerson] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchPerson() {
      try {
        const response = await fetch(`http://localhost:8080/persons/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        data.dateOfBirth = new Date(data.dateOfBirth).toLocaleDateString();
        setPerson(data);
      } catch (error) {
        console.error("Error fetching person", error);
      }
    }

    fetchPerson();
  }, [id]);

  async function handleEditPerson(editedPerson) {
    const response = await fetch(`http://localhost:8080/persons/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedPerson),
    });
    if (response.ok) {
      navigate(`/persons/${id}`);
    } else {
      alert("Failed to edit person");
    }
  }

  if (!person) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Edit person</h1>
      <PersonForm handleSave={handleEditPerson} person={person} />
    </div>
  );
}
