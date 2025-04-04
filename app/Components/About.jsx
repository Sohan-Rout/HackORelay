import { motion } from "framer-motion";
import { GlowingEffect } from "@/app/Components/ui/glowing-effect";
import { cn } from "@/lib/utils";

export const About = () => {
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

  const aboutText = "Hack'oRelay 4.0 is a 24-hour hackathon where innovation meets execution. Join 200+ developers, designers, and tech enthusiasts to build groundbreaking solutions, attend expert-led workshops, and network with industry leaders. With Rs.10,000+ in prizes and mentorship from top tech companies, this is your chance to shine.";

  return (
    <section className="relative min-h-screen w-full bg-neutral-950 py-20 overflow-hidden">
  {/* Animated Grid Background */}
  <div className="absolute inset-0 grid-pattern pointer-events-none" style={{
        backgroundImage: `
          linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
  linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
        `,
        backgroundSize: '40px 40px'
      }}></div>
  
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
      className="text-center mb-12 relative"
    >
      <h2 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-3">
        About The Event
      </h2>
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-56 h-56 bg-purple-500/20 rounded-full blur-2xl -z-10"></div>
      <p className="text-gray-400 text-base max-w-2xl mx-auto">
        Where brilliant minds collide to create the future
      </p>
    </motion.div>

    {/* Main Content Grid */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
      {/* Main About Card */}
      <motion.div
        variants={itemVariants}
        className="relative h-full"
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
            movementDuration={4}
            borderWidth={1}
            className="absolute inset-0 rounded-xl -z-10 pointer-events-none"
            gradient="from-blue-500/30 via-purple-600/20 to-purple-700/10"
          />
          <div className="relative z-10 space-y-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Hack'oRelay 4.0
              </h3>
            </div>
            <p className="text-gray-300 text-base leading-relaxed">
              {aboutText}
            </p>
            <div className="flex flex-wrap gap-2 pt-3">
              <span className="px-2 py-1 bg-blue-900/30 text-blue-400 rounded-full text-xs border border-blue-800/50">24-Hour Hackathon</span>
              <span className="px-2 py-1 bg-purple-900/30 text-purple-400 rounded-full text-xs border border-purple-800/50">Rs.10K+ Prizes</span>
              <span className="px-2 py-1 bg-indigo-900/30 text-indigo-400 rounded-full text-xs border border-indigo-800/50">Expert Mentors</span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Stats and Details Column */}
      <div className="space-y-6">
        {/* Date Card */}
        <motion.div
          variants={itemVariants}
          className="relative"
          initial="rest"
          whileHover="hover"
        >
          <motion.div
            variants={cardVariants}
            className={cn(
              "relative bg-neutral-900/80 backdrop-blur-md p-5 rounded-lg",
              "border border-neutral-800",
              "shadow-lg shadow-blue-500/10"
            )}
          >
            <GlowingEffect
              blur={60}
              spread={50}
              glow={true}
              movementDuration={3}
              borderWidth={1}
              className="absolute inset-0 rounded-lg -z-10 pointer-events-none"
              gradient="from-blue-500/20 to-purple-600/10"
            />
            <div className="relative z-10 flex items-start gap-3">
              <div className="bg-blue-500/10 p-2 rounded-md border border-blue-500/20">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-200 mb-1">Event Date</h3>
                <p className="text-blue-400 font-medium">May 5-6, 2025</p>
                <p className="text-gray-400 text-sm mt-1">9:00 AM - 24 Hour Marathon</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Venue Card */}
        <motion.div
          variants={itemVariants}
          className="relative"
          initial="rest"
          whileHover="hover"
        >
          <motion.div
            variants={cardVariants}
            className={cn(
              "relative bg-neutral-900/80 backdrop-blur-md p-5 rounded-lg",
              "border border-neutral-800",
              "shadow-lg shadow-purple-500/10"
            )}
          >
            <GlowingEffect
              blur={60}
              spread={50}
              glow={true}
              movementDuration={3}
              borderWidth={1}
              className="absolute inset-0 rounded-lg -z-10 pointer-events-none"
              gradient="from-purple-500/20 to-blue-600/10"
            />
            <div className="relative z-10 flex items-start gap-3">
              <div className="bg-purple-500/10 p-2 rounded-md border border-purple-500/20">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-200 mb-1">Venue</h3>
                <p className="text-purple-400 font-medium">Dronacharya College of Engineering</p>
                <p className="text-gray-400 text-sm mt-1">Gurugram, Khentawas</p>
                <button className="mt-2 text-xs text-blue-400 hover:text-blue-300 flex items-center gap-1">
                  View on map
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div 
          variants={itemVariants}
          className="grid grid-cols-2 gap-3"
        >
          <div className="bg-neutral-900/50 border border-neutral-800 rounded-lg p-3 text-center">
            <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">24+</div>
            <div className="text-gray-400 text-xs">Hours of Coding</div>
          </div>
          <div className="bg-neutral-900/50 border border-neutral-800 rounded-lg p-3 text-center">
            <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">200+</div>
            <div className="text-gray-400 text-xs">Participants</div>
          </div>
          <div className="bg-neutral-900/50 border border-neutral-800 rounded-lg p-3 text-center">
            <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">10K+</div>
            <div className="text-gray-400 text-xs">In Prizes</div>
          </div>
          <div className="bg-neutral-900/50 border border-neutral-800 rounded-lg p-3 text-center">
            <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">15+</div>
            <div className="text-gray-400 text-xs">Expert Mentors</div>
          </div>
        </motion.div>
      </div>
    </div>

    {/* CTA Section */}
    <motion.div 
      variants={itemVariants}
      className="text-center mt-12"
    >
      <motion.a
        href="/register"
        className="inline-block px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-bold text-base shadow-md hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 relative overflow-hidden group"
        whileHover={{ y: -2, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <span className="relative z-10">Register Now</span>
        <span className="absolute inset-0 bg-white/10 glow-button-effect opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
      </motion.a>
    </motion.div>
  </motion.div>
</section>
  );
};

export default About;