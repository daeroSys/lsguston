import React from 'react';
import { motion } from 'motion/react';
import { Compass, Lightbulb, TrendingUp, Building } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const activities = [
  {
    id: 1,
    title: "APAC Stellar Demo Day Philippines",
    type: "Industry Event",
    icon: <TrendingUp className="w-5 h-5 text-emerald-500" />,
    image: "/images/activities/apac.jpg",
    description: "Attended a blockchain and Web3 innovation event hosted by Rise in and Stellar at the GCash Office, Manila. Observed participant teams pitch real-world solutions in areas like financial inclusion and disaster preparedness.",
    color: "emerald"
  },
  {
    id: 2,
    title: "Company Visit: Maxima Machineries Inc.",
    type: "Academic Activity",
    icon: <Building className="w-5 h-5 text-blue-500" />,
    image: "/images/activities/maxima.jpg",
    description: "Conducted a company visit as part of the OTQM111 course requirements, gathering firsthand observations on the company's operations management practices to support critical business analysis and improvement recommendations.",
    color: "blue"
  },
  {
    id: 3,
    title: "Banking Synergy Seminars",
    type: "Academic & Professional Seminar",
    icon: <Lightbulb className="w-5 h-5 text-amber-500" />,
    image: "/images/activities/synergy.jpg",
    description: "Attended seminars highlighting financial and academic development, and participated in the academic Quiz Bee challenge designed to test students' analytical and critical thinking skills.",
    color: "amber"
  },
  {
    id: 4,
    title: "Leadership Training Seminar",
    type: "Professional Development",
    icon: <Compass className="w-5 h-5 text-purple-500" />,
    image: "/images/activities/leader1.jpg",
    description: "Took part in the oath-taking of newly elected officers representing student organizations across OLFU Valenzuela, followed by an insightful leadership seminar titled 'Authentic Leadership: Rising Above The Noise of Clout Chasing'.",
    color: "purple"
  }
];

export function Activities() {
  return (
    <section id="activities" className="py-24 relative overflow-hidden bg-muted/20">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-semibold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent pb-2">
            Extracurriculars & Industry Exposure
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto italic">
            Broadening my horizons through active participation in seminars, academic visits, and industry events.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.id}
              className="bg-card/70 backdrop-blur-sm border border-border/60 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 group flex flex-col justify-between"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Image banner */}
              <div className="h-48 w-full overflow-hidden relative">
                <ImageWithFallback
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 flex items-center gap-2 bg-background/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-border/50 text-xs font-semibold">
                  {activity.icon}
                  <span className="capitalize text-foreground">{activity.type}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-foreground leading-snug mb-2">
                    {activity.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {activity.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
