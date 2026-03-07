import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <section 
      ref={containerRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y, scale }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/60 to-ink z-10" />
        <img 
          src="https://images.unsplash.com/photo-1590247813693-5541d1c609fd?q=80&w=2000&auto=format&fit=crop" 
          alt="Tattoo Studio" 
          className="w-full h-full object-cover grayscale brightness-50"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="mb-8 flex justify-center"
        >
          <div className="relative w-24 h-24 border border-accent/20 rounded-full flex items-center justify-center">
            <span className="font-serif text-5xl font-bold text-accent italic tracking-tighter">JR</span>
            <div className="absolute inset-0 border border-accent/10 rounded-full animate-ping opacity-20" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          className="mb-4"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-accent font-bold">
            Mestre em Fine Line & Realismo
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          className="text-[12vw] sm:text-[10vw] md:text-[8vw] leading-[0.85] font-serif font-bold uppercase tracking-tighter mb-8"
        >
          Junior <br />
          <span className="italic text-accent">Gotti</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col items-center gap-4"
        >
          <p className="max-w-md font-sans text-sm sm:text-base opacity-60 leading-relaxed mx-auto">
            Transformando histórias em arte permanente. Precisão, elegância e uma visão única para cada peça.
          </p>
          
          <motion.a
            href="https://wa.me/5519981901945"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 px-10 py-4 bg-accent text-ink font-mono text-xs uppercase tracking-widest font-bold rounded-full hover:bg-white transition-colors inline-block"
          >
            Agende sua Sessão
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
      >
        <span className="font-mono text-[9px] uppercase tracking-widest opacity-40">Desça</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown className="w-4 h-4 opacity-40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
