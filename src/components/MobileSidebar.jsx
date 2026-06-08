import { FaHome, FaChartBar, FaUsers, FaCog, FaSignOutAlt, FaShoppingBag, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const MobileSidebar = ({ isOpen, setIsOpen, activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <FaHome /> },
    { id: 'analytics', label: 'Analytics', icon: <FaChartBar /> },
    { id: 'users', label: 'Users', icon: <FaUsers /> },
    { id: 'orders', label: 'Orders', icon: <FaShoppingBag /> },
    { id: 'messages', label: 'Messages', icon: <FaEnvelope /> },
    { id: 'settings', label: 'Settings', icon: <FaCog /> },
  ];

  // Do not render anything when closed
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/30 z-40 md:hidden"
        onClick={() => setIsOpen(false)}
      />
      {/* Sidebar drawer */}
      <motion.aside
        initial={{ x: '-100%' }}
        animate={{ x: 0 }}
        exit={{ x: '-100%' }}
        transition={{ duration: 0.3 }}
        className="fixed inset-y-0 left-0 w-64 bg-white dark:bg-gray-800 border-r border-gray-100 dark:border-gray-700 flex flex-col z-50 md:hidden"
      >
        {/* Logo */}
        <div className="flex items-center gap-3 px-6 py-6 border-b border-gray-100">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-lg">
            A
          </div>
          <span className="font-bold text-xl text-gray-800">Admin</span>
        </div>
        {/* Navigation */}
        <nav className="flex-1 py-6 px-3 space-y-1">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setIsOpen(false);
              }}
              className={`sidebar-link w-full text-left ${activeTab === item.id ? 'active' : ''}`}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="ml-2">{item.label}</span>
            </button>
          ))}
        </nav>
        {/* Logout */}
        <div className="p-3 border-t border-gray-100">
          <button className="sidebar-link w-full text-left text-red-600 hover:bg-red-50">
            <span className="text-lg"><FaSignOutAlt /></span>
            <span className="ml-2">Logout</span>
          </button>
        </div>
      </motion.aside>
    </>
  );
};

export default MobileSidebar;
