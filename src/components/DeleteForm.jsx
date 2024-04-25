import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function DeleteForm({ onDelete }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this person?")) {
      try {
        const response = await fetch(`http://localhost:8080/people/${id}`, {
          method: "DELETE",
        });
        if (response.ok) {
          onDelete();
          navigate("/people");
        } else {
          throw new Error("Failed to delete person");
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div>
      <h2>Delete Person</h2>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
