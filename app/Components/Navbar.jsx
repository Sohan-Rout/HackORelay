"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { FiChevronDown, FiX } from "react-icons/fi";

export const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navItems = [
    { label: "About", href: "/about" },
    { label: "Schedule", href: "/schedule" },
    { label: "Sponsors", href: "/sponsors" },
    { label: "Themes", href: "/themes" },
    { label: "Prizes", href: "/prizes" },
    { label: "FAQ", href: "/faq" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-neutral-950/90 backdrop-blur-md border-b border-neutral-800">
      {/* Glow effect under navbar */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent"></div>
      
      <div className={cn("flex items-center justify-between px-6 py-4 max-w-7xl mx-auto")}>
        {/* Clean gradient logo - no box */}
        <motion.a
          href="/"
          className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Hack'oRelay 4.0
        </motion.a>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-1 justify-center items-center space-x-8">
          {navItems.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              className="relative text-gray-200 hover:text-white transition-colors font-medium group"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </motion.a>
          ))}
        </div>

        {/* Register Button */}
        <motion.a
          href="/register"
          className="hidden md:block px-5 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/20 transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Register Now
        </motion.a>

        {/* Mobile Menu Button */}
        <div className="md:hidden relative">
          <motion.button
            className="flex items-center text-white focus:outline-none group"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isDropdownOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <>
                <span className="mr-1">Menu</span>
                <FiChevronDown className="w-5 h-5" />
              </>
            )}
          </motion.button>

          {/* Mobile Dropdown */}
          {isDropdownOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 mt-2 w-56 bg-neutral-900 rounded-lg shadow-xl py-2 z-50 border border-neutral-700 overflow-hidden"
            >
              {navItems.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className="block px-4 py-3 text-gray-200 hover:bg-neutral-800 transition-colors"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.a
                href="/register"
                className="block px-4 py-3 mx-2 mt-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-md text-center font-semibold"
                onClick={() => setIsDropdownOpen(false)}
              >
                Register Now
              </motion.a>
            </motion.div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;