
import styled, { css } from 'styled-components';




export const TestimonialContainer = styled.div`
width: 100%;
overflow: hidden;
display:flex;
justify-content:space-between;
align-items:center;

margin-top: 5rem;
@media (max-width: 700px) {
  align-items:flex-start;
  
}

`




export const Testimony = styled.div`
width: 100%;
overflow: hidden;

display:none;

${props => props.active && css`
display:flex;
align-items:flex-start;
justify-content:space-between;
flex-direction:column;



@media (max-width: 700px) {
    flex-direction:column;
    
}
` }

`


export const Profile=styled.div`
width:50%;
display:flex;
align-items:center;
justify-content:flex-start;


&>div{
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
  flex-direction:column;
  align-items:flex-start;
  &>div{
    &>p{
      font-weight:300;
      font-size:14px;
      color:#c000c;
      margin-left:-20px;
      
    
    }
    
    &>span{
      font-weight:300;
      font-size:14px;
      color:#ccc;
      margin-left:-20px;
     
    }
  }
}

`

export const Message=styled.div`
@media (max-width: 700px) {
  width:100%;
  height:70%;
  
}
`


export const TestimonialWrapper = styled.div`
width: 50%;


`

export const TestimonialSlide = styled.div`

margin-right:10px;
box-sizing: border-box;
border:none;

width:50%;
padding: 10px;

&>video{
    height:90%;
    width:90%;
    // box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
    box-shadow: rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px, rgba(240, 46, 170, 0.2) 15px 15px, rgba(240, 46, 170, 0.1) 20px 20px, rgba(240, 46, 170, 0.05) 25px 25px;
  
}

`


export const TestimonialAuthor = styled.p`
font-size: 18px;
font-weight: bold;
margin-top: 10px;
`



export const TestimonialButtonContainer = styled.div`

display: flex;
justify-content: flex-start;
align-items:center;
top:0;
position:relative;

`
export const TestimonialButtonNMsgContainer = styled.div`
text-align: center;
align-items:center;
left:5%;
display: flex;
justify-content: flex-start;
flex-direction: column;
width:45%;


`


export const TestimonialButton = styled.button
 ` padding: 10px 10px;
 border-radius:50%;
 margin: 2rem;
  background-color: #ccc;
  color: black;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #cdcdcd;
  }

  `

