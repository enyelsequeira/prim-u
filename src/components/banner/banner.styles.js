import styled from "styled-components";
// import { GlobalTitle, GlobalButton } from "../global-components";
// import Image from 'next/image'
import { GlobalCard } from "../global-components";

export const Main = styled.main`
  padding: 60px 4vw 20px;
  @media screen and (max-width: 768px) {
    padding: 20px 10px;
  }
`;

export const BannerCard = styled(GlobalCard)`
  max-width: 1320px;
  min-height: 643px;
`
// export const Card = styled.div`
//   position: relative;
//   display: flex;
//   justify-content: space-between;
//   max-width: 1320px;
//   min-height: 643px;
//   margin: auto;
//   border-radius: 20px;
//   padding: 60px;
//   background-color: rgba(0, 0, 0, .4);
//   @media screen and (max-width: 1124px) {
//     flex-direction: column;
//   }
//   @media screen and (max-width: 768px) {
//     row-gap: 40px;
//     padding: 32px;
//   }
//   @media screen and (max-width: 640px) {
//     padding: 36px 16px 24px;
//     justify-content: flex-start;
//     row-gap: 40px;
//   }
// `;

// export const Img = styled(Image)`
//   position: absolute;
//   border-radius: 20px;
//   object-fit: cover;
//   object-position: center;
//   z-index: -1;
// `

// export const Body = styled.div`
//   position: relative;
//   display: grid;
//   max-width: 584px;
//   flex: 1;
//   @media screen and (max-width: 640px) {
//     max-width: 410px;
//   }
// `;

// export const Title = styled(GlobalTitle)`
//   font-size: 50px;
//   line-height: 59px;
//   color: ${(props) => props.theme.colors.white};
//   margin-bottom: 264px;
//   @media screen and (max-width: 1124px) {
//     margin-bottom: 164px;
//   }
//   @media screen and (max-width: 640px) {
//     font-size: 34px;
//     line-height: 40px;
//     margin-bottom: 231px;
//   }
// `;

// export const SubTitle = styled.p`
//   font-family: ${(props) => props.theme.fonts.roboto};
//   font-style: normal;
//   font-weight: normal;
//   font-size: 20px;
//   line-height: 28px;
//   color: ${(props) => props.theme.colors.white};
//   margin-bottom: 32px;
//   @media screen and (max-width: 640px) {
//     font-size: 18px;
//     line-height: 24px;
//     margin-bottom: 20px;
//   }
// `;

// export const Text = styled(SubTitle)`
//   margin: 0;
//   align-self: end;
//   display: inline-block;
//   &:nth-child(2) {
//     margin-bottom: 32px;
//   }
//   @media screen and (max-width: 640px) {
//     display: contents;
//     &:nth-child(2) {
//       display: flex;
//       font-size: 18px;
//       line-height: 24px;
//       margin-bottom: 20px;
//     }
//   }
// `;

// export const Button = styled(GlobalButton)`
//   all: unset;
//   position: relative;
//   display: grid;
//   place-items: center;
//   text-transform: uppercase;
//   text-align: center;
//   border-radius: 10px;
//   cursor: pointer;
//   transition: all 0.3s;
//   width: 235px;
//   height: 60px;
//   background: ${(props) => props.theme.colors.white};
//   color: ${(props) => props.theme.colors.purple};
//   font-family: ${(props) => props.theme.fonts.condensed};
//   font-style: normal;
//   font-weight: bold;
//   font-size: 24px;
//   line-height: 28px;
//   && {
//     align-self: flex-end;
//   }

//   &:hover {
//     background: ${(props) => props.theme.colors.purple};
//     color: ${(props) => props.theme.colors.white};
//   }

//   @media screen and (max-width: 1124px) {
//     && {
//       align-self: flex-start;
//     }
//   }
//   @media screen and (max-width: 768px) {
//     && {
//       width: 100%;
//     }
//   }
// `;
