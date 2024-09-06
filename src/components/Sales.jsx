import React from 'react';
import Card from '../components/Card'; // تأكد من المسار الصحيح
import { FaChartLine, FaDollarSign, FaBox, FaPieChart } from 'react-icons/fa';

const Sales = () => {
  return (
    <div className="flex-1 p-6 md:p-10 bg-gray-100 dark:bg-gray-900">
      <h1 className="text-2xl font-bold mb-4">Sales Analysis</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card title="Total Revenue" value="$150,000" icon={<FaDollarSign />} chartType="line" />
        <Card title="Monthly Growth" value="10%" icon={<FaChartLine />} chartType="bar" />
        <Card title="Top Product" value="Product XYZ" icon={<FaBox />} chartType="pie" />
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card 
          title="Manager Feedback" 
          comment="The total revenue is impressive, but we should focus on increasing the monthly growth rate to sustain this trend." 
          manager="Alice Johnson" 
          role="Sales Director" 
        />
        <Card 
          title="Manager Feedback" 
          comment="Our top product's performance is strong. It’s crucial to maintain this momentum and explore new market opportunities." 
          manager="Bob Smith" 
          role="Marketing Head" 
        />
        <Card 
          title="Manager Feedback" 
          comment="The monthly growth is on target, but we need to address the slow revenue growth in Q2." 
          manager="Charlie Brown" 
          role="Financial Analyst" 
        />
      </div>
    </div>
  );
}

export default Sales;
