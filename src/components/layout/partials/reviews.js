import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
//review logos
import ClutchLogo from '../../../assets/icons/membership/clutchlogo.png';
import GoodFirmsLogo from '../../../assets/icons/membership/logo-goodfirms-1.svg';
import GartnerLogo from '../../../assets/icons/membership/gartner_peer_insights-1.png';
import NuccLogo from '../../../assets/icons/membership/nucc-1.svg';

function Reviews() {


const ReviewCard=styled.div`
padding:0;
margin-left:0;

display:inline-flex;



`
const LogoLink=styled(Link)`
margin: 0 24px;
color: -webkit-link;
cursor: pointer;
text-decoration: underline;
font-size: 14px;
font-weight: 300;

background-color: transparent;
transition: all .3s;

&>img {
    max-height: 30px;
    border-style: none;
    box-sizing: border-box;
    
     overflow: clip;
    max-width:60px;
  
 }

`
const ReviewCardContainer=styled.div`


text-align: flex-start;
padding: 0 20px;
width:80%;

`


    const review = [
        {
          id:1,
          logo:ClutchLogo,
        },
        {
          id:2,
          logo:GoodFirmsLogo,
        },
        {
          id:3,
          logo:GartnerLogo,
        }
      ]

  return (
    <ReviewCardContainer>
    <ReviewCard >
      { review.map((rv)=>(
            <LogoLink to="#" key={rv.id}><img src={rv.logo}/></LogoLink>
            ))}
  </ReviewCard>
</ReviewCardContainer>
  )
}

export default Reviews