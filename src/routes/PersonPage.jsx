import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DeleteButton from "../components/DeleteButton";

export default function PersonPage() {
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

  if (!person) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>
        {person.firstName} {person.lastName}
      </h1>
      <p>Date of birth: {person.dateOfBirth}</p>
      <DeleteButton person={person} />
      <button type="button" onClick={() => navigate(`/persons/${person.id}/edit`)}>
        Edit
      </button>
    </div>
  );
}
