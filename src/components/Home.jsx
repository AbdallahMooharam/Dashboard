// src/components/Home.jsx
import React from 'react';
import Card from './Card';
import SalesChart from './SalesChart';
import EmployeesChart from './EmployeesChart';
import ClientsChart from './ClientsChart';
import AppointmentsChart from './AppointmentsChart';
import InteractiveChart from './InteractiveChart';
import PredictiveAnalytics from './PredictiveAnalytics';
import InteractiveMap from './InteractiveMap';
import LiveNotifications from './LiveNotifications';
import AdvancedAnalytics from './AdvancedAnalytics';
import DashboardCustomization from './DashboardCustomization';
import ThemeToggle from './ThemeToggle';
import { FaDollarSign, FaUsers, FaUserAlt, FaCalendarCheck } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="flex-1 p-6 md:p-10 bg-gray-100 dark:bg-gray-900">
      {/* زر التبديل بين الوضع المظلم والفاتح */}
      <div className="flex justify-end mb-5">
        <ThemeToggle />
      </div>

      {/* عرض الكاردات */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <Card title="Sales Analysis" value="$20,000" icon={<FaDollarSign />} />
        <Card title="Employees Present" value="25" icon={<FaUsers />} />
        <Card title="New Clients" value="15" icon={<FaUserAlt />} />
        <Card title="Appointments" value="30" icon={<FaCalendarCheck />} />
      </div>

      {/* عرض الرسوم البيانية الأساسية */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-10">
        <SalesChart />
        <EmployeesChart />
        <ClientsChart />
        <AppointmentsChart />
      </div>

      {/* عرض الرسوم البيانية التفاعلية والتحليل التنبؤي */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-10">
        <InteractiveChart />
        <PredictiveAnalytics />
      </div>

      {/* عرض الخريطة التفاعلية والإشعارات الحية */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-10">
        <InteractiveMap />
        <LiveNotifications />
      </div>

      {/* عرض التحليل المتقدم وتخصيص لوحة القيادة */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        <AdvancedAnalytics />
        <DashboardCustomization />
      </div>
    </div>
  );
}

export default Home;
