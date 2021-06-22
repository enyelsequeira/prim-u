import styled from "styled-components";
import { fontSize, lineHeight, space, width } from "styled-system";

export const CarrouselCard = styled.div`
  background: ${({ theme }) => theme.colors.gray};
  width: 520px;
  height: 240px;
  border-radius: 20px;
  overflow: hidden;
  display: inline-block;
  position: relative;
  ${lineHeight};
  ${space};
  ${fontSize};
  ${width};
  @media only screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    width: 434px;
    height: 268px;
  }
  @media only screen and (max-width: 500px) {
    width: 355px;
    height: 288px;
  }
`;

export const TitleReviewWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  ${lineHeight};
  ${space};
  ${fontSize};
  ${width};
`;

export const ReviewText = styled.p`
  font-family: ${({ theme }) => theme.fonts.roboto};
  text-align: left;
  ${lineHeight};
  ${space};
  ${fontSize};
  ${width};
`;

export const Stars = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 20px;
  right: 30px;
`;

export const AngleContainer = styled.div`
  width: 80vw;
  height: 1px;
  margin: 0 auto;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-content: center;
  text-align: center;
`;

export const Angle = styled.a`
  align-self: center;
  cursor: pointer;
  position: relative;
  bottom: 28px;
  &:first-child {
    left: 50px;
  }
  &:nth-child(2) {
    align-self: flex-end;
    right: 50px;
    top: -17px;
  }
`;
