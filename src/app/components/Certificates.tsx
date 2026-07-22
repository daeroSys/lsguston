import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Award, ExternalLink } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  skills: string[];
  image: string;
  color: string;
}

const sampleCertificates: Certificate[] = [
  {
    id: 1,
    title: "Financial Analysis & Banking Operations",
    issuer: "Banking Association & Training Institute",
    date: "2024",
    credentialId: "CERT-FIN-2024-889",
    skills: ["Financial Analysis", "Banking Systems", "Risk Management"],
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    color: "from-blue-600/20 to-purple-600/20"
  },
  {
    id: 2,
    title: "Digital Marketing & Brand Strategy",
    issuer: "Google & HubSpot Academy",
    date: "2024",
    credentialId: "CERT-MKT-2024-102",
    skills: ["Digital Marketing", "Brand Strategy", "SEO"],
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    color: "from-emerald-600/20 to-teal-600/20"
  },
  {
    id: 3,
    title: "Administrative Operations & Office Tech",
    issuer: "Manuel L. Quezon University",
    date: "2023",
    credentialId: "CERT-ADM-2023-451",
    skills: ["Office Management", "Data Encoding", "Records Systems"],
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    color: "from-amber-600/20 to-orange-600/20"
  },
  {
    id: 4,
    title: "Business Analytics & Data Management",
    issuer: "IBM & Corporate Analytics Forum",
    date: "2023",
    credentialId: "CERT-DATA-2023-339",
    skills: ["Data Analytics", "Excel Advanced", "Business Intelligence"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    color: "from-indigo-600/20 to-cyan-600/20"
  },
  {
    id: 5,
    title: "Leadership & Professional Ethics",
    issuer: "Our Lady of Fatima University",
    date: "2023",
    credentialId: "CERT-LDR-2023-912",
    skills: ["Leadership", "Ethics", "Team Management"],
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    color: "from-rose-600/20 to-pink-600/20"
  }
];

export function Certificates() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-scroll loop
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % sampleCertificates.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isHovered]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + sampleCertificates.length) % sampleCertificates.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % sampleCertificates.length);
  };

  // Compute 3D position (only 3 cards visible: left, center, right)
  const getCardStyle = (index: number) => {
    const total = sampleCertificates.length;
    let diff = index - activeIndex;

    // Handle wrapping for circular loop
    if (diff > Math.floor(total / 2)) diff -= total;
    if (diff < -Math.floor(total / 2)) diff += total;

    const absDiff = Math.abs(diff);

    // Only 3 cards shown (diff === -1, 0, 1)
    if (absDiff > 1) {
      return {
        translateX: diff * 380,
        scale: 0.5,
        rotateY: diff > 0 ? -40 : 40,
        opacity: 0,
        zIndex: 0,
        isCenter: false,
        pointerEvents: 'none' as const
      };
    }

    const isCenter = diff === 0;

    let translateX = diff * 340; // distance between 3 cards
    if (diff > 0) translateX += 20;
    if (diff < 0) translateX -= 20;

    let scale = isCenter ? 1.08 : 0.85;
    let rotateY = diff === 0 ? 0 : diff > 0 ? -28 : 28;
    let opacity = isCenter ? 1 : 0.65;
    const zIndex = isCenter ? 25 : 10;

    return {
      translateX,
      scale,
      rotateY,
      opacity,
      zIndex,
      isCenter,
      pointerEvents: 'auto' as const
    };
  };

  return (
    <section id="certificates" className="py-24 relative overflow-hidden bg-background">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
            <Award className="w-4 h-4" />
            <span>Credentials & Seminars</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-semibold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Licenses & Certifications
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Professional certifications, achievements, and specialized training programs completed.
          </p>
        </motion.div>

        {/* 3D Carousel Wrapper with Side Navigation Arrows */}
        <div
          className="relative h-[490px] flex items-center justify-center perspective-[1200px]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Side Navigation Arrow: PREVIOUS (Left side) */}
          <motion.button
            onClick={handlePrev}
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-40 p-4 rounded-full border border-border/80 bg-card/90 text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 shadow-xl backdrop-blur-md"
            whileHover={{ scale: 1.15, x: -3 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Previous Certificate"
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>

          {/* Cards Container (3 Cards Visible: Left, Middle, Right) */}
          <div className="relative w-full max-w-5xl h-full flex items-center justify-center">
            {sampleCertificates.map((cert, index) => {
              const { translateX, scale, rotateY, opacity, zIndex, isCenter, pointerEvents } = getCardStyle(index);

              return (
                <motion.div
                  key={cert.id}
                  onClick={() => setActiveIndex(index)}
                  className={`absolute w-[330px] sm:w-[380px] h-[410px] rounded-2xl p-6 border backdrop-blur-md cursor-pointer transition-shadow duration-500 flex flex-col justify-between select-none ${isCenter
                    ? 'bg-card/95 border-primary/80 shadow-[0_20px_50px_rgba(0,0,0,0.4)] shadow-primary/20 ring-2 ring-primary/40'
                    : 'bg-card/75 border-border/60 shadow-lg hover:border-primary/50'
                    }`}
                  animate={{
                    x: translateX,
                    scale: scale,
                    rotateY: rotateY,
                    opacity: opacity,
                    zIndex: zIndex,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 240,
                    damping: 25,
                  }}
                  style={{
                    transformStyle: 'preserve-3d',
                    pointerEvents: pointerEvents
                  }}
                >
                  {/* Card Content */}
                  <div>
                    <div className={`h-40 rounded-xl overflow-hidden relative mb-4 bg-gradient-to-br ${cert.color} border border-border/40`}>
                      <ImageWithFallback
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
                      />
                      <div className="absolute top-3 right-3 bg-background/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-primary border border-border/50 shadow-sm">
                        {cert.date}
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <p className="text-xs font-semibold tracking-wider text-primary uppercase">
                        {cert.issuer}
                      </p>
                      <h3 className="text-lg font-bold text-foreground leading-snug line-clamp-2">
                        {cert.title}
                      </h3>
                    </div>
                  </div>

                  {/* Footer details */}
                  <div className="space-y-3 pt-2">
                    <div className="flex flex-wrap gap-1.5">
                      {cert.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="text-[11px] px-2.5 py-0.5 rounded-full bg-muted text-muted-foreground font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-border/40 text-xs text-muted-foreground">
                      <span className="font-mono text-[10px] opacity-75">{cert.credentialId}</span>
                      {isCenter && (
                        <span className="inline-flex items-center space-x-1 text-primary font-medium hover:underline">
                          <span>View Details</span>
                          <ExternalLink className="w-3 h-3" />
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Side Navigation Arrow: NEXT (Right side) */}
          <motion.button
            onClick={handleNext}
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-40 p-4 rounded-full border border-border/80 bg-card/90 text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 shadow-xl backdrop-blur-md"
            whileHover={{ scale: 1.15, x: 3 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Next Certificate"
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
        </div>

        {/* Bottom Middle Indicators (Dots + Slide Counter) */}
        <div className="flex flex-col items-center justify-center space-y-3 mt-8">
          {/* Pagination Dots */}
          <div className="flex space-x-3 items-center">
            {sampleCertificates.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ${activeIndex === i
                  ? 'w-9 bg-primary shadow-sm shadow-primary/50'
                  : 'w-2.5 bg-muted-foreground/30 hover:bg-muted-foreground/60'
                  }`}
                aria-label={`Go to certificate ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
