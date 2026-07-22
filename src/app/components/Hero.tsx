import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ChevronDown } from 'lucide-react';

export function Hero() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Parallax background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20"
        style={{ y }}
      />

      {/* Enhanced floating geometric shapes */}
      <motion.div
        className="absolute top-20 right-20 w-20 h-20 border border-primary/30 rotate-45"
        animate={{
          rotate: [45, 405],
          scale: [1, 1.2, 1],
        }}
        transition={{
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }}
        whileHover={{ scale: 1.5, borderColor: "hsl(var(--primary))" }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-16 h-16 bg-accent/20 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          y: [0, -20, 0],
          x: [0, 10, 0]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 2, backgroundColor: "hsl(var(--accent))" }}
      />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="space-y-4">
            <motion.h1
              className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent"
              variants={itemVariants}
              whileHover={{
                scale: 1.03,
                textShadow: "0 0 20px rgba(255,255,255,0.5)"
              }}
            >
              Lovely Shane Guston
            </motion.h1>
            <motion.div
              variants={itemVariants}
              className="overflow-hidden"
            >
              <motion.p
                className="text-2xl text-muted-foreground font-medium"
                initial={{ x: -100 }}
                animate={{ x: 0 }}
                transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
              >
                Bachelor of Science in Business Administration<br />
                Major in Banking

              </motion.p>
            </motion.div>
          </div>

          <motion.p
            className="text-xl text-muted-foreground leading-relaxed max-w-2xl"
            variants={itemVariants}
            whileHover={{ x: 10, color: "hsl(var(--foreground))" }}
          >
            Short Description Here!!
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            variants={itemVariants}
          >
            <motion.button
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary text-primary-foreground px-8 py-4 rounded-lg relative overflow-hidden group text-lg font-medium"
              data-cursor="pointer"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">View My Work</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/50 to-primary"
                initial={{ x: '-100%' }}
                whileHover={{ x: '0%' }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3,
                  ease: "easeInOut"
                }}
              />
            </motion.button>

            <motion.button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border border-border/80 text-foreground px-8 py-4 rounded-lg hover:bg-white/10 hover:border-white transition-all duration-300 group shadow-sm text-lg"
              data-cursor="pointer"
              whileHover={{
                scale: 1.05,
                borderColor: "#ffffff",
                backgroundColor: "rgba(255, 255, 255, 0.15)",
                boxShadow: "0 0 15px rgba(255, 255, 255, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                className="text-foreground group-hover:text-white font-medium transition-colors"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                Get In Touch
              </motion.span>
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex justify-center lg:justify-end"
          initial={{ opacity: 0, x: 100, rotateY: 45 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        >
          <motion.div
            className="w-80 h-80 sm:w-96 sm:h-96 lg:w-[420px] lg:h-[420px] rounded-full overflow-hidden relative group"
            whileHover={{
              scale: 1.1,
              rotateZ: 5,
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
            />
            <motion.div
              className="absolute inset-2 rounded-full overflow-hidden"
              whileHover={{ scale: 1.05 }}
            >
              <ImageWithFallback
                src="/pic.jpg"
                alt="Lovely Shane Guston -BSBA Student"
                className="w-full h-full object-cover relative z-10 group-hover:brightness-110 transition-all duration-500"
              />
            </motion.div>

            {/* Floating icons around the image */}
            {[0, 1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="absolute w-8 h-8 bg-primary/20 rounded-full"
                style={{
                  top: `${20 + i * 15}%`,
                  right: `${-5 + (i % 2) * 10}%`,
                }}
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2 + i * 0.5,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeInOut",
                }}
                whileHover={{ scale: 1.5, backgroundColor: "hsl(var(--primary))" }}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Animated scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        style={{ opacity }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.div
          className="flex flex-col items-center space-y-2 cursor-pointer"
          data-cursor="pointer"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <span className="text-muted-foreground text-sm">Scroll Down</span>
          <ChevronDown className="w-5 h-5 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
}