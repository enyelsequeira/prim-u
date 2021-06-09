import styled from 'styled-components';
import { GlobalSubtitle } from "../../styles/global-components/global-wrapper";

import { fontSize, lineHeight, space } from "styled-system";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-gap: 60px;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(3, 1fr);
    background: white;
    margin: 60px 0 100px 0;

    
`;

export const Card = styled.div`
    max-width: 1318px;
    height: 460px;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-content: center;
    position: relative;
    overflow: hidden;
    
    &:after {
    content: "";
    width: 100%;
    height: 460px;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.5);
    }
`;


export const Image = styled.img`
    src: ${props => props.src};
`;

export const Title = styled(GlobalSubtitle)`
    align-self: center;
    text-align: center;
    text-transform: uppercase;
    display: flex;
    position: absolute;
    left: 60px;
    top: 40px;
    z-index: 10;

    ${lineHeight};
    ${space};
    ${fontSize};

    @media only screen and (max-width: 1024px) {
        left: 40px;
    }
`;

export const Text = styled.p`
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.fonts.roboto};
    font-style: normal;
    font-weight: normal;
    width: 584px;
    position: absolute;
    z-index: 10;
    left: 60px;
    bottom: 40px;
    ${lineHeight};
    ${space};
    ${fontSize};

    @media only screen and (max-width: 1024px) {
        left: 40px;
        bottom: 130px;
    }
`;

export const Button = styled.button`
    position: absolute;
    z-index: 10;
    width: 235px;
    height: 60px;
    right: 60px;
    bottom: 40px;

    background: ${({ theme }) => theme.colors.white};
    border: none;
    box-sizing: border-box;
    border-radius: 10px;
    font-family: ${({ theme }) => theme.fonts.condensed};
    font-style: normal;
    font-weight: bold;
    text-align: center;
    letter-spacing: -0.01em;
    color: ${({ theme }) => theme.colors.purple};
    text-transform: uppercase;

    background: #FFFFFF;

    ${lineHeight};
    ${space};
    ${fontSize};

    &:hover {
        cursor: pointer;
        background: ${({ theme }) => theme.colors.purple};
        color: ${({ theme }) => theme.colors.white};
    }

    @media only screen and (max-width: 1024px) {
        left: 40px;
        bottom: 40px;
    }

`;

