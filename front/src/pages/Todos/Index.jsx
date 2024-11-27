import '../../App.css';
import { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import TodoCard from '../../components/TodoCard';
import { fetchTodos } from '../../services/apiService';

function ListTodos() {
  const location = useLocation();
  const [todos, setTodos] = useState([])
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const searchParam = params.get('search');
    if (searchParam) {
      setSearchQuery(searchParam);
    }
    fetchTodos(searchParam).then((todos) => {
      setTodos(todos)
    }).catch((error) => console.log(error))
  }, [location.search]);

  const handleSearch = (event) => {
    event.preventDefault();
    if (searchQuery) {
      window.location.href = `?search=${encodeURIComponent(searchQuery)}`;
    } else {
      window.location.href = '/todos';
    }
  };

  return (
    <div className="Todos">
      <form onSubmit={handleSearch}>
        <div style={styles.searchBar}>
          <input
            type="text"
            placeholder="Search a todo by title or description..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit">Search</button>
        </div>
      </form>
      <ul>
        {todos.map(todo => (
          <li key={todo.id} style={styles.todoItem}>
            <Link to={`/todos/${todo.id}`} style={{ textDecoration: "none" }}>
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
  searchBar: { paddingLeft: "40px", display: "flex", justifyContent: "flex-start", alignItems: "center", gap: "10px" },
}

export default ListTodos;
