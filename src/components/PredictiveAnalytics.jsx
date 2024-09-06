// src/components/PredictiveAnalytics.js
import React from 'react';

const PredictiveAnalytics = () => {
  // مثال على التنبؤ بالبيانات
  const futureSales = [10000, 11000, 12000, 13000, 14000]; // بيانات متوقعة

  return (
    <div className="bg-white shadow-md rounded-lg p-5">
      <h2 className="text-xl font-semibold mb-4">Predictive Analytics</h2>
      <ul>
        {futureSales.map((value, index) => (
          <li key={index} className="mb-2">Month {index + 1}: ${value}</li>
        ))}
      </ul>
    </div>
  );
}

export default PredictiveAnalytics;
