import { useEffect, useState } from "react";

export default function PersonForm({ handleSave, person }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");

  useEffect(() => {
    if (person) {
      setFirstName(person.firstName);
      setLastName(person.lastName);
      setDateOfBirth(person.dateOfBirth);
    }
  }, [person]);

  function handleSubmit(e) {
    e.preventDefault();

    if (!firstName || !lastName || !dateOfBirth) {
      alert("Please fill in all fields");
      return;
    }

    const personToSave = {
      firstName,
      lastName,
      dateOfBirth,
    };

    handleSave(personToSave);

    setFirstName("");
    setLastName("");
    setDateOfBirth("");
  }

  return (
    <div>
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
        <button>{person ? "Update" : "Create"}</button>
      </form>
    </div>
  );
}
