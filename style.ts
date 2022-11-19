import styled, { createGlobalStyle } from "styled-components";

export const theme = {
  colors: {
    primaryUi: "#0050A0",
  },

  fontFamily: {
    primaryFont: "'Calibri', sans-serif ",
  },
};

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Calibri', sans-serif;
    font-weight: 400;
    font-size: 14pt;
  };
`;

export const Label = styled.span`
  font-family: ${(props) => props.theme.fontFamily.primaryFont};
  font-size: 12pt;
  color: ${(props) => props.theme.colors.primaryUi};
  margin: 0;
 
`