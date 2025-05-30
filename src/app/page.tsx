import localFont from 'next/font/local';
import Image from 'next/image';
import * as S from './styles';

const silkaRegularFont = localFont({
  src: '/fonts/silka-regular-webfont.ttf'
})

const silkaRegularItalicFont = localFont({
  src: '/fonts/silka-regular-webfont.ttf'
})

export default function Home() {
  const BgImageStyle = {
    height: '100vh',
    width: '100%'
  }

  const LogoImageStyle = {
    marginBottom: '5rem'
  }

  return (
    <S.Wrapper>
      <S.Container>
        <S.ContainerLeft>
          <S.ImageWrapper>
            <Image
              src='/images/login-image.png'
              width={2440}
              height={2160}
              alt="Imagem de Navio Cargueiro Wilson da frota Sons"
              style={BgImageStyle}
            />
          </S.ImageWrapper>
        </S.ContainerLeft>
        <S.ContainerRight>
          <S.Content>
            <Image
              src='/images/logo-white-vertical.svg'
              width={116.23}
              height={52.39}
              alt="Logo da Wilson, Sons"
              style={LogoImageStyle}
            />
            <S.Tag className={silkaRegularFont.className}><span>Novo Portal</span></S.Tag>
            <S.Title className={silkaRegularFont.className}>SISPAR</S.Title>
            <S.Subtitle className={silkaRegularFont.className}>Sistema de Emissão de Boletos e Parcelamento</S.Subtitle>
          </S.Content>
        </S.ContainerRight>
      </S.Container>
    </S.Wrapper>
  )
}
