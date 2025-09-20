import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Product Designer',
      company: 'Figma',
      avatar: 'https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      quote: 'Link Hive transformed how I organize design resources. The search is incredibly fast and the interface is beautiful.',
      rating: 5
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Software Engineer',
      company: 'Stripe',
      avatar: 'https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      quote: 'Finally, a link manager that doesn\'t get in my way. The dark theme and smooth animations make it a joy to use.',
      rating: 5
    },
    {
      name: 'Emily Watson',
      role: 'Content Creator',
      company: 'YouTube',
      avatar: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      quote: 'I love how I can organize my research links and share collections with my team. It\'s made collaboration so much easier.',
      rating: 5
    },
    {
      name: 'David Park',
      role: 'Startup Founder',
      company: 'TechFlow',
      avatar: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      quote: 'Link Hive is essential for managing our company resources. The cross-device sync keeps our team aligned.',
      rating: 5
    },
    {
      name: 'Lisa Thompson',
      role: 'UX Researcher',
      company: 'Airbnb',
      avatar: 'https://images.pexels.com/photos/3796237/pexels-photo-3796237.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      quote: 'The smart organization features are game-changing. It automatically tags my links and makes finding them effortless.',
      rating: 5
    },
    {
      name: 'Alex Kim',
      role: 'Marketing Director',
      company: 'Notion',
      avatar: 'https://images.pexels.com/photos/3777952/pexels-photo-3777952.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      quote: 'I\'ve tried many bookmark managers, but Link Hive\'s UI and features are in a league of their own.',
      rating: 5
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
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950"></div>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>

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
            Loved by{' '}
            <span className="bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
              Thousands
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Join thousands of professionals who have transformed their workflow with Link Hive.
            See what they have to say about their experience.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
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
              {/* Glassmorphism Card */}
              <div className="relative bg-gray-900/30 backdrop-blur-xl border border-gray-800/50 rounded-2xl p-8 h-full transition-all duration-300 group-hover:border-purple-500/30 group-hover:shadow-lg group-hover:shadow-purple-500/10">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-teal-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative">
                  {/* Quote Icon */}
                  <div className="mb-6">
                    <Quote className="w-8 h-8 text-purple-400/60" />
                  </div>

                  {/* Rating */}
                  <div className="flex space-x-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-gray-300 text-lg leading-relaxed mb-8 group-hover:text-white transition-colors">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-gray-700 group-hover:ring-purple-500/50 transition-all">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="text-white font-semibold group-hover:text-purple-100 transition-colors">
                        {testimonial.name}
                      </div>
                      <div className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                        {testimonial.role} at {testimonial.company}
                      </div>
                    </div>
                  </div>
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

export default Testimonials;