import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="py-12 md:py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-12 items-center">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Projetos de Engenharia Inteligentes
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Soluções personalizadas, sustentáveis e eficientes para sua obra, com excelência técnica e responsabilidade ambiental.
          </p>
          <Link 
            href="#contato" 
            className="inline-block bg-pp-blue hover:bg-pp-blue-hover text-white px-6 py-3 rounded-md text-base font-medium"
          >
            Solicitar orçamento
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:gap-8">
          <div className="relative rounded-2xl overflow-hidden shadow-md h-[260px] sm:h-[400px] mt-[40px] sm:mt-[60px]">
            <Image 
              src="/hero-1.jpg" 
              alt="Imagem Engenharia 1" 
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-pp-blue/50 flex items-end p-3 sm:p-4">
              <span className="text-white text-base sm:text-lg font-semibold">+sustentabilidade</span>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-md h-[260px] sm:h-[400px]">
            <Image 
              src="/hero-2.jpg" 
              alt="Imagem Engenharia 2" 
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-green-800/50 flex items-end p-3 sm:p-4">
              <span className="text-white text-base sm:text-lg font-semibold">+inovação</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 