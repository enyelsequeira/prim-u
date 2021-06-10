<<<<<<< HEAD
import styled from 'styled-components';
import { GlobalSubtitle } from "../../styles/global-components/global-wrapper";
import { fontSize, lineHeight, space } from "styled-system";

export const Container = styled.div`
    display: grid;
    grid-gap: 60px;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    background-color: white;
    margin: 60px 0 100px 0;
    
    @media only screen and (max-width: 1024px) {
    gap: 40px;
    }

    @media only screen and (max-width: 774px) {
        grid-gap: 10.5px;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(3, 1fr);
        margin: 60px auto 100px auto;
    }
`;

export const Card = styled.div`
    border-radius: 25px;
    display: flex;
    justify-content: center;
    align-content: center;
    position: relative;
    overflow: hidden;
    
    &:after {
=======
import styled from "styled-components";
import { GlobalSubtitle } from "../global-components";

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
>>>>>>> main
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.5);
  }

<<<<<<< HEAD
    &:hover {
        cursor: pointer;
        
    } 

    @media only screen and (max-width: 1024px) {
    max-width: 286px;
    max-height: 286px;
    }

    @media only screen and (max-width: 774px) {
    max-width: 100%;
    }
`;

export const CardTitle = styled(GlobalSubtitle)`
    align-self: center;
    text-align: center;
    text-transform: uppercase;
    display: flex;
    position: absolute;
    z-index: 2;
    &:hover {
    cursor: pointer;
    }

    ${lineHeight};
    ${space};
    ${fontSize};
`;
=======
  &:hover {
    cursor: pointer;
  }
`;

export const Image = styled.img`
  src: ${(props) => props.src};
`;

export const CardTitle = styled(GlobalSubtitle)`
  align-self: center;
  text-align: center;
  text-transform: uppercase;
  display: flex;
  position: absolute;
  z-index: 2;

  &:hover {
    cursor: pointer;
  }
`;
>>>>>>> main
