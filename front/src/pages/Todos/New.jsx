import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { createTodo } from '../../services/apiService';

function NewTodo() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ todo: { title: "", description: "", duedate: "", status: "pending" } });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, todo: { ...formData.todo, [e.target.name]: e.target.value } });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      let todo = await createTodo(formData);
      navigate(`/todos/${todo.id}`);
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
            value={formData.todo.description}
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
        <div>
          <label htmlFor="status">Status</label>
          <select
            id="status"
            name="status"
            value={formData.todo.status}
            onChange={handleChange}
            required
          >
            <option value="pending">Pending</option>
            <option value="in_progress">In progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        <button type="submit">Create Todo</button>
      </form>
    </div>
  );
}

export default NewTodo;
