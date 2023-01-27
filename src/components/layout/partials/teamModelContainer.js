import React from 'react'
import styled from 'styled-components'

import TmodelImage from '../../../assets/images/b.jpg';
const TeamModelContainer = styled.div`
width:100%;
min-height:350px;

display:flex;
flex-direction:column
align-items:flex-start;
text-align:center;
@media(max-width:700px){
    display:flex;
    flex-direction:column;
}
`
const Description = styled.div`
max-width: 400px;
box-sizing: border-box;
display: block;
font-family: GothamBlack,Helvetica,sans-serif;
font-size: 18px;
font-weight: 400;
background-color: #ffff;


transform:translateX(30%);

margin-left:40px;
margin-top:1em;
&>h2{
    opacity:1;
    z-index:99;
    color:#000000;
}



`

const BannerImage = styled.div`
width:100%;

background-image: url(${props => props.bgImg});
background-size: cover;
background-position: center;
position:relative;

left:-20%;
opacity:0.6;
z-index:9;
`
function TeamModel() {
  return (
    <TeamModelContainer>
       <Description>
            <h2>Companies that need to extend expertise</h2>
            <p>Get specialists of any knowledge and seniority in a short period.</p>
       </Description>
       <BannerImage bgImg={TmodelImage}/>
          
    </TeamModelContainer>
  )
}

export default TeamModel