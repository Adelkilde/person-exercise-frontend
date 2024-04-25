import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function CreateUpdateForm({ initialPerson, onCreate, onUpdate }) {
  const [firstName, setFirstName] = useState(initialPerson ? initialPerson.firstName : "");
  const [lastName, setLastName] = useState(initialPerson ? initialPerson.lastName : "");
  const [dateOfBirth, setDateOfBirth] = useState(initialPerson ? initialPerson.dateOfBirth : "");

  useEffect(() => {
    if (initialPerson) {
      setFirstName(initialPerson.firstName);
      setLastName(initialPerson.lastName);
      setDateOfBirth(initialPerson.dateOfBirth);
    }
  }, [initialPerson]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !dateOfBirth) {
      alert("Please fill in all fields");
      return;
    }

    const newPerson = {
      firstName,
      lastName,
      dateOfBirth,
    };

    if (initialPerson) {
      onUpdate(newPerson);
    } else {
      onCreate(newPerson);
    }

    setFirstName("");
    setLastName("");
    setDateOfBirth("");
  };

  const location = useLocation();
  const isPeoplePage = location.pathname === "/people";

  return (
    <div>
      <h2>{isPeoplePage ? "Create Person" : "Edit Person"}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </label>
        <br />
        <label>
          Last Name:
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </label>
        <br />
        <label>
          Date of Birth:
          <input type="date" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} />
        </label>
        <br />
        <button type="submit">{isPeoplePage ? "Create" : "Update"}</button>{" "}
      </form>
    </div>
  );
}
