"use client";
import { useEffect, useRef } from "react";
import { Button } from "@/app/Components/ui/button";
import { Card } from "@/app/Components/ui/card";
import { FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { MapPin } from 'lucide-react';
import { motion } from "framer-motion";
import { GlowingEffect } from "@/app/Components/ui/glowing-effect";

function ContactPage() {
  const mapRef = useRef(null)

  useEffect(() => {
    if (mapRef.current) {
      const iframe = document.createElement("iframe")
      iframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.6911727299203!2d76.86666717510933!3d28.42857407577672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d6ad5abdad98b%3A0xeb13a7d0eb14cc49!2sDronacharya%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1742824955775!5m2!1sen!2sin"
      iframe.width = "100%"
      iframe.height = "100%"
      iframe.style.border = "0"
      iframe.allowFullscreen = false
      iframe.loading = "lazy"
      mapRef.current.appendChild(iframe)
    }
  }, [])

  return (
    <div className="relative min-h-screen w-full bg-neutral-950 py-20 overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 grid-pattern pointer-events-none"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-20 h-20 rounded-full bg-blue-500/10 blur-lg animate-float"></div>
      <div className="absolute bottom-1/3 right-1/4 w-28 h-28 rounded-full bg-purple-500/10 blur-lg animate-float-delay"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
            Contact Us
          </h1>
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl -z-10"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="relative bg-neutral-900/80 backdrop-blur-md border border-neutral-800 rounded-xl overflow-hidden h-full">
              <GlowingEffect
                blur={80}
                spread={60}
                glow={true}
                movementDuration={3}
                borderWidth={1}
                className="absolute inset-0 rounded-xl -z-10 pointer-events-none bg-gradient-to-br from-blue-500/30 to-purple-600/20"
              />
              
              <div className="p-8">
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-6">
                  Get In Touch
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-full bg-neutral-800/50 border border-neutral-700 text-blue-400">
                      <CiMail className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-gray-400 text-sm">Email</h3>
                      <a 
                        href="mailto:gdgdce@gmail.com" 
                        className="text-white hover:text-blue-400 transition-colors"
                      >
                        gdgdce@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-full bg-neutral-800/50 border border-neutral-700 text-purple-400">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-gray-400 text-sm">Location</h3>
                      <p className="text-white">
                        Dronacharya College of Engineering, Khentawas, Gurugram
                      </p>
                    </div>
                  </div>

                  <div ref={mapRef} className="w-full h-64 rounded-lg overflow-hidden mt-4 relative bg-neutral-900 border border-neutral-800">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <p className="text-sm text-gray-400">Loading map...</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Social & Sponsorship Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Social Links */}
            <Card className="relative bg-neutral-900/80 backdrop-blur-md border border-neutral-800 rounded-xl overflow-hidden">
              <GlowingEffect
                blur={80}
                spread={60}
                glow={true}
                movementDuration={3}
                borderWidth={1}
                className="absolute inset-0 rounded-xl -z-10 pointer-events-none bg-gradient-to-br from-purple-500/30 to-indigo-600/20"
              />
              
              <div className="p-8">
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-6">
                  Follow Us
                </h2>
                
                <div className="flex gap-4">
                  {[
                    { icon: <FaLinkedinIn className="w-5 h-5" />, color: "text-blue-400", href: "#" },
                    { icon: <FaInstagram className="w-5 h-5" />, color: "text-purple-400", href: "#" },
                    { icon: <FaGithub className="w-5 h-5" />, color: "text-white", href: "#" },
                    { icon: <CiMail className="w-5 h-5" />, color: "text-red-400", href: "mailto:gdgdce@gmail.com" }
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      className={`p-3 rounded-full bg-neutral-800/50 border border-neutral-700 hover:bg-neutral-800 transition-colors ${social.color}`}
                      whileHover={{ y: -4, scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {social.icon}
                      <span className="sr-only">Social link</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </Card>

            {/* Sponsorship */}
            <Card className="relative bg-neutral-900/80 backdrop-blur-md border border-neutral-800 rounded-xl overflow-hidden">
              <GlowingEffect
                blur={80}
                spread={60}
                glow={true}
                movementDuration={3}
                borderWidth={1}
                className="absolute inset-0 rounded-xl -z-10 pointer-events-none bg-gradient-to-br from-blue-500/30 to-cyan-600/20"
              />
              
              <div className="p-8">
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4">
                  Sponsorship
                </h2>
                <p className="text-gray-400 mb-6">
                  Interested in sponsoring HackORelay? We offer various sponsorship packages that provide visibility to your brand and access to talented students.
                </p>
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                    Become a Sponsor
                  </Button>
                </motion.div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage;