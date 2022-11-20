import Image from "next/image";
import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${(props) => props.theme.colors.primaryBackgroundColor};
  padding: 0 15px;
  padding-top: 10px;
  height: 350px;
  display: flex;
  flex-direction: column;
  position: relative;
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
  top: 70px;
`;

export const TitleHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px;
`;

export const ChallageContainer = styled.div`
  background-color: ${(props) => props.theme.colors.tenraryBackgroundColor};
  border-radius: 3px;
  margin: 20px;
  padding: 15px 10px;
`;

export const ChallengeAdvanceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
`;

export const ChallengeAdvance = styled.div`
  background-color: ${(props) => props.theme.colors.secondaryUi};
  width: 240px;
  height: 8px;
  border-radius: 10px;
`;

export const AdvanceBar = styled.div`
  background-color: ${(props) => props.theme.colors.tenraryUi};
  width: 213px;
  height: 8px;
  border-radius: 10px;
`;
