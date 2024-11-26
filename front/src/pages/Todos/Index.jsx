import '../../App.css';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import TodoCard from '../../components/TodoCard';
import { fetchTodos } from '../../services/apiService';

function ListTodos() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetchTodos().then((todos) => {
      setTodos(todos)
    }).catch((error) => console.log(error))
  }, []);

  return (
    <div className="Todos">
      <ul>
        {todos.map(todo => (
          <li key={todo.id} style={styles.todoItem}>
            <Link to={`/todos/${todo.id}`}>
              <TodoCard todo={todo} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  todoItem: { listStyleType: "none" },
}

export default ListTodos;
