import { useEffect, useState } from "react";
import Link from "next/link";
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
    <Nav isOpen={isOpen} lightNav={lightNav} color={lightNav ? "secondary" : "primary"}>
      <NavContainer>
        <Link href="/">
          <LogoContainer>
            <LogoIcon />
            <LogoTitle>PRIM–U</LogoTitle>
          </LogoContainer>
        </Link>

        <NavIcon onClick={() => setIsOpen(!isOpen)} />
        <NavLinks>
          <NavLink
            as="a"
            href="https://claudiazammar02.wixsite.com/primu/about-prim-u-for-u"
            target="_blank"
            rel="noreferrer">
            PRIM-U FOR-U
          </NavLink>
          <NavLink
            as="a"
            href="https://claudiazammar02.wixsite.com/primu/sustainability"
            target="_blank"
            rel="noreferrer">
            SUSTAINABILITY
          </NavLink>
          <NavLink
            as="a"
            href="https://admin.prim-u.app/en/onboard/merchant-signup?marketplace_reference_id=80a44a38349c4c6cbc0ac465d9ce7129&user=Primlancer"
            target="_blank"
            rel="noreferrer">
            WORK WITH US
          </NavLink>
          <NavLink as="a" href="/#faq">
            FAQ
          </NavLink>
          <NavLink
            as="a"
            target="_blank"
            rel="noreferrer"
            href="https://claudiazammar02.wixsite.com/primu/blog">
            {" "}
            BLOG
          </NavLink>
          <NavLink
            as="a"
            target="_blank"
            rel="noreferrer"
            href="/https://ludovicacivai5.wixsite.com/prim---u/blank-4">
            CONTACTS
          </NavLink>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
}

export default NavBar;
