import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { fetchTodo, deleteTodo } from '../../services/apiService';

function TodoElem() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    fetchTodo(id).then((todo) => {
      setTodo(todo);
    })
    .catch((error) => console.log(error))
  }, [id]);

  const handleDelete = async () => {
    await deleteTodo(id);
    navigate("/todos");
  }

  return (
    <>
      <Link to={`/todos/`}>
        Back to todos
      </Link>
      <div className="TodoElem">
        {todo && (
        <>
          <div style={styles.todoHeader}>
            <h1>{todo.title}</h1>
            <div className={`status-pill ${todo.status}`}>{todo.status}</div>
            {todo.duedate && <div className="date-pill">{new Date(todo.duedate).toLocaleDateString()}</div>}
          </div>
          <p>{todo.description}</p>
          <div style={styles.todoFooter}>
            <Link to={`/todos/${todo.id}/edit`} style={styles.link}>Edit</Link>
            <Link to={`#`} style={styles.link} onClick={handleDelete}>Delete</Link>
          </div>
        </>
        )}
      </div>
    </>
  );
}

const styles = {
  todoHeader: { display: "flex", justifyContent: "flex-start", alignItems: "center", gap: "10px" },
  todoFooter: { display: "flex", justifyContent: "flex-start", alignItems: "center", gap: "10px" },
}

export default TodoElem;
