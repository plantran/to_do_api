import React from 'react';

function TodoCard({ todo }) {
  return (
    <div style={styles.todoCard}>
      <div style={styles.todoHeader}>
        <h4 style={styles.todoTitle}>{todo.title}</h4>
        <div className={`status-pill ${todo.status}`}>{todo.status}</div>
        {todo.duedate && <div className="date-pill">{new Date(todo.duedate).toLocaleDateString()}</div>}
      </div>
    </div>
  );
}

const styles = {
  todoCard: { padding: "20px", borderRadius: "5px", backgroundColor: "#F8F8F8", marginBottom: "10px" },
  todoHeader: { display: "flex", justifyContent: "flex-start", alignItems: "center", gap: "10px" },
  todoTitle: { margin: 0, color: "#333" },
}

export default TodoCard;
