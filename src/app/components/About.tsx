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
          <h2 className="text-4xl lg:text-5xl font-semibold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent pb-2">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground italic">
            Limitations are only in your mind.
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
              className="text-muted-foreground leading-relaxed text-justify"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Hi! I am Lovely Shane C. Guston, a 21 year old Business Administration student, majoring in Banking. I'm interested in challenging myself in gaining knowledge and more experience. I consider myself hard-working and flexible, and I hope that with my skills and abilities, I will be able to contribute to your company in the best way possible.
            </motion.p>
            <motion.p
              className="text-muted-foreground leading-relaxed text-justify"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Aspiring banking professional and businesswoman, currently pursuing a bachelor's degree in Business Administration major in Banking, with a passion for finance and its role in driving economic growth. I thrive in dynamic environments where I can utilize my analytical skills to support sound financial decisions and build strong client relationships. With my experience in financial analysis, customer service, problem-solving, and attention to detail, I am eager to apply my skills, learn more, and contribute through an internship that can help me gain practical experience in the banking environment.
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
                <div className="flex flex-col space-y-1">
                  <motion.p
                    className="text-sm text-muted-foreground"
                  >
                    GPA: 10000/100
                  </motion.p>
                  <motion.p
                    className="text-sm font-medium text-primary"
                    whileHover={{ scale: 1.05, originX: 0 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    🏆 Dean's Lister - 2nd Semester, A.Y. 2024-2025
                  </motion.p>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6"
            >
              <h3 className="mb-3 text-primary font-medium text-lg">Work Experience</h3>
              <div className="space-y-4">
                <motion.div>
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