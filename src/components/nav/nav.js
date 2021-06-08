import { useState } from 'react'
import { Nav, NavContainer, LogoContainer, LogoIcon, LogoTitle, NavLinks, NavLink, NavIcon } from './nav.styles.js'
import Link from 'next/link'

function NavBar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <Nav isOpen={isOpen}>
            <NavContainer>
                <Link href='/'>
                    <LogoContainer href='/'>
                        <LogoIcon />
                        <LogoTitle>PRIM–U</LogoTitle>
                    </LogoContainer>
                </Link>
                <NavIcon onClick={() => setIsOpen(!isOpen)} />
                <NavLinks>
                    <NavLink href='#'>MAKE A BOOKING</NavLink>
                    <NavLink href='#'>WORK WITH US</NavLink>
                    <NavLink href='#'>FAQ</NavLink>
                </NavLinks>
            </NavContainer>
        </Nav>
    )
}

export default NavBar