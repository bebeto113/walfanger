import { motion } from 'framer-motion'
import React from 'react'

const Belt = () => {
    return (

        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="w-full  border-y border-[#e3d8c1]/40 py-3 md:py-4 bg-transparent backdrop-blur-sm opacity-60 hover:opacity-100 transition-opacity duration-500 z-20 flex overflow-hidden"
        >
            <div className="flex w-max animate-marquee items-center gap-12 md:gap-24 px-6 md:px-12">
                {/* Renderizamos o array 2 vezes para criar o loop infinito perfeito */}
                {[...Array(2)].map((_, i) => (
                    <div key={i} className="flex items-center gap-12 md:gap-24">
                        <span className="text-[#000000] font-serif font-bold text-xs md:text-sm uppercase tracking-[0.2em] whitespace-nowrap">Ouro • World Beer Awards</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#e3d8c1]"></span>
                        <span className="text-[#DD0000] font-serif font-bold text-xs md:text-sm uppercase tracking-[0.2em] whitespace-nowrap">Melhor do Brasil • CBC</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#e3d8c1]"></span>
                        <span className="text-[#FFCE00] font-serif font-bold text-xs md:text-sm uppercase tracking-[0.2em] whitespace-nowrap">Prata • South Beer Cup</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#e3d8c1]"></span>
                        <span className="text-[#000000] font-serif font-bold text-xs md:text-sm uppercase tracking-[0.2em] whitespace-nowrap">Ouro • Copa Cervezas de América</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#e3d8c1]"></span>
                    </div>
                ))}
            </div>
        </motion.div>
    )
}

export default Belt