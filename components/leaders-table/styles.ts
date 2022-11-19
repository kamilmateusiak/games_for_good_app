import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  padding: 0 16px;
`;

export const ListItem = styled.li`
  margin: 0;
  padding: 0;
  gap: 36px;
  display: flex;
  align-items: center;
  justify-items: flex-start;
  padding: 14px;

  &:hover {
    background-color: #78BAA033;
  }
`;

export const Avatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

export const Points = styled.span`
  margin-left: auto;
`;
