import Image from "next/image";
import { Header } from "./components/Header";
import previewImage from '../../assets/first-image.png'
import legacyImage from '../../assets/legacy-image.png'
import { LegacyContainer, LegacyText, LegacyTextContainer, LegacyTextHeader, PreviewImageContainer, PreviewText, PreviewTextContainer } from "./styles";

export default function Home() {
  return (
    <>
      <Header />

      <PreviewImageContainer>
        <Image
          src={previewImage}
          height={730}
          quality={100}
          priority
          alt="Imagem de capa com um projeto de Engenharia Civil 3D"
        />

        <PreviewTextContainer>
          <PreviewText>Projetos inteligentes Soluções duradouras</PreviewText>
        </PreviewTextContainer>
      </PreviewImageContainer>

      <LegacyContainer>
        <LegacyTextContainer>
          <LegacyTextHeader>Legado</LegacyTextHeader>
          <LegacyText>Na PP Engenharia, transformamos projetos em soluções que impactam <br />
            positivamente o mundo. Oferecemos estruturas duráveis, eficientes e <br />
            sustentáveis, otimizando recursos e respeitando o meio ambiente. <br />
            Com inovação e responsabilidade, unimos tecnologia e funcionalidade <br />
            para atender ao presente sem comprometer o futuro. Nosso legado é <br />
            promover qualidade de vida, confiança e um futuro sustentável.
          </LegacyText>
        </LegacyTextContainer>

        <div>
          <Image
            src={legacyImage}
            height={319}
            width={355}
            quality={100}
            priority
            alt="Imagem da sessão legado com um projeto de Engenharia Civil 3D"
          />
        </div>
      </LegacyContainer>
    </>
  )
}