import styled from "styled-components";

export const Nav = styled.nav`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    max-width: 1440px;
    padding: 40px 50px 0;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    @media screen and (max-width: 1024px) {
        padding: 40px 40px 0;
    }
    @media  screen and (max-width: 640px) {
        padding: 20px 16px 0;
    }
`

export const LogoContainer = styled.div`
    display: flex;
    column-gap: 12px;
    align-items: center;
    cursor: pointer;

    :hover {
        p {
            color: ${props => props.theme.colors.purple};
        }
        div {
            background-image: url("data:image/svg+xml;charset=utf8,%3Csvg width='32' height='51' viewBox='0 0 32 51' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M16 51C28 37 32 22.5 32 16.5C31.5 5.5 23 0 16 0L16 9C19.866 9 23 12.134 23 16C23 19.866 19.866 23 16 23L16 51Z' fill='%23A791B8'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M16 51C4 37 0 22.5 0 16.5C0.5 5.5 9 0 16 0L16 9C12.134 9 9 12.134 9 16C9 19.866 12.134 23 16 23L16 51Z' fill='%23683D83'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM16 23C19.866 23 23 19.866 23 16C23 12.134 19.866 9 16 9C12.134 9 9 12.134 9 16C9 19.866 12.134 23 16 23Z' fill='%23683D83'/%3E%3C/svg%3E");
        }
    }
    @media  screen and (max-width: 640px) {
        column-gap: 9px;
        :hover {
            p {
                color: ${props => props.theme.colors.white};
            }
            div {
                background-image: url("data:image/svg+xml;charset=utf8,%3Csvg width='32' height='51' viewBox='0 0 32 51' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M16 51C28 37 32 22.5 32 16.5C31.5 5.5 23 0 16 0L16 9C19.866 9 23 12.134 23 16C23 19.866 19.866 23 16 23L16 51Z' fill='white' fill-opacity='0.6'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M16 51C4 37 0 22.5 0 16.5C0.5 5.5 9 0 16 0L16 9C12.134 9 9 12.134 9 16C9 19.866 12.134 23 16 23L16 51Z' fill='white'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM16 23C19.866 23 23 19.866 23 16C23 12.134 19.866 9 16 9C12.134 9 9 12.134 9 16C9 19.866 12.134 23 16 23Z' fill='white'/%3E%3C/svg%3E");
            }
        }
    }
`

export const LogoIcon = styled.div`
    width: 32px;
    height: 51px;
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg width='32' height='51' viewBox='0 0 32 51' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M16 51C28 37 32 22.5 32 16.5C31.5 5.5 23 0 16 0L16 9C19.866 9 23 12.134 23 16C23 19.866 19.866 23 16 23L16 51Z' fill='white' fill-opacity='0.6'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M16 51C4 37 0 22.5 0 16.5C0.5 5.5 9 0 16 0L16 9C12.134 9 9 12.134 9 16C9 19.866 12.134 23 16 23L16 51Z' fill='white'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM16 23C19.866 23 23 19.866 23 16C23 12.134 19.866 9 16 9C12.134 9 9 12.134 9 16C9 19.866 12.134 23 16 23Z' fill='white'/%3E%3C/svg%3E");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center;
    transition: all .2s;
    @media  screen and (max-width: 640px) {
        width: 21px;
        height: 33px;
    }
`

export const LogoTitle = styled.p`
    font-family: ${props => props.theme.fonts.roboto};
    font-style: normal;
    font-weight: 900;
    font-size: 30px;
    line-height: 35px;
    letter-spacing: -0.03em;
    color: ${props => props.theme.colors.white};
    margin: 0;
    transition: all .2s;
    @media  screen and (max-width: 640px) {
        line-height: 14px;
        font-size: 20px;
    }
`

export const NavIcon = styled.button`
    all: unset;
    width: 30px;
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg width='30' height='14' viewBox='0 0 30 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='30' height='3' fill='white'/%3E%3Crect y='11' width='30' height='3' fill='white'/%3E%3C/svg%3E");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
    display: none;
    @media screen and (max-width: 768px) {
        display: inline-block;
    }
`

export const NavLinks = styled.ul`
    all: unset;
    display: flex;
    column-gap: 40px;
    align-items: center;
    padding-top: 10px;
    @media screen and (max-width: 768px) {
        width: 100%;
        flex-direction: column;
        padding: 30px 0 0 45px;
        row-gap: 30px;
        align-items: flex-start;
    }
    @media  screen and (max-width: 640px) {
        padding-left: 30px;
    }
`

export const NavLink = styled.li`
    font-family: ${props => props.theme.fonts.condensed};
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    letter-spacing: -0.01em;
    color: ${props => props.theme.colors.white};
    cursor: pointer;
    transition: all .2s;

    &:hover {
        color: ${props => props.theme.colors.purple};
    }
    @media  screen and (max-width: 640px) {
        font-size: 16px;
        :hover {
            color: ${props => props.theme.colors.white};
        }
    }
`