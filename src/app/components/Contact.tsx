import React from 'react';
import { motion } from 'motion/react';
import { Mail, Linkedin, Instagram, Github } from 'lucide-react';

export function Contact() {
  const socialLinks = [
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/lovely-shane-guston-303659418/" },
    { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/lalelilovee/?hl=en" },
    { icon: Github, label: "GitHub", href: "https://github.com/daeroSys" },
    { icon: Mail, label: "Email", href: "[EMAIL_ADDRESS]" }
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-background via-muted/10 to-background"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      />

      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-20 left-20 w-16 h-16 border-2 border-primary/30"
        animate={{ rotate: [0, 180, 360] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-12 h-12 bg-accent/20 rounded-full"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          className="text-center space-y-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-semibold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground">
            Always open to discussing new opportunities and collaborations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h3 className="mb-4">Get In Touch</h3>
              <p className="text-muted-foreground leading-relaxed">
                Whether you have a project in mind, want to collaborate, or simply want to chat
                about marketing trends, I'd love to hear from you. Feel free to reach out through
                any of the channels below.
              </p>
            </div>

            <motion.div
              className="space-y-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.div
                className="flex items-center space-x-3"
                whileHover={{ x: 5 }}
              >
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">lovelyshaneguston1@email.com</span>
              </motion.div>
              <motion.div
                className="flex items-center space-x-3"
                whileHover={{ x: 5 }}
              >
                <span className="text-primary">📍</span>
                <span className="text-muted-foreground">Quezon City, Metro Manila</span>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 1, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h3 className="mb-4 text-foreground font-medium text-lg">Follow My Work</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-4 border border-border/80 bg-card/80 rounded-lg hover:bg-accent/80 hover:border-primary transition-all duration-300 group shadow-sm opacity-100"
                    initial={{ opacity: 1, y: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    whileHover={{
                      scale: 1.05,
                      borderColor: "hsl(var(--primary))",
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2)"
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <social.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                    </motion.div>
                    <span className="text-foreground font-medium group-hover:text-primary transition-colors">{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}