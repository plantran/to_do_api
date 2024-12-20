const BASE_URL = "http://localhost:3000/api/v1";

class ApiError extends Error {
  constructor(message, errorData) {
    super(message);
    this.errorData = errorData;
  }
}

export const fetchTodos = async (page = 1, search = null) => {
  const searchParam = search ? `&search=${search}` : '';
  const response = await fetch(`${BASE_URL}/todos?page=${page}${searchParam}`, { headers: { 'Authorization': process.env.REACT_APP_API_SECRET } });
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
    throw new ApiError("Failed to create todo", errorData);
  }
  return response.json();
};

export const updateTodo = async (id, data) => {
  const response = await fetch(`${BASE_URL}/todos/${id}`, { headers: { "Content-Type": "application/json", 'Authorization': process.env.REACT_APP_API_SECRET }, method: "PATCH", body: JSON.stringify(data) });

  if (!response.ok) {
    const errorData = await response.json();
    throw new ApiError("Failed to update todo", errorData);
  }
  return response.json();
};

export const deleteTodo = async (id) => {
  const response = await fetch(`${BASE_URL}/todos/${id}`, { method: "DELETE", headers: { 'Authorization': process.env.REACT_APP_API_SECRET } });
  if (!response.ok) throw new Error("Failed to delete todo with id: " + id);
};
