import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Award, ExternalLink, X, Maximize2 } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  skills: string[];
  image: string;
  color: string;
}

const sampleCertificates: Certificate[] = [
  {
    id: 1,
    title: "NCIII - Bookkeeping",
    issuer: "Technical Education and Skills Development Authority (TESDA)",
    date: "June 13, 2023",
    credentialId: "Cert. No. 23131103009883",
    skills: ["Bookkeeping", "Financial Records", "Accounting"],
    image: "/images/certificates/NCIII.jpg",
    color: "from-blue-600/20 to-purple-600/20"
  },
  {
    id: 2,
    title: "SAP Business One Student Courseware",
    issuer: "Erudite Academy",
    date: "December 21, 2024",
    skills: ["Enterprise Resource Planning (ERP)", "Business Processes", "SAP"],
    image: "/images/certificates/SAP.jpg",
    color: "from-emerald-600/20 to-teal-600/20"
  },
  {
    id: 3,
    title: "Asia Youth Entrepreneurship Competency Assessment",
    issuer: "Asia Youth Entrepreneurship",
    date: "June 24, 2026",
    credentialId: "ERI Score: 4.4 / 5.0",
    skills: ["Entrepreneurship", "Business Competency", "Innovation"],
    image: "/images/certificates/Asia.jpg",
    color: "from-amber-600/20 to-orange-600/20"
  },
  {
    id: 4,
    title: "Authentic Leadership: Rising Above the Noise of Clout Chasing",
    issuer: "Leadership Training Seminar",
    date: "January 28, 2025",
    skills: ["Leadership", "Authenticity", "Communication"],
    image: "/images/certificates/Authentic.jpg",
    color: "from-rose-600/20 to-pink-600/20"
  },
  {
    id: 5,
    title: "2nd Place, Bank Quiz Bee",
    issuer: "Junior Banking and Finance Society (JBFISOC)",
    date: "October 13, 2025",
    skills: ["Banking Knowledge", "Analytical Skills", "Critical Thinking"],
    image: "/images/certificates/Quiz1.jpg",
    color: "from-indigo-600/20 to-cyan-600/20"
  }
];

export function Certificates() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  // Auto-scroll loop
  useEffect(() => {
    if (isHovered || selectedCert) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % sampleCertificates.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isHovered, selectedCert]);

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
        translateX: diff * 400,
        scale: 0.5,
        rotateY: diff > 0 ? -40 : 40,
        opacity: 0,
        zIndex: 0,
        isCenter: false,
        pointerEvents: 'none' as const
      };
    }

    const isCenter = diff === 0;

    let translateX = diff * 350; // distance between compact landscape cards
    if (diff > 0) translateX += 20;
    if (diff < 0) translateX -= 20;

    let scale = isCenter ? 1.05 : 0.84;
    let rotateY = diff === 0 ? 0 : diff > 0 ? -25 : 25;
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
          className="text-center space-y-4 mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-semibold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent pb-2">
            Certifications
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto italic">
            Certifications, achievements, and specialized training programs completed.
          </p>
        </motion.div>

        {/* 3D Carousel Wrapper with Side Navigation Arrows */}
        <div
          className="relative h-[440px] flex items-center justify-center perspective-[1200px]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            if (!selectedCert) setIsHovered(false);
          }}
        >
          {/* Side Navigation Arrow: PREVIOUS (Left side) */}
          <motion.button
            onClick={handlePrev}
            className="absolute left-1 sm:left-4 top-1/2 -translate-y-1/2 z-40 p-3.5 rounded-full border border-border/80 bg-card/90 text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 shadow-xl backdrop-blur-md"
            whileHover={{ scale: 1.15, x: -3 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Previous Certificate"
          >
            <ChevronLeft className="w-5 h-5" />
          </motion.button>

          {/* Cards Container (3 Cards Visible: Left, Middle, Right) */}
          <div className="relative w-full max-w-5xl h-full flex items-center justify-center">
            {sampleCertificates.map((cert, index) => {
              const { translateX, scale, rotateY, opacity, zIndex, isCenter, pointerEvents } = getCardStyle(index);

              return (
                <motion.div
                  key={cert.id}
                  onClick={() => {
                    if (isCenter) setSelectedCert(cert);
                    else setActiveIndex(index);
                  }}
                  className={`absolute w-[320px] sm:w-[440px] md:w-[480px] h-[375px] rounded-2xl p-4 sm:p-5 border backdrop-blur-md cursor-pointer transition-shadow duration-500 flex flex-col justify-between select-none ${isCenter
                    ? 'bg-card/95 border-primary/80 shadow-[0_15px_40px_rgba(0,0,0,0.35)] shadow-primary/20 ring-2 ring-primary/40'
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
                  {/* Card Content & Image */}
                  <div className="flex-1 flex flex-col">
                    {/* Certificate Image Container */}
                    <div className={`h-[195px] sm:h-[210px] rounded-xl overflow-hidden relative mb-2.5 bg-muted/30 border border-border/40 flex items-center justify-center group/img`}>
                      <ImageWithFallback
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-full object-contain p-1.5 hover:scale-[1.02] transition-transform duration-300"
                      />
                      {isCenter && (
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-medium text-xs backdrop-blur-[2px]">
                          <Maximize2 className="w-4 h-4" />
                          <span>Click to Expand</span>
                        </div>
                      )}
                      <div className="absolute top-2.5 right-2.5 bg-background/90 backdrop-blur-md px-2.5 py-0.5 rounded-full text-xs font-semibold text-primary border border-border/50 shadow-sm">
                        {cert.date}
                      </div>
                    </div>

                    <div className="space-y-0.5">
                      <p className="text-[11px] font-semibold tracking-wider text-primary uppercase">
                        {cert.issuer}
                      </p>
                      <h3 className="text-base font-bold text-foreground leading-snug line-clamp-1">
                        {cert.title}
                      </h3>
                      {cert.credentialId && (
                        <p className="text-[11px] font-mono text-muted-foreground pt-0.5 opacity-90">
                          {cert.credentialId}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Footer details */}
                  <div className="pt-2 mt-1 border-t border-border/40">
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
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Side Navigation Arrow: NEXT (Right side) */}
          <motion.button
            onClick={handleNext}
            className="absolute right-1 sm:right-4 top-1/2 -translate-y-1/2 z-40 p-3.5 rounded-full border border-border/80 bg-card/90 text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 shadow-xl backdrop-blur-md"
            whileHover={{ scale: 1.15, x: 3 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Next Certificate"
          >
            <ChevronRight className="w-5 h-5" />
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

      {/* Lightbox / Popped Full Certificate Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              setSelectedCert(null);
              setIsHovered(false);
            }}
          >
            <motion.div
              className="relative max-w-4xl w-full max-h-[90vh] bg-card rounded-2xl p-5 border border-border/80 shadow-2xl overflow-hidden flex flex-col justify-between"
              initial={{ scale: 0.85, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between pb-3 border-b border-border/40">
                <div>
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">{selectedCert.issuer}</span>
                  <h3 className="text-xl font-bold text-foreground leading-snug">{selectedCert.title}</h3>
                </div>
                <button
                  onClick={() => {
                    setSelectedCert(null);
                    setIsHovered(false);
                  }}
                  className="p-2 rounded-full bg-muted/60 hover:bg-primary hover:text-primary-foreground border border-border/60 transition-colors shadow-sm cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Popped Image Display */}
              <div className="w-full flex-1 max-h-[70vh] my-4 flex items-center justify-center overflow-hidden rounded-xl bg-muted/20 border border-border/30 p-2">
                <ImageWithFallback
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="max-w-full max-h-[68vh] object-contain rounded-lg shadow-xl"
                />
              </div>

              {/* Modal Footer */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-3 border-t border-border/40 text-xs">
                <div className="flex flex-wrap gap-1.5">
                  {selectedCert.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <span className="font-mono text-muted-foreground bg-muted px-3 py-1 rounded-full border border-border/40 text-[11px]">
                  {selectedCert.credentialId ? `${selectedCert.credentialId} • ` : ''}{selectedCert.date}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
