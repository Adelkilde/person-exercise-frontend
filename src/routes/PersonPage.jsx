import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DeleteButton from "../components/DeleteButton";

function PersonPage() {
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

  if (!person) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>
        {person.firstName} {person.lastName}
      </h1>
      <p>Date of birth: {person.dateOfBirth}</p>
      <DeleteButton onDelete={() => console.log("Delete person")} />
    </div>
  );
}

export default PersonPage;
