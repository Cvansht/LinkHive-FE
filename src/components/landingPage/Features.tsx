import React from 'react';
import { motion } from 'framer-motion';
import { 
  FolderOpen, 
  Search, 
  Smartphone, 
  Share2, 
  Zap, 
  Download, 
  Shield, 
  Palette 
} from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: FolderOpen,
      title: 'Smart Link Organization',
      description: 'Organize with collections, tags, and drag & drop functionality for effortless management.'
    },
    {
      icon: Search,
      title: 'Lightning-Fast Search',
      description: 'Find any link instantly with our global search and keyword highlighting system.'
    },
    {
      icon: Smartphone,
      title: 'Cross-Device Sync',
      description: 'Access your links anywhere with real-time syncing across desktop, tablet, and mobile.'
    },
    {
      icon: Share2,
      title: 'One-Click Sharing',
      description: 'Share collections securely with customizable permissions and access controls.'
    },
    {
      icon: Zap,
      title: 'Distraction-Free UI',
      description: 'Focus on what matters with our minimal dark interface and smooth animations.'
    },
    {
      icon: Download,
      title: 'Import & Export',
      description: 'Migrate from other tools or backup your data with seamless import/export options.'
    },
    {
      icon: Shield,
      title: 'Privacy & Security',
      description: 'Your links are encrypted, secure, and completely private. We never track or sell data.'
    },
    {
      icon: Palette,
      title: 'Personalization',
      description: 'Customize themes, pin collections, and create custom previews that fit your workflow.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950"></div>
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl transform -translate-x-1/2"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Powerful{' '}
            <span className="bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
              Features
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Everything you need to manage, organize, and share your links like a pro.
            Built for modern workflows and designed for maximum productivity.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              //@ts-ignore
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.2 }
              }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 h-full transition-all duration-300 group-hover:border-purple-500/30 group-hover:shadow-lg group-hover:shadow-purple-500/10">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-teal-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Icon */}
                <div className="relative mb-6">
                  <div className="w-14 h-14 bg-gradient-to-r from-purple-500/20 to-teal-500/20 rounded-2xl flex items-center justify-center group-hover:from-purple-500/30 group-hover:to-teal-500/30 transition-all duration-300">
                    <feature.icon className="w-7 h-7 text-purple-400 group-hover:text-purple-300 transition-colors" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-100 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                    {feature.description}
                  </p>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-500/10 to-transparent rounded-bl-2xl rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;