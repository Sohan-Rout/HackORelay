"use client";

import { motion } from "framer-motion";
import { GlowingEffect } from "@/app/Components/ui/glowing-effect";
import { cn } from "@/lib/utils";

export const About = () => {
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

  const cardVariants = {
    rest: {
      y: 0,
      scale: 1,
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const arrowVariants = {
    wiggle: {
      rotate: [0, 10, -10, 10, 0],
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop",
      },
    },
  };

  const aboutText = "Hack'oRelay 4.0 is a 24 hour hackathon event with exciting prizes and goodies. Join us to show off your talents, participate in fun initiatives, and connect with other tech enthusiasts. This is the ideal platform to fight for amazing prizes and advance your ideas, featuring workshops, speakers, and mentorship sessions. Prepare yourself for a memorable adventure!";

  return (
    <section className="relative min-h-screen w-full bg-black py-20 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-blue-900/10 to-black pointer-events-none" />

      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Section Header - Spaced out more */}
        <motion.div variants={itemVariants} className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500 mb-4">
            About
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A 24-hour celebration of innovation and technology
          </p>
        </motion.div>

        <div>
            {/* Arrow Image - Adjusted positioning */}
          <motion.div
            className="absolute right-20 md:right-20 top-0 -translate-y-1/2 z-20"
            variants={arrowVariants}
            animate="wiggle"
          >
            <img 
              src="/arrow.png" 
              alt="Arrow pointing" 
              className="w-24 h-24 md:w-32 md:h-32 object-contain"
            />
          </motion.div>
        </div>

        {/* Content Container with more spacing */}
        <div className="relative w-full flex justify-center mb-5">
          {/* Card Container with strong blue glow */}
          <div className="w-full max-w-3xl mx-4">
            <motion.div
              variants={itemVariants}
              initial="rest"
              whileHover="hover"
              className="relative"
            >
              {/* Blue Glow Card */}
              <motion.div
                variants={cardVariants}
                className={cn(
                  "relative bg-neutral-900/80 backdrop-blur-md p-8 rounded-xl",
                  "border border-transparent",
                  "shadow-xl"
                )}
              >
                <GlowingEffect
                  blur={120}
                  spread={90}
                  glow={true}
                  movementDuration={3}
                  borderWidth={2}
                  className="absolute inset-0 rounded-xl -z-10 pointer-events-none"
                  gradient="from-blue-400/60 via-blue-500/40 to-blue-600/30" // Pure blue gradient
                />
                <div className="relative z-10 space-y-6">
                  <h3 className="text-2xl font-semibold text-blue-300">
                    Hack'oRelay 4.0
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {aboutText}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Call to Action with more spacing */}
        <motion.div 
          variants={itemVariants} 
          className="mt-10 text-center w-full max-w-2xl mx-auto"
        >
          <p className="text-gray-400 text-lg md:text-xl">
            Be part of the ultimate coding adventure — register now!
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};