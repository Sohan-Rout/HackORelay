"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "About", href: "/about" },
    { label: "Schedule", href: "/schedule" },
    { label: "Sponsors", href: "/sponsors" },
    { label: "Themes", href: "/themes" },
    { label: "Prizes", href: "/prizes" },
    { label: "FAQ", href: "/faq" },
  ];

  const menuVariants = {
    closed: { opacity: 0, y: -20, transition: { duration: 0.2 } },
    open: { opacity: 1, y: 0, transition: { duration: 0.2 } },
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-neutral-900/50 backdrop-blur-md border-b border-gradient-to-r from-blue-500 to-purple-500">
      <div
        className={cn(
          "flex items-center justify-between px-6 py-4 max-w-7xl mx-auto" // Only content is constrained
        )}
      >
        {/* Logo */}
        <motion.a
          href="/"
          className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Hack-o-Relay
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

        {/* Hamburger Button for Mobile */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className={cn(
          "md:hidden absolute top-full left-0 right-0 w-full",
          "bg-neutral-900/50 backdrop-blur-md",
          "border-b border-gradient-to-r from-blue-500 to-purple-500"
        )}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
      >
        <div className="flex flex-col items-center py-6 space-y-4 max-w-7xl mx-auto px-6">
          {navItems.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              className="text-gray-300 hover:text-blue-400 transition-colors text-lg font-medium"
              whileHover={{ scale: 1.05 }}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </motion.a>
          ))}
          <motion.a
            href="/register"
            className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-xl transition-shadow"
            whileHover={{ scale: 1.05 }}
            onClick={() => setIsOpen(false)}
          >
            Register Now
          </motion.a>
        </div>
      </motion.div>

      {/* Inline CSS for Gradient Border */}
      <style jsx>{`
        .border-gradient-to-r {
          border-image: linear-gradient(to right, #4285F4, #A855F7) 1;
        }
      `}</style>
    </nav>
  );
};