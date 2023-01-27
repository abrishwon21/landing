
import styled, { css } from 'styled-components';




export const TestimonialContainer = styled.div`
width: 100%;
overflow: hidden;
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;

margin-top: 3rem;



`




export const VideoTestimonialWrapper = styled.div`
width: 100%;
overflow: hidden;

display:none;

${props => props.active && css`
display:flex;
justify-content:space-between;
align-items:center;

@media (max-width: 700px) {
     order:1;
    flex-direction:column;
   align-items:center;
    .msg{
        display:none;
    }

 
  
}
` }

`


export const TestimonialWrapper = styled.div`
width: 100%;
overflow: hidden;

display:none;

${props => props.active && css`
display:flex;
justify-content:space-between;
align-items:center;

@media (max-width: 700px) {
    flex-direction:column;
    flex:1;
}
` }

`

export const TestimonialSlide = styled.div`

margin-right:10px;
box-sizing: border-box;
border:none;
position:relative;
width:50%;
padding: 10px;
display:flex;
flex-direction:column;
align-items:center;
&>video{
    height:90%;
    width:90%;
    opacity:0.8;
    // box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
    box-shadow: rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px, rgba(240, 46, 170, 0.2) 15px 15px, rgba(240, 46, 170, 0.1) 20px 20px, rgba(240, 46, 170, 0.05) 25px 25px;
  
}

@media (max-width: 700px) {
  width:100%;
  height:80%;
  order: -1;
  &>video{
    height:100%;
  }
}
`


export const TestimonialAuthor = styled.p`
font-size: 18px;
font-weight: bold;
margin-top: 10px;
`



export const TestimonialButtonContainer = styled.div`

display: flex;
justify-content:flex-start;
align-items:center;
top:0;
position:relative;
margin-bottom:2rem;
`
export const TestimonialButtonNMsgContainer = styled.div`

margin-left:10px;
display: flex;
justify-content: space-between;
align-items:flex-start;
margin:20px;
font-family:font-family: 'Roboto', sans-serif;
flex-direction: column;
width:45%;

&>.msg{
  font-family:font-family: 'Roboto', sans-serif;
  margin-bottom:2rem;
}
@media (max-width: 700px) {
    width:100%;
    height:10%;
    align-items:center;
    margin-top:-20px;
}

`


export const TestimonialButton = styled.button
 ` padding: 10px 10px;
 margin-left:20px;
 border-radius:50%;
 background: #ccc;
  border: none;
  cursor: pointer;
  ${props => props.inactive && css`
  background-color: #0000;
   `}
  &:hover {
    background-color: #ccc;
  }`
export const PlayButton=styled.div`
position:relative;
top:-12rem;
height:60px;
width:60px;
border-radius:30px;
background-color:#FFFFFF;
opacity:1;
cursor:pointer;
text-align: center;  
.playArrow{
  transform:translate(0,15px);
  font-size:30;
  
}

  @media (max-width: 700px) {
    top:-7rem;
    }
`
  export const Profile=styled.div`
  width:50%;
  display:flex;
  align-items:center;
  justify-content:flex-start;
  
  &>div{
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    &>p{
      font-weight:500;
      font-size:24px;
      color:#c000c;
      margin-left: 20px;
      
    
    }
    
    &>span{
      font-weight:400;
      font-size:20px;
      color:#ccc;
      margin-left: 20px;
      
    }
  }
  @media (max-width: 700px) {
    position:absolute;
    opacity:1;
    z-index:999;
    .profilePic{
      display:none;
    }
 .authorInfo{
  position:relative;
  bottom: -3rem;
  color:white;
  text-align:left;
  
  p{
    color:white;
    opacity:1;
  }
  span{
    color:white;
  }
 }
}
  
  
  `