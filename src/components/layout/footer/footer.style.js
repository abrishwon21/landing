import styled from 'styled-components';

export const Box = styled.div`
position:fixed;
margin-top:auto;
background: black;

width: 100%;
bottom:0;
left:0;
right:0;
`;

export const Container = styled.div`

	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1000px;
	margin: 0 auto;
	/* background: red; */
	&>span{
		padding:10px;
		color:white;
	}

	@media (max-width: 1000px) {
		// padding: 70px 30px;
		display:none;
	}
`

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;
margin-left: 60px;
`;

export const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
						minmax(185px, 1fr));
grid-gap: 20px;

@media (max-width: 1000px) {
	grid-template-columns: repeat(auto-fill,
						minmax(200px, 1fr));
}
`;

export const FooterLink = styled.a`
color: #fff;
margin-bottom: 0;
font-size: 14px;
text-decoration: none;

&:hover {
	color: green;
	transition: 200ms ease-in;
}
`;

export const Heading = styled.p`
font-size: 18px;
color: #fff;
margin-bottom: 20px;
font-weight: bold;
`;
