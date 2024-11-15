import React from 'react';

const TaskList = ({ tasks, onDeleteTask, onToggleComplete }) => {
  return (
    <ul className="task-list space-y-4">
      {tasks.map((task) => (
        <li
          key={task.id}
          className={`flex justify-between items-center p-4 border rounded-md ${
            task.completed ? 'bg-green-100' : 'bg-white'
          }`}
        >
          <span className={`${task.completed ? 'line-through' : ''}`}>
            {task.title} - <span className="font-semibold">{task.priority}</span>
          </span>
          <div>
            <button
              onClick={() => onToggleComplete(task.id)}
              className={`mr-2 py-1 px-3 rounded-md ${
                task.completed ? 'bg-yellow-400' : 'bg-green-400'
              } text-white`}
            >
              {task.completed ? 'Undo' : 'Complete'}
            </button>
            <button
              onClick={() => onDeleteTask(task.id)}
              className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
