import { Button, CatchText, LinkButton, Wrapper } from "./styles";

export default function Welcome() {
  const handleLogin = () => {
    window.location.href = window.location.origin + '/api/auth/login'
  }

  const goToCareers = () => {
    window.open('http://www.smkproduction.eu5.org', '_blank');
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