import React from 'react';
import { motion } from 'framer-motion';
// Assets
import BARRIL_IMG from '../../assets/Barril-de-Chopp-Walfanger-e1715620200945.webp';
import GROWLER_IMG from '../../assets/Growler-walfanger.webp';

const Takeaway = () => {
    // Componente auxiliar para a linha tripla minimalista
    const GermanLine = ({ vertical = true }) => (
        <div className={`flex ${vertical ? 'flex-col w-[2px] h-full' : 'flex-row w-full h-[2px]'} opacity-40`}>
            <div className={`${vertical ? 'flex-1 w-full' : 'flex-1 h-full'} bg-black`} />
            <div className={`${vertical ? 'flex-1 w-full' : 'flex-1 h-full'} bg-[#d10000]`} />
            <div className={`${vertical ? 'flex-1 w-full' : 'flex-1 h-full'} bg-[#ffcc00]`} />
        </div>
    );

    return (
        <section className="relative w-full bg-[#fdfbf7] py-16 md:py-40 overflow-hidden font-sans">

            {/* TEXTO DE FUNDO GIGANTE */}
            <div className="absolute inset-0 z-0 flex flex-col items-center justify-center pointer-events-none select-none opacity-[0.02] md:opacity-[0.03]">
                <h2 className="text-[35vw] md:text-[25vw] font-serif font-black leading-none uppercase">Kegs</h2>
                <h2 className="text-[35vw] md:text-[25vw] font-serif font-black leading-none mt-[-5vw] uppercase">Fresh</h2>
            </div>

            <div className="container mx-auto px-6 relative z-10 max-w-7xl">

                {/* --- SEÇÃO BARRIL --- */}
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-16 mb-32 md:mb-60">

                    <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-2">

                        <div className="flex items-center gap-3 mb-6 lg:mb-8">
                            {/* Detalhe Sutil: 3 pontos alemães */}
                            <div className="flex gap-1">
                                <div className="w-1 h-1 rounded-full bg-black" />
                                <div className="w-1 h-1 rounded-full bg-[#d10000]" />
                                <div className="w-1 h-1 rounded-full bg-[#ffcc00]" />
                            </div>
                            <motion.span
                                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                                className="text-[#c4a673] uppercase tracking-[0.4em] text-[10px] font-bold"
                            >
                                Logística Própria e Eventos
                            </motion.span>
                        </div>

                        <motion.h3
                            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                            className="text-[#2a2622] text-5xl md:text-8xl font-serif font-bold mb-6 md:mb-8 leading-[0.95]"
                        >
                            BARRIL <br className="hidden md:block" />
                            <span className="italic font-medium text-[0.7em] md:text-[0.6em] text-[#8c8273]">Walfänger</span>
                        </motion.h3>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative w-full flex justify-center lg:hidden mb-8"
                        >
                            <img
                                src={BARRIL_IMG}
                                alt="Barril Walfänger"
                                className="w-[65%] max-w-[280px] object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.1)]"
                            />
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                            className="text-[#59534d] font-serif text-lg md:text-xl leading-relaxed mb-10 max-w-md"
                        >
                            Da nossa fábrica para sua casa ou evento. Oferecemos estruturas modulares e chopeiras profissionais para casamentos, formaturas e grandes celebrações.
                        </motion.p>

                        {/* DETALHES TÉCNICOS COM DIVISOR ALEMÃO */}
                        <div className="flex justify-center lg:justify-start gap-8 md:gap-12 mb-10 w-full lg:w-auto">
                            <div className="hidden lg:block">
                                <GermanLine vertical={true} />
                            </div>
                            <div className="text-center lg:text-left lg:pl-8">
                                <span className="block text-[#a39a8c] text-[8px] md:text-[9px] uppercase tracking-widest font-bold mb-1">Capacidades</span>
                                <span className="text-[#2a2622] font-serif text-base md:text-lg">20L, 30L e 50L</span>
                            </div>
                            <div className="text-center lg:text-left">
                                <span className="block text-[#a39a8c] text-[8px] md:text-[9px] uppercase tracking-widest font-bold mb-1">Extração</span>
                                <span className="text-[#2a2622] font-serif text-base md:text-lg">Elétrica ou Gelo</span>
                            </div>
                        </div>

                        <button className="group relative w-full sm:w-auto px-10 py-4 text-[#2a2622] uppercase tracking-[0.2em] text-xs font-bold transition-all overflow-hidden border border-[#2a2622]">
                            <span className="relative z-10 transition-colors group-hover:text-white">Solicitar Orçamento</span>
                            <div className="absolute inset-0 bg-[#2a2622] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]" />

                            {/* DETALHE ALEMÃO NO BOTÃO: Linha base que aparece no hover */}
                            <div className="absolute bottom-0 left-0 w-full h-[2px] flex opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                                <div className="flex-1 bg-black" />
                                <div className="flex-1 bg-[#d10000]" />
                                <div className="flex-1 bg-[#ffcc00]" />
                            </div>
                        </button>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="hidden lg:flex w-1/2 justify-center lg:order-1"
                    >
                        <motion.img
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            src={BARRIL_IMG}
                            alt="Barril Walfänger Desktop"
                            className="w-full max-w-[450px] object-contain drop-shadow-[0_40px_50px_rgba(0,0,0,0.1)]"
                        />
                    </motion.div>
                </div>

                {/* --- SEÇÃO GROWLER --- */}
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-16">

                    <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-end text-center lg:text-right order-2 lg:order-1">

                        <div className="flex items-center gap-3 mb-6 lg:mb-8">
                            <motion.span
                                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                                className="text-[#c4a673] uppercase tracking-[0.4em] text-[10px] font-bold"
                            >
                                Frescor Incomparável
                            </motion.span>
                            <div className="flex gap-1">
                                <div className="w-1 h-1 rounded-full bg-black" />
                                <div className="w-1 h-1 rounded-full bg-[#d10000]" />
                                <div className="w-1 h-1 rounded-full bg-[#ffcc00]" />
                            </div>
                        </div>

                        <motion.h3
                            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                            className="text-[#2a2622] text-5xl md:text-8xl font-serif font-bold mb-6 md:mb-8 leading-[0.95]"
                        >
                            GROWLER <br className="hidden md:block" />
                            <span className="italic font-medium text-[0.7em] md:text-[0.6em] text-[#8c8273]">Fresh PET</span>
                        </motion.h3>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className=" w-full h-full flex justify-center items-center lg:hidden mb-8"
                        >
                            <img
                                src={GROWLER_IMG}
                                alt="Growler Walfänger"
                                className="w-fit h-fit  drop-shadow-[0_30px_50px_rgba(0,0,0,0.15)]"
                            />
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                            className="text-[#59534d] font-serif text-lg md:text-xl leading-relaxed mb-10 max-w-md"
                        >
                            O chope não pasteurizado mantido em cadeia refrigerada para garantir a alma da cerveja artesanal em cada gole.
                        </motion.p>

                        {/* DETALHES TÉCNICOS COM DIVISOR ALEMÃO */}
                        <div className="flex justify-center lg:justify-end gap-8 md:gap-12 mb-10 w-full lg:w-auto">
                            <div className="text-center lg:text-right lg:pr-8">
                                <span className="block text-[#a39a8c] text-[8px] md:text-[9px] uppercase tracking-widest font-bold mb-1">Envasado em</span>
                                <span className="text-[#2a2622] font-serif text-base md:text-lg">PET Reciclável 1L</span>
                            </div>
                            <div className="text-center lg:text-right">
                                <span className="block text-[#a39a8c] text-[8px] md:text-[9px] uppercase tracking-widest font-bold mb-1">Logística</span>
                                <span className="text-[#2a2622] font-serif text-base md:text-lg">Cadeia Refrigerada</span>
                            </div>
                            <div className="hidden lg:block rotate-180">
                                <GermanLine vertical={true} />
                            </div>
                        </div>

                        <button className="group relative w-full sm:w-auto px-10 py-4 text-[#2a2622] uppercase tracking-[0.2em] text-xs font-bold transition-all overflow-hidden border border-[#2a2622]">
                            <span className="relative z-10 transition-colors group-hover:text-white">Pedir Delivery</span>
                            <div className="absolute inset-0 bg-[#2a2622] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]" />

                            {/* DETALHE ALEMÃO NO BOTÃO */}
                            <div className="absolute bottom-0 left-0 w-full h-[2px] flex opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                                <div className="flex-1 bg-black" />
                                <div className="flex-1 bg-[#d10000]" />
                                <div className="flex-1 bg-[#ffcc00]" />
                            </div>
                        </button>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="hidden lg:flex w-1/2 justify-center lg:order-2"
                    >
                        <motion.img
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            src={GROWLER_IMG}
                            alt="Growler Walfänger Desktop"
                            className="w-full max-w-[450px] object-contain drop-shadow-[0_40px_50px_rgba(0,0,0,0.1)]"
                        />
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default Takeaway;