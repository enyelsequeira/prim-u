import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-gap: 60px;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    background-color: white;
    margin: 60px 0 100px 0;
`;

export const Card = styled.div`
    /* width: 400px;
    height: 300px; */
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-content: center;
    position: relative;
    overflow: hidden;
`;

export const Image = styled.img`
    src: ${props => props.src};
    width: 400px;
    height: 400px;
`;


export const CardTitle = styled.h2`
    font-family: ${({ theme }) => theme.fonts.condensed};
    font-style: normal;
    font-weight: bold;
    font-size: 38px;
    line-height: 45px;

    align-self: center;
    text-align: center;
    letter-spacing: -0.01em;
    text-transform: uppercase;
    display: flex;

    color: #fff;
    position: absolute;
    z-index: 2;
`;