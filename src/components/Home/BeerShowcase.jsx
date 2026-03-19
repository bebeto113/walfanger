import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// Certifique-se de que o caminho da imagem está correto
import DOPPELBOCK from '../../assets/DOPPELBOCK-e1716291411596-removebg-preview.png';

// 1. DADOS ATUALIZADOS: Agora focados nas Linhas de Produto
const beerLines = [
    {
        id: 1,
        lineName: "Clássicas",
        representative: "Doppelbock",
        aroma: "Maltes tostados com notas de caramelo e toffee.",
        abv: "7.5%",
        style: "Doppelbock Clássica",
        ibu: "25",
        ibuText: "25 IBU (Suave)",
        image: DOPPELBOCK // Substitua depois por uma garrafa de 500ml clássica
    },
    {
        id: 2,
        lineName: "Long Neck",
        representative: "Munich Helles",
        aroma: "Pão fresco, cereais e lúpulo floral suave.",
        abv: "5.0%",
        style: "Helles Lager",
        ibu: "16",
        ibuText: "16 IBU (Leve)",
        image: DOPPELBOCK // Substitua depois pela foto de uma Long Neck
    },
    {
        id: 3,
        lineName: "Trigêmeos",
        representative: "Albert IPA",
        aroma: "Explosão de maracujá, cítrico e pinho.",
        abv: "6.5%",
        style: "German IPA",
        ibu: "50",
        ibuText: "50 IBU (Forte)",
        image: DOPPELBOCK // Substitua depois pela garrafa ou lata da linha Trigêmeos
    }
];

const BeerShowcase = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(1);

    const currentLine = beerLines[currentIndex];

    const handleNext = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1 === beerLines.length ? 0 : prev + 1));
    };

    const handlePrev = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev === 0 ? beerLines.length - 1 : prev - 1));
    };

    const bottleVariants = {
        initial: (dir) => ({ x: dir > 0 ? 100 : -100, opacity: 0 }),
        animate: { x: 0, opacity: 1, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
        exit: (dir) => ({ x: dir > 0 ? -100 : 100, opacity: 0, transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } })
    };

    const textVariants = {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 } },
        exit: { opacity: 0, y: -10, transition: { duration: 0.3 } }
    };

    return (
        <section className="relative min-h-screen w-full bg-[#fdfbf7] flex flex-col justify-center overflow-hidden font-sans py-8 md:py-12">

            {/* LUZ DE ESTÚDIO */}
            <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
                <div className="w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-[#f0ebd8] rounded-full blur-[100px] opacity-60" />
            </div>

            {/* TEXTO GIGANTE NO FUNDO (Agora mostra o nome da LINHA: "CLÁSSICAS", "LONG NECK") */}
            <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.h1
                        key={currentLine.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.05 }}
                        transition={{ duration: 1 }}
                        className="text-[18vw] md:text-[20vw] font-serif font-black text-[#f2eee3] leading-none tracking-tighter whitespace-nowrap select-none"
                    >
                        {currentLine.lineName.toUpperCase()}
                    </motion.h1>
                </AnimatePresence>
            </div>

            {/* SETAS LATERAIS */}
            <div className="absolute inset-0 z-40 pointer-events-none flex items-center justify-between px-2 md:px-10">
                <button onClick={handlePrev} className="pointer-events-auto text-[#a39a8c] hover:text-[#c4a673] p-4 group">
                    <svg className="w-8 h-8 md:w-12 md:h-12 transform group-hover:-translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button onClick={handleNext} className="pointer-events-auto text-[#a39a8c] hover:text-[#c4a673] p-4 group">
                    <svg className="w-8 h-8 md:w-12 md:h-12 transform group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>

            {/* CONTAINER PRINCIPAL */}
            <div className="container mx-auto px-6 relative z-10 w-full max-w-7xl flex flex-col items-center">

                {/* 1. TOPO (Título) - Agora dinâmico para destacar a Coleção */}
                <div className="w-full flex flex-col items-center text-center mb-4 md:mb-6">
                    <span className="text-[#a39a8c] uppercase tracking-[0.4em] text-[10px] md:text-xs font-semibold mb-2">
                        Coleção Walfänger
                    </span>
                    <AnimatePresence mode="wait">
                        <motion.h2
                            key={currentLine.id}
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 5 }}
                            className="text-[#2c2825] text-xl md:text-2xl font-serif italic"
                        >
                            Linha {currentLine.lineName}
                        </motion.h2>
                    </AnimatePresence>
                </div>

                {/* 2. MIOLO (Garrafa e Textos laterais da cerveja representante) */}
                <div className="w-full grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center justify-center gap-4 md:gap-8 lg:gap-12 mb-6 md:mb-8">

                    {/* INFO ESQUERDA */}
                    <div className="hidden md:flex flex-col items-end text-right w-full">
                        <AnimatePresence mode="wait">
                            <motion.div key={currentLine.id} variants={textVariants} initial="initial" animate="animate" exit="exit" className="flex flex-col gap-8">
                                <div>
                                    <span className="block text-[#a39a8c] text-[10px] uppercase tracking-widest font-bold mb-1">Cerveja Destaque</span>
                                    <p className="text-[#4a4541] font-serif text-lg leading-snug max-w-[200px]">{currentLine.representative}</p>
                                </div>
                                <div>
                                    <span className="block text-[#a39a8c] text-[10px] uppercase tracking-widest font-bold mb-1">Aroma Mestre</span>
                                    <p className="text-[#4a4541] font-serif text-lg leading-snug max-w-[200px]">{currentLine.aroma}</p>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* GARRAFA */}
                    <div className="flex flex-col items-center justify-center w-full max-w-[250px] md:max-w-[300px] mx-auto relative">
                        <AnimatePresence mode="wait" custom={direction}>
                            <motion.div
                                key={currentLine.id}
                                custom={direction}
                                variants={bottleVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                className="w-full flex justify-center"
                            >
                                <motion.img
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    src={currentLine.image}
                                    alt={`Linha ${currentLine.lineName}`}
                                    className="h-[35vh] md:h-[45vh] min-h-[280px] max-h-[480px] w-auto object-contain drop-shadow-[0_30px_30px_rgba(0,0,0,0.15)] relative z-20"
                                />
                            </motion.div>
                        </AnimatePresence>
                        <div className="w-24 md:w-32 h-3 md:h-4 bg-black/10 rounded-[100%] blur-[8px] mt-2 relative z-10" />
                    </div>

                    {/* INFO DIREITA */}
                    <div className="hidden md:flex flex-col items-start text-left w-full">
                        <AnimatePresence mode="wait">
                            <motion.div key={currentLine.id} variants={textVariants} initial="initial" animate="animate" exit="exit" className="flex flex-col gap-8">
                                <div>
                                    <span className="block text-[#a39a8c] text-[10px] uppercase tracking-widest font-bold mb-1">Estilo</span>
                                    <p className="text-[#4a4541] font-serif text-lg leading-snug max-w-[200px]">{currentLine.style}</p>
                                </div>
                                <div>
                                    <span className="block text-[#a39a8c] text-[10px] uppercase tracking-widest font-bold mb-1">Amargor</span>
                                    <p className="text-[#4a4541] font-serif text-lg leading-snug">{currentLine.ibuText}</p>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* 3. RODAPÉ */}
                <div className="w-full flex flex-col items-center gap-4 md:gap-6">

                    {/* Infos Mobile (Compactado) */}
                    <div className="flex md:hidden w-full max-w-md h-[50px] relative overflow-hidden">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentLine.id}
                                variants={textVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                className="flex justify-between items-center w-full px-4 text-center absolute"
                            >
                                <div className="flex flex-col flex-1">
                                    <span className="block text-[#a39a8c] text-[9px] uppercase tracking-widest font-bold">Destaque</span>
                                    <span className="text-[#4a4541] font-serif text-sm truncate px-1">{currentLine.representative}</span>
                                </div>
                                <div className="w-[1px] h-6 bg-[#dcd5c9]" />
                                <div className="flex flex-col flex-1">
                                    <span className="block text-[#a39a8c] text-[9px] uppercase tracking-widest font-bold">Estilo</span>
                                    <span className="text-[#4a4541] font-serif text-sm truncate px-1">{currentLine.style}</span>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Botão Principal Dinâmico */}
                    <button className="group relative px-8 py-3.5 text-[#2c2825] uppercase tracking-[0.2em] text-[10px] md:text-xs font-bold transition-all overflow-hidden border border-[#2c2825] w-full max-w-xs md:w-auto">
                        <span className="relative z-10 transition-colors group-hover:text-white">Explorar Linha {currentLine.lineName}</span>
                        <div className="absolute inset-0 bg-[#2c2825] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]" />
                    </button>

                    {/* Indicadores (Bolinhas) */}
                    <div className="flex gap-3">
                        {beerLines.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setDirection(index > currentIndex ? 1 : -1);
                                    setCurrentIndex(index);
                                }}
                                className={`h-1.5 transition-all duration-500 rounded-full ${index === currentIndex ? 'w-8 bg-[#c4a673]' : 'w-2 bg-[#dcd5c9] hover:bg-[#a39a8c]'}`}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default BeerShowcase;