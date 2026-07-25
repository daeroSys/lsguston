import React, { useState } from 'react';
import { motion } from 'motion/react';

export function Skills() {
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);

  const skillCategories = [
    {
      title: "Accounting Software",
      icon: "💰",
      color: "from-emerald-500/20 to-green-500/20",
      skills: [
        "QuickBooks Online",
        "SAP Business One",
        "Bookkeeping",
        "Bank Reconciliation",
        "Financial Reporting"
      ]
    },
    {
      title: "Office & Technical Tools",
      icon: "💻",
      color: "from-blue-500/20 to-cyan-500/20",
      skills: [
        "Microsoft Excel",
        "Google Sheets",
        "Microsoft Word",
        "Google Docs",
        "Google Workspace"
      ]
    },
    {
      title: "Digital Design",
      icon: "🎨",
      color: "from-pink-500/20 to-purple-500/20",
      skills: [
        "Canva",
        "Presentation Design",
        "Social Media Content"
      ]
    },
    {
      title: "Professional Skills",
      icon: "🤝",
      color: "from-amber-500/20 to-orange-500/20",
      skills: [
        "Attention to Detail",
        "Organization & Time Management",
        "Communication",
        "Adaptability",
        "Team Collaboration"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0, rotateX: -45 },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const skillVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: (index: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: index * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Enhanced animated background elements */}
      <motion.div
        className="absolute top-10 left-10 w-32 h-32 border border-primary/20 rounded-lg"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
          borderRadius: ["8px", "50%", "8px"]
        }}
        transition={{
          rotate: { duration: 25, repeat: Infinity, ease: "linear" },
          scale: { duration: 5, repeat: Infinity, ease: "easeInOut" },
          borderRadius: { duration: 8, repeat: Infinity, ease: "easeInOut" }
        }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-24 h-24 bg-accent/10 rounded-full"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.5, 1, 0.5],
          y: [0, -20, 0]
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          className="text-center space-y-4 mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2
            className="text-4xl lg:text-5xl font-semibold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent"
            whileHover={{
              scale: 1.05,
            }}
            transition={{ duration: 0.3 }}
          >
            Skills & Expertise
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground italic"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Technical expertise and professional strengths.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className={`relative z-0 space-y-4 bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6 overflow-hidden group cursor-pointer`}
              variants={itemVariants}
              data-cursor="pointer"
              onHoverStart={() => setHoveredCategory(index)}
              onHoverEnd={() => setHoveredCategory(null)}
              whileHover={{
                scale: 1.05,
                y: -10,
                rotateX: 5,
                zIndex: 20,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {/* Dynamic background gradient */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100`}
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />

              {/* Animated icon */}
              <motion.div
                className="text-2xl mb-2 relative z-10"
                animate={hoveredCategory === index ? {
                  rotate: [0, -10, 10, 0],
                  scale: [1, 1.2, 1.2, 1]
                } : {}}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                {category.icon}
              </motion.div>

              <motion.h3
                className="text-center text-muted-foreground group-hover:text-foreground border-b border-border pb-2 relative z-10 transition-colors"
                whileHover={{
                  scale: 1.05
                }}
                transition={{ duration: 0.3 }}
              >
                {category.title}
              </motion.h3>

              <ul className="space-y-2 relative z-10">
                {category.skills.map((skill, skillIndex) => (
                  <motion.li
                    key={skillIndex}
                    className="text-sm text-center text-muted-foreground hover:text-foreground transition-colors cursor-default relative"
                    variants={skillVariants}
                    custom={skillIndex}
                    whileHover={{
                      x: 5,
                      fontWeight: 500
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.span
                      className="relative z-10"
                      whileHover={{ scale: 1.05 }}
                    >
                      {skill}
                    </motion.span>
                    <motion.div
                      className="absolute left-0 bottom-0 h-0.5 bg-primary"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.li>
                ))}
              </ul>

              {/* Floating particles on hover */}
              {hoveredCategory === index && (
                <>
                  {Array.from({ length: 5 }, (_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-primary rounded-full"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{
                        scale: [0, 1, 0],
                        opacity: [0, 1, 0],
                        y: [0, -50]
                      }}
                      transition={{
                        duration: 2,
                        delay: i * 0.2,
                        ease: "easeOut"
                      }}
                    />
                  ))}
                </>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Interactive progress indicators */}
        <motion.div
          className="mt-16 flex justify-center space-x-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          {skillCategories.map((_, index) => (
            <motion.div
              key={index}
              className="w-2 h-2 rounded-full bg-muted-foreground/30"
              animate={hoveredCategory === index ? {
                scale: 1.5,
                backgroundColor: "hsl(var(--primary))"
              } : {}}
              transition={{ duration: 0.3 }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}