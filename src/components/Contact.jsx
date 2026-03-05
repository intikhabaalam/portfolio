import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMail, FiPhone, FiMapPin, FiSend, FiGithub, FiLinkedin } from 'react-icons/fi';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  const contactInfo = [
    { icon: FiMail, label: 'Email', value: 'intikhabrehmani@gmail.com', link: 'mailto:intikhabrehmani@gmail.com' },
    { icon: FiPhone, label: 'Phone', value: '9516886231', link: 'tel:+919516886231' },
    { icon: FiMapPin, label: 'Location', value: 'Indore, India', link: '#' },
  ];

  const socialLinks = [
    { icon: FiGithub, label: 'GitHub', link: 'https://github.com/intikhabaalam', username: '@intikhabaalam' },
    { icon: FiLinkedin, label: 'LinkedIn', link: 'https://www.linkedin.com/in/intikhab-aalam-138863248/', username: 'Intikhab Aalam' },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          ref={ref}
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          className="text-3xl md:text-4xl font-bold text-center mb-4"
        >
          Get In <span className="text-blue-400">Touch</span>
        </motion.h2>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.1 }}
          className="text-center text-gray-400 mb-12 max-w-2xl mx-auto"
        >
          I'm currently looking for MERN developer opportunities. 
          Feel free to reach out if you'd like to work together!
        </motion.p>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1 space-y-6"
          >
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.link}
                className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-blue-500 transition-all"
              >
                <div className="p-3 bg-gray-700 rounded-lg">
                  <info.icon className="text-xl text-blue-400" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">{info.label}</div>
                  <div className="font-medium">{info.value}</div>
                </div>
              </a>
            ))}

            {/* Social Links */}
            <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
              <h3 className="font-medium mb-3">Find me on</h3>
              <div className="space-y-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
                  >
                    <social.icon className="text-xl" />
                    <span>{social.username}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Response Note */}
            <div className="p-4 bg-blue-500/10 rounded-lg border border-blue-500/30">
              <p className="text-sm text-gray-300">
                ⚡ I typically respond within 24-48 hours.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2"
          >
            <form onSubmit={handleSubmit} className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Intikhab Aalam"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Your Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="intikhab@example.com"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm text-gray-400 mb-2">Subject *</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Job Opportunity / Project Discussion"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm text-gray-400 mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  placeholder="Tell me about your opportunity or project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-blue-500 rounded-lg font-medium hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>Sending...</>
                ) : (
                  <>
                    <FiSend /> Send Message
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-3 bg-green-500/20 text-green-400 rounded-lg text-center"
                >
                  ✅ Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;