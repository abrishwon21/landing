import styled from "styled-components";
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

@media (max-width: 700px) {
    height:66vh;
  }
`
export const Video=styled.video`
width:100%;
height:100%;
object-fit:cover;
top:50px;
`
export const VidCover=styled.div`
position:absolute;
top:80px;
height:100vh;
width:100%;
margin:0;
background-color: #D8DCDD;
opacity:0.6;
z-index:1;
@media (max-width: 700px) {
    height:60vh;
    top:110px;
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

 max-width: 460px;
    
    

&>h5{
    font-size:22px;
    font-weight:500;
    opacity:1;
}
&>h1{
    font-size:48px;
    font-weight:600;
    opacity:10;
}

&>p{
    font-size:18px;
    font-weight:400;
 
}
&>div{
    height:40px;
    
}

&>button{
    font-size:22px;
    font-weight:500;
    padding:10px;
    width:150px;
    border-radius:20px;
    border:none;
    cursor:pointer;
    &:hover{
        background-color:#49464A;
        color:#ffffff;
        font-weight:300;
    }


}

@media (max-width: 700px) {
    top: 80px;
    width:80%;
    justify-content:flex-start;
    z-index:10;
&>h5{
    font-size:16px;
    font-weight:400;
    
}
&>h1{
    font-size:28px;
    font-weight:500;
    opacity:10;
}

&>p{
    font-size:14px;
    font-weight:400;
 
}


&>button{
    font-size:16px;
    font-weight:300;
    padding:10px;
   
   
   


}
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