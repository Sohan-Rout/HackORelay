import { motion } from "framer-motion";
import { GlowingEffect } from "@/app/Components/ui/glowing-effect";
import { FiCpu, FiDollarSign, FiLink, FiHeart, FiBook, FiWifi, FiGlobe } from "react-icons/fi";
import { cn } from "@/lib/utils";

export const Theme = () => {
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

  const cardVariants = {
    rest: { y: 0, scale: 1 },
    hover: {
      y: -8,
      scale: 1.02,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  const cards = [
    { 
      title: "Fintech", 
      description: "Revolutionize financial services with cutting-edge technology for payments, banking, and investments.",
      icon: <FiDollarSign className="w-6 h-6" />,
      gradient: "from-green-500/30 to-blue-600/20"
    },
    { 
      title: "Blockchain", 
      description: "Build decentralized applications, smart contracts, and explore distributed ledger technology.",
      icon: <FiLink className="w-6 h-6" />,
      gradient: "from-purple-500/30 to-indigo-600/20"
    },
    { 
      title: "Health & Education", 
      description: "Transform healthcare with digital solutions and redefine learning with EdTech platforms and VR classrooms.",
      icon: <><FiHeart className="w-6 h-6" /><FiBook className="w-6 h-6 ml-2" /></>,
      gradient: "from-red-500/30 to-pink-600/20"
    },
    { 
      title: "Open Innovation", 
      description: "Collaborate across boundaries to solve complex challenges through open-source approaches.",
      icon: <FiCpu className="w-6 h-6" />,
      gradient: "from-yellow-500/30 to-orange-600/20"
    },
    { 
      title: "IoT", 
      description: "Connect the physical and digital worlds with smart devices and intelligent automation systems.",
      icon: <FiWifi className="w-6 h-6" />,
      gradient: "from-blue-500/30 to-cyan-600/20"
    },
    { 
      title: "Web3", 
      description: "Shape the future of the internet with decentralized protocols and user-owned platforms.",
      icon: <FiGlobe className="w-6 h-6" />,
      gradient: "from-indigo-500/30 to-purple-600/20"
    }
  ];

  return (
    <section className="relative min-h-screen w-full bg-neutral-950 py-20 overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 grid-pattern pointer-events-none"></div>
      
      {/* Floating Tech Elements */}
      <div className="absolute top-1/4 left-1/4 w-20 h-20 rounded-full bg-blue-500/10 blur-lg animate-float"></div>
      <div className="absolute bottom-1/3 right-1/4 w-28 h-28 rounded-full bg-purple-500/10 blur-lg animate-float-delay"></div>

      <motion.div
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Section Header with Glow */}
        <motion.div 
          variants={itemVariants} 
          className="text-center mb-16 relative"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
            Themes
          </h2>
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-56 h-56 bg-purple-500/20 rounded-full blur-2xl -z-10"></div>
          <p className="text-gray-400 text-base max-w-2xl mx-auto">
            Explore cutting-edge domains and solve real-world challenges
          </p>
        </motion.div>

        {/* Theme Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative"
              initial="rest"
              whileHover="hover"
            >
              <motion.div
                variants={cardVariants}
                className={cn(
                  "relative bg-neutral-900/80 backdrop-blur-md p-6 rounded-xl h-full",
                  "border border-neutral-800",
                  "shadow-xl shadow-purple-500/10"
                )}
              >
                <GlowingEffect
                  blur={80}
                  spread={60}
                  glow={true}
                  movementDuration={3}
                  borderWidth={1}
                  className={`absolute inset-0 rounded-xl -z-10 pointer-events-none bg-gradient-to-br ${card.gradient}`}
                />
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-full bg-neutral-800/50 border border-neutral-700 flex items-center justify-center mb-4">
                    <div className="text-blue-300">
                      {card.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-3">
                    {card.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          variants={itemVariants}
          className="text-center mt-16"
        >
          <p className="text-gray-500 mt-3 text-xs">
            Choose your track and start innovating
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Theme;