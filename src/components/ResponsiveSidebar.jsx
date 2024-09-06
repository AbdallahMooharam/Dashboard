// src/components/ResponsiveSidebar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const ResponsiveSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* زر الهامبرغر */}
      <button
        onClick={toggleSidebar}
        className="md:hidden text-white p-4 fixed top-0 left-0 z-50"
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>
      {/* الشريط الجانبي */}
      <div
        className={`fixed top-0 left-0 w-64 h-screen bg-gray-800 text-white transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:static`}
      >
        <div className="p-5 text-2xl font-bold">Dashboard</div>
        <ul className="mt-5">
          <li><Link to="/" className="block py-2 px-4 hover:bg-gray-700">Home</Link></li>
          <li><Link to="/sales" className="block py-2 px-4 hover:bg-gray-700">Sales Analysis</Link></li>
          <li><Link to="/employees" className="block py-2 px-4 hover:bg-gray-700">Employees</Link></li>
          <li><Link to="/clients" className="block py-2 px-4 hover:bg-gray-700">New Clients</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default ResponsiveSidebar;
