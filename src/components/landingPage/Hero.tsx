import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from "react-router-dom";
import { ArrowRight, Play, Link2, Sparkles} from 'lucide-react';

const Hero: React.FC = () => {
  const floatingElements = Array.from({ length: 8 }, (_, i) => i);
  const navigate  = useNavigate();



  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-transparent to-teal-900/20"></div>
      
      {/* Animated Background Elements */}
      {floatingElements.map((i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-teal-400 rounded-full opacity-30"
          animate={{
            x: [0, 100, -100, 0],
            y: [0, -100, 100, 0],
            scale: [1, 1.5, 0.5, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut"
          }}
          style={{
            left: `${10 + i * 12}%`,
            top: `${20 + (i % 3) * 30}%`,
          }}
        />
      ))}

      {/* Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Logo/Brand */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 flex items-center justify-center space-x-3"
        >
          <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-teal-400 rounded-2xl flex items-center justify-center">
            <Link2 className="w-7 h-7 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white">Link Hive</h1>
        </motion.div>

        {/* Main Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight"
        >
          Your Links,{' '}
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-teal-400 bg-clip-text text-transparent">
            Smarter
          </span>{' '}
          &{' '}
          <span className="bg-gradient-to-r from-teal-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Seamlessly
          </span>{' '}
          Organized
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
        >
          Save, organize, search, and share your links effortlessly across all devices.
          Experience the future of link management with our intelligent platform.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="group bg-gradient-to-r from-purple-600 to-teal-500 hover:from-purple-500 hover:to-teal-400 text-white px-8 py-4 rounded-2xl font-semibold text-lg flex items-center space-x-3 transition-all duration-300 shadow-lg shadow-purple-500/25"
             onClick={() => navigate("/signup")}
          >
            <Sparkles className="w-5 h-5" />
            <span>Get Started Free</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight className="w-5 h-5" />
            </motion.div>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center space-x-3 text-white border border-gray-600 hover:border-purple-500/50 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-gray-800/20"
           
          >
            <Play className="w-5 h-5 text-purple-400" />
            <span>Watch Demo</span>
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto"
        >
          {[
            { number: '50K+', label: 'Links Organized' },
            { number: '10K+', label: 'Happy Users' },
            { number: '99.9%', label: 'Uptime' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-center group"
            >
              <div className="text-3xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                {stat.number}
              </div>
              <div className="text-gray-400 group-hover:text-gray-300 transition-colors">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;