import React from 'react';
import { motion } from 'framer-motion';
import { Play, Search, Share2, Star } from 'lucide-react';

const Showcase: React.FC = () => {
  const mockLinks = [
    { title: 'React Documentation', domain: 'react.dev', tags: ['Development', 'React'] },
    { title: 'Figma Design System', domain: 'figma.com', tags: ['Design', 'UI/UX'] },
    { title: 'TypeScript Handbook', domain: 'typescriptlang.org', tags: ['Development', 'TypeScript'] },
    { title: 'Framer Motion', domain: 'framer.com', tags: ['Animation', 'React'] },
  ];

  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950"></div>
      <div className="absolute bottom-0 right-1/2 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl"></div>

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
            See It in{' '}
            <span className="bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent">
              Action
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Experience the intuitive interface and powerful features that make Link Hive
            the ultimate link management solution.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Demo Features */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {[
              {
                icon: Search,
                title: 'Instant Search',
                description: 'Find any link in milliseconds with our smart search algorithm.',
                color: 'from-purple-500 to-pink-500'
              },
              {
                icon: Star,
                title: 'Smart Organization',
                description: 'Automatically categorize and tag your links for easy discovery.',
                color: 'from-yellow-500 to-orange-500'
              },
              {
                icon: Share2,
                title: 'Seamless Sharing',
                description: 'Share collections with team members or make them public.',
                color: 'from-teal-500 to-cyan-500'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-3 bg-gradient-to-r from-purple-600 to-teal-500 hover:from-purple-500 hover:to-teal-400 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
            >
              <Play className="w-5 h-5" />
              <span>Try Interactive Demo</span>
            </motion.button>
          </motion.div>

          {/* App Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: -15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Mock Dashboard */}
            <div className="relative bg-gray-900 rounded-2xl border border-gray-700 overflow-hidden shadow-2xl">
              {/* Header */}
              <div className="bg-gray-800 px-6 py-4 border-b border-gray-700">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-gray-400 text-sm">Link Hive Dashboard</div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Search Bar */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mb-6"
                >
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="text"
                      placeholder="Search your links..."
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-4 py-2 text-white text-sm"
                    />
                  </div>
                </motion.div>

                {/* Link Cards */}
                <div className="space-y-3">
                  {mockLinks.map((link, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                      whileHover={{ x: 5 }}
                      className="bg-gray-800 rounded-lg p-4 border border-gray-700 hover:border-purple-500/30 transition-all cursor-pointer"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h4 className="text-white font-medium text-sm mb-1">{link.title}</h4>
                          <p className="text-gray-400 text-xs mb-2">{link.domain}</p>
                          <div className="flex space-x-2">
                            {link.tags.map((tag, tagIndex) => (
                              <span
                                key={tagIndex}
                                className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                        <Star className="w-4 h-4 text-gray-600 hover:text-yellow-400 transition-colors" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 w-8 h-8 bg-purple-500 rounded-full opacity-60"
            />
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-6 -left-6 w-6 h-6 bg-teal-500 rounded-full opacity-40"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;