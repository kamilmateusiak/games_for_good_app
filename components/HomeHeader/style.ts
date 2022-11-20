import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0;
  background-color: ${(props) => props.theme.colors.primaryBackgroundColor};
  padding: 15px 10px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
  border-bottom: 1px solid white;
`;

export const LeftContainer = styled.div`
  display: flex;
  gap: 20px;
  width: fit-content;
`;

export const IconContainer = styled.div`
  display: flex;
`;