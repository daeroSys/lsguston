import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Briefcase, Calendar, Users, HeartHandshake, Image as ImageIcon, X } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ExperienceItem {
  id: number;
  role: string;
  organization: string;
  period: string;
  type: string;
  icon: React.ReactNode;
  description: string;
  photos?: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    role: "External Communications Manager",
    organization: "Junior Banking Finance Society (JBFISOC)",
    period: "2024–2025",
    type: "Leadership",
    icon: <Users className="w-5 h-5" />,
    description: "Managed external communications, ensuring effective information dissemination and fostering strong relationships with partner organizations and stakeholders.",
    photos: ["/images/experiences/jb1.jpg", "/images/experiences/jb2.jpg"]
  },
  {
    id: 2,
    role: "Event Co-Organizer",
    organization: "9th Banking Days",
    period: "2025",
    type: "Event Management",
    icon: <Briefcase className="w-5 h-5" />,
    description: "Co-organized 'Bank on It: Building Futures, One Step At A Time' featuring industry professionals on financial literacy, and the 'Neon Disco BankOlympics' integrating cheer competitions and strategic games.",
    photos: ["/images/experiences/banc.jpg", "/images/experiences/banc1.jpg", "/images/experiences/banc2.jpg", "/images/experiences/banc3.jpg", "/images/experiences/banc4.jpg"]
  },
  {
    id: 3,
    role: "Event Organizer & Participant",
    organization: "CBA Sportfest 2025",
    period: "2025",
    type: "Event Management",
    icon: <Briefcase className="w-5 h-5" />,
    description: "Organized and participated in a two-day inter-program sports and cultural event featuring a parade, opening ceremonies, and inter-program matches among CBA programs.",
    photos: ["/images/experiences/spor.jpg", "/images/experiences/spor1.jpg", "/images/experiences/spor2.jpg", "/images/experiences/spor3.jpg"]
  },
  {
    id: 4,
    role: "Booth Manager",
    organization: "Student Org Fair 2024",
    period: "2024",
    type: "Event Management",
    icon: <Briefcase className="w-5 h-5" />,
    description: "Conceptualized and managed a Squid Game-themed interactive booth for OLFU's Student Org Fair, engaging students through immersive games and activities.",
    photos: ["/images/experiences/org.jpg", "/images/experiences/org1.jpg", "/images/experiences/org2.jpg", "/images/experiences/org3.jpg", "/images/experiences/org4.jpg", "/images/experiences/org5.jpg", "/images/experiences/org6.jpg", "/images/experiences/org7.jpg"]
  },
  {
    id: 5,
    role: "Volunteer",
    organization: "St. Therese Mission Headquarters",
    period: "2024",
    type: "Community Service",
    icon: <HeartHandshake className="w-5 h-5" />,
    description: "Participated in the 'Empowering Through Service, Inspiring Through Care' outreach, distributing school supplies and essentials to children, demonstrating a strong commitment to community impact.",
    photos: ["/images/experiences/vol.jpg", "/images/experiences/vol1.jpg", "/images/experiences/vol2.jpg"]
  },
];

export function Experience() {
  const [selectedExp, setSelectedExp] = useState<ExperienceItem | null>(null);

  // Lock background page scroll when modal is open
  React.useEffect(() => {
    if (selectedExp) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedExp]);

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

                <div className="mt-6 pt-4 border-t border-border/40 flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                    {exp.type}
                  </span>

                  {exp.photos && exp.photos.length > 0 && (
                    <motion.button
                      onClick={() => setSelectedExp(exp)}
                      className="flex items-center space-x-2 px-4 py-2 rounded-full bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground border border-primary/20 text-xs font-semibold transition-all duration-300 shadow-sm"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ImageIcon className="w-4 h-4" />
                      <span>See Photos</span>
                    </motion.button>
                  )}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Photo Gallery Modal */}
      <AnimatePresence>
        {selectedExp && selectedExp.photos && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            data-lenis-prevent
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedExp(null)}
          >
            <motion.div
              className="relative max-w-4xl w-full max-h-[90vh] bg-card rounded-2xl p-6 border border-border/80 shadow-2xl overflow-hidden flex flex-col justify-between"
              data-lenis-prevent
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between pb-4 border-b border-border/40">
                <div>
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">{selectedExp.type} • {selectedExp.period}</span>
                  <h3 className="text-xl font-bold text-foreground leading-snug">{selectedExp.role}</h3>
                  <p className="text-xs text-muted-foreground">{selectedExp.organization}</p>
                </div>
                <button
                  onClick={() => setSelectedExp(null)}
                  className="p-2 rounded-full bg-muted/60 hover:bg-primary hover:text-primary-foreground border border-border/60 transition-colors shadow-sm cursor-pointer"
                  aria-label="Close photo gallery"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Photos Grid / Gallery */}
              <div
                className="w-full flex-1 overflow-y-auto overscroll-contain my-4 py-2 pr-1 max-h-[70vh]"
                data-lenis-prevent
                onWheel={(e) => e.stopPropagation()}
              >
                <div className={`grid gap-4 ${selectedExp.photos.length === 1 ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'} items-center justify-items-center`}>
                  {selectedExp.photos.map((photo, pIdx) => (
                    <div
                      key={pIdx}
                      className="w-full h-[320px] sm:h-[380px] rounded-xl overflow-hidden bg-muted/20 border border-border/40 flex items-center justify-center relative group p-2 shadow-inner"
                    >
                      {/* Blurred backdrop image to fill portrait gaps gracefully */}
                      <ImageWithFallback
                        src={photo}
                        alt=""
                        className="absolute inset-0 w-full h-full object-cover blur-xl opacity-30 pointer-events-none"
                      />
                      {/* Main image maintaining natural aspect ratio */}
                      <ImageWithFallback
                        src={photo}
                        alt={`${selectedExp.role} photo ${pIdx + 1}`}
                        className="relative z-10 max-w-full max-h-full object-contain rounded-lg shadow-md group-hover:scale-[1.02] transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Modal Footer */}
              <div className="pt-3 border-t border-border/40 flex justify-end">
                <button
                  onClick={() => setSelectedExp(null)}
                  className="px-5 py-2 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground text-xs font-semibold transition-colors cursor-pointer"
                >
                  Close Gallery
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
