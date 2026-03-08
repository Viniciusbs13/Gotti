import { motion, AnimatePresence } from "motion/react";
import { Instagram, Mail, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 px-6 py-8 flex justify-between items-center ${!isOpen ? 'mix-blend-difference' : ''}`}>
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-4"
        >
          <div className="flex flex-col leading-none">
            <span className="font-serif text-2xl tracking-tighter font-bold uppercase">Junior Gotti</span>
            <span className="font-serif text-xs italic text-accent self-end -mt-1">Tattoo</span>
          </div>
          <div className="w-[1px] h-8 bg-white/10 hidden sm:block"></div>
          <span className="font-mono text-[9px] uppercase tracking-[0.2em] opacity-40 hidden sm:block max-w-[100px] leading-tight">Fine Line & Realismo</span>
        </motion.div>

        <div className="hidden md:flex items-center gap-12 font-mono text-[11px] uppercase tracking-widest">
          {[
            { name: "Portfólio", href: "#portfolio" },
            { name: "Junior Gotti", href: "#about" },
            { name: "Camuflagem", href: "#camuflagem" },
            { name: "Eventos", href: "#eventos" },
            { name: "Contato", href: "https://wa.me/5519981901945", external: true }
          ].map((item, i) => (
            <motion.a
              key={item.name}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noreferrer" : undefined}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
              className="hover:text-accent transition-colors relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full"></span>
            </motion.a>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden sm:flex items-center gap-4">
            <a href="https://www.instagram.com/juniorgotti.tattoo?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer">
              <Instagram className="w-4 h-4 hover:text-accent cursor-pointer transition-colors" />
            </a>
            <a href="https://wa.me/5519981901945" target="_blank" rel="noreferrer">
              <Mail className="w-4 h-4 hover:text-accent cursor-pointer transition-colors" />
            </a>
          </div>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-white/10 rounded-full transition-colors relative z-[60]"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-ink flex flex-col items-center justify-center gap-8 md:hidden z-[40]"
          >
            {[
              { name: "Portfólio", href: "#portfolio" },
              { name: "Junior Gotti", href: "#about" },
              { name: "Camuflagem", href: "#camuflagem" },
              { name: "Eventos", href: "#eventos" },
              { name: "Contato", href: "https://wa.me/5519981901945", external: true }
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noreferrer" : undefined}
                onClick={() => setIsOpen(false)}
                className="font-serif text-4xl hover:text-accent transition-colors text-center"
              >
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
