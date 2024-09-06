import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import ResponsiveSidebar from './components/ResponsiveSidebar';
import Home from './components/Home';
import Sales from './components/Sales';
import Employees from './components/Employees';
import Clients from './components/Clients';
import Footer from './components/Footer'; // استيراد الفوتر

const App = () => {
  return (
    <Router>
      <div className="flex flex-col h-screen">
        <div className="flex flex-1">
          {/* شريط جانبي ثابت للشاشات الكبيرة */}
          <Sidebar />
          
          {/* شريط جانبي قابل للتنقل للشاشات الصغيرة */}
          <ResponsiveSidebar />
          
          <div className="flex-1 ml-64 md:ml-0">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sales" element={<Sales />} />
              <Route path="/employees" element={<Employees />} />
              <Route path="/clients" element={<Clients />} />
            </Routes>
          </div>
        </div>
        
        {/* إضافة الفوتر في الأسفل */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
