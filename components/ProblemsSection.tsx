
'use client';

import Link from 'next/link';

export default function ProblemsSection() {
  const problems = [
    {
      title: "Materiais de Alto Custo Desaparecendo?",
      description: "Produtos enviados aos hospitais não retornam ou se perdem sem rastreio. Cada material perdido são milhares de reais que saem do seu bolso.",
      icon: "ri-alert-line",
      impact: "Prejuízo constante com perdas"
    },
    {
      title: "Estoque Descontrolado Gerando Prejuízo?",
      description: "Entradas e saídas manuais causam rupturas, excesso de produtos e vencimentos sem alerta. Você perde vendas e dinheiro.",
      icon: "ri-box-3-line",
      impact: "Perdas significativas com vencimento"
    },
    {
      title: "Devoluções Virando Dor de Cabeça?",
      description: "Faltam processos para rastrear vales e kits. Devoluções mal feitas viram prejuízo direto no seu faturamento.",
      icon: "ri-refresh-line",
      impact: "Vales não retornados constantemente"
    },
    {
      title: "Sem Visibilidade do Lucro Real?",
      description: "Gestores não sabem a margem por cirurgia ou produto. Você está perdendo faturamento por falta de dados estratégicos.",
      icon: "ri-bar-chart-line",
      impact: "Faturamento perdido diariamente"
    },
    {
      title: "Agenda Cirúrgica Desorganizada?",
      description: "Cirurgias marcadas em cima da hora causam falhas logísticas e materiais em falta. Isso prejudica sua reputação.",
      icon: "ri-calendar-line",
      impact: "Cancelamentos frequentes"
    },
    {
      title: "Risco de Multas e Bloqueios?",
      description: "Sem rastreabilidade completa, você corre risco de multas da ANVISA e bloqueios que podem parar sua operação.",
      icon: "ri-shield-line",
      impact: "Multas podem ser devastadoras"
    }
  ];

  return (
    <section id="problemas" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Estes Problemas Estão <span className="text-red-600">Matando</span> Sua Distribuidora?
          </h2>
          <p className="text-base text-gray-600 max-w-3xl mx-auto">
            Cada dia que passa sem automação, mais dinheiro você perde. 
            Veja os principais problemas que devastam distribuidoras OPME:
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {problems.map((problem, index) => (
            <div key={index} className="bg-white rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-10 h-10 flex items-center justify-center bg-red-100 rounded-full mb-3">
                <i className={`${problem.icon} text-base text-red-600`}></i>
              </div>
              
              <h3 className="text-base font-bold text-gray-900 mb-2">
                {problem.title}
              </h3>
              
              <p className="text-gray-600 mb-3 leading-relaxed text-sm">
                {problem.description}
              </p>
              
              <div className="bg-red-50 p-2 rounded-lg border-l-4 border-red-500">
                <p className="text-red-700 font-semibold text-xs">
                  💸 {problem.impact}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <div className="bg-red-100 rounded-xl p-5 mb-5 max-w-4xl mx-auto">
            <h3 className="text-lg font-bold text-red-800 mb-2">
              💰 Prejuízo Crescente e Constante
            </h3>
            <p className="text-red-700 text-sm">
              Esses problemas geram perdas significativas que se acumulam mensalmente!
            </p>
          </div>
          
          <Link href="#solucao">
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2.5 rounded-full text-base font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg whitespace-nowrap cursor-pointer">
              Como Resolver Estes Problemas?
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
