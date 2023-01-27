import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const AboutUsContainer = styled.div`
  width:100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  text-align:center;
`;


export const AboutUsTitle = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const AboutUsText = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
  text-align: center;
`;

export const AboutUsLink = styled(Link)`
  font-size: 1.2rem;
  text-decoration: underline;
  margin-top: 1rem;
`;


export const BannerContainer = styled.div`
  width: 100%;
  height: 400px;
  background-image: url(${props => props.bgImg});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BannerTitle = styled.h1`
  font-size: 48px;
  color: white;
  text-shadow: 2px 2px 4px black;
`;



export const PortfolioContainer = styled.div`

width:100%;
 display:grid;
grid-template-columns: repeat(3,1fr);
grid-template-rows:repeat(2,1fr);
grid-gap: 2%;

@media (max-width:760px){
  grid-template-columns: repeat(2,1fr); 
    
} 

@media (max-width:520px){
    grid-template-columns: repeat(1,1fr);   
}
`;

export const PortfolioItem = styled.div`
  width: 80%;
  height: 200px;

  background-image: url(${props => props.img});
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  transition: all 0.2s ease-in-out;
  :hover {
    transform: scale(1.05);
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.3);
  }
`;