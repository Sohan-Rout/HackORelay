"use client";
import { FaInstagram, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { motion } from "framer-motion";
import { BackgroundBeamsWithCollision } from "@/app/Components/ui/background-beams-with-collision";

export const Footer = () => {
  return (
    <div className="relative w-full bg-black border-t border-purple-500/20">
        <div className="container mx-auto px-4 py-16 relative z-10">
          {/* Footer Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-7xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              {/* GDG Branding */}
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <img 
                    src="./gdg-cropped.svg" 
                    alt="GDG Logo" 
                    className="h-8 w-auto"
                  />
                  <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                    GDG DCE
                  </span>
                </div>
                <p className="text-gray-300 text-sm">
                  Fostering innovation and technical excellence in the developer community.
                </p>
                
                {/* Social Links */}
                <div className="flex space-x-4">
                  {[
                    { icon: <FaGithub className="w-5 h-5" />, label: "GitHub" },
                    { icon: <FaLinkedinIn className="w-5 h-5" />, label: "LinkedIn" },
                    { icon: <FaInstagram className="w-5 h-5" />, label: "Instagram" },
                    { icon: <FaTwitter className="w-5 h-5" />, label: "Twitter" },
                    { icon: <CiMail className="w-5 h-5" />, label: "Email" },
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href="#"
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {social.icon}
                      <span className="sr-only">{social.label}</span>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Links Sections */}
              {[
                { 
                  title: "Event", 
                  links: ["About", "Schedule", "Themes", "Prizes", "Register"] 
                },
                { 
                  title: "Resources", 
                  links: ["FAQs", "Contact", "Sponsors", "Judges", "Mentors"] 
                },
                { 
                  title: "Legal", 
                  links: ["Privacy Policy", "Terms", "Code of Conduct", "Cookies"] 
                }
              ].map((section, index) => (
                <div key={index} className="space-y-4">
                  <motion.h3 
                    className="text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {section.title}
                  </motion.h3>
                  <ul className="space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <motion.li
                        key={linkIndex}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 + linkIndex * 0.05 }}
                        viewport={{ once: true }}
                      >
                        <a 
                          href="#" 
                          className="text-sm text-gray-300 hover:text-blue-400 transition-colors"
                        >
                          {link}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Divider */}
            <motion.div 
              className="border-t border-purple-500/20 my-12"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            />

            {/* Bottom Copyright */}
            <div className="flex flex-col md:flex-row justify-between items-center">
              <motion.p 
                className="text-xs text-gray-400"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                &copy; 2025 GDG DCE. All rights reserved.
              </motion.p>
              
              <motion.div 
                className="flex space-x-6 mt-4 md:mt-0"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
              >
                {["Privacy Policy", "Terms of Service", "Code of Conduct"].map((item, index) => (
                  <a 
                    key={index}
                    href="#" 
                    className="text-xs text-gray-400 hover:text-blue-400 transition-colors"
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