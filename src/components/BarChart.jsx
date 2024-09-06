// src/components/BarChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const BarChart = () => {
  const data = {
    labels: ['Sales Analysis', 'Employees Present', 'New Clients', 'Appointments'],
    datasets: [
      {
        label: 'Metrics',
        data: [20000, 25, 15, 30], // البيانات ذات الصلة
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
      <h2 className="text-xl font-semibold mb-4">Metrics Overview</h2>
      <Bar data={data} options={options} />
    </div>
  );
}

export default BarChart;
