import React, { useState, useEffect } from 'react';
import { getTasks, createTask, updateTask, deleteTask } from '../services/api';
import TaskForm from '../components/TaskForm';
import TaskItem from '../components/TaskItem';

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch tasks on initial load
  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await getTasks();
      setTasks(response.data.data); // Based on your backend sending { success: true, data: [...] }
      setLoading(false);
    } catch (error) {
      console.error('Error fetching tasks:', error);
      setLoading(false);
    }
  };

  const handleAddTask = async (taskData) => {
    const response = await createTask(taskData);
    // Add new task to state immediately (no refresh needed)
    setTasks([response.data.data, ...tasks]);
  };

  const handleUpdateTask = async (id, updatedData) => {
    const response = await updateTask(id, updatedData);
    // Update the specific task in state
    setTasks(tasks.map(task => task._id === id ? response.data.data : task));
  };

  const handleDeleteTask = async (id) => {
    await deleteTask(id);
    // Remove task from state
    setTasks(tasks.filter(task => task._id !== id));
  };

  if (loading) {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px', color: '#00d2ff', fontFamily: 'sans-serif' }}>
        <h2 style={{ textShadow: '0 0 10px rgba(0, 210, 255, 0.5)' }}>Loading System Data...</h2>
      </div>
    );
  }

  return (
    <div style={{ 
      maxWidth: '800px', 
      margin: '40px auto', 
      padding: '20px', 
      fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif' 
    }}>
      
      {/* Main App Title */}
      <h1 style={{ 
        textAlign: 'center', 
        color: '#ffffff', 
        textTransform: 'uppercase', 
        letterSpacing: '4px',
        marginBottom: '40px',
        textShadow: '0 0 15px rgba(0, 210, 255, 0.8), 0 0 30px rgba(0, 210, 255, 0.4)',
        background: 'linear-gradient(90deg, #00d2ff 0%, #3a7bd5 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
      }}>
        Task Tracker
      </h1>
      
      <TaskForm onTaskAdded={handleAddTask} />
      
      <div style={{ marginTop: '40px' }}>
        {/* Subtitle */}
        <h3 style={{ 
          color: '#a0a0b8', 
          borderBottom: '2px solid rgba(58, 58, 90, 0.5)', 
          paddingBottom: '10px',
          textTransform: 'uppercase',
          letterSpacing: '2px',
          marginBottom: '20px'
        }}>
          Active Tasks
        </h3>
        
        {tasks.length === 0 ? (
          <p style={{ 
            textAlign: 'center', 
            color: '#a0a0b8', 
            background: 'rgba(30, 30, 47, 0.5)',
            padding: '20px',
            borderRadius: '8px',
            border: '1px dashed #3a3a5a'
          }}>
            No tasks found in the database. Initialize a new task above.
          </p>
        ) : null}
        
        {/* Task Grid (Responsive via Flexbox) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {tasks.map(task => (
            <TaskItem 
              key={task._id} 
              task={task} 
              onUpdate={handleUpdateTask} 
              onDelete={handleDeleteTask} 
            />
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default Dashboard;