import React from 'react';
import { motion } from 'framer-motion';
import { 
  Home, 
  Link2, 
  Star, 
  Tag, 
  Settings, 
  Archive,
  BarChart3,
  ChevronLeft
} from 'lucide-react';

interface SidebarProps {
  isCollapsed: boolean;
  toggleCollapsed: () => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  isCollapsed, 
  toggleCollapsed, 
  activeTab, 
  setActiveTab 
}) => {
  const menuItems = [
    { id: 'dashboard', icon: Home, label: 'Dashboard' },
    { id: 'links', icon: Link2, label: 'All Links' },
    { id: 'favorites', icon: Star, label: 'Favorites' },
    { id: 'tags', icon: Tag, label: 'Tags' },
    { id: 'analytics', icon: BarChart3, label: 'Analytics' },
    { id: 'archive', icon: Archive, label: 'Archive' },
    { id: 'settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <motion.div
      initial={false}
      animate={{
        width: isCollapsed ? 80 : 280,
      }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="bg-gray-900/50 backdrop-blur-xl border-r border-gray-800 h-screen flex flex-col relative"
    >
      {/* Header */}
      <div className="p-6 border-b border-gray-800">
        <div className="flex items-center justify-between">
          <motion.div
            initial={false}
            animate={{ opacity: isCollapsed ? 0 : 1 }}
            transition={{ duration: 0.2 }}
            className="flex items-center space-x-3"
          >
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-teal-400 rounded-lg flex items-center justify-center">
              <Link2 className="w-5 h-5 text-white" />
            </div>
            {!isCollapsed && (
              <div>
                <h1 className="text-xl font-bold text-white">Link Hive</h1>
                <p className="text-xs text-gray-400">Dynamic Storage</p>
              </div>
            )}
          </motion.div>
          <motion.button
            onClick={toggleCollapsed}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
          >
            <motion.div
              animate={{ rotate: isCollapsed ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronLeft className="w-5 h-5 text-gray-400" />
            </motion.div>
          </motion.button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-6">
        <div className="space-y-2 px-4">
          {menuItems.map((item, index) => (
            <motion.button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`
                w-full flex items-center space-x-3 px-3 py-3 rounded-xl transition-all duration-200
                ${activeTab === item.id 
                  ? 'bg-gradient-to-r from-purple-500/20 to-teal-400/20 text-white border border-purple-500/30' 
                  : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                }
              `}
            >
              <item.icon className="w-5 h-5" />
              <motion.span
                initial={false}
                animate={{ 
                  opacity: isCollapsed ? 0 : 1,
                  x: isCollapsed ? -10 : 0
                }}
                transition={{ duration: 0.2, delay: isCollapsed ? 0 : index * 0.05 }}
                className="font-medium"
              >
                {item.label}
              </motion.span>
            </motion.button>
          ))}
        </div>
      </nav>

      {/* User Section */}
      <motion.div
        initial={false}
        animate={{ opacity: isCollapsed ? 0 : 1 }}
        className="p-4 border-t border-gray-800"
      >
        <div className="flex items-center space-x-3 p-3 rounded-xl bg-gray-800/50">
          <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-teal-400 rounded-full flex items-center justify-center text-white font-semibold">
            JD
          </div>
          {!isCollapsed && (
            <div className="flex-1">
              <p className="text-white font-medium">John Doe</p>
              <p className="text-xs text-gray-400">john@example.com</p>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Sidebar;