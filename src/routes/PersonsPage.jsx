import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function PersonsPage() {
  const [persons, setPersons] = useState([]);

  const fetchPersons = async () => {
    const response = await fetch("http://localhost:8080/persons");
    const data = await response.json();
    data.dateOfBirth = new Date(data.dateOfBirth).toLocaleDateString();
    setPersons(data);
  };

  useEffect(() => {
    console.log("Fetching Persons");
    fetchPersons();
  }, []);

  return (
    <div>
      <h1>All Persons</h1>
      <ul>
        {persons.map((person) => (
          <li key={person.id}>
            <Link to={`/persons/${person.id}`}>
              {person.firstName} {person.lastName}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
