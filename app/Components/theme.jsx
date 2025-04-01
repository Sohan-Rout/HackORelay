"use client";
import { motion } from "framer-motion";
import { GlowingEffect } from "@/app/Components/ui/glowing-effect";
import { FiCpu, FiDollarSign, FiLink, FiHeart, FiBook, FiWifi, FiGlobe } from "react-icons/fi";

export const Theme = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  // Cards data with icons
  const cards = [
    { 
      title: "Fintech", 
      description: "Revolutionize financial services with cutting-edge technology for payments, banking, and investments.",
      icon: <FiDollarSign className="w-8 h-8 mb-3" />,
      gradient: "from-green-400/40 to-blue-500/30"
    },
    { 
      title: "Blockchain", 
      description: "Build decentralized applications, smart contracts, and explore distributed ledger technology.",
      icon: <FiLink className="w-8 h-8 mb-3" />,
      gradient: "from-purple-400/40 to-indigo-500/30"
    },
    { 
      title: "Health & Education", 
      description: "Transform healthcare with digital solutions and redefine learning with EdTech platforms and VR classrooms.",
      icon: <><FiHeart className="w-8 h-8 mb-3 inline-block" /><FiBook className="w-8 h-8 mb-3 inline-block ml-2" /></>,
      gradient: "from-red-400/40 to-pink-500/30"
    },
    { 
      title: "Open Innovation", 
      description: "Collaborate across boundaries to solve complex challenges through open-source approaches.",
      icon: <FiCpu className="w-8 h-8 mb-3" />,
      gradient: "from-yellow-400/40 to-orange-500/30"
    },
    { 
      title: "IoT", 
      description: "Connect the physical and digital worlds with smart devices and intelligent automation systems.",
      icon: <FiWifi className="w-8 h-8 mb-3" />,
      gradient: "from-blue-400/40 to-cyan-500/30"
    },
    { 
      title: "Web3", 
      description: "Shape the future of the internet with decentralized protocols and user-owned platforms.",
      icon: <FiGlobe className="w-8 h-8 mb-3" />,
      gradient: "from-indigo-400/40 to-purple-500/30"
    }
  ];

  return (
    <section className="relative min-h-screen w-full bg-black py-20 overflow-hidden">
      {/* Dotted Grid Background */}
      <div className="absolute inset-0 dotted-background pointer-events-none"></div>

      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4 drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]">
            Themes
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Explore cutting-edge domains and solve real-world challenges
          </p>
        </motion.div>

        {/* Main Content Container */}
        <div className="relative w-full flex flex-col items-center gap-8 mb-5">
          {/* Theme Cards Grid */}
          <div className="w-full max-w-4xl mx-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                className="w-full h-52 rounded-2xl border-2 shadow-lg relative overflow-hidden"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className={`absolute inset-0 bg-black/90 backdrop-blur-md flex flex-col items-center justify-center ${
                  index % 2 === 0 ? 'border-blue-400 shadow-blue-500/20' : 'border-purple-400 shadow-purple-500/20'
                }`}>
                  <GlowingEffect
                    blur={80}
                    spread={60}
                    glow={true}
                    movementDuration={3}
                    borderWidth={2}
                    className={`absolute inset-0 rounded-2xl -z-10 pointer-events-none bg-gradient-to-br ${card.gradient}`}
                  />
                  <div className="text-blue-300">
                    {card.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 text-center px-4">
                    {card.title}
                  </h3>
                  <p className="text-gray-200 text-center text-sm mt-3 px-4">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          className="mt-10 text-center w-full max-w-2xl mx-auto"
        >
          <p className="text-gray-400 text-lg md:text-xl">
            Innovate without boundaries — bring your ideas to life!
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Theme;