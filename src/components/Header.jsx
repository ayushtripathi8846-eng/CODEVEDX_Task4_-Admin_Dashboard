// Header no longer uses local React hooks
import { FaBars, FaSearch, FaBell, FaMoon, FaSun, FaChevronDown } from 'react-icons/fa';

const Header = ({ isOpen, setIsOpen, darkMode, setDarkMode }) => {

  return (
    <header className="bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700 sticky top-0 z-40">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <FaBars className="text-gray-600" />
          </button>
          <div className="relative hidden md:block">
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {darkMode ? <FaSun className="text-orange-500" /> : <FaMoon className="text-gray-600" />}
          </button>
          
          <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors relative">
            <FaBell className="text-gray-600" />
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-medium">
              3
            </span>
          </button>

          <div className="flex items-center gap-2 pl-4 border-l border-gray-200">
            <div className="w-9 h-9 bg-blue-600 rounded-full flex items-center justify-center text-white font-medium">
              JD
            </div>
            <div className="hidden md:block">
              <p className="text-sm font-medium text-gray-800">John Doe</p>
              <p className="text-xs text-gray-500">Admin</p>
            </div>
            <FaChevronDown className="text-gray-400 text-sm hidden md:block" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
