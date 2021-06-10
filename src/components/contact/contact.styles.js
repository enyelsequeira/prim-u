import styled from 'styled-components';
import { GlobalSubtitle } from "../../styles/global-components/global-wrapper";

import { fontSize, lineHeight, space } from "styled-system";

export const Container = styled.div`
    width: auto;    
    margin: 60px 0 100px 0;
    display: grid;
    grid-gap: 60px;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;


    @media only screen and (max-width: 768px) {
        gap: 0;
        grid-template-columns: 1fr;
        grid-template-rows: repeat(2, 1fr);
    }

`;

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    
    width: auto;    
    text-align: left;
`;

export const Card = styled.div`
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    position: relative;
    overflow: hidden;

    
    &:after {
    content: "";
    position: absolute;
    z-index: 11;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.5);
    }
`;

export const ImageContainer = styled.div`
    position: absolute;
    max-width: 100%;
    max-height: 100%;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 10;
`; 

export const Title = styled(GlobalSubtitle)`
    align-self: center;
    justify-self: center;
    text-transform: uppercase;
    display: flex;
    z-index: 13;
    /* margin-bottom: 40px; */

    ${lineHeight};
    ${space};
    ${fontSize};
`;

export const Button = styled.button`
    position: absolute;
    bottom: 107px;
    left: 224px;
    z-index: 20;
    width: 182px;
    height: 60px;
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

    @media only screen and (max-width: 1300px) {
        bottom: 50px; 
    }

    @media only screen and (max-width: 1024px) {
        bottom: 41px; 
    }

    @media only screen and (max-width: 850px) {
        bottom: 20px;
    }

    @media only screen and (max-width: 340px) {
        width: 250px;
    }
`;

export const Text = styled.p`
    color: ${({ theme }) => theme.colors.black};
    font-family: ${({ theme }) => theme.fonts.roboto};
    font-style: normal;
    font-weight: normal;
    max-width: 584px;
    margin-top: 40px;

    ${lineHeight};
    ${space};
    ${fontSize};

    @media only screen and (max-width: 768px) {
        margin: 30px 0 0 0;
        max-width: 446px;
        align-self: left;
    }
    
`;




