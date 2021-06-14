import styled from "styled-components";
import { GlobalTitle } from '../global-components'

export const Main = styled.div`
    padding: 0 3vw;
    width: 100%;
    height: 700px;
    background-image: url('images/hero.jpg');
    background-repeat: no-repeat;
    background-size: auto 946px;
    background-position-x: 29vw;
    background-position-y: -210px;
    background-color: black;
    @media screen and (max-width: 1024px) {
        background-position-x: 25.5vw;
    }
    @media screen and (max-width: 767.9px) {
        background-size: auto 685px;
        background-position-x: center;
        background-position-y: 110px;
        padding: 0 7px;
    }
`

export const Container = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 1320px;
    height: 100%;
    margin: auto;
    @media screen and (max-width: 767.9px) {
        align-items: flex-start;
    }
`

export const Title = styled(GlobalTitle)`
    font-size: 50px;
    line-height: 59px;
    width: 460px;
    color: ${props => props.theme.colors.white};
    @media screen and (max-width: 767.9px) {
        font-size: 34px;
        line-height: 40px;
        text-align: center;
        margin: 0 auto;
        margin-top: 205px;
    }
    @media screen and (max-width: 640px) {
        width: 350px;
        margin-top: 218px;
    }
`