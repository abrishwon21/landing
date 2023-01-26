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
      <h2 style={{color:'white'}}>Reveal</h2>
    </LeftContainer>
      
      
      <RightContainer>
          <NavbarLinkContainer>
            <NavbarLink to="/"> Home</NavbarLink>
            <NavbarLink to="/service"> Service</NavbarLink>
            <NavbarLink to="/indutsries"> Industries</NavbarLink>
            <NavbarLink to="/about"> About Us</NavbarLink>
            <NavbarLink to="/contact"> Contact Us</NavbarLink>
           
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
          <NavbarLinkExtended to="/"> Home</NavbarLinkExtended>
          <NavbarLinkExtended to="/service"> Service</NavbarLinkExtended>
          <NavbarLinkExtended to="/indutsries"> Industries</NavbarLinkExtended>
          <NavbarLinkExtended to="/about"> About Us</NavbarLinkExtended>
          <NavbarLinkExtended to="/contact"> Contact Us</NavbarLinkExtended>
         
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
}

export default Header;