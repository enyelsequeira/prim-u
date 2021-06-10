import styled from "styled-components";

export const Hero = styled.div`
    display: flex;
    align-items: center;
    padding-left: 55px;
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
        padding-left: 40px;
    }
    @media screen and (max-width: 767.9px) {
        background-size: auto 685px;
        background-position-x: center;
        background-position-y: 110px;
        padding: 0 7px;
        align-items: flex-start;
    }
`