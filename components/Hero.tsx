
'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('https://readdy.ai/api/search-image?query=Modern%20medical%20facility%20with%20advanced%20technology%20systems%2C%20clean%20white%20environment%20with%20digital%20displays%20and%20medical%20equipment%2C%20professional%20healthcare%20setting%20with%20blue%20accent%20lighting%2C%20high-tech%20hospital%20interior%20with%20organized%20workflow%2C%20minimalist%20design%20with%20subtle%20medical%20technology%20elements&width=1920&height=1080&seq=hero-opme-bg&orientation=landscape')"
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/70"></div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-3 leading-tight">
          Transforme Sua <span className="text-blue-300">Distribuidora OPME</span><br />
          em uma <span className="text-blue-300">Máquina de Lucro</span>
        </h1>
        
        <p className="text-base md:text-lg text-blue-100 mb-5 max-w-4xl mx-auto leading-relaxed">
          Elimine perdas, automatize processos e maximize seus resultados. 
          O sistema completo que distribuidoras OPME precisam para crescer.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-8">
          <Link href="#formulario">
            <button className="bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg whitespace-nowrap cursor-pointer">
              Quero Transformar Minha Distribuidora
            </button>
          </Link>
          
          <Link href="#problemas">
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer">
              Ver Como Funciona
            </button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
            <div className="text-lg font-bold text-green-400 mb-1">100%</div>
            <div className="text-white text-xs">Rastreabilidade</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
            <div className="text-lg font-bold text-green-400 mb-1">0</div>
            <div className="text-white text-xs">Perdas de Material</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
            <div className="text-lg font-bold text-green-400 mb-1">24/7</div>
            <div className="text-white text-xs">Controle Automático</div>
          </div>
        </div>
      </div>
    </section>
  );
}
