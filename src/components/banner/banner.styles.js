import styled from "styled-components";
import { GlobalTitle } from '../global-components'

export const Banner = styled.div`
    padding: 60px 2vw 20px;
    /* padding: 60px 60px 20px; */
    @media screen and (max-width: 1124px) {
        padding: 60px 2vw 20px;
        /* padding: 60px 40px 20px; */
    }
    @media screen and (max-width: 768px) {
        padding: 20px 10px;
    }
`
export const Card = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 1320px;
    min-height: 643px;
    margin: auto;
    border-radius: 20px;
    padding: 60px;
    background-image: url('./images/Mask1.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    @media screen and (max-width: 1124px) {
        flex-direction: column;
    }
    @media screen and (max-width: 768px) {
        background-image: url('./images/Mask.jpg');
        row-gap: 40px;
        padding: 32px;
    }
    @media screen and (max-width: 640px) {
        padding: 36px 16px 24px;
        justify-content: flex-start;
        row-gap: 40px;
    }
`

export const Body = styled.div`
    display: grid;
    max-width: 584px;
    flex: 1;
    @media screen and (max-width: 640px) {
        max-width: 410px;
    }
`

export const Title = styled(GlobalTitle)`
    font-size: 50px;
    line-height: 59px;
    color: ${props => props.theme.colors.white};
    margin-bottom: 264px;
    @media screen and (max-width: 1124px) {
        margin-bottom: 164px;
    }
    @media screen and (max-width: 640px) {
        font-size: 34px;
        line-height: 40px;
        margin-bottom: 231px;
    }
`

export const SubTitle = styled.p`
    font-family: ${props => props.theme.fonts.roboto};
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 28px;
    color: ${props => props.theme.colors.white};
    margin-bottom: 32px;
    @media screen and (max-width: 640px) {
        font-size: 18px;
        line-height: 24px;
        margin-bottom: 20px;
    }
`

export const Text = styled(SubTitle)`
    margin: 0;
    align-self: end;
    display: inline-block;
    @media screen and (max-width: 640px) {
        display: contents;
    }
`

export const Button = styled.button`
    all: unset;
    display: inline-block;
    width: 235px;
    height: 60px;
    background: ${props => props.theme.colors.white};
    border-radius: 10px;
    font-family: ${props => props.theme.fonts.condensed};
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    text-transform: uppercase;
    text-align: center;
    color: ${props => props.theme.colors.purple};
    cursor: pointer;
    transition: all .3s;
    align-self: flex-end;

    &:hover {
        background: ${props => props.theme.colors.purple};
        color: ${props => props.theme.colors.white};
    }

    @media screen and (max-width: 1124px) {
        align-self: flex-start;
    }
    @media screen and (max-width: 768px) {
        width: 100%;
    }
`