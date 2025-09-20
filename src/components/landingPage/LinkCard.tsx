// import React from 'react';
// import { motion } from 'framer-motion';
// import { ExternalLink, Star, Trash2, Tag, Calendar } from 'lucide-react';

// interface LinkData {
//   id: string;
//   title: string;
//   url: string;
//   description: string;
//   favicon: string;
//   tags: string[];
//   createdAt: string;
//   isFavorite: boolean;
//   clicks: number;
// }

// interface LinkCardProps {
//   link: LinkData;
//   index: number;
//   onToggleFavorite: (id: string) => void;
//   onDelete: (id: string) => void;
// }

// const LinkCard: React.FC<LinkCardProps> = ({ 
//   link, 
//   index, 
//   onToggleFavorite, 
//   onDelete 
// }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5, delay: index * 0.1 }}
//       whileHover={{ y: -5 }}
//       className="group bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-purple-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
//     >
//       {/* Header */}
//       <div className="flex items-start justify-between mb-4">
//         <div className="flex items-center space-x-3 flex-1">
//           <div className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-ce