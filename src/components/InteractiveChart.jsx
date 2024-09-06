// src/components/InteractiveChart.js
import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const InteractiveChart = () => {
  const [filter, setFilter] = useState('monthly');

  const data = {
    labels: filter === 'monthly' ? ['Jan', 'Feb', 'Mar', 'Apr', 'May'] : ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Sales Data',
        data: filter === 'monthly' ? [5000, 6000, 7000, 8000, 9000] : [1200, 1500, 1600, 1800],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function(tooltipItem) {
            return `${tooltipItem.dataset.label}: ${tooltipItem.raw}`;
          },
        },
      },
    },
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-5">
      <h2 className="text-xl font-semibold mb-4">Sales Data</h2>
      <div className="mb-4">
        <button onClick={() => setFilter('monthly')} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Monthly</button>
        <button onClick={() => setFilter('weekly')} className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 ml-2">Weekly</button>
      </div>
      <Bar data={data} options={options} />
    </div>
  );
}

export default InteractiveChart;
