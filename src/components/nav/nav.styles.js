import styled, { css } from "styled-components";

export const Nav = styled.nav`
  --padding: ${(props) => (props.isOpen ? "45px" : 0)};
  /* --padding: ${(props) => (props.isOpen ? "45px" : 0)}; */
  /* --paddingX: ${(props) => (props.isOpen ? "16px" : 0)}; */
  --opacity: ${(props) => (props.isOpen ? 1 : 0)};
  --visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
  --maxheight: ${(props) => (props.isOpen ? "100vh" : 0)};
  --color: ${(props) => props.isOpen || props.lightNav ? props.theme.colors.black : props.theme.colors.white};
  --colour: ${(props) => (props.lightNav ? props.theme.colors.black : props.theme.colors.white)};
  --bgColor: ${(props) => (props.isOpen || props.lightNav ? props.theme.colors.white : "transparent")};
  /* --bgColor: ${(props) => (props.isOpen ? props.theme.colors.white : "transparent")}; */
  ${props => props.isOpen || props.lightNav
      ? css`
          --image: url("data:image/svg+xml;charset=utf8,%3Csvg width='32' height='51' viewBox='0 0 32 51' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M16 51C28 37 32 22.5 32 16.5C31.5 5.5 23 0 16 0L16 9C19.866 9 23 12.134 23 16C23 19.866 19.866 23 16 23L16 51Z' fill='white' fill-opacity='0.3'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M16 51C4 37 0 22.5 0 16.5C0.5 5.5 9 0 16 0L16 9C12.134 9 9 12.134 9 16C9 19.866 12.134 23 16 23L16 51Z' fill='white'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM16 23C19.866 23 23 19.866 23 16C23 12.134 19.866 9 16 9C12.134 9 9 12.134 9 16C9 19.866 12.134 23 16 23Z' fill='white'/%3E%3C/svg%3E");
        `
      : css`
          --image: url("data:image/svg+xml;charset=utf8,%3Csvg width='32' height='51' viewBox='0 0 32 51' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M16 51C28 37 32 22.5 32 16.5C31.5 5.5 23 0 16 0L16 9C19.866 9 23 12.134 23 16C23 19.866 19.866 23 16 23L16 51Z' fill='white' fill-opacity='0.6'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M16 51C4 37 0 22.5 0 16.5C0.5 5.5 9 0 16 0L16 9C12.134 9 9 12.134 9 16C9 19.866 12.134 23 16 23L16 51Z' fill='white'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM16 23C19.866 23 23 19.866 23 16C23 12.134 19.866 9 16 9C12.134 9 9 12.134 9 16C9 19.866 12.134 23 16 23Z' fill='white'/%3E%3C/svg%3E");
        `  
    }
  position: fixed;
  z-index: 100;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 1440px;
  max-height: 80px;
  /* max-height: ${(props) => (props.lightNav ? "80px" : "80px")}; */
  padding: 20px 4vw;
  /* padding: ${(props) => (props.lightNav ? "20px 4vw" : "20px 4vw 0")}; */
  /* padding: ${(props) => (props.lightNav ? "20px 4vw" : "25px 4vw 0")}; */
  background-color: ${(props) => (props.lightNav ? props.theme.colors.white : "transparent")};
  /* padding: ${(props) => (props.lightNav ? "20px 2vw" : "25px 2vw 0")}; */
  transition: all 0.2s, background 0.3s 0.05s, padding-bottom 0.3s;
  /* @media screen and (max-width: 1024px) {
    padding: ${(props) => (props.lightNav ? "20px 2vw 20px" : "25px 2vw 0")};
  } */
  @media screen and (max-width: 767.9px) {
    /* ${(props) => {
      if (props.isOpen)
        return css`
          max-height: 100vh;
        `;
      if (props.lightNav)
        return css`
          max-height: 80px;
        `;
    }}; */
    background-color: transparent;
    max-height: 100vh;
    padding: 10px 10px 0;
    /* padding: ${(props) => (props.lightNav ? "7px 10px 15px" : "10px 10px 0")}; */
    /* padding: ${(props) => (props.lightNav ? "7px 10px 15px" : "20px 10px 0")}; */
    /* padding: ${(props) => (props.isOpen ? "7px 10px 15px" : "20px 16px 0")}; */
    /* padding: ${(props) => (props.lightNav ? "7px 2vw 15px" : "20px 2vw 0")}; */
  }
  @media screen and (max-width: 640px) {
    /* padding: ${(props) => (props.lightNav ? "10px 6px 10px" : "10px 6px 0")}; */
  }
  button {
    ${(props) =>
      props.isOpen
        ? css`
            mask-image: url("data:image/svg+xml;charset=utf8,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='2.12109' width='30' height='3' transform='rotate(45 2.12109 0)' fill='white'/%3E%3Crect y='21.2134' width='30' height='3' transform='rotate(-45 0 21.2134)' fill='white'/%3E%3C/svg%3E");
          `
        : css`
            mask-image: url("data:image/svg+xml;charset=utf8,%3Csvg width='30' height='14' viewBox='0 0 30 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='30' height='3' fill='white'/%3E%3Crect y='11' width='30' height='3' fill='white'/%3E%3C/svg%3E");
          `};
  }
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  border-radius: 10px;
  transition: all 0.2s;
  max-width: 1320px;
  margin: auto;
  height: min-content;
  @media screen and (max-width: 767.9px) {
    /* padding: 10px var(--paddingX) var(--padding); */
    background-color: var(--bgColor);
    padding: 10px 16px 10px;
    /* padding: 10px 16px var(--padding); */
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
    transition: all .2s;
  }
`;

export const LogoContainer = styled.a`
  display: flex;
  column-gap: 12px;
  align-items: center;
  cursor: pointer;

  &:hover {
    p {
      color: ${(props) => props.theme.colors.purple};
    }
    div {
      background-color: ${(props) => props.theme.colors.purple};
    }
  }
  @media screen and (max-width: 767.9px) {
    :hover {
      p {
        color: var(--color);
      }
      div {
        background-color: var(--color);
      }
    }
  }
  @media screen and (max-width: 640px) {
    column-gap: 9px;
  }
`;

export const LogoIcon = styled.div`
  width: 32px;
  height: 51px;
  mask-image: var(--image);
  /* mask-image: url("data:image/svg+xml;charset=utf8,%3Csvg width='32' height='51' viewBox='0 0 32 51' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M16 51C28 37 32 22.5 32 16.5C31.5 5.5 23 0 16 0L16 9C19.866 9 23 12.134 23 16C23 19.866 19.866 23 16 23L16 51Z' fill='white' fill-opacity='0.3'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M16 51C4 37 0 22.5 0 16.5C0.5 5.5 9 0 16 0L16 9C12.134 9 9 12.134 9 16C9 19.866 12.134 23 16 23L16 51Z' fill='white'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM16 23C19.866 23 23 19.866 23 16C23 12.134 19.866 9 16 9C12.134 9 9 12.134 9 16C9 19.866 12.134 23 16 23Z' fill='white'/%3E%3C/svg%3E"); */
  /* mask-image: url("data:image/svg+xml;charset=utf8,%3Csvg width='32' height='51' viewBox='0 0 32 51' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M16 51C28 37 32 22.5 32 16.5C31.5 5.5 23 0 16 0L16 9C19.866 9 23 12.134 23 16C23 19.866 19.866 23 16 23L16 51Z' fill='white' fill-opacity='0.6'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M16 51C4 37 0 22.5 0 16.5C0.5 5.5 9 0 16 0L16 9C12.134 9 9 12.134 9 16C9 19.866 12.134 23 16 23L16 51Z' fill='white'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM16 23C19.866 23 23 19.866 23 16C23 12.134 19.866 9 16 9C12.134 9 9 12.134 9 16C9 19.866 12.134 23 16 23Z' fill='white'/%3E%3C/svg%3E"); */
  /* mask-image: url("data:image/svg+xml;charset=utf8,%3Csvg width='21' height='33' viewBox='0 0 21 33' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M10.2593 32.7014C17.9537 23.7245 20.5185 14.4271 20.5185 10.5799C20.1979 3.52662 14.7477 0 10.2593 0L10.2593 5.77083C12.7382 5.77083 14.7477 7.78037 14.7477 10.2593C14.7477 12.7381 12.7382 14.7477 10.2593 14.7477L10.2593 32.7014Z' fill='%23A6A6A6'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M10.2592 32.7014C2.56481 23.7245 0 14.4271 0 10.5799C0.320602 3.52662 5.77083 0 10.2592 0L10.2593 5.77083C7.78037 5.77083 5.77083 7.78037 5.77083 10.2593C5.77083 12.7381 7.78037 14.7477 10.2593 14.7477L10.2592 32.7014Z' fill='black'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M10.2593 20.5185C15.9253 20.5185 20.5185 15.9253 20.5185 10.2593C20.5185 4.59323 15.9253 0 10.2593 0C4.59323 0 0 4.59323 0 10.2593C0 15.9253 4.59323 20.5185 10.2593 20.5185ZM10.2593 14.7477C12.7381 14.7477 14.7477 12.7381 14.7477 10.2593C14.7477 7.78037 12.7381 5.77083 10.2593 5.77083C7.78037 5.77083 5.77083 7.78037 5.77083 10.2593C5.77083 12.7381 7.78037 14.7477 10.2593 14.7477Z' fill='black'/%3E%3C/svg%3E"); */

  mask-size: 100% 100%;
  mask-repeat: no-repeat;
  mask-position: center;
  background-color: var(--colour);
  @media screen and (max-width: 767.9px) {
    transition: all 0.2s;
    background-color: var(--color);
  }
  @media screen and (max-width: 640px) {
    width: 21px;
    height: 33px;
  }
`;

export const LogoTitle = styled.p`
  font-family: ${(props) => props.theme.fonts.roboto};
  font-style: normal;
  font-weight: 900;
  font-size: 30px;
  line-height: 35px;
  letter-spacing: -0.03em;
  color: var(--colour);
  margin: 0;
  @media screen and (max-width: 767.9px) {
    transition: all 0.2s;
    color: var(--color);
  }
  @media screen and (max-width: 640px) {
    color: var(--color);
    line-height: 14px;
    font-size: 20px;
  }
`;

export const NavIcon = styled.button`
  all: unset;
  width: 30px;
  mask-repeat: no-repeat;
  mask-position: center;
  background-color: var(--color);
  cursor: pointer;
  display: none;
  @media screen and (max-width: 767.9px) {
    display: inline-block;
  }
`;

export const NavLinks = styled.ul`
  all: unset;
  display: flex;
  column-gap: 40px;
  align-items: center;
  padding-top: 10px;
  @media screen and (max-width: 767.9px) {
    width: 100%;
    flex-direction: column;
    padding-top: var(--padding);
    padding-bottom: var(--padding);
    opacity: var(--opacity);
    visibility: var(--visibility);
    max-height: var(--maxheight);
    row-gap: 20px;
    transition: all 0.2s, padding .3s;
    /* transition: all 0.2s ease-out, padding .3s; */
    /* transition: all 0.2s ease-out; */
  }
`;

export const NavLink = styled.li`
  font-family: ${(props) => props.theme.fonts.condensed};
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;
  letter-spacing: -0.01em;
  color: var(--colour);
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.colors.purple};
  }

  & a {
    all: unset;
    display: contents;
  }
  @media screen and (max-width: 767.9px) {
    color: var(--color);
    transition: all 0.3s 0s;
    /* transition: all 0.4s 0.1s; */
    :hover {
      color: var(--color);
    }
  }
`;
