'use client';

import { FaHandshake, FaBullseye, FaClock } from 'react-icons/fa';

interface Diferencial {
  titulo: string;
  descricao: string;
  icone: React.ReactNode;
}

const diferenciais: Diferencial[] = [
  {
    titulo: "Atendimento Personalizado",
    descricao: "Cada projeto tratado como único, com atenção às necessidades específicas de cada cliente.",
    icone: <FaHandshake className="w-8 h-8 text-blue-600" />
  },
  {
    titulo: "Precisão Técnica",
    descricao: "Planejamento e execução alinhados aos mais altos padrões da engenharia civil.",
    icone: <FaBullseye className="w-8 h-8 text-blue-600" />
  },
  {
    titulo: "Compromisso com Prazos",
    descricao: "Entrega pontual sem abrir mão da qualidade e segurança em todas as etapas.",
    icone: <FaClock className="w-8 h-8 text-blue-600" />
  }
];

export default function Diferenciais() {
  return (
    <section id="porque-escolher" className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Por que escolher a PP Engenharia?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {diferenciais.map((diferencial, index) => (
            <div key={index} className="p-6 bg-gray-50 rounded-lg border hover:shadow-lg transition-shadow duration-300">
              <div className="flex justify-center mb-4">
                {diferencial.icone}
              </div>
              <h3 className="font-semibold text-lg text-gray-800 mb-2">
                {diferencial.titulo}
              </h3>
              <p className="text-gray-600 text-sm">
                {diferencial.descricao}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 