import Image from "next/image";
import Link from "next/link";
import { Label } from "../../style";
import { Container, IconContainer, Wrapper } from "./style";

export default function Menu() {
  return (
    <Container>
    <Wrapper>
      <Link href={"/"}>
        <IconContainer>
          <Image height={40} width={40} src={require('./icons/icon_home.svg')} alt="home" />
          <Label>Home</Label>
        </IconContainer>
      </Link>
      <Link href={"/ranking"}>
        <IconContainer>
          <Image height={40} width={40} src={require('./icons/ranking.svg')} alt="ranking" />
          <Label>Ranking</Label>
        </IconContainer>
      </Link>
      <Link href={"/"}>
        <IconContainer>
          <Image height={40} width={40} src={require('./icons/icon_bookmark.svg')} alt="wall" />
          <Label>Wall</Label>
        </IconContainer>
      </Link>
      <Link href={"/"}>
        <IconContainer>
          <Image height={40} width={40} src={require('./icons/icon_person.svg')} alt="your profile" />
          <Label>You</Label>
        </IconContainer>
      </Link>
      </Wrapper >
    </Container>
  )
} 