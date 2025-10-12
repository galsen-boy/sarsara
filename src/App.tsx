import { Droplets, Phone, Mail, MapPin, ChevronDown, Sun, Moon } from 'lucide-react';
import { useTheme } from './contexts/ThemeContext';

function App() {
  const { theme, toggleTheme } = useTheme();
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <nav className="fixed top-0 w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2">
              <Droplets className="h-8 w-8 text-blue-500" />
              <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">SARSARA</span>
            </div>
            
            {/* Bouton de thème pour mobile */}
            <div className="flex md:hidden items-center">
              <button
                onClick={toggleTheme}
                className="p-3 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors shadow-lg"
                aria-label="Basculer le thème"
              >
                {theme === 'light' ? <Moon className="h-6 w-6" /> : <Sun className="h-6 w-6" />}
              </button>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('accueil')} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Accueil
              </button>
              <button onClick={() => scrollToSection('produits')} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Produits
              </button>
              <button onClick={() => scrollToSection('qualite')} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Qualité
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Contact
              </button>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                aria-label="Basculer le thème"
              >
                {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section id="accueil" className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-800 dark:via-gray-900 dark:to-blue-900">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-cyan-100 rounded-full opacity-20 blur-3xl"></div>
        </div>
        <div className="relative text-center px-4 sm:px-6 lg:px-8 pt-20">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in">
            L'eau pure de <span className="text-blue-600 dark:text-blue-400">SARSARA</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            Une source naturelle de fraîcheur et de pureté pour votre bien-être quotidien
          </p>
          <button
            onClick={() => scrollToSection('produits')}
            className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg"
          >
            Découvrir nos produits
          </button>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="h-8 w-8 text-blue-600" />
          </div>
        </div>
      </section>

      <section id="produits" className="py-24 bg-gray-50 dark:bg-gray-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Nos Produits</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Une gamme complète pour tous vos besoins</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="group">
              <div className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-700 dark:to-gray-600 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
                <div className="aspect-square mb-6 overflow-hidden rounded-2xl  flex items-center justify-center">
                  <img
                    src="/Gemini_Generated_Image_buqwnobuqwnobuqw.png"
                    alt="Bouteille 50cl Sarsara"
                    className="h-full object-contain p-4 group-hover:scale-110 transition-transform"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Bouteille 50cl</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Format pratique et nomade, idéal pour vous accompagner partout dans votre journée.
                </p>
              </div>
            </div>

            <div className="group">
              <div className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-700 dark:to-gray-600 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
                <div className="aspect-square mb-6 overflow-hidden rounded-2xl  flex items-center justify-center">
                  <img
                    src="/Gemini_Generated_Image_b2jzoeb2jzoeb2jz.png"
                    alt="Sachet 50cl Sarsara"
                    className="h-full object-contain p-4 group-hover:scale-110 transition-transform"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Sachet 50cl</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Solution économique et écologique, parfait pour une hydratation rapide et pratique.
                </p>
              </div>
            </div>

            <div className="group">
              <div className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-700 dark:to-gray-600 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
                <div className="aspect-square mb-6 overflow-hidden rounded-2xl  flex items-center justify-center">
                  <img
                    src="/Gemini_Generated_Image_3fd1u93fd1u93fd1.png"
                    alt="Bidon 2L Sarsara"
                    className="h-full object-contain p-4 group-hover:scale-110 transition-transform"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Bidon 10L</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Format familial généreux, idéal pour partager des moments de fraîcheur en famille.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="qualite" className="py-24 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-700 dark:to-gray-600 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Notre Engagement Qualité</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">L'excellence au service de votre santé</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <Droplets className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">100% Pure</h3>
              <p className="text-gray-600 dark:text-gray-300">Eau de source naturelle sans additifs ni traitement chimique</p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Certifiée</h3>
              <p className="text-gray-600 dark:text-gray-300">Contrôles rigoureux et conformité aux normes internationales</p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Durable</h3>
              <p className="text-gray-600 dark:text-gray-300">Engagement pour la préservation de l'environnement</p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Bienfaits</h3>
              <p className="text-gray-600 dark:text-gray-300">Riche en minéraux essentiels pour votre bien-être</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 bg-gray-50 dark:bg-gray-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Contactez-nous</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Nous sommes à votre écoute</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                <Phone className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Téléphone</h3>
              <p className="text-gray-600 dark:text-gray-300">+221 77 011 68 54</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                <Mail className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Email</h3>
              <p className="text-gray-600 dark:text-gray-300">contact@sarsara.com</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                <MapPin className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Adresse</h3>
              <p className="text-gray-600 dark:text-gray-300">PETIT MBAO VILLA N°1613</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 dark:bg-black text-white py-12 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Droplets className="h-6 w-6 text-blue-400" />
              <span className="text-xl font-bold">SARSARA</span>
            </div>
            <p className="text-gray-400 text-center md:text-right">
              © 2025 Sarsara. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
