import styled from "styled-components";
import { HashLink as Link } from "react-router-hash-link";

export const NavbarContainer = styled.nav`
  width: 100%;
  z-index:99;
  height: ${(props) => (props.extendNavbar ? "100vh" : "60px")};
  background-color: #262626;
  display: flex;
  flex-direction: column;
  position:fixed;
  @media (min-width: 700px) {
    height: 80px;
  }
`;

export const LeftContainer = styled.div`
  flex: 20%;
  display: flex;
  align-items: center;
  padding-left: 5%;
`;

export const RightContainer = styled.div`
  flex: 80%;
  display: flex;
  justify-content: flex-end;
  padding-right: 50px;
  align-items: center;
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
`;

export const NavbarLink = styled(Link)`
  font-family: GothamLight,Helvetica,sans-serif;
  
    display: inline-block;
    font-size: 14px;
    padding: 11.5px 13px;
    color: #fff;
    text-decoration: none;
    -webkit-transition: all .2s ease-in-out;
    -o-transition: all .2s ease-in-out;
    transition: all .2s ease-in-out;

  @media (max-width: 700px) {
    display: none;
  }
`;

export const NavbarLinkExtended = styled(Link)`
  color: white;
  font-size: 14px;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;
`;

export const Logo = styled.img`
  margin: 10px;
  max-width: 180px;
  height: auto;
  color:#FFFFFF;
`;

export const GetInTouch = styled.button`
font-size: 16px;
font-weight:500;
font-family: Arial, Helvetica, sans-serif;
text-decoration: none;
padding: 6px 12px 4px;
background:color:#fff;
border-radius:20px;

&:hover{
background-color:#262626;
color:white;
border: 1px solid #ffff;
transition: all .2s ease-in-out;
}
@media (max-width: 700px) {
  display: none;
}

`
export const OpenLinksButton = styled.button`
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  color: white;
  font-size: 45px;
  cursor: pointer;
  @media (min-width: 700px) {
    display: none;
  }
`;

export const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index:999;
  background-color:#262626;
  @media (min-width: 700px) {
    display: none;
  }
`;