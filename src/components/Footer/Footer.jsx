import styled from 'styled-components';
export const Footer = styled.footer`
  display: flex;
  align-items: center;
  padding-left: 50px;
  height: 68px;
  background: ${({ theme }) => theme.colors.linearBackgroundGradient};
`;
