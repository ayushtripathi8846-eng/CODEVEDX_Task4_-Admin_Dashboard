import { motion } from 'framer-motion';
import { FaUsers, FaShoppingCart, FaDollarSign, FaChartLine } from 'react-icons/fa';

const StatCards = () => {
  const stats = [
    {
      title: 'Total Users',
      value: '12,345',
      change: '+12.5%',
      trend: 'up',
      icon: <FaUsers />,
      color: 'bg-blue-50 text-blue-600',
      iconColor: 'bg-blue-100',
    },
    {
      title: 'Total Revenue',
      value: '$48,295',
      change: '+8.2%',
      trend: 'up',
      icon: <FaDollarSign />,
      color: 'bg-green-50 text-green-600',
      iconColor: 'bg-green-100',
    },
    {
      title: 'Total Orders',
      value: '3,842',
      change: '+5.7%',
      trend: 'up',
      icon: <FaShoppingCart />,
      color: 'bg-purple-50 text-purple-600',
      iconColor: 'bg-purple-100',
    },
    {
      title: 'Growth Rate',
      value: '+24.5%',
      change: '+2.1%',
      trend: 'up',
      icon: <FaChartLine />,
      color: 'bg-orange-50 text-orange-600',
      iconColor: 'bg-orange-100',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="stat-card"
        >
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <p className="text-sm text-gray-500 mb-1">{stat.title}</p>
              <h3 className="text-2xl font-bold text-gray-800">{stat.value}</h3>
              <div className="flex items-center gap-1 mt-2">
                <span className="text-sm font-medium text-green-600">
                  {stat.change}
                </span>
                <span className="text-sm text-gray-400">vs last month</span>
              </div>
            </div>
            <div className={`p-3 rounded-xl ${stat.iconColor}`}>
              <span className={`text-xl ${stat.color}`}>{stat.icon}</span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default StatCards;
