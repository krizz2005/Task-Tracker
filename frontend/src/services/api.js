import axios from 'axios';

// Notice the /api/tasks at the very end!
const API_URL = process.env.REACT_APP_API_URL || 'https://task-tracker-gopi.onrender.com/api/tasks';

export const getTasks = () => axios.get(API_URL);
export const createTask = (taskData) => axios.post(API_URL, taskData);
export const updateTask = (id, taskData) => axios.put(`${API_URL}/${id}`, taskData);
export const deleteTask = (id) => axios.delete(`${API_URL}/${id}`);