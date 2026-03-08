import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const camouflageImages = {
  before: "https://lh3.googleusercontent.com/d/1aG7aK4XDY6cj2h2T9vfyCIZjQ9Q4P4lY",
  after: "https://lh3.googleusercontent.com/d/1fdOkGFjdfIZZbPlEwSqKBAAsoBshLBVf",
};

export default function Camouflage() {
  const [showAfter, setShowAfter] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowAfter((prev) => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="camuflagem" className="py-24 px-6 bg-ink/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Image Side */}
        <div className="relative aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden glass group">
          <AnimatePresence mode="wait">
            <motion.div
              key={showAfter ? "after" : "before"}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <img
                src={showAfter ? camouflageImages.after : camouflageImages.before}
                alt={showAfter ? "Depois da Camuflagem" : "Antes da Camuflagem"}
                className="w-full h-full object-cover md:grayscale grayscale-0 group-hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              
              {/* Label Overlay */}
              <div className="absolute top-6 left-6 glass px-4 py-2 rounded-full z-20">
                <span className="font-mono text-[10px] uppercase tracking-widest text-accent font-bold">
                  {showAfter ? "Depois" : "Antes"}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
          
          {/* Decorative Border */}
          <div className="absolute inset-4 border border-white/5 rounded-2xl pointer-events-none z-10" />
        </div>

        {/* Text Side */}
        <div className="flex flex-col gap-8">
          <div>
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.4 }}
              className="font-mono text-[10px] uppercase tracking-[0.4em] mb-4 block"
            >
              Procedimento Especializado
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-8"
            >
              Camuflagem de <br />
              <span className="italic text-accent">Cicatrizes</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-sans text-lg opacity-80 leading-relaxed mb-6"
            >
              Recupere sua autoestima com a técnica avançada de camuflagem estética. Junior Gotti utiliza pigmentos específicos para igualar o tom da pele em cicatrizes, estrias e manchas.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-sans text-base opacity-60 leading-relaxed"
            >
              Diferente de uma tatuagem comum, a camuflagem exige um estudo profundo de colorimetria para um resultado natural e imperceptível.
            </motion.p>
          </div>

          <div className="flex flex-col gap-4 border-t border-white/10 pt-8">
            <div className="flex items-center gap-4">
              <div className="w-1.5 h-1.5 bg-accent rounded-full" />
              <span className="font-mono text-[11px] uppercase tracking-widest opacity-80">Resultado Natural</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-1.5 h-1.5 bg-accent rounded-full" />
              <span className="font-mono text-[11px] uppercase tracking-widest opacity-80">Pigmentos de Alta Qualidade</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-1.5 h-1.5 bg-accent rounded-full" />
              <span className="font-mono text-[11px] uppercase tracking-widest opacity-80">Recuperação de Autoestima</span>
            </div>
          </div>

          <motion.a
            href="https://wa.me/5519981901945?text=Olá! Gostaria de saber mais sobre a camuflagem de cicatrizes."
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 px-10 py-4 bg-accent text-ink font-mono text-xs uppercase tracking-widest font-bold rounded-full hover:bg-white transition-colors inline-block text-center lg:self-start"
          >
            Consultar Procedimento
          </motion.a>
        </div>
      </div>
    </section>
  );
}
