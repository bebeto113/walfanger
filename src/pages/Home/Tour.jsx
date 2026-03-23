import React from 'react';
import { motion } from 'framer-motion';

// Você pode substituir por uma foto do tour em alta qualidade
const TOUR_IMG = "https://images.unsplash.com/photo-1585501869324-4f40778c1f96?auto=format&fit=crop&q=80&w=2070";

const Tour = () => {
    return (
        <section className="relative w-full bg-[#fdfbf7] py-24 md:py-32 overflow-hidden font-sans">
            <div className="container mx-auto px-6 max-w-7xl">

                <div className="flex flex-col lg:flex-row items-center justify-between gap-16 md:gap-24">

                    {/* LADO ESQUERDO: A Imagem em formato de Arco (Arch Window) */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="w-full lg:w-1/2 flex justify-center relative order-2 lg:order-1"
                    >
                        {/* Elemento Decorativo de Fundo (Cria profundidade) */}
                        <div className="absolute top-8 -left-4 md:-left-8 w-full h-full bg-[#f0ebd8] rounded-t-[200px] md:rounded-t-[300px] rounded-b-sm -z-10" />

                        {/* Contêiner da Imagem com overflow hidden para o efeito de Parallax no hover */}
                        <div className="relative w-full hidden md:flex max-w-[400px] md:max-w-[500px] aspect-[4/5] rounded-t-[200px] md:rounded-t-[300px] rounded-b-sm overflow-hidden shadow-2xl">
                            {/* Overlay quente para padronizar a cor da foto com o site */}
                            <div className="absolute inset-0 bg-[#c4a673]/10 mix-blend-multiply z-10 pointer-events-none" />

                            <motion.img
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                src={TOUR_IMG} // Coloque a imagem da galera do tour aqui
                                alt="Tour Guiado Walfänger"
                                className="w-full h-full object-cover"
                            />

                            {/* Badge Flutuante na Imagem */}
                            <div className="absolute bottom-6 md:bottom-10 -left-4 md:-left-6 bg-white/90 backdrop-blur-md px-6 py-4 border border-[#e3d8c1] shadow-lg z-20">
                                <span className="block text-[#a68a56] text-[9px] uppercase font-bold tracking-widest mb-1">Duração</span>
                                <span className="text-[#2a2622] text-sm md:text-base font-serif font-bold">Experiência Imersiva</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* LADO DIREITO: O Texto e Call to Action */}
                    <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left order-1 lg:order-2">

                        {/* Detalhe Alemão e Subtítulo */}
                        <div className="flex items-center gap-3 mb-6 md:mb-8">
                            <div className="flex gap-1 hidden md:flex">
                                <div className="w-1.5 h-1.5 rounded-full bg-black" />
                                <div className="w-1.5 h-1.5 rounded-full bg-[#d10000]" />
                                <div className="w-1.5 h-1.5 rounded-full bg-[#ffcc00]" />
                            </div>
                            <motion.span
                                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                                className="text-[#c4a673] uppercase tracking-[0.4em] text-[10px] md:text-xs font-bold"
                            >
                                Bastidores Walfänger
                            </motion.span>
                        </div>

                        {/* Título Principal Elevado */}
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                            className="text-[#2a2622] text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 md:mb-8 leading-[0.95]"
                        >
                            TOUR <br className="hidden md:block" />
                            <span className="italic font-medium text-[0.8em] text-[#c4a673]">Guiado.</span>
                        </motion.h2>

                        {/* Texto Explicativo Elegante */}
                        <motion.p
                            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-[#59534d] font-serif text-lg md:text-xl leading-relaxed mb-10 max-w-md"
                        >
                            Conheça de perto a nossa fábrica. Uma imersão sensorial pelos processos, ingredientes e segredos da escola alemã que dão vida às nossas cervejas premiadas.
                        </motion.p>

                        {/* Informações Extras Minimalistas */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-8 md:gap-12 mb-12 border-t lg:border-t-0 lg:border-l border-[#d6ccb8] pt-6 lg:pt-0 lg:pl-8">
                            <div>
                                <span className="block text-[#a39a8c] text-[9px] uppercase tracking-widest font-bold mb-2">Degustação</span>
                                <span className="text-[#2a2622] font-serif text-base font-medium">Inclusa</span>
                            </div>
                            <div>
                                <span className="block text-[#a39a8c] text-[9px] uppercase tracking-widest font-bold mb-2">Turmas</span>
                                <span className="text-[#2a2622] font-serif text-base font-medium">Vagas Limitadas</span>
                            </div>
                        </div>

                        {/* O Botão Premium com a Linha Alemã que criamos */}
                        <motion.button
                            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="group relative w-full sm:w-auto px-12 py-5 text-[#2a2622] uppercase tracking-[0.2em] text-xs font-bold transition-all overflow-hidden border border-[#2a2622]"
                        >
                            <span className="relative z-10 transition-colors group-hover:text-white">Agendar Meu Tour</span>
                            <div className="absolute inset-0 bg-[#2a2622] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]" />

                            {/* Detalhe Alemão no Botão (Linha de base no hover) */}
                            <div className="absolute bottom-0 left-0 w-full h-[2px] flex opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                                <div className="flex-1 bg-black" />
                                <div className="flex-1 bg-[#d10000]" />
                                <div className="flex-1 bg-[#ffcc00]" />
                            </div>
                        </motion.button>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Tour;