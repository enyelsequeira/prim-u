import styled from 'styled-components';
import { fontSize, lineHeight, space } from "styled-system";

export const Container = styled.div`
max-width: 100%;
    margin: 60px 0 100px 0;
    width: 100%;
    display: grid;
    grid-gap: 60px;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;


    @media only screen and (max-width: 1024px) {
        grid-template-columns: 1fr;
        grid-template-rows: repeat(2, 1fr);
    }
`;

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Card = styled.div`
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-content: center;
    position: relative;
    overflow: hidden;
    
    &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.5);
    }

    @media only screen and (max-width: 1024px) {
        width: 446px;
        height: 326px;   
    }
`;
    


export const Image = styled.img`
    src: ${props => props.src};
`;

export const Title = styled.h2`
    position: absolute;
    z-index: 10;
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.fonts.condensed};
    text-transform: uppercase;
    align-self: center;
    font-style: normal;
    font-weight: bold;
    font-size: 50px;
    line-height: 59px;
    
`;

export const Button = styled.button`
    position: absolute;
    z-index: 10;
    bottom: 107px;
    width: 235px;
    height: 60px;
    background: ${({ theme }) => theme.colors.white};
    border: none;
    box-sizing: border-box;
    border-radius: 10px;
    font-family: ${({ theme }) => theme.fonts.condensed};
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    letter-spacing: -0.01em;
    color: ${({ theme }) => theme.colors.purple};
    text-transform: uppercase;

    background: #FFFFFF;

    &:hover {
        cursor: pointer;
        background: ${({ theme }) => theme.colors.purple};
        color: ${({ theme }) => theme.colors.white};
    }

`;

export const Text = styled.p`
    color: ${({ theme }) => theme.colors.black};
    font-family: ${({ theme }) => theme.fonts.roboto};
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 28px;
    width: 584px;
    margin-top: 40px;
`;



