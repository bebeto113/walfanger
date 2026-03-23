import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

import { Search, X, Plus } from 'lucide-react';
import beersDatabase from './DataBeers';
import DOPPELBOCK from '../../assets/DOPPELBOCK-e1716291411596-removebg-preview.png';
import TakeawayCTA from './TakeawayCTA';

const BeersCatalog = () => {

    const location = useLocation();

    const [selectedLine, setSelectedLine] = useState(location.state?.preSelectedLine || 'Todas');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedBeer, setSelectedBeer] = useState(null);

    const lines = ['Todas', 'Clássicas', 'Long Necks', 'Trigênios'];

    const cleanDescription = (text) => text.replace(/【.*?】/g, '');

    const getBeerLine = (beer) => {
        const trigemios = ["Sebastian", "Sigmund", "Albert"];
        if (trigemios.includes(beer.name)) return "Trigênios";
        if (beer.volumes.includes("355 ml")) return "Long Necks";
        return "Clássicas";
    };

    const filteredBeers = beersDatabase.filter(beer => {
        const beerLine = getBeerLine(beer);
        const matchLine = selectedLine === 'Todas' || beerLine === selectedLine;
        const matchSearch = beer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            beer.style.toLowerCase().includes(searchQuery.toLowerCase());
        return matchLine && matchSearch;
    });

    const modalVariants = {
        hidden: { opacity: 0, x: "100%" },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } },
        exit: { opacity: 0, x: "100%", transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] } }
    };

    return (
        <>
            <section className="relative min-h-screen w-full bg-[#fcfaf7] pt-32 pb-20 font-sans">
                <div className="container mx-auto px-6 max-w-7xl">

                    {/* CABEÇALHO DO CATÁLOGO */}
                    <div className="flex flex-col items-center text-center mb-16">
                        <span className="text-[#c4a673] uppercase tracking-[0.4em] text-[10px] font-bold mb-4">
                            Coleção Completa
                        </span>
                        <h1 className="text-[#2a2622] text-5xl md:text-6xl font-serif font-bold italic mb-6">
                            Nosso Catálogo.
                        </h1>
                        <p className="text-[#59534d] max-w-lg font-serif">
                            Explore nossa linha de cervejas puras, respeitando a lei da pureza de 1516. Encontre a sua favorita.
                        </p>
                    </div>

                    {/* FILTROS E PESQUISA */}
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12 border-y border-[#d6ccb8] py-6">
                        <div className="flex flex-wrap justify-center gap-3 md:gap-6">
                            {lines.map((line) => (
                                <button
                                    key={line}
                                    onClick={() => setSelectedLine(line)}
                                    className={`uppercase tracking-[0.2em] text-[9px] md:text-[10px] font-bold transition-all pb-1 border-b-2 ${selectedLine === line
                                        ? 'text-[#2a2622] border-[#c4a673]'
                                        : 'text-[#8c8273] border-transparent hover:text-[#2a2622]'
                                        }`}
                                >
                                    {line}
                                </button>
                            ))}
                        </div>

                        <div className="relative w-full md:w-64">
                            <input
                                type="text"
                                placeholder="Buscar estilo ou nome..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-transparent border-b border-[#a39a8c] py-2 pl-8 pr-4 text-xs font-serif italic text-[#2a2622] focus:outline-none focus:border-[#c4a673] transition-colors placeholder:text-[#a39a8c]"
                            />
                            <Search size={14} className="absolute left-0 top-1/2 -translate-y-1/2 text-[#a39a8c]" />
                        </div>
                    </div>

                    {/* GRID DE CERVEJAS (Cards Compactos) */}
                    {filteredBeers.length === 0 ? (
                        <div className="text-center py-20 text-[#8c8273] font-serif italic text-lg">
                            Nenhuma cerveja encontrada para sua busca.
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
                            {filteredBeers.map((beer) => {
                                const currentLine = getBeerLine(beer);
                                const beerImage = beer.images && beer.images.length > 0 ? beer.images[0] : DOPPELBOCK;

                                return (
                                    <motion.div
                                        key={beer.name}
                                        layout
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 0.4 }}
                                        // Card estruturado, menor e com sombra contida
                                        className="group relative flex flex-col bg-white border border-[#e3d8c1] hover:border-[#c4a673] p-5 cursor-pointer transition-all duration-500 hover:shadow-[0_15px_30px_rgba(0,0,0,0.06)]"
                                        onClick={() => setSelectedBeer({ ...beer, image: beerImage, line: currentLine })}
                                    >
                                        {/* Etiqueta de Volume */}
                                        <div className="absolute top-5 left-5 z-10">
                                            <span className="bg-[#fcfaf7] border border-[#e3d8c1] text-[#a68a56] text-[8px] font-bold uppercase tracking-widest px-2 py-1 rounded-sm">
                                                {beer.volumes[0]}
                                            </span>
                                        </div>

                                        {/* Imagem Contida (Altura Fixa de h-48 para não ficar gigante) */}
                                        <div className="w-full h-40 md:h-48 bg-[#fdfbf7] mt-8 mb-4 flex justify-center items-center relative rounded-sm">
                                            {/* Fundo redondo para destaque */}
                                            <div className="absolute w-24 h-24 bg-[#f4ecd8]/60 rounded-full group-hover:scale-110 transition-transform duration-500" />
                                            <img
                                                src={beerImage}
                                                alt={beer.name}
                                                className="h-[85%] w-auto object-contain drop-shadow-xl relative z-10 group-hover:-translate-y-2 transition-transform duration-500"
                                            />
                                        </div>

                                        {/* Textos Principais */}
                                        <div className="flex flex-col text-center flex-1">
                                            <span className="text-[#c4a673] uppercase tracking-[0.2em] text-[8px] font-bold mb-1">
                                                Linha {currentLine}
                                            </span>
                                            <h3 className="text-[#2a2622] text-xl font-serif font-bold mb-1">
                                                {beer.name}
                                            </h3>
                                            <p className="text-[#8c8273] font-serif italic text-xs mb-6 line-clamp-1">
                                                {beer.style}
                                            </p>
                                        </div>

                                        {/* INFORMAÇÕES CRUCIAIS BEM APARENTES (Rodapé do Card) */}
                                        <div className="border-t border-[#f0ebd8] pt-4 mt-auto flex items-center justify-between">
                                            <div className="flex items-center gap-4">
                                                <div className="flex flex-col text-left">
                                                    <span className="text-[#a39a8c] text-[8px] uppercase tracking-widest font-bold">ABV</span>
                                                    <span className="text-[#2a2622] font-bold text-sm">{beer.abv}%</span>
                                                </div>
                                                <div className="w-[1px] h-6 bg-[#f0ebd8]"></div>
                                                <div className="flex flex-col text-left">
                                                    <span className="text-[#a39a8c] text-[8px] uppercase tracking-widest font-bold">IBU</span>
                                                    <span className="text-[#2a2622] font-bold text-sm">{beer.ibu}</span>
                                                </div>
                                            </div>

                                            {/* Botão "+" interativo */}
                                            <div className="w-8 h-8 rounded-full border border-[#d6ccb8] flex items-center justify-center group-hover:bg-[#2a2622] group-hover:border-[#2a2622] transition-colors">
                                                <Plus size={16} className="text-[#2a2622] group-hover:text-white transition-colors" />
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    )}
                </div>

                {/* MODAL / DETALHES OFF-CANVAS */}
                <AnimatePresence>
                    {selectedBeer && (
                        <div className="fixed inset-0 z-[100] flex justify-end">

                            {/* Overlay Fundo Escuro */}
                            <motion.div
                                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                onClick={() => setSelectedBeer(null)}
                                className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
                            />

                            {/* Painel Principal do Modal (Agora com overflow-hidden para travar o X) */}
                            <motion.div
                                variants={modalVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="relative w-full md:w-[500px] h-full bg-[#fcfaf7] shadow-2xl flex flex-col overflow-hidden"
                            >
                                {/* BOTÃO DE FECHAR FIXO NO TOPO (Nunca desaparece) */}
                                <button
                                    onClick={() => setSelectedBeer(null)}
                                    className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 bg-white/90 backdrop-blur-md shadow-lg rounded-full flex items-center justify-center text-[#2a2622] hover:text-[#d10000] transition-colors z-[110]"
                                >
                                    <X size={20} />
                                </button>

                                {/* ÁREA COM SCROLL INTERNO INDEPENDENTE */}
                                <div className="flex-1 overflow-y-auto pb-10">

                                    {/* Imagem no Modal */}
                                    <div className="w-full h-[40vh] min-h-[300px] bg-[#f4ecd8]/40 flex justify-center items-center py-10 relative">
                                        <img src={selectedBeer.image} alt={selectedBeer.name} className="h-full object-contain drop-shadow-2xl" />
                                    </div>

                                    {/* Conteúdo Descritivo Detalhado */}
                                    <div className="p-8 md:p-12 flex flex-col">
                                        <span className="text-[#c4a673] uppercase tracking-[0.3em] text-[10px] font-bold mb-2">
                                            Linha {selectedBeer.line}
                                        </span>
                                        <h2 className="text-4xl font-serif font-black text-[#2a2622] mb-2 leading-none">
                                            {selectedBeer.name}
                                        </h2>
                                        <h4 className="text-[#8c8273] font-serif italic text-lg mb-8 border-b border-[#e3d8c1] pb-6">
                                            {selectedBeer.style}
                                        </h4>

                                        <p className="text-[#59534d] font-serif text-base leading-relaxed mb-8">
                                            {cleanDescription(selectedBeer.description)}
                                        </p>

                                        {/* Grade Técnica Completa */}
                                        <div className="grid grid-cols-3 gap-4 mb-6">
                                            <div className="flex flex-col items-center justify-center p-4 border border-[#e3d8c1] bg-white/50 rounded-sm">
                                                <span className="text-[#2a2622] font-black text-xl">{selectedBeer.ibu}</span>
                                                <span className="text-[#c4a673] text-[8px] uppercase tracking-widest font-bold mt-1">IBU</span>
                                            </div>
                                            <div className="flex flex-col items-center justify-center p-4 border border-[#e3d8c1] bg-white/50 rounded-sm">
                                                <span className="text-[#2a2622] font-black text-xl">{selectedBeer.abv}%</span>
                                                <span className="text-[#c4a673] text-[8px] uppercase tracking-widest font-bold mt-1">ABV</span>
                                            </div>
                                            <div className="flex flex-col items-center justify-center p-4 border border-[#e3d8c1] bg-white/50 rounded-sm text-center">
                                                <span className="text-[#2a2622] font-black text-lg leading-tight">{selectedBeer.otherSpecs.colorEBC}</span>
                                                <span className="text-[#c4a673] text-[8px] uppercase tracking-widest font-bold mt-1">EBC</span>
                                            </div>
                                        </div>

                                        {/* Ingredientes & Fermentação */}
                                        <div className="bg-white/50 border border-[#e3d8c1] p-4 rounded-sm flex flex-col gap-3">
                                            <div className="flex justify-between items-center border-b border-[#e3d8c1]/50 pb-2">
                                                <span className="text-[#a39a8c] text-[9px] uppercase tracking-widest font-bold">Fermentação</span>
                                                <span className="text-[#2a2622] text-xs font-bold uppercase">{selectedBeer.otherSpecs.fermentation}</span>
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <span className="text-[#a39a8c] text-[9px] uppercase tracking-widest font-bold">Ingredientes</span>
                                                <span className="text-[#59534d] text-sm font-serif italic">{selectedBeer.ingredients}</span>
                                            </div>
                                        </div>

                                        <button className="w-full mt-10 py-5 bg-[#2a2622] text-white text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-[#c4a673] transition-colors relative overflow-hidden group">
                                            <div className="absolute inset-0 bg-[#c4a673] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]" />
                                            <span className="relative z-10 transition-colors duration-500 group-hover:text-[#2a2622]">Encontrar no Delivery</span>
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>
            </section>
            <TakeawayCTA />
        </>
    );
};

export default BeersCatalog;