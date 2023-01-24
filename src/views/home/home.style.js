import styled from "styled-components";

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

export const Overlay = styled.div`

display:flex;
position:absolute;
width:50%;
height:100%;
left:5%;
justify-content:center;
align-items:flex-start;
top:100px;
flex-direction:column;
color:#ffffff;

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
    top: 120px;
    width:80%;
    justify-content:flex-start;
    z-index:0;
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