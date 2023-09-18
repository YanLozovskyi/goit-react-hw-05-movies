import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

export const Wrap = styled.div`
  padding-top: 60px;
  padding-bottom: 60px;
  border-radius: 30px;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 30px;
`;

export const Logo = styled(Link)`
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: 600;
  text-transform: uppercase;
  padding: 5px 15px;
  margin-right: 40px;
  margin-left: 50px;
  border-radius: 15px;
  color: ${({ theme }) => theme.colors.textColorLight};
  background: ${({ theme }) => theme.colors.linearGradient};

  transition: all ${({ theme }) => theme.animation.cubicBezier};

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.main};
  }
`;

export const StyledLink = styled(NavLink)`
  padding: 7px 15px;
  border-radius: 15px;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.textColorLight};
  border: 1px solid transparent;

  transition: box-shadow ${({ theme }) => theme.animation.cubicBezier},
    color ${({ theme }) => theme.animation.cubicBezier},
    background ${({ theme }) => theme.animation.cubicBezier};

  &.active {
    border: 1px solid ${({ theme }) => theme.colors.accentSecond};
    color: ${({ theme }) => theme.colors.accent};
  }

  &.active:hover {
    border: 1px solid transparent;
  }
  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.main};
    color: ${({ theme }) => theme.colors.textColorDark};
    background: ${({ theme }) => theme.colors.linearGradient};
    background-origin: border-box;
  }
`;
