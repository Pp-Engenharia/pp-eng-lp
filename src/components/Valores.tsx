'use client';

import { useEffect, useRef } from 'react';

const valores = [
  "Inovação",
  "Excelência",
  "Ética",
  "Comprometimento",
  "Sustentabilidade"
];

export default function Valores() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section 
      ref={sectionRef}
      id="nossos-valores" 
      className="relative bg-cover bg-center text-white py-24 px-4"
      style={{ 
        backgroundImage: "url('/valores-bg.jpg')",
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center top'
      }}
    >
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Nossos Valores</h2>
        <p className="text-lg max-w-2xl mx-auto mb-8 text-gray-200">
          Os pilares que sustentam cada projeto desenvolvido pela PP Engenharia, refletindo nossa cultura organizacional e nosso compromisso com clientes, colaboradores e sociedade.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {valores.map((valor, index) => (
            <span 
              key={index}
              className="bg-white/10 border border-white/20 text-white font-medium px-4 py-2 rounded-full"
            >
              {valor}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
} 