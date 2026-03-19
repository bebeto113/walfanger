import React from 'react';
import { motion } from 'framer-motion';
// Certifique-se de que o caminho da imagem está correto
import DOPPELBOCK from '../../assets/DOPPELBOCK-e1716291411596-removebg-preview.png';
import Logo from '../../assets/walfangerLogo-removebg-preview.png';
import BeerShowcase from './BeerShowCase';

const Hero = () => {
    return (
        <section className="relative min-h-screen w-full bg-[#fcfaf7] overflow-hidden flex flex-col items-center justify-center pt-20 pb-10">

            {/* LUZ DE FUNDO RADIAL  */}
            <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
                <div className="w-[80vw] h-[80vw] max-w-[1000px] max-h-[1000px] bg-gradient-to-tr from-[#f4ecd8] to-transparent rounded-full blur-[120px] opacity-70" />
            </div>

            {/* DETALHES LATERAIS */}
            <div className="absolute left-8 md:left-16 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-6 z-10">
                <span className="text-[#c4a673] text-[10px] font-bold uppercase tracking-[0.3em] style-vertical">
                    Desde 2015
                </span>
                <div className="w-[1px] h-24 bg-gradient-to-b from-[#c4a673] to-transparent" />
            </div>

            <div className="absolute right-8 md:right-16 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-6 z-10">
                <div className="w-[1px] h-24 bg-gradient-to-t from-[#c4a673] to-transparent" />
                <span className="text-[#c4a673] text-[10px] font-bold uppercase tracking-[0.3em] style-vertical">
                    Ribeirão Preto
                </span>
            </div>

            <div className="container mx-auto px-6 relative z-20 flex flex-col items-center text-center">

                {/* SUBTÍTULO / INTRO */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="-mb-4"
                >
                    <span className="text-[#8c8273] uppercase tracking-[0.4em] text-xs font-semibold flex items-center gap-4">
                        <span className="w-8 h-[1px] bg-[#8c8273]"></span>
                        Cervejaria <img src={Logo} alt="Walfänger Logo" className="h-8 md:h-14" /> Walfänger
                        <span className="w-8 h-[1px] bg-[#8c8273]"></span>
                    </span>
                </motion.div>

                {/* TÍTULO PRINCIPAL (O texto fica atrás da garrafa) */}
                <div className="relative w-full flex justify-center items-center mt-4 md:mt-8">
                    {/* Texto Gigante */}
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="absolute text-[12vw] md:text-[9vw] font-serif font-black text-[#2a2622] leading-none whitespace-nowrap tracking-tight z-0"
                    >
                        A VERDADEIRA<br />
                        <span className="text-[#e3d8c1] italic font-medium ml-12 md:ml-32">ALMA ALEMÃ.</span>
                    </motion.h1>

                    {/* A GARRAFA (Sobreposta ao texto) */}
                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
                        className="relative z-20 mt-12 md:mt-24"
                    >
                        {/* Selos Flutuantes em volta da garrafa */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1 }}
                            className="absolute top-1/4 -left-16 md:-left-24 bg-white/60 backdrop-blur-md px-4 py-2 border border-[#e3d8c1] rounded-sm shadow-sm hidden sm:block"
                        >
                            <span className="text-[#a68a56] text-[9px] uppercase font-bold tracking-widest block text-left">Premiada</span>
                            <span className="text-[#2a2622] text-xs font-serif font-bold">World Beer Awards</span>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.2 }}
                            className="absolute bottom-1/4 -right-16 md:-right-24 bg-white/60 backdrop-blur-md px-4 py-2 border border-[#e3d8c1] rounded-sm shadow-sm hidden sm:block"
                        >
                            <span className="text-[#a68a56] text-[9px] uppercase font-bold tracking-widest block text-left">Lei da Pureza</span>
                            <span className="text-[#2a2622] text-xs font-serif font-bold">Reinheitsgebot</span>
                        </motion.div>

                        {/* Imagem da Garrafa */}
                        <img
                            src={DOPPELBOCK}
                            alt="Walfänger Beer"
                            className="h-[40vh] md:h-[55vh] object-contain drop-shadow-2xl"
                        />
                    </motion.div>
                </div>

                {/* TEXTO DE APOIO E BOTÕES */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="relative z-30 flex flex-col items-center mt-8 md:mt-12 max-w-2xl"
                >
                    <p className="text-[#59534d] font-serif text-lg md:text-xl leading-relaxed mb-8 px-4">
                        Forjadas com rigor no interior de São Paulo. Respeitamos o tempo e a pureza para entregar uma experiência que vai além do copo.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 w-full sm:w-auto px-4">

                        {/* BOTÃO 1: PRINCIPAL (Preenchimento Dourado de baixo para cima) */}
                        <button className="group relative flex items-center justify-center gap-4 w-full sm:w-auto bg-[#2a2622] text-white px-8 py-4 text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] overflow-hidden transition-all duration-500 hover:shadow-[0_10px_40px_-10px_rgba(42,38,34,0.4)]">
                            {/* Fundo Dourado que sobe */}
                            <div className="absolute inset-0 bg-[#c4a673] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]" />

                            {/* Texto */}
                            <span className="relative z-10 transition-colors duration-500 group-hover:text-[#2a2622]">
                                Ver Nossas Cervejas
                            </span>

                            {/* Ícone de Seta Minimalista (Move suavemente para a direita) */}
                            <svg
                                className="relative z-10 w-4 h-4 transform group-hover:translate-x-1 transition-all duration-500 group-hover:text-[#2a2622]"
                                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </button>

                        {/* BOTÃO 2: SECUNDÁRIO (Preenchimento Escuro da esquerda para a direita) */}
                        <button className="group relative flex items-center justify-center w-full sm:w-auto px-8 py-4 text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] text-[#2a2622] border border-[#d6ccb8] overflow-hidden transition-all duration-500">
                            {/* Fundo Escuro que desliza da lateral */}
                            <div className="absolute inset-0 bg-[#2a2622] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]" />

                            {/* Texto (Fica branco no hover) */}
                            <span className="relative z-10 group-hover:text-white transition-colors duration-500">
                                Conhecer a Fábrica
                            </span>
                        </button>

                    </div>
                </motion.div>

            </div>

            {/* Css extra para o texto vertical nas laterais */}
            <style jsx>{`
                .style-vertical {
                    writing-mode: vertical-rl;
                    text-orientation: mixed;
                    transform: rotate(180deg);
                }
            `}</style>

            <div className='mt-20 min-h-screen w-full'>
                <BeerShowcase />
            </div>
        </section>
    );
};

export default Hero;