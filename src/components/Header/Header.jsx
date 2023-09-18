import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  height: 70px;
  background-color: ${({ theme }) => theme.colors.backgroundColorDark};
`;
