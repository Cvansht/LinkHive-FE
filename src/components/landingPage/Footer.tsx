import React from 'react';
import { motion } from 'framer-motion';
import { Link2, Twitter, Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const footerLinks = {
    Product: ['Features', 'Pricing', 'Security', 'Integrations'],
    Company: ['About', 'Blog', 'Careers', 'Press'],
    Resources: ['Documentation', 'Help Center', 'API', 'Status'],
    Legal: ['Privacy', 'Terms', 'Cookies', 'GDPR']
  };

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: '#', label: 'Email' }
  ];

  return (
    <footer className="relative bg-gray-950 border-t border-gray-800">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 w-96 h-32 bg-purple-500/5 rounded-full blur-3xl transform -translate-x-1/2"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-teal-400 rounded-xl flex items-center justify-center">
                  <Link2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Link Hive</h3>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                The ultimate link management platform for modern professionals. 
                Organize, search, and share your links with unprecedented ease.
              </p>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex space-x-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-r hover:from-purple-500 hover:to-teal-400 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links], sectionIndex) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 + sectionIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white font-semibold mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link, linkIndex) => (
                  <motion.li key={linkIndex}>
                    <motion.a
                      href="#"
                      whileHover={{ x: 2 }}
                      className="text-gray-400 hover:text-white transition-all duration-200 block"
                    >
                      {link}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <div className="text-gray-400 text-sm">
            © 2025 Link Hive. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-6 text-sm">
            <motion.a
              href="#"
              whileHover={{ y: -1 }}
              className="text-gray-400 hover:text-white transition-colors"
            >
              Privacy Policy
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ y: -1 }}
              className="text-gray-400 hover:text-white transition-colors"
            >
              Terms of Service
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ y: -1 }}
              className="text-gray-400 hover:text-white transition-colors"
            >
              Cookie Settings
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;