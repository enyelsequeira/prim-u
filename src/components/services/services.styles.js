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
    width: 400px;
    height: 400px;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-content: center;
    position: relative;
    overflow: hidden;
    
    &:after {
    content: "";
    width: 400px;
    height: 400px;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.5);
    }

    &:hover {
        cursor: pointer;
        
    }
`;

export const Image = styled.img`
    src: ${props => props.src};
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

    &:hover {
        cursor: pointer;
    }
`;