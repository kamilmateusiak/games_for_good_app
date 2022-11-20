import Image from "next/image";
import { LeftContainer, IconContainer, Wrapper, Container } from "./style";

export default function HomeHeader() {
  return (
    <Wrapper>
      <Container>
      <h2>204 pt</h2>
      <LeftContainer>
        <IconContainer>
          <Image
            height='40'
            width='40'
            src={require("./icons/icon_gift_outline.svg")}
            alt="rewards"
          />
          <h2>1</h2>
        </IconContainer>
        <IconContainer>
          <Image
            height='40'
            width='40'
            src={require("./icons/icon_heart.svg")}
            alt="rewards"
          />
          <h2>5</h2>
        </IconContainer>
        </LeftContainer>
      </Container>
    </Wrapper>
  )
}