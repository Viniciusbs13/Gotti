import { motion } from "motion/react";
import { Calendar, PartyPopper, Heart } from "lucide-react";

const eventTypes = [
  {
    title: "Casamentos",
    description: "Uma experiência única para seus convidados. Tatuagens minimalistas e significativas para eternizar o grande dia.",
    icon: Heart,
  },
  {
    title: "Aniversários",
    description: "Transforme sua festa em um evento inesquecível com uma estação de tatuagem profissional e segura.",
    icon: PartyPopper,
  },
  {
    title: "Eventos Corporativos",
    description: "Destaque sua marca e proporcione uma experiência diferenciada para seus colaboradores e clientes.",
    icon: Calendar,
  },
];

export default function Events() {
  return (
    <section id="eventos" className="py-24 px-6 bg-ink relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.4 }}
            className="font-mono text-[10px] uppercase tracking-[0.4em] mb-4 block"
          >
            Experiências Exclusivas
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-bold leading-tight"
          >
            Tatuagem em <br />
            <span className="italic text-accent">Eventos</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto mt-8 font-sans text-lg opacity-60 leading-relaxed"
          >
            Leve a arte do Junior Gotti para o seu evento. Criamos uma estação de tatuagem completa, segura e sofisticada para proporcionar uma experiência memorável aos seus convidados.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {eventTypes.map((event, i) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass p-10 rounded-3xl flex flex-col gap-6 hover:border-accent/30 transition-colors group"
            >
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-ink transition-all duration-300">
                <event.icon className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-3xl font-bold">{event.title}</h3>
              <p className="font-sans text-base opacity-60 leading-relaxed">
                {event.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 flex justify-center"
        >
          <a 
            href="https://wa.me/5519981901945?text=Olá! Gostaria de saber mais sobre tatuagem em eventos." 
            target="_blank" 
            rel="noreferrer"
            className="px-12 py-5 bg-accent text-ink font-mono text-[10px] uppercase tracking-[0.3em] rounded-full hover:bg-white transition-all duration-300 font-bold"
          >
            Solicitar Orçamento para Evento
          </a>
        </motion.div>
      </div>
    </section>
  );
}
