import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CreateUpdateForm from "../components/CreateUpdateForm";
import DeleteForm from "../components/DeleteForm";

export default function PersonPage() {
  const { id } = useParams();
  const [person, setPerson] = useState(null);

  useEffect(() => {
    const fetchPerson = async () => {
      try {
        const response = await fetch(`http://localhost:8080/people/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        data.dateOfBirth = new Date(data.dateOfBirth).toLocaleDateString();
        setPerson(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPerson();
  }, [id]);

  const handleUpdatePerson = async (updatedPerson) => {
    try {
      const response = await fetch(`http://localhost:8080/people/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedPerson),
      });
      if (response.ok) {
        console.log("Person updated");
        setPerson(updatedPerson);
      } else {
        throw new Error("Failed to update person");
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (!person) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>
        {person.firstName} {person.lastName}
      </h1>
      <p>Date of birth: {person.dateOfBirth}</p>
      <CreateUpdateForm initialPerson={person} onUpdate={handleUpdatePerson} />
      <DeleteForm onDelete={() => console.log("Delete person")} />
    </div>
  );
}
