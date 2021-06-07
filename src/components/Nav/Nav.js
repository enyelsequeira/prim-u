import { Nav, LogoContainer, LogoIcon, LogoTitle, NavLinks, NavLink, NavIcon } from './nav.styles.js'

function NavBar() {
    return (
        <Nav>
            <LogoContainer>
                <LogoIcon />
                <LogoTitle>PRIM–U</LogoTitle>
            </LogoContainer>
            <NavIcon />
            <NavLinks>
                <NavLink>MAKE A BOOKING</NavLink>
                <NavLink>WORK WITH US</NavLink>
                <NavLink>FAQ</NavLink>
            </NavLinks>
        </Nav>
    )
}

export default NavBar