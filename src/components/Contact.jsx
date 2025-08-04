import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaInstagram,
  FaFacebook,
  FaPaperPlane,
  FaUser,
  FaEnvelope,
  FaComment,
  FaReply,
  FaLinkedin,
} from "react-icons/fa";
import emailjs from "emailjs-com";

// JSON file untuk menyimpan comments
const COMMENTS_FILE = "/comments.json";

const Contact = () => {
  // States untuk contact form
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    title: "",
    message: "",
  });
  const [isSubmittingContact, setIsSubmittingContact] = useState(false);

  // Handle contact form
  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setIsSubmittingContact(true);

    try {
      await emailjs.send(
        "service_1807",
        "template_4bwpiki",
        {
          name: contactForm.name,
          email: contactForm.email,
          title: contactForm.title,
          message: contactForm.message,
          time: new Date().toLocaleString(),
        },
        "A9Ui-1WazuxmSNHWc"
      );

      alert("Message sent successfully!");
      setContactForm({ email: "", title: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      alert("Failed to send message.");
    } finally {
      setIsSubmittingContact(false);
    }
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: <FaGithub />,
      url: "https://github.com/anhkiet18072002",
      color: "from-gray-600 to-gray-800",
      hoverColor: "hover:shadow-gray-500/25",
    },
    {
      name: "Facebook",
      icon: <FaFacebook />,
      url: "https://www.facebook.com/nguyen.kiet.342577/",
      color: "from-[#833AB4] to-[#1877F2]", // tím => xanh
      hoverColor: "hover:shadow-[#833AB4]/25",
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      url: "https://www.instagram.com/na.kiet1807/",
      color: "from-pink-500 to-purple-600",
      hoverColor: "hover:shadow-pink-500/25",
    },

    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/nguy%E1%BB%85n-anh-ki%E1%BB%87t-a6671933b/",
      color: "from-[#0A66C2] to-[#004182]", // LinkedIn official gradient
      hoverColor: "hover:shadow-[#0A66C2]/25",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/20 via-transparent to-cyan-900/10"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-cyan-500/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-emerald-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-500"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20 relative"
        >
          <h2 className="text-5xl md:text-6xl font-bold font-moderniz mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-600 bg-clip-text text-transparent">
              GET IN
            </span>{" "}
            <span className="text-white">TOUCH</span>
          </h2>
          <p className="text-xl text-slate-400 font-cascadia">
            Let's work together and create something extraordinary!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Side - Contact Form & Social */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Contact Form Panel */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-emerald-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-r from-cyan-600 to-emerald-600 rounded-full">
                    <FaPaperPlane className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      Contact Me
                    </h3>
                    <p className="text-slate-400">
                      Have something to discuss? Send me a message!
                    </p>
                  </div>
                </div>

                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div className="relative">
                    <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={contactForm.name}
                      onChange={(e) =>
                        setContactForm((prev) => ({
                          ...prev,
                          name: e.target.value,
                        }))
                      }
                      className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white"
                      required
                    />
                  </div>
                  {/* Email */}
                  <div className="relative">
                    <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" />
                    <input
                      type="email"
                      placeholder="Your Email"
                      value={contactForm.email}
                      onChange={(e) =>
                        setContactForm((prev) => ({
                          ...prev,
                          email: e.target.value,
                        }))
                      }
                      className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white"
                      required
                    />
                  </div>

                  {/* Title */}
                  <div className="relative">
                    <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Message Title"
                      value={contactForm.title}
                      onChange={(e) =>
                        setContactForm((prev) => ({
                          ...prev,
                          title: e.target.value,
                        }))
                      }
                      className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white"
                      required
                    />
                  </div>

                  {/* Message */}
                  <div className="relative">
                    <FaComment className="absolute left-4 top-6 text-slate-400" />
                    <textarea
                      placeholder="Message Content"
                      rows="4"
                      value={contactForm.message}
                      onChange={(e) =>
                        setContactForm((prev) => ({
                          ...prev,
                          message: e.target.value,
                        }))
                      }
                      className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white resize-none"
                      required
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmittingContact}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-cyan-600 to-emerald-600 text-white font-semibold py-4 px-8 rounded-xl shadow-lg disabled:opacity-50 flex justify-center gap-3"
                  >
                    {isSubmittingContact ? (
                      <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <>
                        <FaPaperPlane />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Social media connect */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">
                  Connect With Me
                </h3>
                <div className="grid gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ scale: 1.02, x: 10 }}
                      className={`group flex items-center gap-4 p-4 bg-gradient-to-r ${social.color} rounded-xl text-white transition-all duration-300 ${social.hoverColor} hover:shadow-xl`}
                    >
                      <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                        {social.icon}
                      </div>
                      <div className="flex-1">
                        <span className="font-semibold">{social.name}</span>
                        <p className="text-sm opacity-90">
                          Follow me on {social.name}
                        </p>
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <FaReply className="rotate-180" />
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(51, 65, 85, 0.3);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #06b6d4, #10b981);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #0891b2, #059669);
        }
      `}</style>
    </section>
  );
};

export default Contact;
