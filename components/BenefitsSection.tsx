
'use client';

import Link from 'next/link';

export default function BenefitsSection() {
  const benefits = [
    {
      title: "Escalabilidade sem Caos",
      description: "Cresça sua operação com previsibilidade total. Automação de processos que suportam qualquer volume.",
      icon: "ri-rocket-line",
      image: "https://readdy.ai/api/search-image?query=Business%20growth%20with%20automated%20systems%2C%20modern%20office%20environment%20with%20digital%20workflow%20displays%2C%20professional%20healthcare%20technology%20setup%2C%20clean%20organized%20workspace%20with%20multiple%20monitors%20showing%20data%20analytics%20and%20growth%20charts&width=400&height=300&seq=benefit-scale&orientation=landscape"
    },
    {
      title: "Fim da Dependência Manual",
      description: "Chega de planilhas e WhatsApp. Centralização completa com controle de acesso e padronização total.",
      icon: "ri-computer-line",
      image: "https://readdy.ai/api/search-image?query=Digital%20transformation%20from%20manual%20processes%2C%20modern%20healthcare%20management%20system%20interface%2C%20clean%20workspace%20with%20digital%20devices%20replacing%20paper%20documents%2C%20professional%20medical%20technology%20environment&width=400&height=300&seq=benefit-digital&orientation=landscape"
    },
    {
      title: "Segurança e Conformidade",
      description: "Histórico completo de uso, relatórios prontos para auditoria e zero risco de multas regulatórias.",
      icon: "ri-shield-check-line",
      image: "https://readdy.ai/api/search-image?query=Medical%20compliance%20and%20security%20systems%2C%20professional%20healthcare%20audit%20environment%2C%20organized%20digital%20documentation%20with%20security%20elements%2C%20clean%20modern%20office%20with%20compliance%20certificates%20and%20digital%20security%20displays&width=400&height=300&seq=benefit-security&orientation=landscape"
    },
    {
      title: "Tempo Real, Decisões Certas",
      description: "Visibilidade total da operação 24/7. Dashboards inteligentes que mostram exatamente onde focar.",
      icon: "ri-dashboard-line",
      image: "https://readdy.ai/api/search-image?query=Real-time%20healthcare%20analytics%20dashboard%2C%20modern%20control%20room%20with%20multiple%20screens%20showing%20medical%20supply%20data%2C%20professional%20monitoring%20setup%20with%20charts%20and%20graphs%2C%20clean%20high-tech%20environment&width=400&height=300&seq=benefit-realtime&orientation=landscape"
    }
  ];

  return (
    <section className="py-12 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Benefícios que <span className="text-blue-600">Transformam</span> Seu Negócio
          </h2>
          <p className="text-base text-gray-600 max-w-3xl mx-auto">
            Mais do que resolver problemas, nosso sistema potencializa seu crescimento 
            e garante que você esteja sempre à frente da concorrência.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="aspect-video bg-gray-100">
                <img 
                  src={benefit.image} 
                  alt={benefit.title}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              
              <div className="p-5">
                <div className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-full mb-3">
                  <i className={`${benefit.icon} text-base text-blue-600`}></i>
                </div>
                
                <h3 className="text-base font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <div className="bg-white rounded-xl p-5 shadow-lg max-w-4xl mx-auto mb-5">
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              🚀 Resultado Garantido em 30 Dias
            </h3>
            <p className="text-gray-600 text-sm mb-3">
              Nossa metodologia comprovada garante resultados rápidos. Você verá economia 
              e melhoria operacional já no primeiro mês de uso.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="text-center">
                <div className="text-lg font-bold text-green-600 mb-1">30 dias</div>
                <div className="text-gray-700 text-xs">Para ver resultados</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-green-600 mb-1">Máxima</div>
                <div className="text-gray-700 text-xs">Redução de perdas</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-green-600 mb-1">Alto</div>
                <div className="text-gray-700 text-xs">Retorno do investimento</div>
              </div>
            </div>
          </div>
          
          <Link href="#formulario">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full text-base font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg whitespace-nowrap cursor-pointer">
              Quero Transformar Minha Distribuidora
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
