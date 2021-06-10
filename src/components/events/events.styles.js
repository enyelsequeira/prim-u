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
    border-radius: 25px;
    position: relative;
    overflow: hidden;

    display: flex;
    flex-direction: column;

    
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

    @media screen and (max-width: 500px) {
        
    }
`;

export const ImageWrapper = styled.div`
    width: 100%;
`; 

export const Title = styled(GlobalSubtitle)`
    text-transform: uppercase;

    margin-left: 60px;
    margin-top: 40px;

    align-self: flex-start;
    z-index: 10;
    

    ${lineHeight};
    ${space};
    ${fontSize};

    @media only screen and (max-width: 682px) {
        
        margin: auto 0 auto 60px;
    }

    @media only screen and (max-width: 515px) {
        margin: auto;
    } 
`;

export const Text = styled.p`
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.fonts.roboto};
    font-style: normal;
    font-weight: normal;
    width: 584px;

    margin-left: 60px;
    margin-bottom: 40px;
    margin-top: 209px;

    z-index: 10;

    ${lineHeight};
    ${space};
    ${fontSize};

    @media only screen and (max-width: 1024px) {
        margin-bottom: 30px;
        margin-top: 119px;
    }

    @media only screen and (max-width: 682px) {
        width: 400px;
        margin: auto 0 auto 60px;
    }

    @media only screen and (max-width: 510px) {
        margin: auto;
        max-width: 245px;
        text-align: justify;
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

    @media screen and (max-width: 1024px) {
        width: 235px;
        height: 60px;
        position: static;
        margin-left: 60px;
        margin-top: 0;
        margin-bottom: 30px;
    }

    @media only screen and (max-width: 515px) {
        margin: auto;
    } 

`;

