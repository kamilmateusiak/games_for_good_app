import Image from "next/image";
import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${(props) => props.theme.colors.primaryBackgroundColor};
  padding: 0 15px;
  padding-top: 10px;
  height: 350px;
  display: flex;
  flex-direction: column;
`;

export const ChallengeImage = styled(Image)`
  align-self: center;
`;

export const ChallengeCategory = styled.div`
  background-color: ${(props) => props.theme.colors.secondaryBackgroundColor};
  width: fit-content;
  padding: 5px 10px;
  border-radius: 3px;
  position: absolute;
  right: 50px;
`;

