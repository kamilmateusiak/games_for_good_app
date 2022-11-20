import styled, { createGlobalStyle } from "styled-components";

export const theme = {
  colors: {
    primaryUi: "#0050A0",
    secondaryUi: "#D9D9D9",
    tenraryUi: "#78BAA0",
    primaryBackgroundColor: "#2976C2",
    secondaryBackgroundColor: "#78BAA0",
    tenraryBackgroundColor: "#78BAA033",
    textColor: "#313F46",
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

  h2 {
    font-size: 18pt;
    margin: 0;
    padding: 10px;
    color: white;
  }

  h3 {
    font-weight: 700;
    font-size: 18pt;
    margin: 0;
    color: ${theme.colors.textColor};
  }

  h4 {
    font-weight: 700;
    font-size: 14pt;
    margin: 0;
    color: ${theme.colors.textColor};
  }
`;

export const Label = styled.span`
  font-family: ${(props) => props.theme.fontFamily.primaryFont};
  font-size: 12pt;
  color: ${(props) => props.theme.colors.primaryUi};
  margin: 0;
 
`