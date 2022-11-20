import { Button, CatchText, LinkButton, Wrapper } from "./styles";

export default function Welcome() {
  const handleLogin = () => {
    window.location.href = window.location.origin + '/api/auth/login'
  }

  const goToCareers = () => {
    window.open('https://www.bgk.pl/kariera-w-bgk/oferty-pracy-i-praktyk/', '_blank');
  }

  return (
    <Wrapper>
      <Button onClick={handleLogin}>Sign in</Button>
      <CatchText>
        <p>Don&apos;t you an employee?</p>
        <LinkButton onClick={goToCareers}>Join us!</LinkButton>
      </CatchText>
    </Wrapper>
  )
} 