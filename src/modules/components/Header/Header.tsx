import { Typography } from "shared/components/atoms/Typography";
import { Container, LeftContainer, Nav, RightContainer } from "./header.styles";

export const Header = () => {
  return (
    <Container>
      <LeftContainer>
        <Typography variant="baiExtraLarge">Max Milan</Typography>
        <Nav>
          <Typography variant="ubuntuSubTitle">Inicio</Typography>
          <Typography variant="ubuntuSubTitle">Sobre</Typography>
          <Typography variant="ubuntuSubTitle">Habilidades</Typography>
          <Typography variant="ubuntuSubTitle">Projetos</Typography>
          <Typography variant="ubuntuSubTitle">Contato</Typography>
        </Nav>
      </LeftContainer>
      <RightContainer>
        <button>Vamos conversar</button>
        <button>Icon</button>
      </RightContainer>
    </Container>
  );
};
