import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import waterBg from '../assets/water_background.png';

export default function Footer() {
    return (
        <footer id="contact" className="relative text-white py-12 overflow-hidden">
            {/* Background with overlay */}
            <div className="absolute inset-0 z-0">
                <img src={waterBg} alt="Background" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
            </div>

            <div className="container relative z-10 mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 border-b border-white/20 pb-8">
                    <div>
                        <h3 className="text-2xl font-display font-bold mb-4">SARSARA</h3>
                        <p className="font-body text-gray-100">
                            L'eau pure de votre quotidien.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4 uppercase tracking-wider">Liens Rapides</h4>
                        <ul className="space-y-2 font-body text-gray-100">
                            <li><a href="#" className="hover:text-sarsara-yellow transition-colors">Accueil</a></li>
                            <li><a href="#formats" className="hover:text-sarsara-yellow transition-colors">Nos Formats</a></li>
                            <li><a href="#propos" className="hover:text-sarsara-yellow transition-colors">À Propos</a></li>
                            <li><a href="#contact" className="hover:text-sarsara-yellow transition-colors">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4 uppercase tracking-wider">Suivez-nous</h4>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-sarsara-yellow transition-colors"><Facebook /></a>
                            <a href="#" className="hover:text-sarsara-yellow transition-colors"><Instagram /></a>
                            <a href="#" className="hover:text-sarsara-yellow transition-colors"><Twitter /></a>
                        </div>
                        <p className="mt-4 font-body text-gray-100 text-sm">
                            contact@sarsara.com<br />
                            +221 77 011 68 54<br />
                            PETIT MBAO VILLA N°1613
                        </p>
                    </div>
                </div>
                <div className="text-center text-gray-300 text-sm font-body">
                    &copy; {new Date().getFullYear()} SARSARA. Tous droits réservés.
                </div>
            </div>
        </footer>
    );
}
