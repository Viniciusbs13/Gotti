import { motion } from "motion/react";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
        {/* Info Side */}
        <div className="flex flex-col gap-16">
          <div>
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.4 }}
              className="font-mono text-[10px] uppercase tracking-[0.4em] mb-4 block"
            >
              Entre em Contato
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-8"
            >
              Comece sua <br />
              <span className="italic text-accent">Jornada</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-sans text-lg opacity-80 leading-relaxed mb-8"
            >
              Pronto para dar vida à sua visão? Preencha o formulário ou entre em contato pelos nossos canais sociais. Estamos ansiosos para ouvir você.
            </motion.p>
          </div>

          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-6 group cursor-pointer">
              <div className="w-12 h-12 rounded-full border border-accent/20 flex items-center justify-center group-hover:bg-accent group-hover:text-ink transition-all duration-300">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest opacity-40 block mb-1">Localização</span>
                <p className="font-serif text-xl font-medium">Campinas, SP</p>
              </div>
            </div>
            <a 
              href="https://wa.me/5519981901945" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-6 group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full border border-accent/20 flex items-center justify-center group-hover:bg-accent group-hover:text-ink transition-all duration-300">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest opacity-40 block mb-1">WhatsApp</span>
                <p className="font-serif text-xl font-medium">+55 19 98190-1945</p>
              </div>
            </a>
            <a 
              href="https://www.instagram.com/juniorgotti.tattoo?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-6 group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full border border-accent/20 flex items-center justify-center group-hover:bg-accent group-hover:text-ink transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </div>
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest opacity-40 block mb-1">Instagram</span>
                <p className="font-serif text-xl font-medium">@juniorgotti.tattoo</p>
              </div>
            </a>
          </div>
        </div>

        {/* Form Side */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="glass p-12 rounded-3xl"
        >
          <form className="flex flex-col gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-2">
                <label className="font-mono text-[10px] uppercase tracking-widest opacity-40">Nome Completo</label>
                <input 
                  type="text" 
                  placeholder="Seu Nome"
                  className="bg-transparent border-b border-white/10 py-4 font-serif text-xl focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-mono text-[10px] uppercase tracking-widest opacity-40">E-mail</label>
                <input 
                  type="email" 
                  placeholder="seu@email.com"
                  className="bg-transparent border-b border-white/10 py-4 font-serif text-xl focus:outline-none focus:border-accent transition-colors"
                />
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="font-mono text-[10px] uppercase tracking-widest opacity-40">Descrição da Ideia</label>
              <textarea 
                rows={4}
                placeholder="Conte-nos sobre sua ideia de tatuagem..."
                className="bg-transparent border-b border-white/10 py-4 font-serif text-xl focus:outline-none focus:border-accent transition-colors resize-none"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-mono text-[10px] uppercase tracking-widest opacity-40">Local e Tamanho</label>
              <input 
                type="text" 
                placeholder="ex: Antebraço, 10cm"
                className="bg-transparent border-b border-white/10 py-4 font-serif text-xl focus:outline-none focus:border-accent transition-colors"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-8 px-12 py-5 bg-accent text-ink font-mono text-[11px] uppercase tracking-[0.3em] font-bold rounded-full hover:bg-white transition-all duration-300"
            >
              Enviar Mensagem
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
