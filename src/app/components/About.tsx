import React from 'react';
import { motion } from 'motion/react';

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/20 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-10 right-10 w-28 h-28 border border-accent/30 rounded-full"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-10 left-10 w-20 h-20 bg-primary/10 rounded-lg"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
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
            About Me
          </h2>
          <p className="text-lg text-muted-foreground">
            Tagline Here!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.p
              className="text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              More Info Here!
            </motion.p>
            <motion.p
              className="text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Additional Info Here!
            </motion.p>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6"
            >
              <h3 className="mb-3 text-primary font-medium text-lg">Education</h3>
              <div className="space-y-2">
                <p className="text-muted-foreground">Bachelor of Science in Business Administration Major in Banking</p>
                <p className="text-sm text-muted-foreground">Our Lady of Fatima University • 2023-2027</p>
                <motion.p
                  className="text-sm text-muted-foreground"
                  whileHover={{ color: "hsl(var(--primary))" }}
                >
                  GPA: 10000/100
                </motion.p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6"
            >
              <h3 className="mb-3 text-primary font-medium text-lg">Work Experience</h3>
              <div className="space-y-4">
                <motion.div whileHover={{ x: 3 }}>
                  <p className="text-foreground font-medium">Administrative Assistant Intern</p>
                  <p className="text-sm text-muted-foreground mb-2">Manuel L. Quezon University • 2023</p>

                  {/* Responsibilities bullet points */}
                  <ul className="list-disc list-inside space-y-1.5 text-sm text-muted-foreground pl-1">
                    <li>Organized and maintained physical and digital files to ensure efficient record management.</li>
                    <li>Assisted in encoding and managing student enrollment records and information.</li>
                    <li>Performed clerical and administrative support tasks within the office.</li>
                    <li>Assisted staff with documentation and day-to-day office operations.</li>
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}