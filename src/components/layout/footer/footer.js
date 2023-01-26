import React from "react";
import { Link } from "react-router-dom";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./footer.style";

const Footer = () => {
return (
<Box>
	<Container>
		<Row>
		<Column>
			<Heading>About Us</Heading>
			
			<FooterLink href="#">Vision</FooterLink>
			
		</Column>
		<Column>
			<Heading>Services</Heading>
			<FooterLink href="#">Techies</FooterLink>
			
		
		</Column>
		<Column>
			<Heading>Contact Us</Heading>
			<FooterLink href="#">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Bole, Addis Abeba
				</span>
			</i>
			</FooterLink>
		</Column>
		<Column>
			<Heading>Social Media</Heading>
			<FooterLink href="#">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>
			
			
		
		</Column>
		</Row>
		<span> Copyright © {new Date().getFullYear()} <Link>www.reveal.com</Link> </span>
	</Container>

</Box>
);
};
export default Footer;
