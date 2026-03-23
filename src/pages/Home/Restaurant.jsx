import React from 'react';
import { motion } from 'framer-motion';

// Substitua pelos caminhos reais das suas imagens
const IMG_INTERIOR = "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=1934"; // Foto panorâmica do ambiente
const IMG_FOOD = "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&q=80&w=2000"; // Foto do prato/porção
const IMG_BEER = "https://images.unsplash.com/photo-1575037614876-c385f28b183a?auto=format&fit=crop&q=80&w=2000"; // Foto da cerveja suada

// NOVO: Array com 10 imagens para a esteira do restaurante
const GALLERY_IMAGES = [
    "https://walfanger.com.br/wp-content/uploads/2024/06/IMG_9545-scaled.jpg",
    "https://walfanger.com.br/wp-content/uploads/2024/06/IMG_9710-scaled.jpg",
    "https://walfanger.com.br/wp-content/uploads/2024/06/IMG_9505-1-scaled.jpg",
    "https://walfanger.com.br/wp-content/uploads/2024/06/IMG_9666-1-scaled.jpg",
    "https://walfanger.com.br/wp-content/uploads/2024/06/IMG_9410-1-scaled.jpg",
    "https://walfanger.com.br/wp-content/uploads/2024/06/IMG_9738-scaled.jpg",
    "https://walfanger.com.br/wp-content/uploads/2024/06/IMG_9502-1-scaled.jpg",
    "https://walfanger.com.br/wp-content/uploads/2024/06/IMG_9688-scaled.jpg",
    "https://walfanger.com.br/wp-content/uploads/2024/06/IMG_9738-scaled.jpg",
    "https://walfanger.com.br/wp-content/uploads/2024/06/IMG_9505-1-scaled.jpg"
];

const Restaurant = () => {
    return (
        <section className="relative w-full h-full bg-[#fdfbf7] py-20 lg:py-52 font-sans overflow-x-hidden ">

            {/* TYPOGRAPHY BACKGROUND - Estilo "Outline" Arquitetônico */}
            <div className="absolute top-10 lg:top-20 left-0 w-full overflow-hidden pointer-events-none z-0">
                <motion.h2
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 0.15 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="text-[18vw] font-serif font-black text-transparent whitespace-nowrap"
                    style={{ WebkitTextStroke: '2px #c4a673' }}
                >
                    BIERGARTEN
                </motion.h2>
            </div>

            <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">

                <div className="relative w-full flex flex-col lg:block">

                    {/* IMAGEM CINEMATOGRÁFICA (Fundo principal) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2 }}
                        className="w-full lg:w-[75%] h-[50vh] lg:h-[750px] relative z-10 overflow-hidden"
                    >
                        {/* Overlay para escurecer sutilmente a foto do ambiente */}
                        <div className="absolute inset-0 bg-[#2a2622]/20 z-10 pointer-events-none" />
                        <img
                            src={IMG_INTERIOR}
                            alt="Ambiente Walfänger"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>

                    {/* IMAGEM DE DETALHE (O Prato - Quebrando a grade no Desktop) */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="hidden lg:block absolute -bottom-16 left-12 z-30 w-[350px] aspect-[3/4] border-[12px] border-[#fdfbf7] shadow-2xl overflow-hidden bg-white"
                    >
                        <img
                            src={IMG_FOOD}
                            alt="Gastronomia Walfänger"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                        />
                        {/* Tag flutuante na imagem do prato */}
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#d10000]" />
                            <span className="text-[#2a2622] text-[9px] uppercase font-bold tracking-widest">Culinária Alemã</span>
                        </div>
                    </motion.div>

                    {/* O CARTÃO FLUTUANTE (Editorial Block) */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        // No mobile ele sobe sobrepondo a imagem (-mt-20). No PC ele flutua na direita absoluta.
                        className="w-[90%] sm:w-[85%] lg:w-[45%] mx-auto lg:mx-0 lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 bg-[#fdfbf7] p-8 sm:p-12 lg:p-16 z-40 shadow-2xl border border-[#e3d8c1] -mt-52 lg:-mt-52"
                    >
                        {/* Guia Alemã Minimalista */}
                        <div className="flex gap-1 mb-6">
                            <div className="w-2 h-[2px] bg-black" />
                            <div className="w-2 h-[2px] bg-[#d10000]" />
                            <div className="w-2 h-[2px] bg-[#ffcc00]" />
                        </div>

                        <span className="block text-[#c4a673] uppercase tracking-[0.3em] text-[10px] font-bold mb-4">
                            Brewpub & Biergarten
                        </span>

                        <h3 className="text-[#2a2622] text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
                            O Restaurante <br />
                            <span className="italic font-medium text-[0.8em] text-[#8c8273]">de Ribeirão.</span>
                        </h3>

                        <p className="text-[#59534d] font-serif text-base sm:text-lg leading-relaxed mb-10">
                            A autêntica experiência de degustar cervejas frescas ao lado dos tanques onde nasceram. Um menu meticulosamente pensado para harmonizar a clássica culinária alemã com nossos estilos premiados.
                        </p>

                        {/* Grid de Facilidades (Ícones textuais) */}
                        <div className="flex flex-col gap-5 mb-12">
                            <div className="flex items-center gap-4 border-b border-[#e3d8c1] pb-4">
                                <span className="text-[#c4a673] text-lg font-serif italic">01.</span>
                                <div>
                                    <span className="block text-[#2a2622] font-bold text-sm uppercase tracking-widest">Biergarten</span>
                                    <span className="text-[#8c8273] text-xs font-serif">Ambiente tradicional e climatizado</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 border-b border-[#e3d8c1] pb-4">
                                <span className="text-[#c4a673] text-lg font-serif italic">02.</span>
                                <div>
                                    <span className="block text-[#2a2622] font-bold text-sm uppercase tracking-widest">Família</span>
                                    <span className="text-[#8c8273] text-xs font-serif">Espaço Kids completo</span>
                                </div>
                            </div>
                        </div>

                        {/* Botões de Ação */}
                        <div className="flex flex-col sm:flex-row gap-4 w-full">
                            <button className="group relative flex-1 text-center py-4 text-[#2a2622] uppercase tracking-[0.2em] text-[10px] font-bold transition-all overflow-hidden border border-[#2a2622]">
                                <span className="relative z-10 transition-colors group-hover:text-white">Acessar Menu</span>
                                <div className="absolute inset-0 bg-[#2a2622] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]" />

                                {/* Acentuação Alemã no Hover */}
                                <div className="absolute bottom-0 left-0 w-full h-[2px] flex opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                                    <div className="flex-1 bg-black" />
                                    <div className="flex-1 bg-[#d10000]" />
                                    <div className="flex-1 bg-[#ffcc00]" />
                                </div>
                            </button>

                            <button className="group flex-1 text-center py-4 text-[#2a2622] uppercase tracking-[0.2em] text-[10px] font-bold transition-all border border-transparent hover:border-[#d6ccb8]">
                                Reservar Mesa
                            </button>
                        </div>
                    </motion.div>

                </div>

            </div>

            {/* ADIÇÃO: CARROSSEL DE IMAGENS INFINITO (Estilo Galeria) */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.6 }}
                className="w-full mt-24 md:mt-64 overflow-hidden flex relative z-20"
            >
                <div className="flex w-max animate-gallery items-center gap-4 px-2">
                    {/* Duplicamos o array na renderização para o loop infinito perfeito */}
                    {[...GALLERY_IMAGES, ...GALLERY_IMAGES].map((img, i) => (
                        <div
                            key={i}
                            className="w-[220px] md:w-[320px] h-[280px] md:h-[400px] flex-shrink-0 overflow-hidden rounded-sm group cursor-pointer"
                        >
                            <img
                                src={img}
                                alt={`Galeria Walfänger ${i}`}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />

                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Estilos CSS para o Marquee de Imagens */}
            <style jsx>{`
                .animate-gallery {
                    animation: galleryScroll 50s linear infinite;
                }
                /* Pausa a animação quando o usuário passa o mouse por cima para ver a foto */
                .animate-gallery:hover {
                    animation-play-state: paused;
                }
                @keyframes galleryScroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
            `}</style>

        </section>
    );
};

export default Restaurant;