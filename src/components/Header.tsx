import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="w-full py-4 px-4 md:px-6 flex flex-wrap md:flex-nowrap justify-between items-center gap-y-3 border-b border-gray-200">
      <div className="flex items-center gap-1">
        <Image
          src="/Vector.svg"
          alt="PP Engenharia Logo"
          width={40}
          height={40}
          className="w-10 h-10"
        />
        <span className="text-xl font-bold text-gray-800 whitespace-nowrap">PP Engenharia</span>
      </div>
      <nav className="order-3 md:order-none w-full md:w-auto flex justify-center space-x-6 text-sm text-gray-700">
        <Link href="#nosso-legado" className="hover:text-pp-blue">Legado</Link>
        <Link href="#porque-escolher" className="hover:text-pp-blue">Diferenciais</Link>
        <Link href="#nossos-valores" className="hover:text-pp-blue">Valores</Link>
      </nav>
      <div className="order-2 md:order-none w-full md:w-auto grid grid-cols-2 gap-2 md:flex md:gap-0">
        <Link
          href="https://app.pp-engenharia.com/login/?next=/" 
          className="md:ml-4 text-center whitespace-nowrap text-white bg-pp-blue hover:bg-pp-blue-hover px-4 py-2 text-sm rounded-md"
        >
          Área do Cliente
        </Link>

        <Link 
          href="#contato" 
          className="md:ml-4 text-center whitespace-nowrap text-white bg-pp-blue hover:bg-pp-blue-hover px-4 py-2 text-sm rounded-md"
        >
          Solicitar orçamento
        </Link>
      </div>
    </header>
  );
} 