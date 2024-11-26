import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import ListTodos from "./pages/Todos/Index";
import TodoElem from "./pages/Todos/Show";
import EditTodo from "./pages/Todos/Edit";
import NewTodo from "./pages/Todos/New";
// import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";


function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/todos" />} />
          <Route path="/todos" element={<ListTodos />} />
          <Route path="/todos/:id" element={<TodoElem />} />
          <Route path="/todos/:id/edit" element={<EditTodo />} />
          <Route path="/new_todo" element={<NewTodo />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
