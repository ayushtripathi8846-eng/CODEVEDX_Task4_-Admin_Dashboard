import { useState } from 'react';
import Sidebar from './components/Sidebar';
import MobileSidebar from './components/MobileSidebar';
import Header from './components/Header';
import StatCards from './components/StatCards';
import AnalyticsCharts from './components/AnalyticsCharts';
import UsersTable from './components/UsersTable';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="space-y-8">
            <StatCards />
            <AnalyticsCharts />
          </div>
        );
      case 'analytics':
        return (
          <div className="space-y-8">
            <AnalyticsCharts />
          </div>
        );
      case 'users':
        return <UsersTable />;
      case 'orders':
        return (
          <div className="card p-8 text-center">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">Orders Management</h2>
            <p className="text-gray-500">Orders feature coming soon...</p>
          </div>
        );
      case 'messages':
        return (
          <div className="card p-8 text-center">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">Messages</h2>
            <p className="text-gray-500">Messages feature coming soon...</p>
          </div>
        );
      case 'settings':
        return (
          <div className="card p-8 text-center">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">Settings</h2>
            <p className="text-gray-500">Settings feature coming soon...</p>
          </div>
        );
      default:
        return (
          <div className="card p-8 text-center">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">Dashboard</h2>
            <p className="text-gray-500">Welcome to the admin dashboard</p>
          </div>
        );
    }
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Sidebar
          isOpen={isSidebarOpen}
          setIsOpen={setIsSidebarOpen}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <MobileSidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className={`transition-all duration-300 ${isSidebarOpen ? 'lg:ml-64' : 'lg:ml-20'}`}>
          <Header isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} darkMode={darkMode} setDarkMode={setDarkMode} />
          <main className="p-6 lg:p-8" style={{ minHeight: 'calc(100vh - 64px)' }}>
            {renderContent()}
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;