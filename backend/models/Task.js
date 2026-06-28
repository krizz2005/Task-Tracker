const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Task title is required'],
    trim: true,
    maxLength: [50, 'Title cannot exceed 50 characters']
  },
  description: {
    type: String,
    trim: true
  },
  status: {
    type: String,
    enum: ['pending', 'in-progress', 'completed'],
    default: 'pending'
  }
}, { timestamps: true }); 
// timestamps automatically adds createdAt and updatedAt fields

module.exports = mongoose.model('Task', taskSchema);