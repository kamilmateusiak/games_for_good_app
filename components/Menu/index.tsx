import Image from "next/image";
import { useUser } from "@auth0/nextjs-auth0";
import Link from "next/link";
import { Label } from "../../style";
import { Container, IconContainer, Wrapper } from "./style";

export default function Menu() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (!user) {
    return null;
  }

  const handleLogout = () => {
    window.location.href = window.location.origin + "/api/auth/logout";
  };

  return (
    <Container>
      <Wrapper>
        <Link href={"/"}>
          <IconContainer>
            <Image
              height={40}
              width={40}
              src={require("./icons/icon_home.svg")}
              alt="home"
            />
            <Label>Home</Label>
          </IconContainer>
        </Link>
        <Link href={"/ranking"}>
          <IconContainer>
            <Image
              height={40}
              width={40}
              src={require("./icons/ranking.svg")}
              alt="ranking"
            />
            <Label>Ranking</Label>
          </IconContainer>
        </Link>
        <Link href={"/"}>
          <IconContainer>
            <Image
              height={40}
              width={40}
              src={require("./icons/icon_bookmark.svg")}
              alt="wall"
            />
            <Label>Wall</Label>
          </IconContainer>
        </Link>
        <IconContainer onClick={handleLogout}>
          <Image
            height={40}
            width={40}
            src={require("./icons/icon_person.svg")}
            alt="your profile"
          />
          <Label>You</Label>
        </IconContainer>
      </Wrapper>
    </Container>
  );
}
