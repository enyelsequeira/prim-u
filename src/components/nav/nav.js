import Link from "next/link";
import { useState, useEffect } from "react";
import {
  LogoContainer,
  LogoIcon,
  LogoTitle,
  Nav,
  NavContainer,
  NavIcon,
  NavLink,
  NavLinks,
} from "./nav.styles";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [lightNav, setLightNav] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  })

  function handleScroll() {
    if(window.scrollY > 60) setLightNav(true);
    else setLightNav(false);
  }

  return (
    <Nav isOpen={isOpen} lightNav={lightNav}>
      <NavContainer>
        <Link href="/">
          <LogoContainer href="/">
            <LogoIcon />
            <LogoTitle>PRIM–U</LogoTitle>
          </LogoContainer>
        </Link>
        <NavIcon onClick={() => setIsOpen(!isOpen)} />
        <NavLinks>
          <NavLink href="#">MAKE A BOOKING</NavLink>
          <NavLink href="#">WORK WITH US</NavLink>
          <NavLink href="#">FAQ</NavLink>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
}

export default NavBar;
