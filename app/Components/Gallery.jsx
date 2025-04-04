import CircularGallery from '@/app/Components/ui/CircularGallery';
import { motion } from 'framer-motion';

export default function Gallery() {
  return (
    <section className="relative w-full bg-neutral-950 py-20 overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 grid-pattern pointer-events-none"></div>
      
      {/* Floating Tech Elements */}
      <div className="absolute top-1/4 left-1/4 w-20 h-20 rounded-full bg-blue-500/10 blur-xl animate-float"></div>
      <div className="absolute bottom-1/3 right-1/4 w-28 h-28 rounded-full bg-purple-500/10 blur-xl animate-float-delay"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Enhanced Glow */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 relative"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
            Meet Our Team
          </h2>
          {/* Enhanced glow effect */}
          <div className="absolute inset-0 flex justify-center -z-10">
            <div className="w-full max-w-2xl h-32 bg-gradient-to-r from-blue-500/30 to-purple-600/20 blur-[80px] rounded-full"></div>
          </div>
          <p className="text-gray-400 text-base max-w-2xl mx-auto">
            The brilliant minds behind Hack'oRelay 4.0
          </p>
        </motion.div>

        {/* Gallery Container with Glow Border */}
        <div className="relative h-[600px] w-full rounded-2xl overflow-hidden">
          
          <CircularGallery 
            bend={3} 
            textColor="#ffffff" 
            borderRadius={0.05}
          />
        </div>

        {/* Scroll Indicator with Glow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-900/50 backdrop-blur-sm rounded-full border border-neutral-800 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full -z-10"></div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
            <span className="text-gray-300 text-sm">Scroll to explore</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}