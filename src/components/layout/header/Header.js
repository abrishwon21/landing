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
import PopUp from "../partials/popUp";
import Contact from "../../../views/contact/contactUs";


function Header() {
  const [extendNavbar, setExtendNavbar] = useState(false);

  const [openPopUp, setOpenPopUp]=useState(false);

  const handleOpenPopUp=()=>{
    setOpenPopUp(true);
  }
  const menuToggler=() => {
    setExtendNavbar((curr) => !curr);
  }
  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
     <LeftContainer>
     
     <Logo src="rLogo.png"/>
     
    </LeftContainer>
      
      
      <RightContainer>
          <NavbarLinkContainer>
            <NavbarLink smooth to="/"> Home</NavbarLink>
            <NavbarLink smooth to="/#service"> Service</NavbarLink>
            <NavbarLink smooth to="/about"> About Us</NavbarLink>
            <NavbarLink smooth to="/#contact"> Contact Us</NavbarLink>
           
            <GetInTouch onClick={handleOpenPopUp}>Get in touch</GetInTouch>
            <OpenLinksButton
              onClick={menuToggler}
            >
              {extendNavbar ? <Fragment>&#10005;</Fragment> : <Fragment> &#8801;</Fragment>}
            </OpenLinksButton>
          </NavbarLinkContainer>
        </RightContainer>

      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer onClick={menuToggler}>
          <NavbarLinkExtended smooth to="/"> Home</NavbarLinkExtended>
          <NavbarLinkExtended smooth to="/#service"> Service</NavbarLinkExtended>
          <NavbarLinkExtended smooth to="/about"> About Us</NavbarLinkExtended>
          <NavbarLinkExtended smooth to="/#contact"> Contact Us</NavbarLinkExtended>
          <GetInTouch onClick={handleOpenPopUp}>Get in touch</GetInTouch>
        </NavbarExtendedContainer>
      )}
      {
        openPopUp && <PopUp open={openPopUp} close={(v)=>setOpenPopUp(v)} />
             }
    </NavbarContainer>
  );
}

export default Header;