import React, { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ExternalLink, Github } from 'lucide-react';

export function Portfolio() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Move useTransform to top level to avoid conditional hook calls
  const rotateY = useTransform(mouseX, [-100, 100], [-5, 5]);

  const projects = [
    {
      title: "Brand Campaign Strategy",
      description: "Developed a comprehensive social media campaign for a local coffee shop, increasing engagement by 150% over 3 months.",
      image: "https://images.unsplash.com/photo-1660833638050-41f95d8b94e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJrZXRpbmclMjBjYW1wYWlnbiUyMGRlc2lnbiUyMG1vY2t1cHxlbnwxfHx8fDE3NTU2MzA3MTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Social Media", "Brand Strategy", "Content Creation"],
      metrics: { engagement: "+150%", reach: "50K+", conversion: "+35%" }
    },
    {
      title: "Digital Marketing Analysis",
      description: "Conducted market research and consumer behavior analysis for a university project, presenting findings to industry professionals.",
      image: "https://images.unsplash.com/photo-1656164631668-8673eab87b84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMG1hcmtldGluZyUyMHN0cmF0ZWd5fGVufDF8fHx8MTc1NTYzMDcxOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Market Research", "Data Analysis", "Presentation"],
      metrics: { accuracy: "94%", insights: "25+", presentation: "A+" }
    },
    {
      title: "Visual Identity Project",
      description: "Created a complete visual identity package for a nonprofit organization, including logo design and brand guidelines.",
      image: "https://images.unsplash.com/photo-1659141170537-6e0aa70329a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGlkZW50aXR5JTIwZGVzaWduJTIwd29ya3NwYWNlfGVufDF8fHx8MTc1NTYzMDcxOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Brand Identity", "Logo Design", "Visual Design"],
      metrics: { satisfaction: "100%", guidelines: "50+ pages", impact: "+200%" }
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
            className="text-4xl lg:text-5xl font-semibold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent"
            whileHover={{ 
              backgroundImage: "linear-gradient(45deg, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--foreground)))"
            }}
          >
            Portfolio
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Recent projects and case studies
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
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
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-500"
                  />
                </motion.div>
                
                {/* Overlay icons */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100"
                  initial={{ scale: 0.8 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.button
                    className="bg-primary/90 text-primary-foreground p-3 rounded-full backdrop-blur-sm"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </motion.button>
                  <motion.button
                    className="bg-accent/90 text-accent-foreground p-3 rounded-full backdrop-blur-sm"
                    whileHover={{ scale: 1.2, rotate: -360 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Github className="w-4 h-4" />
                  </motion.button>
                </motion.div>
              </div>
              
              <div className="p-6 space-y-4 relative z-10">
                <motion.h3 
                  className="group-hover:text-primary transition-colors"
                  whileHover={{ x: 5, scale: 1.02 }}
                >
                  {project.title}
                </motion.h3>
                
                <motion.p 
                  className="text-muted-foreground text-sm leading-relaxed"
                  initial={{ opacity: 0.7 }}
                  whileHover={{ opacity: 1, x: 5 }}
                >
                  {project.description}
                </motion.p>
                
                {/* Metrics display */}
                <motion.div
                  className="grid grid-cols-3 gap-2 mt-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  {Object.entries(project.metrics).map(([key, value]) => (
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
                  {project.tags.map((tag, tagIndex) => (
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