// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white fixed top-0 left-0 hidden md:block">
      <div className="p-5 text-2xl font-bold">Dashboard</div>
      <ul className="mt-5">
        <li><Link to="/" className="block py-2 px-4 hover:bg-gray-700">Home</Link></li>
        <li><Link to="/sales" className="block py-2 px-4 hover:bg-gray-700">Sales Analysis</Link></li>
        <li><Link to="/employees" className="block py-2 px-4 hover:bg-gray-700">Employees</Link></li>
        <li><Link to="/clients" className="block py-2 px-4 hover:bg-gray-700">New Clients</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;
