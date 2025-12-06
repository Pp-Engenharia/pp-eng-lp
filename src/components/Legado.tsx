export default function Legado() {
  return (
    <section id="nosso-legado" className="relative py-20 px-6 bg-pp-blue">
      <div className="absolute top-0 left-0 w-full h-16 bg-white" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 0)' }} />
      <div className="max-w-6xl mx-auto pt-8">
        <h2 className="text-3xl font-bold text-center mb-10 text-white">
          Nosso Legado
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
            <h3 className="text-xl font-semibold mb-4 text-white">
              Essência
            </h3>
            <p className="text-white/90">
              Mais do que entregar projetos, buscamos criar experiências que deixem marcas positivas, nas pessoas, nos espaços e no tempo.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
            <h3 className="text-xl font-semibold mb-4 text-white">
              Missão
            </h3>
            <p className="text-white/90">
              Oferecer soluções em engenharia com clareza, cuidado e funcionalidade, tornando o processo de construir mais acessível, organizado e humano.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 