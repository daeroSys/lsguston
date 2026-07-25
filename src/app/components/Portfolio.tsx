import React, { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Portfolio() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Move useTransform to top level to avoid conditional hook calls
  const rotateY = useTransform(mouseX, [-100, 100], [-5, 5]);

  const events = [
    {
      title: "9th Banking Days",
      description: "Co-organized 'Bank on It' seminar featuring industry professionals and the 'Neon Disco BankOlympics' combining cheer competitions and strategic games.",
      image: "/images/events/banko1.jpg",
      tags: ["Event Management", "Leadership", "Finance"],
      metrics: { attendees: "300+", speakers: "2", activities: "5" }
    },
    {
      title: "CBA Sportfest 2025",
      description: "Organized and participated in a two-day inter-program sports and cultural event featuring a parade, ceremonies, and matches among CBA programs.",
      image: "/images/events/sport2.jpg",
      tags: ["Sports", "Coordination", "Teamwork"],
      metrics: { teams: "5", duration: "2 Days", sports: "2" }
    },
    {
      title: "Student Org Fair 2024",
      description: "Conceptualized and managed a Squid Game-themed interactive booth for OLFU's Student Org Fair, engaging students through games and activities.",
      image: "/images/events/squid1.jpg",
      tags: ["Creative Design", "Engagement", "Management"],
      metrics: { visitors: "1000+", theme: "Squid Game", feedback: "Positive" }
    }
  ];

  const handleMouseMove = (event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    mouseX.set(event.clientX - centerX);
    mouseY.set(event.clientY - centerY);
  };

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
    hidden: { y: 80, opacity: 0, rotateX: -30 },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-muted/20 relative overflow-hidden">
      {/* Enhanced floating elements */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-40 h-40 bg-primary/5 rounded-full blur-2xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -60, 0],
          scale: [1, 1.5, 1]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Interactive grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-20 grid-rows-20 h-full w-full">
          {Array.from({ length: 400 }, (_, i) => (
            <motion.div
              key={i}
              className="border-r border-b border-primary/20"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: Math.random() * 0.5 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.001, duration: 0.5 }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          className="text-center space-y-4 mb-12"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2
            className="text-4xl lg:text-5xl font-semibold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent pb-2"
          >
            Event Gallery
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground italic"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Highlights and photos from my organizational events
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {events.map((event, index) => (
            <motion.div
              key={index}
              className="bg-card/80 backdrop-blur-sm rounded-xl overflow-hidden border border-border/50 group cursor-pointer relative"
              variants={itemVariants}
              data-cursor="pointer"
              onMouseMove={handleMouseMove}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              whileHover={{
                y: -15,
                rotateX: 5,
                boxShadow: "0 25px 60px -12px rgba(0, 0, 0, 0.4)",
                borderColor: "hsl(var(--primary))"
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              style={{
                rotateY: hoveredIndex === index ? rotateY : 0
              }}
            >
              {/* Animated overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.5 }}
              />

              {/* Image container with parallax effect */}
              <div className="aspect-video overflow-hidden relative">
                <motion.div
                  className="w-full h-full"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <ImageWithFallback
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                </motion.div>
              </div>

              <div className="p-6 space-y-4 relative z-10">
                <motion.h3
                  className="text-xl font-bold text-foreground group-hover:text-primary transition-colors cursor-pointer"
                  initial={{ opacity: 0.9 }}
                  whileHover={{ opacity: 1, x: 5 }}
                >
                  {event.title}
                </motion.h3>

                <motion.p
                  className="text-muted-foreground text-sm leading-relaxed"
                  initial={{ opacity: 0.7 }}
                  whileHover={{ opacity: 1, x: 5 }}
                >
                  {event.description}
                </motion.p>

                {/* Metrics display */}
                <motion.div
                  className="grid grid-cols-3 gap-2 mt-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  {Object.entries(event.metrics).map(([key, value]) => (
                    <motion.div
                      key={key}
                      className="text-center p-2 bg-muted/50 rounded"
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: "hsl(var(--primary)/10)"
                      }}
                    >
                      <div className="text-xs text-muted-foreground capitalize">{key}</div>
                      <div className="text-sm font-medium text-primary">{value}</div>
                    </motion.div>
                  ))}
                </motion.div>

                <div className="flex flex-wrap gap-2">
                  {event.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tagIndex}
                      className="px-3 py-1 bg-muted/50 text-muted-foreground text-xs rounded-full hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                      initial={{ opacity: 0, scale: 0.8, y: 20 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: tagIndex * 0.1 }}
                      whileHover={{
                        scale: 1.1,
                        y: -2,
                        boxShadow: "0 4px 8px rgba(0,0,0,0.2)"
                      }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Animated border effect */}
              <motion.div
                className="absolute inset-0 rounded-xl pointer-events-none"
                style={{
                  background: `conic-gradient(from 0deg, transparent, hsl(var(--primary)), transparent)`,
                  padding: '1px'
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.5 }}
              >
                <div className="w-full h-full bg-card rounded-xl" />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}