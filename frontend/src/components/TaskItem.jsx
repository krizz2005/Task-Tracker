import React from 'react';

const TaskItem = ({ task, onUpdate, onDelete }) => {
  
  const handleStatusChange = (e) => {
    onUpdate(task._id, { ...task, status: e.target.value });
  };

  return (
    <div style={{ 
      background: 'rgba(30, 30, 47, 0.85)', 
      backdropFilter: 'blur(10px)',
      border: '1px solid #3a3a5a', 
      borderLeft: '4px solid #00d2ff', // Cyan accent line
      borderRadius: '8px',
      padding: '15px', 
      marginBottom: '15px', 
      display: 'flex', 
      justifyContent: 'space-between',
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.4)',
      transition: 'transform 0.2s ease, box-shadow 0.2s ease'
    }}>
      <div style={{ flex: 1, marginRight: '15px' }}>
        <h4 style={{ 
          margin: '0 0 8px 0', 
          color: '#ffffff', 
          letterSpacing: '0.5px',
          textShadow: '0 0 5px rgba(255, 255, 255, 0.3)'
        }}>
          {task.title}
        </h4>
        <p style={{ 
          margin: 0, 
          fontSize: '14px', 
          color: '#a0a0b8', 
          lineHeight: '1.4' 
        }}>
          {task.description}
        </p>
      </div>
      
      <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
        <select 
          value={task.status} 
          onChange={handleStatusChange}
          style={{
            padding: '8px 12px',
            background: '#1a1a2e',
            color: '#00d2ff', // Neon cyan text
            border: '1px solid #00d2ff',
            borderRadius: '6px',
            outline: 'none',
            cursor: 'pointer',
            fontWeight: 'bold',
            boxShadow: '0 0 8px rgba(0, 210, 255, 0.2)'
          }}
        >
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
        
        <button 
          onClick={() => onDelete(task._id)} 
          style={{ 
            padding: '8px 15px',
            background: 'transparent',
            color: '#ff4d4d', // Neon red/pink
            border: '1px solid #ff4d4d',
            borderRadius: '6px',
            cursor: 'pointer', 
            fontWeight: 'bold',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            boxShadow: '0 0 8px rgba(255, 77, 77, 0.2)',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background = 'rgba(255, 77, 77, 0.1)';
            e.currentTarget.style.boxShadow = '0 0 15px rgba(255, 77, 77, 0.4)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.boxShadow = '0 0 8px rgba(255, 77, 77, 0.2)';
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;