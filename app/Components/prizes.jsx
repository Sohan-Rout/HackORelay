import { motion } from "framer-motion";
import { GlowingEffect } from "@/app/Components/ui/glowing-effect";
import { FiAward, FiStar, FiZap } from "react-icons/fi";
import { cn } from "@/lib/utils";

export const Prizes = () => {
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

  const prizes = [
    {
      tier: "1st Prize",
      amount: "Rs. 15,000",
      description: "Grand championship award plus mentorship opportunities",
      icon: <FiAward className="w-8 h-8 text-yellow-400" />,
      gradient: "from-yellow-500/30 to-amber-600/20"
    },
    {
      tier: "2nd Prize",
      amount: "Rs. 10,000",
      description: "Runner-up award with startup incubation support",
      icon: <FiStar className="w-8 h-8 text-purple-400" />,
      gradient: "from-purple-500/30 to-indigo-600/20"
    },
    {
      tier: "3rd Prize",
      amount: "Rs. 5,000",
      description: "Honorable mention with premium tech gadgets",
      icon: <FiZap className="w-8 h-8 text-blue-400" />,
      gradient: "from-blue-500/30 to-cyan-600/20"
    }
  ];

  return (
    <section className="relative min-h-screen w-full bg-neutral-950 py-20 overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 grid-pattern pointer-events-none"></div>
      
      {/* Floating Tech Elements */}
      <div className="absolute top-1/4 left-1/4 w-20 h-20 rounded-full bg-blue-500/10 blur-xl animate-float"></div>
      <div className="absolute bottom-1/3 right-1/4 w-28 h-28 rounded-full bg-purple-500/10 blur-xl animate-float-delay"></div>

      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
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
            Prizes & Perks
          </h2>
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl -z-10"></div>
          <p className="text-gray-400 text-base max-w-2xl mx-auto">
            Amazing rewards for your innovations
          </p>
        </motion.div>

        {/* Prizes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {prizes.map((prize, index) => (
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
                  "relative bg-neutral-900/80 backdrop-blur-md p-8 rounded-2xl h-full",
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
                  className={`absolute inset-0 rounded-2xl -z-10 pointer-events-none bg-gradient-to-br ${prize.gradient}`}
                />
                
                {/* Prize Icon */}
                <div className="w-16 h-16 rounded-full bg-black/30 border border-neutral-800 flex items-center justify-center mb-6 mx-auto">
                  {prize.icon}
                </div>
                
                {/* Prize Details */}
                <h3 className="text-2xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-2">
                  {prize.tier}
                </h3>
                <p className="text-3xl font-bold text-center text-white mb-4">
                  {prize.amount}
                </p>
                <p className="text-gray-300 text-center">
                  {prize.description}
                </p>
                
                {/* Glowing Badge */}
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                  {index === 0 ? "Grand Prize" : `Tier ${index + 1}`}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Additional Perks */}
        <motion.div 
          variants={itemVariants}
          className="mt-16 bg-neutral-900/50 backdrop-blur-md border border-neutral-800 rounded-2xl p-8 relative overflow-hidden"
        >
          <GlowingEffect
            blur={100}
            spread={80}
            glow={true}
            movementDuration={4}
            borderWidth={1}
            className="absolute inset-0 rounded-2xl -z-10 pointer-events-none bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-blue-500/10"
          />
          
          <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-6">
            🎁 Additional Perks For All Participants
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "1-year GitHub Pro",
              "Exclusive swag pack",
              "Cloud credits ($500 value)",
              "Mentorship sessions"
            ].map((perk, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-purple-500/10 border border-purple-500/30 flex items-center justify-center">
                  <FiStar className="w-4 h-4 text-purple-400" />
                </div>
                <span className="text-gray-300">{perk}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div 
          variants={itemVariants}
          className="text-center mt-16"
        >
          <motion.a
            href="/register"
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-bold text-lg shadow-lg hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 relative overflow-hidden group"
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10">Compete for These Prizes</span>
            <span className="absolute inset-0 bg-white/10 glow-button-effect opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Prizes;