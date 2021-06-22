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

function NavBar() {
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
          <NavLink as="a" href="https://www.prim-u.app/en/list" target="_blank" rel="noreferrer">
            MAKE A BOOKING
          </NavLink>
          <NavLink
            as="a"
            href="https://admin.prim-u.app/en/onboard/merchant-signup?marketplace_reference_id=80a44a38349c4c6cbc0ac465d9ce7129&user=Primlancer"
            target="_blank"
            rel="noreferrer">
            WORK WITH US
          </NavLink>
          <NavLink as="a" href="#faq">
            FAQ
          </NavLink>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
}

export default NavBar;
