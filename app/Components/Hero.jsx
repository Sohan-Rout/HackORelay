"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BackgroundBeamsWithCollision } from "@/app/Components/ui/background-beams-with-collision";

export const Hero = () => {
  const targetDate = new Date("2025-05-05T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="relative min-h-screen w-full bg-neutral-900">
      <BackgroundBeamsWithCollision>
        <div className="flex flex-col items-center justify-center min-h-screen text-center px-4 sm:px-6 lg:px-8">
          {/* Organizer Logo and Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center space-x-3 mb-8"
          >
            <img
              src="./gdg-cropped.svg"
              alt="Google Developer Group"
              className="h-6 w-auto"
            />
            <span className="text-base font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-red-500 to-yellow-500">
              Google Developer Group
            </span>
          </motion.div>

          {/* Hackathon Title */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6 drop-shadow-[0_0_10px_rgba(96,165,250,0.5)]"
          >
            Hack-o-Relay
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg lg:text-xl max-w-xl mb-10"
          >
            <span className="font-semibold text-blue-500">Code.</span>{" "}
            <span className="font-semibold text-red-500">Collaborate.</span>{" "}
            <span className="font-semibold text-yellow-500">Create.</span>{" "}
            <span className="text-gray-300">
              Join the ultimate hackathon experience!
            </span>
          </motion.p>

          {/* Countdown Timer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex space-x-3 sm:space-x-5 lg:space-x-6 mb-12"
          >
            {[
              { value: timeLeft.days, label: "Days" },
              { value: timeLeft.hours, label: "Hours" },
              { value: timeLeft.minutes, label: "Minutes" },
              { value: timeLeft.seconds, label: "Seconds" },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="bg-black/30 backdrop-blur-md border border-gradient-to-r from-blue-500 to-purple-500 rounded-lg px-3 py-2 sm:px-4 sm:py-2 lg:px-5 lg:py-3">
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                    {item.value.toString().padStart(2, "0")}
                  </span>
                </div>
                <span className="text-white text-xs sm:text-sm mt-2">
                  {item.label}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Register Button */}
          <motion.a
            href="/register"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 sm:px-7 sm:py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            Register Now
          </motion.a>
        </div>
      </BackgroundBeamsWithCollision>

      {/* Inline CSS for Gradient Border */}
      <style jsx>{`
        .border-gradient-to-r {
          border-image: linear-gradient(to right, #4285F4, #A855F7) 1;
        }
      `}</style>
    </div>
  );
};

export default Hero;