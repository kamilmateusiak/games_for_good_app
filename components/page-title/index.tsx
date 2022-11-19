import { Title, Wrapper } from "./styles";

interface Props {
  children: React.ReactNode;
}

export default function PageTitle(props: Props) {
  return (
    <Wrapper>
      <Title>{props.children}</Title>
    </Wrapper>
  );
}
