import { motion } from "framer-motion";
import { FiChevronDown, FiHelpCircle } from "react-icons/fi";
import { useState } from "react";

const FAQ = () => {
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

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Who can participate in the hackathon?",
      answer: "The hackathon is open to all students currently enrolled in any university or college. Both undergraduate and graduate students are welcome to participate."
    },
    {
      question: "What is the team size limit?",
      answer: "Teams can consist of 2-4 members. Solo participants are allowed but we highly encourage team collaboration for the best experience."
    },
    {
      question: "What are the judging criteria?",
      answer: "Projects will be judged based on innovation (30%), technical complexity (25%), design/UX (20%), and potential impact (25%)."
    },
    {
      question: "Do I need to have an idea before registering?",
      answer: "No, you don't need an idea before registering. We'll have ideation workshops and brainstorming sessions to help you develop your concept."
    },
    {
      question: "What technologies can we use?",
      answer: "You can use any technologies, frameworks, or programming languages you're comfortable with. The choice is entirely up to your team."
    },
    {
      question: "Will there be mentors available?",
      answer: "Yes, we'll have industry experts and experienced developers available throughout the event to provide guidance and answer questions."
    }
  ];

  return (
    <section className="relative min-h-screen w-full bg-neutral-950 py-20 overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: `
          linear-gradient(to right, rgba(38, 38, 38, 0.2) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(38, 38, 38, 0.2) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px'
      }}></div>
      
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
            Frequently Asked Questions
          </h2>
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl -z-10"></div>
          <p className="text-gray-400 text-base max-w-2xl mx-auto">
            Find answers to common questions about the event
          </p>
        </motion.div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative"
            >
              <motion.div
                className="relative bg-neutral-900/80 backdrop-blur-md rounded-xl overflow-hidden border border-neutral-800 shadow-xl shadow-purple-500/10"
                initial={{ height: "auto" }}
                animate={{ height: "auto" }}
              >
                <div className="absolute inset-0 -z-10 pointer-events-none" style={{
                  background: 'linear-gradient(to bottom right, rgba(59, 130, 246, 0.1), rgba(124, 58, 237, 0.1))',
                  boxShadow: 'inset 0 0 60px rgba(124, 58, 237, 0.1)'
                }}></div>
                
                <button
                  className="w-full flex items-center justify-between p-6 text-left"
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-black/30 border border-neutral-800 flex items-center justify-center flex-shrink-0 mt-1">
                      <FiHelpCircle className="w-5 h-5 text-purple-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">
                      {faq.question}
                    </h3>
                  </div>
                  <FiChevronDown className={`w-5 h-5 text-purple-400 transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`} />
                </button>
                
                <motion.div
                  className="overflow-hidden"
                  initial={{ height: 0 }}
                  animate={{
                    height: activeIndex === index ? "auto" : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="px-6 pb-6 ml-14">
                    <p className="text-gray-300">{faq.answer}</p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div 
          variants={itemVariants}
          className="text-center mt-16"
        >
          <div className="mb-8">
            <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-2">
              Still have questions?
            </h3>
            <p className="text-gray-400">
              Reach out to our team and we'll be happy to help
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FAQ;