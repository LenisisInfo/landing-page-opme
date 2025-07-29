"use client";

import React from "react";
import { useState } from "react";

export default function FormSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.email) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://leandrovb.app.n8n.cloud/webhook/novo-lead-opme",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nome: formData.name,
            telefone: formData.phone,
            email: formData.email,
            origin: "Landing Page - OPME",
          }),
        }
      );

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        throw new Error("Erro no envio");
      }
    } catch (error) {
      alert("Erro ao enviar formulário. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (isSubmitted) {
    return (
      <section
        id="formulario"
        className="py-12 bg-gradient-to-r from-green-600 to-blue-600"
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-white rounded-xl p-8 shadow-2xl">
            <div className="w-12 h-12 flex items-center justify-center bg-green-100 rounded-full mb-3 mx-auto">
              <i className="ri-check-line text-lg text-green-600"></i>
            </div>

            <h2 className="text-xl font-bold text-gray-900 mb-2">
              Obrigado pelo seu interesse!
            </h2>

            <p className="text-base text-gray-600 mb-3">
              Recebemos seus dados e entraremos em contato em breve para mostrar
              como nosso sistema pode transformar sua distribuidora OPME.
            </p>

            <div className="bg-blue-50 rounded-lg p-3">
              <p className="text-blue-800 font-semibold text-sm">
                🚀 Prepare-se para transformar sua operação!
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="formulario"
      className="py-12 bg-gradient-to-r from-green-600 to-blue-600"
    >
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white rounded-xl p-8 shadow-2xl">
          <div className="text-center mb-5">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Transforme Sua{" "}
              <span className="text-green-600">Distribuidora OPME</span>
            </h2>
            <p className="text-base text-gray-600">
              Deixe seus dados e descubra como automatizar completamente sua
              operação e maximizar seus resultados
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            id="opme-lead-form"
            className="space-y-3"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-700 mb-1"
              >
                Nome Completo *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                placeholder="Digite seu nome completo"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-semibold text-gray-700 mb-1"
              >
                Telefone/WhatsApp *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                placeholder="(11) 99999-9999"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700 mb-1"
              >
                E-mail Profissional *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                placeholder="seu@email.com"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-2.5 px-5 rounded-lg text-base font-bold transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer"
            >
              {isSubmitting
                ? "Enviando..."
                : "🚀 Quero Transformar Minha Distribuidora"}
            </button>
          </form>

          <div className="mt-4 text-center">
            <p className="text-xs text-gray-500">
              ✅ Seus dados estão seguros conosco
              <br />
              ✅ Demonstração gratuita sem compromisso
              <br />✅ Resposta em menos de 24 horas
            </p>
          </div>

          <div className="mt-4 bg-yellow-50 rounded-lg p-3 border-l-4 border-yellow-400">
            <div className="flex items-start">
              <div className="w-5 h-5 flex items-center justify-center">
                <i className="ri-time-line text-yellow-600 text-sm"></i>
              </div>
              <div className="ml-2">
                <h3 className="text-sm font-semibold text-yellow-800 mb-1">
                  ⏰ Oferta Limitada!
                </h3>
                <p className="text-yellow-700 text-xs">
                  Os primeiros clientes que se cadastrarem ganham suporte
                  premium gratuito. Não perca essa oportunidade!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
