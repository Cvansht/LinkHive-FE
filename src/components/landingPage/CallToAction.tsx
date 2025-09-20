import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Zap } from 'lucide-react';
import { useNavigate } from "react-router-dom";
const CallToAction: React.FC = () => {
     const navigate  = useNavigate();
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-gray-950 to-teal-900/20"></div>
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute top-1/4 right-1/4 w-72 h-72 bg-teal-500/20 rounded-full blur-3xl"
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Floating Icons */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-16 left-1/4 text-purple-400/40"
        >
          <Sparkles className="w-12 h-12" />
        </motion.div>
        <motion.div
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute -top-12 right-1/4 text-teal-400/40"
        >
          <Zap className="w-10 h-10" />
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Start Organizing{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-teal-400 bg-clip-text text-transparent">
              Smarter
            </span>{' '}
            Today
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join thousands of professionals who have already revolutionized their link management.
            Start your free journey today.
          </p>
        </motion.div>

        {/* CTA Button with Pulsing Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative inline-block"
        >
          {/* Pulsing Ring */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 bg-gradient-to-r from-purple-500 to-teal-400 rounded-2xl blur-sm"
          />

          {/* Main Button */}
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 25px 50px rgba(139, 92, 246, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            className="relative group bg-gradient-to-r from-purple-600 to-teal-500 hover:from-purple-500 hover:to-teal-400 text-white px-10 py-5 rounded-2xl font-bold text-xl flex items-center space-x-4 transition-all duration-300 shadow-lg shadow-purple-500/25"
             onClick={() => navigate("/signup")}
          >
            <Sparkles className="w-6 h-6" />
            <span>Get Started for Free</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight className="w-6 h-6" />
            </motion.div>

            {/* Button Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-teal-500 rounded-2xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10"></div>
          </motion.button>
        </motion.div>

        {/* Features List */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-wrap justify-center gap-8 text-gray-400"
        >
          {[
            '✨ No credit card required',
            '🚀 Setup in under 2 minutes', 
            '🔒 Enterprise-grade security',
            '💫 Cancel anytime'
          ].map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, color: '#ffffff' }}
              className="flex items-center space-x-2 cursor-default transition-colors"
            >
              <span>{feature}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;