import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

const aboutImages = [
  "https://lh3.googleusercontent.com/d/17GKB610DNiDqN299JAEvgOpLNpc0mvmK",
  "https://lh3.googleusercontent.com/d/1hy5Enn38wQ4flXmizUR9CTnV1sKacFH",
  "https://lh3.googleusercontent.com/d/1Hesr75c_rdmpRkfOAaPRsV5oMUXHyJRC"
];

export default function About() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % aboutImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="py-24 px-6 bg-ink/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        {/* Image Side */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative aspect-[4/5] rounded-3xl overflow-hidden group"
        >
          <div className="absolute inset-0 bg-accent/10 mix-blend-overlay z-10" />
          <AnimatePresence mode="wait">
            <motion.img 
              key={currentIndex}
              src={aboutImages[currentIndex]} 
              alt="" 
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="w-full h-full object-cover grayscale transition-transform duration-1000 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </AnimatePresence>
          
          {/* Floating Detail */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="absolute bottom-8 right-8 glass p-6 rounded-2xl z-20 max-w-[200px]"
          >
            <span className="font-mono text-[10px] uppercase tracking-widest text-accent block mb-2">Experiência</span>
            <p className="font-serif text-2xl font-bold leading-none">6 Anos de Maestria</p>
          </motion.div>
        </motion.div>

        {/* Text Side */}
        <div className="flex flex-col gap-12">
          <div>
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.4 }}
              className="font-mono text-[10px] uppercase tracking-[0.4em] mb-4 block"
            >
              O Visionário
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-8"
            >
              Junior <br />
              <span className="italic text-accent">Gotti</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-sans text-lg opacity-80 leading-relaxed mb-8"
            >
              Localizado em Mogi Guaçu no coração da cidade, na Av. Nove de Abril, espaço Be Coworking, Junior Gotti redefiniu os limites do fine line e do realismo. Com formação em artes clássicas, sua transição para a pele foi uma evolução natural de seu espírito criativo.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-sans text-base opacity-60 leading-relaxed"
            >
              Cada tatuagem é uma jornada única. Junior se especializa em peças que fluem com os contornos naturais do corpo, criando arte que parece que sempre esteve lá.
            </motion.p>
          </div>

          <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-12">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-widest opacity-40 block mb-2">Especialização</span>
              <ul className="font-serif text-xl font-medium flex flex-col gap-1">
                <li>Fine Line</li>
                <li>Micro-Realismo</li>
                <li>Black & Grey</li>
              </ul>
            </div>
            <div>
              <span className="font-mono text-[10px] uppercase tracking-widest opacity-40 block mb-2">Filosofia</span>
              <p className="font-serif text-xl font-medium italic">"A arte é a única maneira de fugir sem sair de casa."</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
