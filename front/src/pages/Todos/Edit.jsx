import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { fetchTodo, updateTodo } from '../../services/apiService';

function EditTodo() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ todo: { title: "", description: "", duedate: null } });
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTodo(id).then((data) => {
      const formattedData = data;
      setFormData({ todo: formattedData });
    })
    .catch((error) => console.log(error))
    }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, todo: { ...formData.todo, [e.target.name]: e.target.value } });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      await updateTodo(id, formData);
      navigate(`/todos/${id}`);
    } catch (err) {
      setError(err);
    }
  };

  return (
    <div>
      <h1>Edit Todo</h1>
      {error && <div>{error.message}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.todo.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.todo.description || ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="duedate">Due Date</label>
          <input
            type="date"
            id="duedate"
            name="duedate"
            value={formData.todo.duedate || ""}
            onChange={handleChange}
            min={new Date(new Date().setDate(new Date().getDate() + 1)).toISOString().split('T')[0]}
          />
        </div>
        <button type="submit">Update Todo</button>
      </form>
    </div>
  );
}

export default EditTodo;
