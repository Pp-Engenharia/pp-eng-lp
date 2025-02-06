import Image from "next/image";
import { HeaderContainer, LogoContainer, LogoText, NavContainer, NavLink } from "./styles";
import logoImage from '../../../../assets/pp-eng-logo.png'

export function Header() {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Image 
          src={logoImage}
          height={90}
          width={30}
          quality={100}
          priority
          alt="Logomarca da PP Engenharia"
        />

        <LogoText>
          PP Engenharia
        </LogoText>
      </LogoContainer>

      <NavContainer>
        <NavLink href="#">Legado</NavLink>
        <NavLink href="#">Diferenciais</NavLink>
        <NavLink href="#">Valores</NavLink>
        <NavLink href="#">Solicite um Orçamento</NavLink>
      </NavContainer>
    </HeaderContainer>
  )
}