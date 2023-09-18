import styled from 'styled-components';

export const MovieWrapper = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
    gap: 16px;
  }
`;

export const ImageWrapper = styled.div`
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 0px;
  }
`;

export const Image = styled.img`
  width: 100%;
  border-radius: 5px;
  object-fit: cover;

  @media screen and (min-width: 768px) {
    width: 704px;
    max-height: 400px;
  }

  @media screen and (min-width: 1440px) {
    width: 805px;
    max-height: 458px;
  }
`;

export const DescriptionWrapper = styled.div`
  @media screen and (min-width: 1440px) {
    max-width: 390px;
  }
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSizes.small};
  line-height: 1.15;
  color: ${({ theme: { colors } }) => colors.titleColorDark};
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.medium};
    line-height: 1.17;
  }

  @media screen and (min-width: 1440px) {
    font-size: ${({ theme }) => theme.fontSizes.large};
    line-height: 1.18;
    margin-bottom: 28px;
  }
`;

export const InfoWrapper = styled.div`
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-direction: row;
`;

export const ListOne = styled.ul`
  flex-basis: calc((100% - 50px) / 2);

  @media screen and (min-width: 768px) {
    flex-basis: calc((100% - 50px) / 4);
  }

  @media screen and (min-width: 1440px) {
    flex-basis: calc((100% - 50px) / 2);
  }
`;

export const ItemOne = styled.li`
  margin-bottom: 12px;
  color: ${({ theme: { colors } }) => colors.textColorDark};
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSizes.small};
  line-height: 1.18;
  display: flex;
  align-items: center;
`;

export const ListTwo = styled.ul`
  display: flex;
  flex-direction: column;
  flex-basis: calc((100% - 50px) / 2);

  @media screen and (min-width: 768px) {
    flex-basis: calc((100% - 50px) / 4);
  }

  @media screen and (min-width: 1440px) {
    flex-basis: calc((100% - 50px) / 2);
  }
`;

export const ItemTwo = styled.li`
  margin-bottom: 12px;
  color: ${({ theme: { colors } }) => colors.textColorDark};
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSizes.small};
  line-height: 1.18;
`;

export const Span = styled.span`
  background: ${({ theme }) => theme.colors.linearBackgroundGradient};
  border-radius: 5px;
  padding: 1px 8px;
  max-width: 36px;
  max-height: 18px;
  font-size: ${({ theme }) => theme.fontSizes.xSmall};
  line-height: 1.14;
  text-transform: uppercase;
  color: ${({ theme: { colors } }) => colors.textColorLight};
`;

export const AboutWrapper = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const SubTitle = styled.p`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSizes.xSmall};
  line-height: 1.18;
  text-transform: uppercase;
  color: ${({ theme: { colors } }) => colors.titleColorDark};
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSizes.small};
  line-height: 1.4;
  color: ${({ theme: { colors } }) => colors.textColorDark};
`;
