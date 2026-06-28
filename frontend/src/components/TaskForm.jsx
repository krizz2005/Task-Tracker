import React, { useState } from 'react';

const TaskForm = ({ onTaskAdded }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Form Validation
    if (!title.trim()) {
      return setError('Task title is required');
    }
    if (title.length > 50) {
      return setError('Title cannot exceed 50 characters');
    }

    try {
      await onTaskAdded({ title, description });
      setTitle('');
      setDescription('');
      setError('');
    } catch (err) {
      setError('Failed to add task. Please try again.');
    }
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      style={{ 
        marginBottom: '20px', 
        padding: '25px', 
        background: 'linear-gradient(145deg, #1e1e2f, #252540)', 
        border: '1px solid #00d2ff',
        borderRadius: '12px',
        boxShadow: '0 8px 32px 0 rgba(0, 210, 255, 0.15)',
        fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'
      }}
    >
      <h3 style={{ 
        marginTop: 0, 
        color: '#00d2ff', 
        letterSpacing: '1px', 
        textTransform: 'uppercase',
        textShadow: '0 0 10px rgba(0, 210, 255, 0.4)'
      }}>
        Add New Task
      </h3>
      
      {error && (
        <p style={{ 
          color: '#ff4d4d', 
          textShadow: '0 0 8px rgba(255, 77, 77, 0.6)',
          fontWeight: 'bold'
        }}>
          {error}
        </p>
      )}
      
      <div>
        <input 
          type="text" 
          placeholder="Task Title *" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          style={{ 
            display: 'block', 
            margin: '15px 0', 
            width: '100%', 
            padding: '12px',
            background: 'rgba(0, 0, 0, 0.25)',
            border: '1px solid #3a3a5a',
            borderRadius: '6px',
            color: '#fff',
            outline: 'none',
            boxSizing: 'border-box',
            transition: 'border 0.3s ease'
          }}
        />
      </div>
      <div>
        <textarea 
          placeholder="Description (Optional)" 
          value={description} 
          onChange={(e) => setDescription(e.target.value)}
          style={{ 
            display: 'block', 
            margin: '15px 0', 
            width: '100%', 
            padding: '12px',
            background: 'rgba(0, 0, 0, 0.25)',
            border: '1px solid #3a3a5a',
            borderRadius: '6px',
            color: '#fff',
            outline: 'none',
            minHeight: '80px',
            boxSizing: 'border-box'
          }}
        />
      </div>
      <button 
        type="submit" 
        style={{ 
          width: '100%',
          padding: '12px 20px', 
          cursor: 'pointer',
          background: 'linear-gradient(90deg, #00d2ff 0%, #3a7bd5 100%)',
          color: '#fff',
          border: 'none',
          borderRadius: '6px',
          fontWeight: 'bold',
          letterSpacing: '1px',
          textTransform: 'uppercase',
          boxShadow: '0 4px 15px rgba(0, 210, 255, 0.3)',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease'
        }}
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;