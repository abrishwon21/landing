import styled from "styled-components";
import { Link } from "react-router-dom";
export const TContainer=styled.div`
width:100%
display: flex;
flex-direction: column;
justify-content:space-between;
text-align: center;  
.newBtn{

    font-size: 14px;
    line-height: 1;
    color: #fff;
    padding: 14px 29px;
    text-transform: uppercase;
    border-radius: 60px;
    background-color: #000;
    text-decoration: none;
    border: 1px solid #fff;

    position: relative;
    text-align: center;

    box-sizing: border-box;
    transition: all .3s;
    display: inline-flex;
    align-items: center;

    margin-bottom:2rem;
    margin-top:2rem;
    @media(max-width:700px){
        transform:translateX(0%);
    }
    &:hover{
        background-color: #fff;
        color: #000;
        border-color: #000;
    
    }
  }

`
export const Banner=styled.div`

margin:0;
width:100%;
height:100vh;
top:50px;

`
export const Video=styled.video`
width:100%;
height:100%;
object-fit:cover;
margin: 0 auto;
top:50px;
`
export const VidCover=styled.div`
position:absolute;
top:80px;
height:100vh;
width:100%;
margin:0;
background-color: #D8DCDD;
opacity:0;
z-index:1;
@media (max-width: 700px) {
    height:60vh;
   
  }
`
export const Overlay = styled.div`

display:flex;
position:absolute;
width:50%;
height:100%;
left:5%;
justify-content:center;
align-items:flex-start;
top:50px;
flex-direction:column;
color:white;
opacity:1;
z-index:10;
font-family: avenirNext_bold,sans-serif;

    
    

&>h5{

    Font-family: "Gilroy", sans-serif;
    font-size: 1.6rem;
    
    margin-bottom: 40px;
    line-height: 1.2;
    color:#ffffff;

    font-weight: 300;

    font-size: 28px;
    line-height: 1.14286;
    margin-top: 0;
    margin-bottom: 24px;
}
&>h1{
font-size: 48px;
    line-height: 1;
    margin-top: 0;
    font-weight: 300;
    margin: 0.67em 0;
    
    :-webkit-any(article, aside, nav, section) h1 {
    font-size: 1.5em;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    display: block;
}


}

&>p{


    margin-top: 24px;
    font-size: 18px;
    line-height: 1.5;
    margin: 0 0 12.5px;

    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;

    -webkit-box-direction: normal;

   
}


&>button{

    font-size: 14px;
    line-height: 1;
    color: #000;
    padding: 14px 29px;
    text-transform: uppercase;
    border-radius: 60px;
    background-color: #fff;
    text-decoration: none;
    border: 1px solid #fff;

     margin-top: 32px;

         -webkit-appearance: none;
 
    position: relative;
    text-align: center;
    cursor: pointer;

    box-sizing: border-box;
    

    transition: all .3s;
    display: -webkit-inline-box;
    
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;

    align-items: center;
    &:hover{
        background-color:#49464A;
        color:#ffffff;
        font-weight:300;
    }


}

@media (max-width: 700px) {
    width:100%;
    padding: 0 17.5px;
    left:2%
    top:20px;
    margin-bottom:10px;
&>h5{

    margin-bottom: 12px;
    font-size: 12px;
}
&>h1{
    margin-bottom: 0;
    font-size: 30px;
    line-height: 1.2;
}

&>p{
    font-size: 16px;
    line-height: 1.5;
 
}


&>button{
    font-size:16px;
    font-weight:300;
    padding:10px;
   
   
   


}
  }
`

export const ReviewCard=styled.div`
   
   
  
    display: inline-flex;

    align-items: center;
    background: #fff;

    box-shadow: 4px 4px 20px rgb(101 101 101 / 15%);
    border-radius: 10px;
    padding: 20px 3px;

    @media only screen and (max-width: 600px){
      padding: 20px 16px;
    }


`
export const LogoLink=styled(Link)`
margin: 0 32px;
color: -webkit-link;
cursor: pointer;
text-decoration: underline;
font-size: 18px;
font-weight: 400;

background-color: transparent;
transition: all .3s;

&>img {
    max-height: 40px;
    border-style: none;
    box-sizing: border-box;
     overflow-clip-margin: content-box;
     overflow: clip;
     vertical-align: middle;
     @media(max-width:700px){
        max-height: 20px;
        max-width:100%;
     }
 }
 @media(max-width:700px){
    margin: 0 7px;
 }
`
export const ReviewCardContainer=styled.div`
position: relative;
margin-top: -60px;
text-align: center;
padding: 0 20px;
z-index: 9;
@media(max-width:700px){
    margin-top: -32px;
}
`
export const StepperContainer=styled.div`
display: flex;
flex-direction:column;
align-items:center;
justify-content:space-between;


`

export const ProsContainer=styled.div`
display:flex;
justify-content:space-between;
align-items:flex-start;

@media(max-width:700px){
    flex-direction:column;
    align-items:center;
}
`