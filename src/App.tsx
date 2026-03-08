/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Camouflage from "./components/Camouflage";
import Events from "./components/Events";
import Contact from "./components/Contact";

export default function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-ink text-paper selection:bg-accent selection:text-ink overflow-x-hidden">
      {/* Custom Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-accent rounded-full pointer-events-none z-[9999] hidden md:block"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
        }}
        transition={{ type: "spring", damping: 20, stiffness: 250, mass: 0.5 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-accent rounded-full pointer-events-none z-[9999] hidden md:block"
        animate={{
          x: mousePosition.x - 3,
          y: mousePosition.y - 3,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 400, mass: 0.2 }}
      />

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent origin-left z-[100]"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main>
        <Hero />
        
        <div className="relative z-10 bg-ink">
          <Gallery />
          <About />
          <Camouflage />
          <Events />
          <Contact />
        </div>
      </main>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5 bg-ink">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="font-serif text-2xl font-bold uppercase tracking-tighter">Junior Gotti</span>
            <span className="font-mono text-[9px] uppercase tracking-widest opacity-40">© 2024 Todos os direitos reservados</span>
          </div>
          
          <div className="flex items-center gap-8 font-mono text-[10px] uppercase tracking-widest opacity-60">
            <a href="#" className="hover:text-accent transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-accent transition-colors">Termos de Serviço</a>
            <a href="https://www.instagram.com/juniorgotti.tattoo?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">Instagram</a>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-1">
            <span className="font-mono text-[9px] uppercase tracking-widest opacity-40">Desenhado para</span>
            <span className="font-serif text-lg italic text-accent">Excelência</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
