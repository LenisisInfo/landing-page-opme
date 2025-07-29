
'use client';

import Link from 'next/link';

export default function SolutionSection() {
  const solutions = [
    {
      question: "Você tem perdas de materiais?",
      answer: "Conosco você garante rastreabilidade completa por número de série, paciente e hospital. Zero perdas.",
      icon: "ri-radar-line",
      result: "Eliminação total de perdas"
    },
    {
      question: "Seu estoque está descontrolado?",
      answer: "Nossa solução oferece controle automático com alertas inteligentes de vencimento e ruptura em tempo real.",
      icon: "ri-stack-line",
      result: "Controle total do estoque"
    },
    {
      question: "Perdendo dinheiro com devoluções?",
      answer: "Implantamos fluxo completo de vales e devoluções com assinatura digital e controle automatizado.",
      icon: "ri-arrow-left-right-line",
      result: "Todas as devoluções controladas"
    },
    {
      question: "Não sabe seu lucro real?",
      answer: "Disponibilizamos dashboards completos com margem por item e relatórios estratégicos em tempo real.",
      icon: "ri-line-chart-line",
      result: "Visibilidade total dos resultados"
    },
    {
      question: "Agenda cirúrgica desorganizada?",
      answer: "Integramos agenda cirúrgica com estoque, criando sincronização automática e alertas inteligentes.",
      icon: "ri-calendar-check-line",
      result: "Organização total da operação"
    },
    {
      question: "Medo de multas e bloqueios?",
      answer: "Garantimos histórico completo de uso e relatórios prontos para qualquer auditoria da ANVISA.",
      icon: "ri-shield-check-line",
      result: "Segurança regulatória total"
    }
  ];

  return (
    <section id="solucao" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            A Solução que <span className="text-green-600">Transforma</span> Sua Distribuidora
          </h2>
          <p className="text-base text-gray-600 max-w-3xl mx-auto">
            Cada desafio tem uma solução automatizada que economiza tempo e maximiza resultados. 
            Veja como resolvemos suas maiores dores:
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
          {solutions.map((item, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-5 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-full flex-shrink-0">
                  <i className={`${item.icon} text-base text-blue-600`}></i>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-base font-bold text-gray-800 mb-2">
                    {item.question}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                    {item.answer}
                  </p>
                  
                  <div className="bg-green-100 p-2 rounded-lg">
                    <p className="text-green-700 font-semibold text-xs">
                      ✅ {item.result}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-xl p-5 text-center text-white">
          <h3 className="text-lg font-bold mb-2">
            🚀 Transformação Completa da Sua Operação
          </h3>
          <p className="text-sm mb-4 opacity-90">
            Pare de perder tempo e dinheiro com processos manuais. Automatize tudo agora!
          </p>
          
          <Link href="#formulario">
            <button className="bg-white text-green-600 hover:bg-gray-100 px-6 py-2.5 rounded-full text-base font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg whitespace-nowrap cursor-pointer">
              Quero Automatizar Minha Distribuidora
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
