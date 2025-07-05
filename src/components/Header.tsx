import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="w-full py-4 px-6 flex justify-between items-center border-b border-gray-200">
      <div className="flex items-center gap-1">
        <Image
          src="/Vector.svg"
          alt="PP Engenharia Logo"
          width={40}
          height={40}
          className="w-10 h-10"
        />
        <span className="text-xl font-bold text-gray-800">PP Engenharia</span>
      </div>
      <nav className="hidden md:flex space-x-6 text-sm text-gray-700">
        <Link href="#nosso-legado" className="hover:text-pp-blue">Legado</Link>
        <Link href="#porque-escolher" className="hover:text-pp-blue">Diferenciais</Link>
        <Link href="#nossos-valores" className="hover:text-pp-blue">Valores</Link>
      </nav>
      <Link 
        href="#contato" 
                  className="ml-4 text-white bg-pp-blue hover:bg-pp-blue-hover px-4 py-2 text-sm rounded-md"
      >
        Solicitar orçamento
      </Link>
    </header>
  );
} 