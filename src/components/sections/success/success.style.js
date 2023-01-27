import styled from "styled-components";
export const Wrapper=styled.div`
width:100%;
margin-top: 10rem;
padding:0;

`
export const TextCard=styled.div`
width:40%;
min-height: 30vh;
display:flex;
flex-direction:column;
justify-content:flex-start;
padding-left:1.5rem;
.link{
    font-size:24px;
    font-weight:400;
    opacity:0.7;
    text-decoration:none;
    display:flex;
    align-items:center;
    .arw{
       font-size:14px;
       text-align:center;
       padding:2px 4px;
    }
}
&>h2{
    font-size:20px;
    font-weight:500;
    opacity:1;
}
&>p{
    font-size:40px;
    font-weight:400;
    opacity:0.8;
}

&>span{
    &>h3{
        font-size:20px;
        font-weight:400;
        opacity:0.5;
    }
    &>h4{
        font-size:18px;
        font-weight:400;
        opacity:0.5;
    }
}

@media(max-width:700px){
width:80%;
padding:0;
}

`

export const VideoCard=styled.video`
width:40%;
min-height: 30vh;
@media(max-width:700px){
    width:80%;
    padding:0;
    order: -1;
    }
`