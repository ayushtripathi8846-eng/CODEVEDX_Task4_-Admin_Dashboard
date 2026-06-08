import { FaHome, FaChartBar, FaUsers, FaCog, FaSignOutAlt, FaShoppingBag, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Sidebar = ({ isOpen, activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <FaHome /> },
    { id: 'analytics', label: 'Analytics', icon: <FaChartBar /> },
    { id: 'users', label: 'Users', icon: <FaUsers /> },
    { id: 'orders', label: 'Orders', icon: <FaShoppingBag /> },
    { id: 'messages', label: 'Messages', icon: <FaEnvelope /> },
    { id: 'settings', label: 'Settings', icon: <FaCog /> },
  ];

  return (
    <>
      <motion.aside
        initial={false}
        animate={{ width: isOpen ? 256 : 80 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="hidden md:block fixed left-0 top-0 h-screen bg-white dark:bg-gray-800 border-r border-gray-100 dark:border-gray-700 flex flex-col z-50"
      >
        {/* Logo */}
        <div className="flex items-center gap-3 px-6 py-6 border-b border-gray-100">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-lg">
            A
          </div>
          {isOpen && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="font-bold text-xl text-gray-800"
            >
              Admin
            </motion.span>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-6 px-3 space-y-1">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`sidebar-link w-full text-left ${
                activeTab === item.id ? 'active' : ''
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              {isOpen && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  {item.label}
                </motion.span>
              )}
            </button>
          ))}
        </nav>

        {/* Logout */}
        <div className="p-3 border-t border-gray-100">
          <button className="sidebar-link w-full text-left text-red-600 hover:bg-red-50">
            <span className="text-lg"><FaSignOutAlt /></span>
            {isOpen && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                Logout
              </motion.span>
            )}
          </button>
        </div>
      </motion.aside>
    </>
  );
};

export default Sidebar;
