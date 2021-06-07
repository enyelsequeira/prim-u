import { useState } from 'react'
import { Nav, LogoContainer, LogoIcon, LogoTitle, NavLinks, NavLink, NavIcon } from './nav.styles.js'

function NavBar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <Nav>
            <LogoContainer>
                <LogoIcon />
                <LogoTitle>PRIM–U</LogoTitle>
            </LogoContainer>
            <NavIcon onClick={() => setIsOpen(!isOpen)} />
            <NavLinks isOpen={isOpen}>
                <NavLink>MAKE A BOOKING</NavLink>
                <NavLink>WORK WITH US</NavLink>
                <NavLink>FAQ</NavLink>
            </NavLinks>
        </Nav>
    )
}

export default NavBar