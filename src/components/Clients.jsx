import React from 'react';
import Card from '../components/Card'; // تأكد من المسار الصحيح
import { FaUserAlt, FaUserFriends, FaChartLine, FaCalendarAlt } from 'react-icons/fa';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

// بيانات افتراضية للرسوم البيانية
const dataLine = [
  { name: 'Jan', clients: 300 },
  { name: 'Feb', clients: 350 },
  { name: 'Mar', clients: 400 },
  { name: 'Apr', clients: 420 },
  { name: 'May', clients: 450 },
  { name: 'Jun', clients: 470 },
  { name: 'Jul', clients: 500 },
];

const dataBar = [
  { name: 'Week 1', newClients: 5 },
  { name: 'Week 2', newClients: 7 },
  { name: 'Week 3', newClients: 4 },
  { name: 'Week 4', newClients: 4 },
];

const dataPie = [
  { name: 'High Retention', value: 70 },
  { name: 'Medium Retention', value: 15 },
  { name: 'Low Retention', value: 15 },
];

const dataActivities = [
  { name: 'Activity A', participants: 20 },
  { name: 'Activity B', participants: 30 },
  { name: 'Activity C', participants: 25 },
  { name: 'Activity D', participants: 15 },
];

const Clients = () => {
  return (
    <div className="flex-1 p-6 md:p-10 bg-gray-100 dark:bg-gray-900">
      <h1 className="text-2xl font-bold mb-4">New Clients</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* إجمالي العملاء */}
        <Card 
          title="Total Clients" 
          value="500" 
          icon={<FaUserFriends />} 
          chartType="line"
          chart={
            <ResponsiveContainer width="100%" height={150}>
              <LineChart data={dataLine}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="clients" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          }
        />
        {/* العملاء الجدد لهذا الشهر */}
        <Card 
          title="New Clients This Month" 
          value="20" 
          icon={<FaUserAlt />} 
          chartType="bar"
          chart={
            <ResponsiveContainer width="100%" height={150}>
              <BarChart data={dataBar}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="newClients" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          }
        />
        {/* معدل الاحتفاظ بالعملاء */}
        <Card 
          title="Client Retention Rate" 
          value="85%" 
          icon={<FaUserFriends />} 
          chartType="pie"
          chart={
            <ResponsiveContainer width="100%" height={150}>
              <PieChart>
                <Pie data={dataPie} dataKey="value" outerRadius={60} fill="#8884d8">
                  {dataPie.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={['#0088FE', '#00C49F', '#FFBB28'][index % 3]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          }
        />
        {/* تحليل النشاطات الأخيرة */}
        <Card 
          title="Recent Client Activities" 
          value="Active" 
          icon={<FaChartLine />} 
          chartType="bar"
          chart={
            <ResponsiveContainer width="100%" height={150}>
              <BarChart data={dataActivities}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="participants" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          }
        />
      </div>
    </div>
  );
}

export default Clients;
