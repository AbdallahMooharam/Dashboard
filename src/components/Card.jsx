import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

// بيانات افتراضية للرسوم البيانية
const dataLine = [
  { name: 'Jan', value: 4000 },
  { name: 'Feb', value: 3000 },
  { name: 'Mar', value: 2000 },
  { name: 'Apr', value: 2780 },
  { name: 'May', value: 1890 },
  { name: 'Jun', value: 2390 },
  { name: 'Jul', value: 3490 },
];

const dataBar = [
  { name: 'Product A', sales: 4000 },
  { name: 'Product B', sales: 3000 },
  { name: 'Product C', sales: 2000 },
  { name: 'Product D', sales: 2780 },
];

const dataPie = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

const Card = ({ title, value, icon, chartType, manager, role, comment }) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 flex flex-col">
      <div className="flex items-center mb-4">
        <div className="text-2xl mr-4">{icon}</div>
        <div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{title}</h2>
          <p className="text-xl font-bold text-gray-700 dark:text-gray-300">{value}</p>
        </div>
      </div>
      <div className="flex-1">
        {chartType === 'line' && (
          <LineChart width={300} height={150} data={dataLine}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
          </LineChart>
        )}
        {chartType === 'bar' && (
          <BarChart width={300} height={150} data={dataBar}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="sales" fill="#82ca9d" />
          </BarChart>
        )}
        {chartType === 'pie' && (
          <PieChart width={300} height={150}>
            <Pie data={dataPie} dataKey="value" outerRadius={60} fill="#8884d8">
              {dataPie.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={['#0088FE', '#00C49F', '#FFBB28', '#FF8042'][index % 4]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        )}
        {comment && (
          <div className="mt-4 bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow-md">
            <p className="text-gray-900 dark:text-gray-100">{comment}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">- {manager}, {role}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;
