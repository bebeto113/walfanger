import React from 'react';
import { motion } from 'framer-motion';

const TakeawayCTA = () => {
    return (
        <section className="relative w-full bg-[#120e0b] py-24 md:py-32 overflow-hidden border-t-4 border-[#c4a673]">

            {/* LUZ DE FUNDO (Glow dourado sutil no centro escuro) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[600px] bg-[#c4a673]/10 rounded-full blur-[100px] pointer-events-none" />

            {/* MARCA D'ÁGUA DE FUNDO */}
            <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden opacity-[0.03]">
                <h2 className="text-[20vw] font-serif font-black text-white leading-none tracking-tighter whitespace-nowrap select-none">
                    DELIVERY
                </h2>
            </div>

            <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">

                {/* SUBTÍTULO */}
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-[#c4a673] uppercase tracking-[0.4em] text-[10px] md:text-xs font-bold mb-6"
                >
                    Para a sua casa ou evento
                </motion.span>

                {/* TÍTULO PRINCIPAL */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-[#fcfaf7] text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 tracking-tight"
                >
                    Buscando <span className="italic font-light text-[#e3d8c1]">Barris ou Growlers?</span>
                </motion.h2>

                {/* TEXTO DE APOIO */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-[#a39a8c] font-serif text-base md:text-lg max-w-2xl mb-12 leading-relaxed"
                >
                    O verdadeiro chope artesanal, não pasteurizado e sempre fresco. Fale com a nossa equipe comercial e descubra a estrutura ideal para o seu momento.
                </motion.p>

                {/* BOTÃO DE CONTATO (Com o detalhe Alemão) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                >
                    {/* Altere o 'href' para o link do WhatsApp da cervejaria */}
                    <a
                        href="https://wa.me/seunumerodeexemplo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center justify-center px-10 py-5 text-[#120e0b] uppercase tracking-[0.2em] text-[10px] md:text-xs font-bold transition-all overflow-hidden bg-[#c4a673]"
                    >
                        <span className="relative z-10 transition-colors group-hover:text-white">Fale com o Comercial</span>

                        {/* Preenchimento Escuro no Hover */}
                        <div className="absolute inset-0 bg-[#2a2622] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]" />

                        {/* Linha Alemã que brilha na base do botão ao passar o mouse */}
                        <div className="absolute bottom-0 left-0 w-full h-[3px] flex opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                            <div className="flex-1 bg-black" />
                            <div className="flex-1 bg-[#d10000]" />
                            <div className="flex-1 bg-[#ffcc00]" />
                        </div>
                    </a>
                </motion.div>

            </div>
        </section>
    );
};

export default TakeawayCTA;