import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Activities } from './components/Activities';
import { Skills } from './components/Skills';
import { Certificates } from './components/Certificates';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';
import { AnimatedCursor } from './components/AnimatedCursor';
import { SmoothScroll } from './components/SmoothScroll';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <motion.div
        className="fixed inset-0 bg-background dark flex items-center justify-center z-50"
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <div className="text-center space-y-4">
          <motion.div
            className="w-16 h-16 border-4 border-primary/30 border-t-primary rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          <motion.p
            className="text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Loading...
          </motion.p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="min-h-screen bg-background dark cursor-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <SmoothScroll />
      <AnimatedCursor />

      {/* Enhanced animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-3/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
            x: [0, -40, 0],
            y: [0, 60, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/3 w-64 h-64 bg-muted/5 rounded-full blur-xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.4, 0.1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />

        {/* Floating particles */}
        {Array.from({ length: 15 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <Header />
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Certificates />
        <Activities />
        <Portfolio />
        <Contact />
      </main>

      <motion.footer
        className="py-8 border-t border-border relative z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.p
            className="text-muted-foreground text-sm flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            <span>© 2026 Lovely Shane C. Guston. All rights reserved.</span>
            <span className="hidden sm:inline opacity-40">•</span>
            <span>
              Developed by <a href="https://github.com/daeroSys" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors underline decoration-primary/30 underline-offset-4">DaeroSys</a>
            </span>
          </motion.p>
        </div>
      </motion.footer>
    </motion.div>
  );
}