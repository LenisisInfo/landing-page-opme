
'use client';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <div className="text-xl text-blue-400 mb-3 font-bold">
            Sistema OPME
          </div>
          
          <p className="text-gray-300 text-sm mb-5 max-w-2xl mx-auto">
            Sistema de controle para distribuidoras OPME que elimina perdas, 
            automatiza processos e maximiza seus lucros.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
            <div>
              <h3 className="text-sm font-bold mb-2 text-blue-400">
                <i className="ri-phone-line mr-1"></i>
                Contato
              </h3>
              <p className="text-gray-300 text-xs">
                Entre em contato conosco para<br />
                uma demonstração gratuita
              </p>
            </div>
            
            <div>
              <h3 className="text-sm font-bold mb-2 text-blue-400">
                <i className="ri-shield-check-line mr-1"></i>
                Segurança
              </h3>
              <p className="text-gray-300 text-xs">
                Dados protegidos com<br />
                certificação de segurança
              </p>
            </div>
            
            <div>
              <h3 className="text-sm font-bold mb-2 text-blue-400">
                <i className="ri-customer-service-line mr-1"></i>
                Suporte
              </h3>
              <p className="text-gray-300 text-xs">
                Suporte especializado<br />
                24/7 para nossos clientes
              </p>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-4">
            <p className="text-gray-400 text-xs">
              © 2024 Sistema OPME - Desenvolvido pela ControlSis. Todos os direitos reservados.
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Transformando distribuidoras OPME através da tecnologia
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
