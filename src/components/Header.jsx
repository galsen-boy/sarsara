import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import waterBg from '../assets/water_background.png';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed w-full z-50 text-white shadow-lg overflow-hidden">
            {/* Background with overlay */}
            <div className="absolute inset-0 z-0">
                <img src={waterBg} alt="Background" className="w-full h-full object-cover opacity-50" />
                <div className="absolute inset-0 bg-black/10 backdrop-blur-md"></div>
            </div>

            <div className="container relative z-10 mx-auto px-6 py-4 flex justify-between items-center">
                <div className="text-2xl font-display font-bold tracking-wider">
                    SARSARA
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex space-x-8 font-body text-sm font-medium tracking-wide">
                    <a href="#" className="hover:text-sarsara-yellow transition-colors duration-300">ACCUEIL</a>
                    <a href="#formats" className="hover:text-sarsara-yellow transition-colors duration-300">NOS FORMATS</a>
                    <a href="#propos" className="hover:text-sarsara-yellow transition-colors duration-300">À PROPOS</a>
                    <a href="#contact" className="hover:text-sarsara-yellow transition-colors duration-300">CONTACT</a>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Mobile Nav */}
                {isOpen && (
                    <div className="absolute top-full left-0 w-full md:hidden flex flex-col items-center py-6 space-y-4 shadow-xl">
                        {/* Mobile Menu Background */}
                        <div className="absolute inset-0 z-0">
                            <img src={waterBg} alt="Background" className="w-full h-full object-cover opacity-50" />
                            <div className="absolute inset-0 bg-black/10 backdrop-blur-md"></div>
                        </div>

                        <div className="relative z-10 flex flex-col items-center space-y-4 w-full">
                            <a href="#" className="text-lg hover:text-sarsara-yellow transition-colors" onClick={() => setIsOpen(false)}>ACCUEIL</a>
                            <a href="#formats" className="text-lg hover:text-sarsara-yellow transition-colors" onClick={() => setIsOpen(false)}>NOS FORMATS</a>
                            <a href="#propos" className="text-lg hover:text-sarsara-yellow transition-colors" onClick={() => setIsOpen(false)}>À PROPOS</a>
                            <a href="#contact" className="text-lg hover:text-sarsara-yellow transition-colors" onClick={() => setIsOpen(false)}>CONTACT</a>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}
