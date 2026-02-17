import React from 'react';
import { Droplet, Award, Leaf, Heart } from 'lucide-react';
import waterBg from '../assets/water_background.png';

const pillars = [
    {
        id: 1,
        title: "Pureté",
        icon: <Droplet size={48} />,
        desc: "Une eau puisée à la source, filtrée naturellement pour une qualité cristalline."
    },
    {
        id: 2,
        title: "Certification",
        icon: <Award size={48} />,
        desc: "Analysée et certifiée conforme aux standards internationaux de qualité."
    },
    {
        id: 3,
        title: "Durabilité",
        icon: <Leaf size={48} />,
        desc: "Engagés pour l'environnement avec des emballages recyclables."
    },
    {
        id: 4,
        title: "Bien-être",
        icon: <Heart size={48} />,
        desc: "L'équilibre minéral essentiel pour votre santé et votre vitalité."
    }
];

export default function Pillars() {
    return (
        <section id="propos" className="relative py-20 overflow-hidden text-white">
            {/* Background with overlay */}
            <div className="absolute inset-0">
                <img src={waterBg} alt="Background" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-sarsara-blue/90 mix-blend-multiply"></div>
            </div>

            <div className="container relative z-10 mx-auto px-4">
                <h2 className="text-4xl font-display font-bold text-center mb-16">
                    NOS 4 PILIERS
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {pillars.map((pillar) => (
                        <div key={pillar.id} className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/20 transition-all duration-300 border border-white/20">
                            <div className="text-sarsara-yellow mb-6 flex justify-center">
                                {pillar.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-center mb-4 text-white font-display">
                                {pillar.title}
                            </h3>
                            <p className="text-center text-gray-100 font-body leading-relaxed">
                                {pillar.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
