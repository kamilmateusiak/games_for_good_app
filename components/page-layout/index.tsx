import Menu from "../Menu";
import { Container, Content, NavWrapper } from "./styles";

interface Props {
  children: React.ReactNode;
}

export default function PageLayout(props: Props) {
  return (
    <Container>
      <Content>{props.children}</Content>
      <NavWrapper>
        <Menu />
      </NavWrapper>
    </Container>
  );
}
