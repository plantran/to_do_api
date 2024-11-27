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
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const searchParam = params.get('search');
    if (searchParam) {
      setSearchQuery(searchParam);
    }
    fetchTodos(currentPage, searchParam).then((todos) => {
      setTodos(todos.todos);
      setTotalPages(todos.meta.total_pages);
    }).catch((error) => console.log(error))
  }, [location.search, currentPage]);

  const handleSearch = (event) => {
    event.preventDefault();
    setCurrentPage(1);
    if (searchQuery) {
      window.location.href = `?search=${encodeURIComponent(searchQuery)}`;
    } else {
      window.location.href = '/todos';
    }
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
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
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            disabled={currentPage === index + 1}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

const styles = {
  todoItem: { listStyleType: "none" },
  searchBar: { paddingLeft: "40px", display: "flex", justifyContent: "flex-start", alignItems: "center", gap: "10px" },
}

export default ListTodos;
