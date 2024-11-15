import React from 'react';

const Navbar = ({ search, onSearchChange }) => {
  return (
    <nav className="navbar bg-blue-600 p-4 flex justify-between items-center text-white">
      <h1 className="text-xl font-bold">Task Manager</h1>
      <input
        type="text"
        placeholder="Search tasks..."
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        className="border border-gray-200 rounded-md p-2 w-full max-w-xs bg-white text-black"
      />
    </nav>
  );
};

export default Navbar;
