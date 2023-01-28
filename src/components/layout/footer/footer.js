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
		
		
		</Row>
		<span> Copyright © {new Date().getFullYear()} <Link>www.reveal.com</Link> </span>
	</Container>

</Box>
);
};
export default Footer;
