import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CreateUpdateForm from "../components/CreateUpdateForm";

export default function PeoplePage() {
  const [people, setPeople] = useState([]);
  const [count, setCount] = useState(0);

  const fetchPeople = async () => {
    const response = await fetch("http://localhost:8080/people");
    const data = await response.json();
    data.dateOfBirth = new Date(data.dateOfBirth).toLocaleDateString();
    setPeople(data);
  };

  useEffect(() => {
    console.log("Fetching people");
    fetchPeople();
  }, [count]);

  const handleCreatePerson = async (newPerson) => {
    const response = await fetch("http://localhost:8080/people", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPerson),
    });
    if (response.ok) {
      console.log("Person created");
      fetchPeople();
    } else {
      alert("Failed to create person");
    }
  };

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      <h1>People</h1>
      <CreateUpdateForm onCreate={handleCreatePerson} />
      <ul>
        {people.map((person) => (
          <li key={person.id}>
            <Link to={`/people/${person.id}`}>
              {person.firstName} {person.lastName}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
