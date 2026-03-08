import { motion } from "motion/react";
import { useState } from "react";

const portfolioItems = [
  {
    id: 7,
    title: "Homenagem Pet",
    category: "Fine Line",
    image: "https://lh3.googleusercontent.com/d/1DrtuEWqJw80QYYA6bqq8Scg4M6aaeAcp",
    size: "large",
  },
  {
    id: 1,
    title: "Espada",
    category: "Fine Line",
    image: "https://lh3.googleusercontent.com/d/1oxpJ35aNqegCtRkycAw8aECdG8TEyp5R",
    size: "small",
  },
  {
    id: 2,
    title: "Bússola Realista",
    category: "Realismo",
    image: "https://lh3.googleusercontent.com/d/1MFLTSymKjo91acHUqngzc6Ir4cnwcfve",
    size: "small",
  },
  {
    id: 3,
    title: "Tigre Realista",
    category: "Realismo",
    image: "https://lh3.googleusercontent.com/d/1AdXnHECZmvJOFTcZH45G4QO9HmezeeDo",
    size: "medium",
  },
  {
    id: 4,
    title: "Tubarão Fine Line",
    category: "Fine Line",
    image: "https://lh3.googleusercontent.com/d/1cq9WzmAyN4Hcc9YmT8jq7SUIEUG5QQmZ",
    size: "small",
  },
  {
    id: 5,
    title: "Fênix Majestosa",
    category: "Realismo",
    image: "https://lh3.googleusercontent.com/d/1qjswhai32Lo9DRd2ASq6xXdoNn-rBYl8",
    size: "large",
  },
  {
    id: 6,
    title: "Surrealismo Sombrio",
    category: "Realismo",
    image: "https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?q=80&w=1000&auto=format&fit=crop",
    size: "medium",
  },
];

export default function Gallery() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="portfolio" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div className="max-w-xl">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.4 }}
            className="font-mono text-[10px] uppercase tracking-[0.4em] mb-4 block"
          >
            Trabalhos Selecionados
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-bold leading-tight"
          >
            A Arte do <br />
            <span className="italic text-accent">Permanente</span>
          </motion.h2>
        </div>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.6 }}
          className="max-w-xs font-sans text-sm leading-relaxed opacity-60"
        >
          Cada peça é uma colaboração entre artista e tela. Uma história contada em tinta, feita para durar a vida toda.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
        {portfolioItems.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            onMouseEnter={() => setHoveredId(item.id)}
            onMouseLeave={() => setHoveredId(null)}
            className={`relative overflow-hidden rounded-2xl group cursor-pointer ${
              item.size === "large" ? "md:row-span-2" : 
              item.size === "medium" ? "md:row-span-1 md:col-span-2 lg:col-span-1" : ""
            }`}
          >
            <motion.img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
              referrerPolicy="no-referrer"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
              <motion.span 
                initial={{ y: 10, opacity: 0 }}
                animate={hoveredId === item.id ? { y: 0, opacity: 1 } : {}}
                className="font-mono text-[10px] uppercase tracking-widest text-accent mb-2"
              >
                {item.category}
              </motion.span>
              <motion.h3 
                initial={{ y: 10, opacity: 0 }}
                animate={hoveredId === item.id ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.1 }}
                className="text-2xl font-serif font-bold"
              >
                {item.title}
              </motion.h3>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mt-16 flex justify-center"
      >
        <a 
          href="https://www.instagram.com/juniorgotti.tattoo?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
          target="_blank" 
          rel="noreferrer"
          className="px-12 py-5 border border-accent/30 text-accent font-mono text-[10px] uppercase tracking-[0.3em] rounded-full hover:bg-accent hover:text-ink transition-all duration-300 inline-block"
        >
          Ver Portfólio Completo
        </a>
      </motion.div>
    </section>
  );
}
