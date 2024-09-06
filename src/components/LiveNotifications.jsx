// src/components/LiveNotifications.js
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LiveNotifications = () => {
  const notify = () => toast("New Notification!");

  return (
    <div className="bg-white shadow-md rounded-lg p-5">
      <h2 className="text-xl font-semibold mb-4">Live Notifications</h2>
      <button onClick={notify} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
        Show Notification
      </button>
      <ToastContainer />
    </div>
  );
}

export default LiveNotifications;
