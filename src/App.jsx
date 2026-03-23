import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Hero from './pages/Home/Hero';
import BeersCatalog from './pages/Beers/BeersCatalog';


function App() {
  return (
    <Router>
      <ScrollToTop />

      <div className="flex flex-col min-h-screen w-full bg-[#fcfaf7]">
        <Header />

        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/cervejas" element={<BeersCatalog />} />
            {/* <Route path="/fabrica" element={<Fabrica />} /> */}
            {/* <Route path="/contato" element={<Contato />} /> */}

            <Route path="*" element={
              <div className="h-screen flex items-center justify-center font-serif text-3xl text-[#2a2622]">
                Página não encontrada.
              </div>
            } />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;