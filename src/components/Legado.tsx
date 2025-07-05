export default function Legado() {
  return (
    <section id="nosso-legado" className="relative py-20 px-6 bg-blue-600">
      <div className="absolute top-0 left-0 w-full h-16 bg-white" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 0)' }} />
      <div className="max-w-6xl mx-auto pt-8">
        <h2 className="text-3xl font-bold text-center mb-10 text-white">
          Nosso Legado
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
            <h3 className="text-xl font-semibold mb-4 text-white">
              História
            </h3>
            <p className="text-white/90">
              Fundada com o compromisso de transformar a engenharia civil através da inovação e excelência, a PP Engenharia se estabeleceu como referência no setor. Nossa jornada é marcada por projetos desafiadores e conquistas significativas.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
            <h3 className="text-xl font-semibold mb-4 text-white">
              Missão
            </h3>
            <p className="text-white/90">
              Desenvolver soluções de engenharia que superem expectativas, combinando expertise técnica com compromisso com a qualidade e sustentabilidade. Buscamos constantemente a excelência em cada projeto que realizamos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 