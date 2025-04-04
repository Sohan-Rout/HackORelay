import { motion } from "framer-motion";
import { FiClock, FiCalendar, FiCheckCircle, FiAlertCircle } from "react-icons/fi";
import { useEffect, useState } from "react";

export const Schedule = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [activeEventIndex, setActiveEventIndex] = useState(null);

  // Update current time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  const schedule = [
    {
      time: "09:00 AM",
      title: "Registration & Breakfast",
      duration: 60,
      date: "2023-11-15",
      description: "Check-in, get your swag, and enjoy some breakfast before we kick off"
    },
    {
      time: "10:00 AM",
      title: "Opening Ceremony",
      duration: 30,
      date: "2023-11-15",
      description: "Welcome speech and overview of the event"
    },
    {
      time: "10:30 AM",
      title: "Hacking Begins",
      duration: 480,
      date: "2023-11-15",
      description: "Start building your projects with your team"
    },
    {
      time: "12:30 PM",
      title: "Lunch",
      duration: 60,
      date: "2023-11-15",
      description: "Take a break and refuel"
    },
    {
      time: "02:00 PM",
      title: "Workshop: Advanced APIs",
      duration: 60,
      date: "2023-11-15",
      description: "Learn how to integrate powerful APIs into your project"
    },
    {
      time: "06:30 PM",
      title: "Dinner",
      duration: 60,
      date: "2023-11-15",
      description: "Evening meal and networking"
    },
    {
      time: "10:00 PM",
      title: "Midnight Snacks",
      duration: 30,
      date: "2023-11-15",
      description: "Late-night energy boost"
    },
    {
      time: "08:00 AM",
      title: "Breakfast",
      duration: 60,
      date: "2023-11-16",
      description: "Start your second day with energy"
    },
    {
      time: "10:30 AM",
      title: "Hacking Ends",
      duration: 0,
      date: "2023-11-16",
      description: "Submit your projects before this time"
    },
    {
      time: "11:00 AM",
      title: "Demo Presentations",
      duration: 120,
      date: "2023-11-16",
      description: "Show off what you've built to the judges"
    },
    {
      time: "02:00 PM",
      title: "Closing Ceremony & Awards",
      duration: 60,
      date: "2023-11-16",
      description: "Winners announced and prizes awarded"
    }
  ];

  // Parse schedule times and determine current/upcoming events
  const parsedSchedule = schedule.map(event => {
    const [hours, minutes] = event.time.split(':').map(Number);
    const period = event.time.split(' ')[1];
    let startHours = hours;
    if (period === 'PM' && hours !== 12) startHours += 12;
    if (period === 'AM' && hours === 12) startHours = 0;
    
    const startDate = new Date(`${event.date}T${String(startHours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:00`);
    const endDate = new Date(startDate.getTime() + event.duration * 60000);
    
    return {
      ...event,
      startDate,
      endDate,
      isPast: currentTime > endDate,
      isCurrent: currentTime >= startDate && currentTime <= endDate,
      isFuture: currentTime < startDate
    };
  });

  // Find current or next event
  useEffect(() => {
    const currentEventIndex = parsedSchedule.findIndex(event => event.isCurrent);
    if (currentEventIndex !== -1) {
      setActiveEventIndex(currentEventIndex);
    } else {
      const nextEventIndex = parsedSchedule.findIndex(event => event.isFuture);
      setActiveEventIndex(nextEventIndex !== -1 ? nextEventIndex : parsedSchedule.length - 1);
    }
  }, [currentTime]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const timeVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.05 }
  };

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
            Event Schedule
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-neutral-800"></div>
          
          {parsedSchedule.map((event, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative pl-12 pb-8 ${index === parsedSchedule.length - 1 ? 'pb-0' : ''}`}
              initial="hidden"
              animate="visible"
            >
              {/* Timeline dot */}
              <div className={`absolute left-0 w-8 h-8 rounded-full flex items-center justify-center border-2 ${
                event.isCurrent 
                  ? 'border-blue-500 bg-blue-500/20' 
                  : event.isFuture 
                    ? 'border-purple-500 bg-purple-500/20' 
                    : 'border-gray-700 bg-gray-800'
              }`}>
                {event.isPast ? (
                  <FiCheckCircle className={`w-4 h-4 ${
                    event.isCurrent ? 'text-blue-400' : 'text-gray-600'
                  }`} />
                ) : event.isCurrent ? (
                  <FiAlertCircle className="w-4 h-4 text-blue-400 animate-pulse" />
                ) : (
                  <FiCalendar className="w-4 h-4 text-purple-400" />
                )}
              </div>

              {/* Event card */}
              <motion.div
                variants={timeVariants}
                whileHover="hover"
                className={`bg-neutral-900/80 backdrop-blur-md rounded-xl p-6 border ${
                  event.isCurrent 
                    ? 'border-blue-500/50 shadow-lg shadow-blue-500/10' 
                    : event.isFuture 
                      ? 'border-purple-500/50 shadow-lg shadow-purple-500/10' 
                      : 'border-neutral-800'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className={`text-lg font-bold ${
                      event.isCurrent ? 'text-blue-400' : 'text-white'
                    }`}>
                      {event.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{event.description}</p>
                  </div>
                  <div className="flex items-center gap-2 bg-neutral-800/50 rounded-full px-3 py-1 text-sm">
                    <FiClock className="w-4 h-4 text-purple-400" />
                    <span className="font-mono">{event.time}</span>
                    {event.duration > 0 && (
                      <span className="text-gray-400">({event.duration} min)</span>
                    )}
                  </div>
                </div>

                {/* Status indicator */}
                {event.isCurrent && (
                  <div className="mt-3 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                    <span className="text-sm text-blue-400">Happening now!</span>
                  </div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Schedule;