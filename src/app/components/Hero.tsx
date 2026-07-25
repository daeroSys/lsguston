import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ChevronDown, X, Download, FileText, ExternalLink } from 'lucide-react';

export function Hero() {
  const { scrollYProgress } = useScroll();
  const [showResume, setShowResume] = useState(false);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Lock background scroll when resume modal is open
  React.useEffect(() => {
    if (showResume) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [showResume]);

  const resumePdfPath = "/GustonResume.pdf";

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
              className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent pb-2"
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
              className="overflow-visible"
            >
              <motion.p
                className="text-2xl text-muted-foreground font-medium pb-1"
                initial={{ x: -100 }}
                animate={{ x: 0 }}
                transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
              >
                Bachelor of Science in Business Administration<br />
                Major in Banking
              </motion.p>
            </motion.div>
            <motion.p
              className="text-lg text-muted-foreground leading-relaxed max-w-2xl"
              variants={itemVariants}
            >
              Behind every number is a story relying on accuracy and trust. Powered by a strong foundation in banking and meticulous attention to detail, I thrive under pressure to deliver precise financial insights and build lasting value.
            </motion.p>
          </div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            variants={itemVariants}
          >
            <motion.button
              onClick={() => setShowResume(true)}
              className="bg-primary text-primary-foreground px-8 py-4 rounded-lg relative overflow-hidden group text-lg font-medium cursor-pointer"
              data-cursor="pointer"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <FileText className="w-5 h-5" />
                View Resume
              </span>
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
                Contact me
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
                src="/images/hero/pic1.jpg"
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

      {/* PDF Resume Viewer Modal */}
      <AnimatePresence>
        {showResume && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
            data-lenis-prevent
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowResume(false)}
          >
            <motion.div
              className="relative max-w-5xl w-full h-[90vh] bg-card rounded-2xl p-4 sm:p-6 border border-border/80 shadow-2xl overflow-hidden flex flex-col justify-between"
              data-lenis-prevent
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between pb-3 border-b border-border/40">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground leading-snug">Resume - Lovely Shane Guston</h3>
                    <p className="text-xs text-muted-foreground">BSBA Major in Banking</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={resumePdfPath}
                    download="Lovely_Shane_Guston_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 text-xs font-semibold transition-colors shadow-sm"
                  >
                    <Download className="w-4 h-4" />
                    <span className="hidden sm:inline">Download PDF</span>
                  </a>
                  <button
                    onClick={() => setShowResume(false)}
                    className="p-2 rounded-full bg-muted/60 hover:bg-primary hover:text-primary-foreground border border-border/60 transition-colors shadow-sm cursor-pointer"
                    aria-label="Close modal"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* PDF Viewer / Embed Container */}
              <div className="w-full flex-1 my-3 rounded-xl overflow-hidden bg-muted/20 border border-border/40 relative">
                <iframe
                  src={`${resumePdfPath}#toolbar=1`}
                  className="w-full h-full border-none rounded-xl"
                  title="Lovely Shane Guston Resume"
                />
              </div>

              {/* Modal Footer */}
              <div className="pt-2 border-t border-border/40 flex items-center justify-between text-xs text-muted-foreground">
                <span>If PDF preview is not loading, use the download button above or open direct link.</span>
                <a
                  href={resumePdfPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-primary hover:underline font-medium"
                >
                  Open Direct Link <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}