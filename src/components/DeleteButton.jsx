import { useNavigate } from "react-router-dom";

export default function DeleteButton({ person }) {
  const navigate = useNavigate();

  async function handleDelete() {
    if (window.confirm(`Are you sure you want to delete "${person.firstName}"?`)) {
      try {
        const response = await fetch(`http://localhost:8080/persons/${person.id}`, {
          method: "DELETE",
        });
        if (response.ok) {
          navigate("/persons");
        } else {
          throw new Error("Failed to delete person");
        }
      } catch (error) {
        console.error(error);
      }
    }
  }

  return <button onClick={handleDelete}>Delete</button>;
}
