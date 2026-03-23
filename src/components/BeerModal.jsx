import React from 'react';
import { motion } from 'framer-motion';

const BeerModal = ({ beer, onClose }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
            <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                onClick={onClose}
                className="absolute inset-0 bg-[#2a2622/40] backdrop-blur-md"
            />
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
                className="relative bg-[#fdfbf7] p-10 md:p-16 max-w-4xl w-full grid md:grid-cols-2 gap-12 items-center shadow-2xl z-50 border border-[#e3d8c1]"
            >
                <img src={beer.image} alt={beer.name} className="h-96 object-contain mx-auto" />
                <div>
                    <span className="text-[#c4a673] text-xs uppercase tracking-widest font-bold mb-2 block">{beer.line}</span>
                    <h3 className="text-5xl font-serif font-bold text-[#2a2622] mb-4">{beer.name}</h3>
                    <p className="text-[#59534d] font-serif text-lg mb-8">{beer.desc}</p>

                    <div className="grid grid-cols-2 gap-6 mb-10">
                        <div>
                            <span className="block text-[#a39a8c] text-[10px] uppercase font-bold tracking-widest">Estilo</span>
                            <span className="font-serif text-base">{beer.style}</span>
                        </div>
                        <div>
                            <span className="block text-[#a39a8c] text-[10px] uppercase font-bold tracking-widest">ABV</span>
                            <span className="font-serif text-base">{beer.abv}</span>
                        </div>
                    </div>
                    <button onClick={onClose} className="w-full bg-[#2a2622] text-white py-4 text-xs font-bold uppercase tracking-widest hover:bg-[#c4a673] transition-colors">
                        Fechar Detalhes
                    </button>
                </div>
            </motion.div>
        </div>
    );
};

export default BeerModal;