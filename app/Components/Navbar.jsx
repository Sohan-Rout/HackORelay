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
    <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-neutral-900/30 backdrop-blur-md border-b border-gradient-to-r from-blue-500 to-purple-500">
      <div className={cn("flex items-center justify-between px-6 py-4 max-w-7xl mx-auto")}>
        {/* Logo */}
        <motion.a
          href="/"
          className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Hack'oRelay 4.0
        </motion.a>

        {/* Desktop Menu - Centered */}
        <div className="hidden md:flex flex-1 justify-center items-center space-x-6">
          {navItems.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              className="text-gray-300 hover:text-blue-400 transition-colors font-medium"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              {item.label}
            </motion.a>
          ))}
        </div>

        {/* Register Button for Desktop */}
        <motion.a
          href="/register"
          className="hidden md:block px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-xl transition-shadow"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Register Now
        </motion.a>

        {/* Mobile Dropdown Button */}
        <div className="md:hidden relative">
          <button
            className="flex items-center text-white focus:outline-none"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            {isDropdownOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <>
                <span className="mr-1 ">Menu</span>
                <FiChevronDown className="w-5 h-5" />
              </>
            )}
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 mt-2 w-48 bg-neutral-800/95 backdrop-blur-lg rounded-lg shadow-xl py-1 z-50"
            >
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-4 py-2 text-gray-300 hover:bg-neutral-700/50 transition-colors"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="/register"
                className="block px-4 py-2 mt-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-md mx-2 mb-1 text-center font-semibold"
                onClick={() => setIsDropdownOpen(false)}
              >
                Register Now
              </a>
            </motion.div>
          )}
        </div>
      </div>

      <style jsx>{`
        .border-gradient-to-r {
          border-image: linear-gradient(to right, #4285F4, #A855F7) 1;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;