const BASE_URL = "http://localhost:3000/api/v1";

export const fetchTodos = async (search) => {
  const searchParam = search ? `?search=${search}` : '';
  const response = await fetch(`${BASE_URL}/todos${searchParam}`, { headers: { 'Authorization': process.env.REACT_APP_API_SECRET } });
  if (!response.ok) throw new Error("Failed to fetch todos");
  return response.json();
};

export const fetchTodo = async (id) => {
  const response = await fetch(`${BASE_URL}/todos/${id}`, { headers: { 'Authorization': process.env.REACT_APP_API_SECRET } });
  if (!response.ok) throw new Error("Failed to fetch todo with id: " + id);
  return response.json();
};

export const createTodo = async (data) => {
  const response = await fetch(`${BASE_URL}/todos`, { headers: { "Content-Type": "application/json", 'Authorization': process.env.REACT_APP_API_SECRET }, method: "POST", body: JSON.stringify(data) });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error("Failed to create todo:" + errorData.error.message);
  }
  return response.json();
};

export const updateTodo = async (id, data) => {
  const response = await fetch(`${BASE_URL}/todos/${id}`, { headers: { "Content-Type": "application/json", 'Authorization': process.env.REACT_APP_API_SECRET }, method: "PATCH", body: JSON.stringify(data) });

  if (!response.ok) {
    throw new Error("Failed to update todo");
  }
  return response.json();
};

export const deleteTodo = async (id) => {
  const response = await fetch(`${BASE_URL}/todos/${id}`, { method: "DELETE", headers: { 'Authorization': process.env.REACT_APP_API_SECRET } });
  if (!response.ok) throw new Error("Failed to delete todo with id: " + id);
};
