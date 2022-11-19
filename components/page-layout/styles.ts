import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  flex-direction: column;
`;

export const Content = styled.main`
  flex-grow: 1;
  overflow: auto;
`;

export const NavWrapper = styled.div`
  flex-shrink: 0;
`;