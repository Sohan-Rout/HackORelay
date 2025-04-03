"use client";
import { useEffect, useRef } from "react";
import { Button } from "@/app/Components/ui/button";
import { Card } from "@/app/Components/ui/card";
import { FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { MapPin } from 'lucide-react';
import { motion } from "framer-motion";

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
    <div className="relative min-h-screen w-full bg-black py-12 overflow-hidden">
      {/* Dotted Grid Background */}
      <div className="absolute inset-0 dotted-background pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-center min-h-[80vh]">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl w-full space-y-8"
        >
          <div className="text-center space-y-2">
            <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Get in Touch
            </h1>
            <p className="text-gray-300">Have questions? Reach out to us</p>
          </div>

          <Card className="bg-black/50 backdrop-blur-md border border-purple-500/20 p-6 space-y-6">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Contact Information
              </h2>
              <p className="text-sm text-gray-400">Get in touch with the GDG team</p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CiMail className="w-5 h-5 mt-0.5 text-gray-400" />
                  <div>
                    <p className="text-gray-400">Email</p>
                    <a
                      href="mailto:gdgdce@gmail.com"
                      className="text-blue-400 hover:text-purple-400 transition-colors"
                    >
                      gdgdce@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-0.5 text-gray-400" />
                  <div>
                    <p className="text-gray-400">Location</p>
                    <p className="text-purple-400">Dronacharya College of Engineering, Khentawas, Gurugram</p>
                  </div>
                </div>
              </div>

              <div ref={mapRef} className="w-full h-[200px] rounded-md overflow-hidden mt-4 relative bg-gray-900/50 border border-gray-800">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-sm text-gray-400">Loading map...</p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Follow Us
              </h3>
              <div className="flex gap-4">
                <motion.a 
                  href="#" 
                  className="p-2 rounded-full bg-gray-900 hover:bg-gray-800 transition-colors text-gray-300 hover:text-blue-400"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaLinkedinIn className="w-5 h-5" />
                  <span className="sr-only">LinkedIn</span>
                </motion.a>
                <motion.a 
                  href="#" 
                  className="p-2 rounded-full bg-gray-900 hover:bg-gray-800 transition-colors text-gray-300 hover:text-purple-400"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaInstagram className="w-5 h-5" />
                  <span className="sr-only">Instagram</span>
                </motion.a>
                <motion.a 
                  href="#" 
                  className="p-2 rounded-full bg-gray-900 hover:bg-gray-800 transition-colors text-gray-300 hover:text-blue-400"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <CiMail className="w-5 h-5" />
                  <span className="sr-only">Mail</span>
                </motion.a>
              </div>
            </div>
          </Card>

          <Card className="bg-black/50 backdrop-blur-md border border-purple-500/20 p-6 space-y-4">
            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Sponsorship Inquiry
              </h2>
              <p className="text-sm text-gray-400">
                Interested in sponsoring HackORelay? We offer various sponsorship packages that provide visibility to your
                brand and access to talented students.
              </p>
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                Become a Sponsor
              </Button>
            </motion.div>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

export default ContactPage;