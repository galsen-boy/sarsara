import React from 'react';
import sachet500 from '../assets/sachet_500ml.png';
import bottle500 from '../assets/bottle_500ml.png';
import bottle1500 from '../assets/bottle_1_5l.png';
import bonbonne10 from '../assets/bonbonne_10l.png';
import waterBg from '../assets/water_background.png';

const formats = [
    {
        id: 1,
        name: "Sachet 500ml",
        image: sachet500,
        desc: "Pratique et nomade, pour une hydratation immédiate."
    },
    {
        id: 2,
        name: "Bouteille 500ml",
        image: bottle500,
        desc: "Le format idéal pour vos déplacements quotidiens."
    },
    {
        id: 3,
        name: "Bouteille 1.5L",
        image: bottle1500,
        desc: "Pour une hydratation tout au long de la journée."
    },
    {
        id: 4,
        name: "Bonbonne 10L",
        image: bonbonne10,
        desc: "L'essentiel pour la maison et le bureau."
    }
];

export default function Formats() {
    return (
        <section id="formats" className="relative py-20 overflow-hidden text-white">
            {/* Background with overlay */}
            <div className="absolute inset-0 z-0">
                <img src={waterBg} alt="Background" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
            </div>

            <div className="container relative z-10 mx-auto px-4">
                <h2 className="text-4xl font-display font-bold text-white text-center mb-16">
                    NOS FORMATS
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {formats.map((format) => (
                        <div key={format.id} className="flex flex-col items-center text-center group">
                            <div className="relative w-64 h-80 mb-6 flex items-center justify-center p-4 bg-white/10 backdrop-blur-md rounded-2xl shadow-lg border border-white/20 group-hover:bg-white/20 transition-all duration-300">
                                <img
                                    src={format.image}
                                    alt={format.name}
                                    className="max-h-full max-w-full object-contain transform group-hover:scale-110 transition-transform duration-500 drop-shadow-lg"
                                />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-3 font-display">{format.name}</h3>
                            <p className="text-gray-100 font-body max-w-xs">{format.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
