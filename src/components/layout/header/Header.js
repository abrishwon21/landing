import React, { Fragment, useState } from "react";
import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarExtendedContainer,
  NavbarInnerContainer,
  NavbarLinkContainer,
  NavbarLink,
  Logo,
  OpenLinksButton,
  NavbarLinkExtended,
  GetInTouch
} from "./header.style";

import Home from '../../../views/home/Home';
function Header() {
  const [extendNavbar, setExtendNavbar] = useState(false);

  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
     <LeftContainer>
     
     <Logo src="rLogo.png"/>
     
    </LeftContainer>
      
      
      <RightContainer>
          <NavbarLinkContainer>
            <NavbarLink smooth to="#home"> Home</NavbarLink>
            <NavbarLink smooth to="#service"> Service</NavbarLink>
            <NavbarLink smooth to="#about"> About Us</NavbarLink>
            <NavbarLink smooth to="#contact"> Contact Us</NavbarLink>
           
            <GetInTouch>Get in touch</GetInTouch>
            <OpenLinksButton
              onClick={() => {
                setExtendNavbar((curr) => !curr);
              }}
            >
              {extendNavbar ? <Fragment>&#10005;</Fragment> : <Fragment> &#8801;</Fragment>}
            </OpenLinksButton>
          </NavbarLinkContainer>
        </RightContainer>

      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtended smooth to="#homr"> Home</NavbarLinkExtended>
          <NavbarLinkExtended smooth to="#service"> Service</NavbarLinkExtended>
          <NavbarLinkExtended smooth to="#indutsries"> Industries</NavbarLinkExtended>
          <NavbarLinkExtended smooth to="#about"> About Us</NavbarLinkExtended>
          <NavbarLinkExtended smooth to="#contact"> Contact Us</NavbarLinkExtended>
         
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
}

export default Header;