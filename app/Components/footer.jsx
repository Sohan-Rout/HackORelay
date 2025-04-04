"use client";
import { FaInstagram, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <div className="relative w-full bg-neutral-950 border-t border-purple-500/20">
      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Footer Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-7xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* GDG Branding - More compact */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <img 
                  src="./gdg-cropped.svg" 
                  alt="GDG Logo" 
                  className="h-6 w-auto"
                />
                <span className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                  GDG DCE
                </span>
              </div>
              <p className="text-gray-400 text-xs">
                Fostering innovation in the developer community.
              </p>
              
              {/* Social Links - Smaller */}
              <div className="flex space-x-3">
                {[
                  { icon: <FaGithub className="w-4 h-4" />, label: "GitHub" },
                  { icon: <FaLinkedinIn className="w-4 h-4" />, label: "LinkedIn" },
                  { icon: <FaInstagram className="w-4 h-4" />, label: "Instagram" },
                  { icon: <FaTwitter className="w-4 h-4" />, label: "Twitter" },
                  { icon: <CiMail className="w-4 h-4" />, label: "Email" },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    className="text-gray-500 hover:text-blue-400 transition-colors"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.icon}
                    <span className="sr-only">{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Compact Links Sections */}
            {[
              { 
                title: "Event", 
                links: ["About", "Schedule", "Themes", "Prizes"] 
              },
              { 
                title: "Resources", 
                links: ["FAQs", "Contact", "Sponsors", "Judges"] 
              },
              { 
                title: "Legal", 
                links: ["Privacy", "Terms", "Conduct"] 
              }
            ].map((section, index) => (
              <div key={index} className="space-y-3">
                <motion.h3 
                  className="text-xs font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 uppercase tracking-wider"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {section.title}
                </motion.h3>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <motion.li
                      key={linkIndex}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 + linkIndex * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <a 
                        href="#" 
                        className="text-xs text-gray-400 hover:text-blue-400 transition-colors"
                      >
                        {link}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Divider - Thinner */}
          <motion.div 
            className="border-t border-purple-500/20 my-8"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          />

          {/* Compact Bottom Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <motion.p 
              className="text-[0.65rem] text-gray-500"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              &copy; 2025 GDG DCE. All rights reserved.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap justify-center gap-3 mt-3 md:mt-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              {["Privacy", "Terms", "Conduct"].map((item, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="text-[0.65rem] text-gray-500 hover:text-blue-400 transition-colors"
                >
                  {item}
                </a>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Footer;