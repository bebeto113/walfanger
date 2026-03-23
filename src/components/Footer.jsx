import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Youtube, MapPin, Clock, Phone, Mail, ArrowUpRight } from 'lucide-react';
import Logo from '../assets/walfangerLogo-removebg-preview.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const googleMapsUrl = "https://www.google.com/maps/dir//Cervejaria+Walf%C3%A4nger+-+R.+Cap.+Salom%C3%A3o,+22+-+Bonfim+Paulista,+Ribeir%C3%A3o+Preto+-+SP,+14110-000/@-21.2687515,-47.8155986,17z/";

    return (
        <footer className="relative w-full bg-[#121212] text-[#fcfaf7] pt-20 pb-10 font-sans overflow-hidden">

            {/* Detalhe Alemão no topo do Footer */}
            <div className="absolute top-0 left-0 w-full h-[3px] flex">
                <div className="flex-1 bg-black" />
                <div className="flex-1 bg-[#d10000]" />
                <div className="flex-1 bg-[#ffcc00]" />
            </div>

            <div className="container mx-auto px-6 max-w-7xl">

                {/* SEÇÃO 1: CTA DE CONTATO (Baseado na imagem "Nossos Contatos") */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20 pb-20 border-b border-white/10">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 italic tracking-tight">
                            Vamos brindar <br />
                            <span className="text-[#c4a673]">ao novo?</span>
                        </h2>
                        <p className="text-gray-400 font-serif text-lg max-w-md">
                            Seja para um evento exclusivo, uma reserva especial ou para levar a Walfänger ao seu negócio.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                        {[
                            { label: "Restaurante", info: "Reservas" },
                            { label: "Comercial", info: "Vendas" },
                            { label: "Eventos", info: "Barris" },
                            { label: "Loja", info: "Souvenirs" },
                            { label: "Fábrica", info: "Tour" },
                            { label: "Carreira", info: "Talentos" },
                        ].map((item, i) => (
                            <motion.a
                                key={i}
                                href="#"
                                whileHover={{ x: 5 }}
                                className="group flex flex-col gap-1"
                            >
                                <span className="text-[#c4a673] text-[9px] uppercase font-bold tracking-widest">{item.label}</span>
                                <span className="text-sm font-medium group-hover:text-white transition-colors flex items-center gap-1">
                                    {item.info} <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                </span>
                            </motion.a>
                        ))}
                    </div>
                </div>

                {/* SEÇÃO 2: GRID DE INFORMAÇÕES PRINCIPAIS */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">

                    {/* Bloco 1: Identidade */}
                    <div className="flex flex-col gap-6">
                        <Link to="/" className="w-fit" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                            <img src={Logo} alt="Walfänger" className="h-12 w-fit filter brightness-0 invert" />
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed pr-4">
                            Em cada gole, uma história de tradição e paixão que transcende gerações. A rigorosa escola alemã no coração de Ribeirão Preto.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#c4a673] hover:border-[#c4a673] transition-all group">
                                <Instagram size={18} className="group-hover:text-black transition-colors" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#c4a673] hover:border-[#c4a673] transition-all group">
                                <Youtube size={18} className="group-hover:text-black transition-colors" />
                            </a>
                        </div>
                    </div>

                    {/* Bloco 2: Acesso Rápido */}
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-widest text-[10px] mb-8 flex items-center gap-2">
                            <span className="w-4 h-[1px] bg-[#c4a673]"></span> Acesso Rápido
                        </h4>
                        <ul className="flex flex-col gap-4 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-[#c4a673] transition-colors">Nossas Cervejas</a></li>
                            <li><a href="#" className="hover:text-[#c4a673] transition-colors">História & Legado</a></li>
                            <li><a href="#" className="hover:text-[#c4a673] transition-colors">Brewpub Menu</a></li>
                            <li><a href="#" className="hover:text-[#c4a673] transition-colors">Tour na Fábrica</a></li>
                        </ul>
                    </div>

                    {/* Bloco 3: Horários */}
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-widest text-[10px] mb-8 flex items-center gap-2">
                            <span className="w-4 h-[1px] bg-[#c4a673]"></span> Horários
                        </h4>
                        <div className="flex gap-4 text-gray-400 italic">
                            <Clock size={18} className="text-[#c4a673] flex-shrink-0" />
                            <div className="text-sm flex flex-col gap-1">
                                <p className="text-white font-medium not-italic">Terça a Domingo</p>
                                <p>Das 11:00 às 00:00</p>
                                <p className="mt-2 text-xs opacity-70">Segunda: Fechado</p>
                            </div>
                        </div>
                    </div>

                    {/* Bloco 4: Localização e Botão */}
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-widest text-[10px] mb-8 flex items-center gap-2">
                            <span className="w-4 h-[1px] bg-[#c4a673]"></span> Onde Estamos
                        </h4>
                        <div className="flex gap-4 text-gray-400 mb-8">
                            <MapPin size={18} className="text-[#c4a673] flex-shrink-0" />
                            <p className="text-sm leading-relaxed">
                                R. Cap. Salomão, 22 <br />
                                Bonfim Paulista, Ribeirão Preto - SP <br />
                                CEP 14110-000
                            </p>
                        </div>

                        {/* BOTÃO COMO CHEGAR - Estilo Premium que criamos */}
                        <a
                            href={googleMapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative flex items-center justify-center gap-3 w-full py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#fcfaf7] border border-white/20 overflow-hidden transition-all duration-500"
                        >
                            <div className="absolute inset-0 bg-[#fcfaf7] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]" />
                            <span className="relative z-10 group-hover:text-black transition-colors duration-500">
                                Como Chegar
                            </span>
                            <MapPin size={14} className="relative z-10 group-hover:text-black transition-colors duration-500" />
                        </a>
                    </div>
                </div>

                {/* FOOTER BOTTOM: Copyright e Créditos */}
                <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest">
                        © {currentYear} Cervejaria Walfänger. Todos os direitos reservados.
                    </p>

                    <div className="flex items-center gap-8">

                        {/* Selo sutil de Beber com Moderação */}
                        <div className="px-3 py-1 border border-white/10 rounded-full">
                            <span className="text-[8px] text-gray-500 font-bold">BEBA COM MODERAÇÃO</span>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;