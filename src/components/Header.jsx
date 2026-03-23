import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// Certifique-se de usar o logo correto (uma versão escura ou aplicar filtro via CSS)
import Logo from '../assets/walfangerLogo-removebg-preview.png';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    // EFEITO PARA TRAVAR O SCROLL DA PÁGINA QUANDO O MENU ABRIR
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    // Variantes de animação do painel
    const menuVariants = {
        closed: { x: "100%", transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } },
        open: { x: "0%", transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } }
    };

    // Variantes para os links aparecerem em cascata
    const linkContainerVariants = {
        closed: { opacity: 0 },
        open: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 }
        }
    };

    const linkVariants = {
        closed: { opacity: 0, y: 20 },
        open: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
    };

    const navLinks = [
        { title: "Nossas Cervejas", to: "/cervejas" },
        { title: "O Restaurante", to: "/restaurante" },
        { title: "Nossa História", to: "/historia" },
        { title: "Loja Online", to: "/loja" }
    ];

    return (
        <>

            {/* CABEÇALHO SUPERIOR (Fixo e Limpo) */}
            {/* pointer-events-none no header para permitir cliques através do meio dele */}
            <header className="fixed top-0 left-0 w-full z-40 px-6 md:px-12 py-6 flex justify-between items-center transition-all duration-300 pointer-events-none">

                {/* Logo */}
                {/* pointer-events-auto para que o logo volte a ser clicável */}
                <Link to="/" className="relative z-50 cursor-pointer block pointer-events-auto">
                    <img src={Logo} alt="Walfänger" className="h-8 md:h-12 filter brightness-0" />
                </Link>

                {/* Botão de Menu (Hambúrguer) */}
                {/* pointer-events-auto para que o botão volte a ser clicável */}
                <button
                    onClick={() => setIsOpen(true)}
                    className="relative z-40 flex items-center gap-4 group cursor-pointer bg-transparent border-none p-2 pointer-events-auto"
                >
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#2a2622] group-hover:text-[#c4a673] transition-colors mt-0.5">
                        Menu
                    </span>
                    <div className="flex flex-col gap-[5px] items-end">
                        <span className="w-8 h-[2px] bg-[#2a2622] group-hover:bg-[#c4a673] transition-colors duration-300"></span>
                        <span className="w-5 h-[2px] bg-[#2a2622] group-hover:w-8 group-hover:bg-[#c4a673] transition-all duration-300"></span>
                    </div>
                </button>
            </header>

            {/* OVERLAY E MENU LATERAL */}
            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 z-[60] flex justify-end">

                        {/* Fundo Escuro Overlay (Clica fora para fechar) */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4 }}
                            onClick={() => setIsOpen(false)}
                            className="absolute inset-0 bg-[#120e0b]/60 backdrop-blur-sm cursor-pointer"
                        />

                        {/* Painel Lateral do Menu */}
                        <motion.div
                            variants={menuVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                            className="relative w-full md:w-[450px] lg:w-[500px] h-full bg-[#fcfaf7] shadow-2xl flex flex-col px-8 md:px-14 py-16 overflow-y-auto"
                        >
                            {/* Header do Menu (Botão Fechar) */}
                            <div className="flex justify-end w-full mb-12">
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center gap-3 group cursor-pointer p-2"
                                >
                                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#2a2622] group-hover:text-[#c4a673] transition-colors mt-0.5">
                                        Fechar
                                    </span>
                                    <div className="relative w-6 h-6 flex items-center justify-center">
                                        <span className="absolute w-full h-[2px] bg-[#2a2622] group-hover:bg-[#c4a673] rotate-45 transition-colors duration-300"></span>
                                        <span className="absolute w-full h-[2px] bg-[#2a2622] group-hover:bg-[#c4a673] -rotate-45 transition-colors duration-300"></span>
                                    </div>
                                </button>
                            </div>

                            {/* Título de Seção */}
                            <span className="text-[#a39a8c] text-[10px] font-bold uppercase tracking-[0.3em] mb-6 block border-b border-[#e3d8c1] pb-4">
                                Descubra Walfänger
                            </span>

                            {/* LISTA DE LINKS (Agora parecem interativos de verdade) */}
                            <motion.nav
                                variants={linkContainerVariants}
                                initial="closed"
                                animate="open"
                                exit="closed"
                                className="flex flex-col w-full"
                            >
                                {navLinks.map((link, i) => (
                                    <motion.div key={i} variants={linkVariants} className="w-full">
                                        <Link
                                            to={link.to}
                                            onClick={() => setIsOpen(false)}
                                            className="group w-full flex items-center justify-between py-6 md:py-8 border-b border-[#e3d8c1] cursor-pointer"
                                        >
                                            <span className="text-3xl md:text-4xl font-serif text-[#2a2622] group-hover:text-[#c4a673] transition-colors duration-300">
                                                {link.title}
                                            </span>

                                            {/* Ícone de Seta que aparece no Hover */}
                                            <span className="text-[#c4a673] opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                                </svg>
                                            </span>
                                        </Link>
                                    </motion.div>
                                ))}
                            </motion.nav>

                            {/* Rodapé do Menu (Spacer empurra para baixo) */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6, duration: 0.8 }}
                                className="mt-auto pt-12 flex flex-col gap-6"
                            >
                                <div className="flex justify-between items-end">
                                    <div className="flex flex-col gap-2">
                                        <span className="text-[#a39a8c] text-[9px] font-bold uppercase tracking-[0.2em]">
                                            Fábrica & Restaurante
                                        </span>
                                        <p className="text-[#59534d] font-serif text-sm leading-relaxed">
                                            Rua Teste, 123<br />
                                            Bonfim Paulista, SP
                                        </p>
                                    </div>
                                    <div className="flex flex-col gap-3 text-right">
                                        <a href="#" className="text-[#2a2622] hover:text-[#c4a673] text-[10px] uppercase font-bold tracking-[0.2em] transition-colors">Instagram</a>
                                        <a href="#" className="text-[#2a2622] hover:text-[#c4a673] text-[10px] uppercase font-bold tracking-[0.2em] transition-colors">Facebook</a>
                                    </div>
                                </div>
                            </motion.div>

                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;