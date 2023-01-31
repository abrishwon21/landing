import styled, { css } from 'styled-components';
import React from 'react'
const TtlContainer=styled.div`
width:100%;
margin-top: 2rem;
margin-bottom:2rem;
text-align:center;

    margin-top: -30px;

    background-color: #fff;
    padding-top: 166px;
    padding-bottom: 125px;


color: #212121;
font-size: 36px;
font-weight: 300;
line-height: 36px;
letter-spacing: -.7px;
font-family:GothamLight;

${props => props.typ==='client' && css`
    margin-top: 3rem;
    
    color: #212121;
    font-size: 36px;
    font-weight: 300;
    line-height: 36px;
    letter-spacing: -.7px;
    text-align: center;


`}


${props=>props.typ==='howwediffer' && css`

color:#767676;
font-size:20px;
font-weight:300;
`}

${props => props.typ==='setup' && css`
    margin-bottom: 68px;
    color: #212121;
    font-size: 36px;
    font-weight: 300;
    line-height: 36px;
    letter-spacing: -.7px;
    text-align: center;
   
    @media(max-width:700px){
      margin-bottom: 64px;
    }

`}

${props => props.typ==='pros' && css`
    font-size: 20px;
    line-height: 1.22222;
    left:5%;
    position: relative;
    font-weight: 400;
    display: inline-block;
    word-break: normal;
    text-align:center;

    
    background-color: #fff;
    padding-top: 166px;
    padding-bottom: 1px;
    &::before{
      position:absolute;
      content:"";
      bottom: 0;
     
      right:0;
      left: 0;
      
      height: 4px;
      display: block;
       background: -webkit-gradient(linear,left top,right top,from(#273cd8),color-stop(48.83%,#2cc1d1));
       background: -o-linear-gradient(left,#273cd8 0%,#2cc1d1 48.83%);
      background: linear-gradient(90deg,#273cd8 0%,#2cc1d1 48.83%);
    }
    @media(max-width:700px){
      text-align: center;
      flex:1;
    }
`}

${props=>props.typ==='sucs' && css`

font-size: 32px;
line-height: 36px;

`}
@media(max-width: 700px)
 {
    font-size: 18px;
    
}
`
function TitleContainer({children,tType}) {
  return (
    <TtlContainer typ={tType}>
    {children}
    </TtlContainer>
  )
}

export default TitleContainer;