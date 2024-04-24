import { useState } from "react";

export default function CreateButton({ onCreate }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");

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

    onCreate(newPerson);

    setFirstName("");
    setLastName("");
    setDateOfBirth("");
  };

  return (
    <div>
      <h2>Create Person</h2>
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
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
