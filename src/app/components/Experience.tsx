import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin, Users, HeartHandshake } from 'lucide-react';

const experiences = [
  {
    id: 1,
    role: "External Communications Manager",
    organization: "Junior Banking Finance Society (JBFISOC)",
    period: "2024–2025",
    type: "Leadership",
    icon: <Users className="w-5 h-5" />,
    description: "Managed external communications, ensuring effective information dissemination and fostering strong relationships with partner organizations and stakeholders.",
  },
  {
    id: 2,
    role: "Event Co-Organizer",
    organization: "9th Banking Days",
    period: "2024",
    type: "Event Management",
    icon: <Briefcase className="w-5 h-5" />,
    description: "Co-organized 'Bank on It: Building Futures, One Step At A Time' featuring industry professionals on financial literacy, and the 'Neon Disco BankOlympics' integrating cheer competitions and strategic games.",
  },
  {
    id: 3,
    role: "Event Organizer & Participant",
    organization: "CBA Sportfest 2025",
    period: "2025",
    type: "Event Management",
    icon: <Briefcase className="w-5 h-5" />,
    description: "Organized and participated in a two-day inter-program sports and cultural event featuring a parade, opening ceremonies, and inter-program matches among CBA programs.",
  },
  {
    id: 4,
    role: "Booth Manager",
    organization: "Student Org Fair 2024",
    period: "2024",
    type: "Event Management",
    icon: <Briefcase className="w-5 h-5" />,
    description: "Conceptualized and managed a Squid Game-themed interactive booth for OLFU's Student Org Fair, engaging students through immersive games and activities.",
  },
  {
    id: 5,
    role: "Volunteer",
    organization: "St. Therese Mission Headquarters",
    period: "2024",
    type: "Community Service",
    icon: <HeartHandshake className="w-5 h-5" />,
    description: "Participated in the 'Empowering Through Service, Inspiring Through Care' outreach, distributing school supplies and essentials to children, demonstrating a strong commitment to community impact.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-background">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-semibold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent pb-2">
            Leadership & Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto italic">
            A track record of leadership, effective event management, and dedicated community service.
          </p>
        </motion.div>

        <div className="relative border-l border-primary/20 ml-3 md:ml-6 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="relative pl-8 md:pl-12"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[17px] top-1 bg-background border-2 border-primary rounded-full p-1.5 shadow-sm shadow-primary/20">
                <div className="text-primary">
                  {exp.icon}
                </div>
              </div>

              {/* Content Card */}
              <motion.div
                className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 md:p-8 hover:border-primary/50 transition-colors shadow-sm hover:shadow-md"
                whileHover={{ y: -3 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-1">{exp.role}</h3>
                    <p className="text-primary font-medium">{exp.organization}</p>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground bg-muted/50 px-3 py-1.5 rounded-full w-fit">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>

                <div className="mt-4 pt-4 border-t border-border/40">
                  <span className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                    {exp.type}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
