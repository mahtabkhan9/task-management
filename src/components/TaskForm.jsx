import React, { useState } from 'react';

const TaskForm = ({ onAddTask }) => {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('Low');

  const handleAddTask = () => {
    if (title.trim()) {
      onAddTask(title, priority);
      setTitle('');
      setPriority('Low');
    } else {
      alert("Task title can't be empty.");
    }
  };

  return (
    <div className="task-form flex flex-col items-center mb-6 w-full max-w-md mx-auto">
      <input
        type="text"
        placeholder="Enter task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border border-gray-300 p-2 rounded-md mb-4 w-full"
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="border border-gray-300 p-2 rounded-md mb-4 w-full"
      >
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <button
        onClick={handleAddTask}
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transform hover:scale-105 transition-transform"
      >
        Add Task
      </button>
    </div>
  );
};

export default TaskForm;
