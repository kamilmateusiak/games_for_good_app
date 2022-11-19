import styled from 'styled-components';

export const Tabs = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Tab = styled.div<{ isSelected?: boolean; }>`
  margin: 7px 0;
  padding: 3px 30px;
  cursor: pointer;
  border-radius: 3px;
  font-weight: ${props => props.isSelected ? 700 : 400};
  background-color: ${props => props.isSelected ? '#78BAA033' : 'transparent'};
`;

export const Columns = styled.div`
  display: flex;
`;

export const ColumnCell = styled.div`
  flex-basis: 33.3%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  align-items: center;
  justify-content: flex-end;
`;

export const Avatar = styled.img<{ isTop?: boolean }>`
  box-shadow: 0 0 0 7px #78BAA0;
  border-radius: 50%;
  height: ${props => props.isTop ? '100px' : '70px'};
  width: ${props => props.isTop ? '100px' : '70px'};
  margin: 30px 0;
`;

export const Bar = styled.div<{ primary: boolean; secondary: boolean; tertiary: boolean; }>`
  background-color: #2976C2;
  height: ${props => props.primary ? '120px' : props.secondary ? '100px' : '90px'};
  color: #fff;
  width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${props => props.primary ? "90px" : "60px"};
`;

export const UserData = styled.span`
  padding: 0 25px;
  display: inline;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 100%;
  text-align: center;
`;
