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
    color: #000;
    text-decoration: none;
    font-size: 18px;
    font-weight: 500;
    padding-top: 15px;
    display: inline-block;
    .arw{
        margin-left: 10px;
        font-size: 14px;
        color: #000;
        line-height: 18px;
    }
}
&>h2{
    font-size: 20px;
    font-weight: 400;
    letter-spacing: -.44px;
    color: #000;
    margin: 0 0 15px;
    white-space: nowrap;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    width: 95%;
    margin-bottom:1rem;
}
&>p{
    font-size: 26px;
    font-weight: lighter;
    line-height: 32px;
    margin-bottom: 20px;
    margin-top: 0;
    max-width: 486px;
    letter-spacing: -.5px;
    display: block;
}

&>span{
    font-size: 18px;
    line-height: 24px;
    color: rgba(0,0,0,.4);
    font-weight: 400;
    width: 100%;
    margin-bottom: 15px;

    &>h4{
        line-height: 18px;
        width: 100%;
    }
}

@media(max-width:700px){
    width:90%;
    padding:0;
    margin-left:0;
    align-items:center;
}

`

export const VideoCard=styled.img`
width:40%;
min-height: 30vh;
border:none;
background:none;
background-image: none;
@media(max-width:700px){
    width:80%;
    padding:0;
    order: -1;
    }
`