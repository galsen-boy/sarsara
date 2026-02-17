import React from 'react';
import waterBg from '../assets/water_background.png';
import sarsaraLogo from '../assets/sarsara-logo.png';

export default function Hero() {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <img
                    src={waterBg}
                    alt="Water Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
                <img
                    src={sarsaraLogo}
                    alt="SARSARA Logo"
                    className="w-64 md:w-96 mb-8 drop-shadow-lg"
                />
                <p className="font-body text-xl md:text-2xl text-white mb-10 max-w-2xl mx-auto drop-shadow-md">
                    Une source naturelle de fraîcheur et de pureté pour votre bien-être quotidien.
                </p>
                <a href="#formats" className="inline-block bg-sarsara-yellow text-sarsara-blue font-body font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:bg-yellow-400 transform hover:scale-105 transition-all duration-300">
                    DÉCOUVRIR NOS FORMATS
                </a>
            </div>
        </section>
    );
}
