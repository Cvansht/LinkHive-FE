import React from 'react';
import { motion } from 'framer-motion';
import { Search, Bell, Settings, Plus } from 'lucide-react';

interface NavbarProps {
  onAddLink: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onAddLink }) => {
  return (
    <div className="bg-gray-900/30 backdrop-blur-xl border-b border-gray-800 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Search Bar */}
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search your links..."
              className="w-full bg-gray-800/50 border border-gray-700 rounded-xl pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4 ml-6">
          <motion.button
            onClick={onAddLink}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-500 to-teal-400 hover:from-purple-600 hover:to-teal-500 text-white px-4 py-2 rounded-xl font-medium flex items-center space-x-2 transition-all shadow-lg shadow-purple-500/25"
          >
            <Plus className="w-4 h-4" />
            <span>Add Link</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 hover:bg-gray-800/50 rounded-xl transition-colors relative"
          >
            <Bell className="w-5 h-5 text-gray-400" />
            <div className="absolute top-1 right-1 w-2 h-2 bg-purple-500 rounded-full"></div>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 hover:bg-gray-800/50 rounded-xl transition-colors"
          >
            <Settings className="w-5 h-5 text-gray-400" />
          </motion.button>

          <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-teal-400 rounded-full flex items-center justify-center text-white font-semibold cursor-pointer">
            JD
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;