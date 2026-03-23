import React from 'react';
import { motion } from 'framer-motion';

const timelineData = [
    {
        year: "2011",
        title: "A Origem",
        text: "A viagem da família Balieiro à Europa em busca da escola cervejeira perfeita: a tradição alemã e seus princípios rigorosos."
    },
    {
        year: "2013",
        title: "Primeiros Passos",
        text: "Criação da nano cervejaria em Brodowski/SP. Testes e desenvolvimentos focados em maturidade e qualidade."
    },
    {
        year: "2015",
        title: "Nascimento da Fábrica",
        text: "Inauguração oficial em Bonfim Paulista/SP. Brewpub e indústria lado a lado com capacidade inicial de 9 mil litros."
    },
    {
        year: "2018",
        title: "Expansão e Tecnologia",
        text: "Investimentos em equipamentos de ponta elevam a produção para 100 mil litros por mês com máxima eficiência."
    },
    {
        year: "2024",
        title: "Consagração",
        text: "Mais de 70 medalhas conquistadas e o lançamento da linha W Long Necks, consolidando 13 anos de história."
    }
];

const History = () => {
    return (
        <section className="relative w-full bg-[#fcfaf7] py-24 md:py-40 overflow-hidden font-sans">

            {/* CABEÇALHO COM DETALHE ALEMÃO */}
            <div className="container mx-auto px-6 mb-20 md:mb-32 flex flex-col items-center text-center">
                <div className="flex gap-1 mb-4">
                    <div className="w-1 h-1 rounded-full bg-black" />
                    <div className="w-1 h-1 rounded-full bg-[#d10000]" />
                    <div className="w-1 h-1 rounded-full bg-[#ffcc00]" />
                </div>
                <span className="text-[#c4a673] uppercase tracking-[0.4em] text-[10px] font-bold mb-4">Desde 2011</span>
                <h2 className="text-[#2a2622] text-4xl md:text-6xl font-serif italic font-bold leading-tight">
                    Nossa Jornada
                </h2>
            </div>

            <div className="container mx-auto px-6 relative max-w-5xl">

                {/* A LINHA CENTRAL */}
                <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[1px] bg-[#e3d8c1]">
                    <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                        className="w-full bg-[#c4a673]"
                    />
                </div>

                {/* ITENS DA LINHA DO TEMPO */}
                <div className="flex flex-col gap-24 md:gap-32">
                    {timelineData.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className={`relative flex flex-col md:flex-row items-start md:items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                }`}
                        >
                            {/* PONTO DE INTERSEÇÃO COM DETALHE ALEMÃO SUTIL */}
                            <div className="absolute left-0 md:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
                                {/* Ponto principal */}
                                <div className="w-3 h-3 bg-[#fcfaf7] border-2 border-[#c4a673] rounded-full hidden md:block" />

                                {/* Linha alemã horizontal sutil saindo do ponto (Desktop) */}
                                <div className={`absolute w-6 h-[1px] flex hidden md:flex ${index % 2 === 0 ? 'right-4' : 'left-4'
                                    }`}>
                                    <div className="flex-1 bg-black/20" />
                                    <div className="flex-1 bg-[#d10000]/20" />
                                    <div className="flex-1 bg-[#ffcc00]/20" />
                                </div>
                            </div>

                            {/* LADO 1: O ANO */}
                            <div className={`w-full md:w-1/2 pl-12 md:pl-0 md:px-16 ${index % 2 === 0 ? 'text-left md:text-left' : 'text-left md:text-right'
                                }`}>
                                <span className="text-5xl md:text-8xl font-serif font-black text-[#2a2622]/[0.08] block md:inline-block leading-none tracking-tighter">
                                    {item.year}
                                </span>
                            </div>

                            {/* LADO 2: O CONTEÚDO */}
                            <div className={`w-full md:w-1/2 pl-12 md:pl-0 md:px-16 mt-4 md:mt-0`}>
                                <div className={`max-w-md ${index % 2 !== 0 ? 'md:text-left' : ''}`}>
                                    <h4 className="text-[#c4a673] text-[11px] uppercase tracking-[0.3em] font-black mb-3 flex items-center gap-3">
                                        {/* Pequena guia alemã antes do título */}
                                        <div className="flex w-4 h-[1px]">
                                            <div className="w-full bg-black/40" />
                                            <div className="w-full bg-[#d10000]/40" />
                                            <div className="w-full bg-[#ffcc00]/40" />
                                        </div>
                                        {item.title}
                                    </h4>
                                    <p className="text-[#59534d] font-serif text-lg leading-relaxed">
                                        {item.text}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* SELO DE QUALIDADE AO FINAL COM BORDA ALEMÃ */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="mt-32 md:mt-48 flex flex-col items-center justify-center relative"
            >
                <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full flex items-center justify-center p-4 text-center overflow-hidden border border-[#e3d8c1]">
                    {/* Borda interna tripla sutil no topo do círculo */}
                    <div className="absolute top-0 left-0 w-full h-1 flex">
                        <div className="flex-1 bg-black/20" />
                        <div className="flex-1 bg-[#d10000]/20" />
                        <div className="flex-1 bg-[#ffcc00]/20" />
                    </div>

                    <span className="text-[#c4a673] text-[9px] md:text-[10px] font-bold uppercase tracking-widest leading-tight relative z-10">
                        Tradição<br />Forjada no<br />Tempo
                    </span>
                </div>
            </motion.div>

        </section>
    );
};

export default History;