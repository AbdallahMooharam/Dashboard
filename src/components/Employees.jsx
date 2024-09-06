import React from 'react';
import Card from '../components/Card'; // تأكد من المسار الصحيح
import { FaUsers, FaUserCheck, FaCalendarAlt, FaStar, FaGift, FaPlane, FaHandsHelping } from 'react-icons/fa';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

// بيانات افتراضية للرسوم البيانية
const dataLine = [
  { name: 'Jan', value: 20 },
  { name: 'Feb', value: 25 },
  { name: 'Mar', value: 30 },
  { name: 'Apr', value: 35 },
  { name: 'May', value: 40 },
  { name: 'Jun', value: 45 },
  { name: 'Jul', value: 50 },
];

const dataBar = [
  { name: 'Dept A', count: 30 },
  { name: 'Dept B', count: 50 },
  { name: 'Dept C', count: 70 },
  { name: 'Dept D', count: 90 },
];

const dataPie = [
  { name: 'Department X', value: 40 },
  { name: 'Department Y', value: 25 },
  { name: 'Department Z', value: 15 },
  { name: 'Department W', value: 20 },
];

const dataMotivation = [
  { name: 'Q1', value: 75 },
  { name: 'Q2', value: 85 },
  { name: 'Q3', value: 95 },
  { name: 'Q4', value: 80 },
];

const dataRewards = [
  { name: 'Employee A', reward: 1000 },
  { name: 'Employee B', reward: 1500 },
  { name: 'Employee C', reward: 2000 },
  { name: 'Employee D', reward: 2500 },
];

const dataTrips = [
  { name: 'Trip A', participants: 50 },
  { name: 'Trip B', participants: 40 },
  { name: 'Trip C', participants: 60 },
  { name: 'Trip D', participants: 30 },
];

const Employees = () => {
  return (
    <div className="flex-1 p-6 md:p-10 bg-gray-100 dark:bg-gray-900">
      <h1 className="text-2xl font-bold mb-4">Employees</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* بطاقات الموظفين */}
        <Card 
          title="Total Employees" 
          value="100" 
          icon={<FaUsers />} 
          chartType="line"
          chart={
            <ResponsiveContainer width="100%" height={150}>
              <LineChart data={dataLine}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="value" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          }
        />
        <Card 
          title="Employees Present" 
          value="25" 
          icon={<FaUserCheck />} 
          chartType="bar"
          chart={
            <ResponsiveContainer width="100%" height={150}>
              <BarChart data={dataBar}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="count" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          }
        />
        <Card 
          title="New Hires This Month" 
          value="5" 
          icon={<FaCalendarAlt />} 
          chartType="pie"
          chart={
            <ResponsiveContainer width="100%" height={150}>
              <PieChart>
                <Pie data={dataPie} dataKey="value" outerRadius={60} fill="#8884d8">
                  {dataPie.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={['#0088FE', '#00C49F', '#FFBB28', '#FF8042'][index % 4]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          }
        />
        
        {/* بطاقات التحفيز والمكافآت والرحلات */}
        <Card 
          title="Employee Motivation" 
          value="High" 
          icon={<FaStar />} 
          chartType="line"
          chart={
            <ResponsiveContainer width="100%" height={150}>
              <LineChart data={dataMotivation}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="value" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          }
        />
        <Card 
          title="Rewards Distribution" 
          value="$6000" 
          icon={<FaGift />} 
          chartType="bar"
          chart={
            <ResponsiveContainer width="100%" height={150}>
              <BarChart data={dataRewards}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="reward" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          }
        />
        <Card 
          title="Upcoming Trips" 
          value="4 Trips" 
          icon={<FaPlane />} 
          chartType="pie"
          chart={
            <ResponsiveContainer width="100%" height={150}>
              <PieChart>
                <Pie data={dataTrips} dataKey="participants" outerRadius={60} fill="#8884d8">
                  {dataTrips.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={['#0088FE', '#00C49F', '#FFBB28', '#FF8042'][index % 4]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          }
        />
        <Card 
          title="Team Building Activities" 
          value="Ongoing" 
          icon={<FaHandsHelping />} 
          chartType="line"
          chart={
            <ResponsiveContainer width="100%" height={150}>
              <LineChart data={dataLine}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="value" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          }
        />
      </div>
    </div>
  );
}

export default Employees;
