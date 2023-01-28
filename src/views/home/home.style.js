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
    font-size: 28px;
    line-height: 1.14286;
    margin-top: 0;
    margin-bottom: 24px;
}
&>h1{
    font-size: 48px;
    line-height: 1;
    margin-top: 0;
}

&>p{
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}


&>button{
    margin-top: 32px;
     position: relative;
    text-align: center;
    cursor: pointer;
    transition: all .3s;

    align-items: center;
     padding: 10px 20px;
     border-radius: 10px;
     border:none;
    &:hover{
        background-color:#49464A;
        color:#ffffff;
        font-weight:300;
    }


}

@media (max-width: 700px) {
    width:80%;
    padding: 0 17.5px;
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
    margin-top: 16px;
 
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