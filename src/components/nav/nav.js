import { useEffect, useState } from "react";
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

function NavBar(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [lightNav, setLightNav] = useState(false);
  function handleScroll() {
    if (window.scrollY > 60) setLightNav(true);
    else setLightNav(false);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <Nav isOpen={isOpen} lightNav={lightNav}>
      <NavContainer>
        <LogoContainer href="#">
          <LogoIcon />
          <LogoTitle>PRIM–U</LogoTitle>
        </LogoContainer>
        <NavIcon onClick={() => setIsOpen(!isOpen)} />
        <NavLinks>
          <NavLink>
            <a href="https://www.prim-u.app/en/list" target="_blank" rel="noreferrer">
              MAKE A BOOKING
            </a>
          </NavLink>
          <NavLink>WORK WITH US</NavLink>
          <NavLink onClick={() => props.faq.current.scrollIntoView(false)}>FAQ</NavLink>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
}

export default NavBar;
