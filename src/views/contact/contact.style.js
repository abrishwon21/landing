import styled from 'styled-components';

export const ContactContainer=styled.div`
    -webkit-box-shadow: 0px 2px 20px rgb(0 0 0 / 15%);
    box-shadow: 0px 2px 20px rgb(0 0 0 / 15%);
    border-radius: 5px;
    overflow: hidden;
    background-color: #fff;
    padding: 0 0 80px;
    position: relative;
    display:block;

    #footer_contact {
        padding-top: 44px;
        margin-top: -44px;
    }
`

export const ContactWrapper=styled.div`
box-sizing: border-box;
max-width: 1120px;
margin: 0 auto;
display: block;

@media only screen and (max-width: 767px){
    padding: 0 17.5px;
}
`
export const InnerContactForm=styled.div`
    background: #fff;
    box-shadow: 0px 2px 20px rgb(0 0 0 / 15%);
    border-radius: 5px;
    overflow: hidden;

     display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-flow: row wrap;
    flex-flow: row wrap;

    font-size: 18px;
    font-weight: 400;

    @media only screen and (max-width: 769px) {
    display: block;
}
` 

export const ContactForm=styled.div`
    padding: 40px 48px 54px;
    width: 50%;
    left: 0;

    display: block;
    -webkit-box-direction: normal;
    font-size: 18px;
    font-weight: 400;

    @media only screen and (max-width: 769px){
    width: 100%;
    padding: 40px 56px;
}
`

export const ContactInfo = styled.div`
background: #f5f5f5;
padding: 49px 60px;
width: 50%;
display: block;
font-size: 18px;
font-weight: 400;


@media(max-width: 940px){
    display: none;
}
`
export const InfoTitle=styled.div`

font-size: 20px;
line-height: 1.4;
margin-bottom: 35px;
color: #333;
font-weight: 300;
display: block;

`
export const TitleCard=styled.div`
    font-size: 32px;
    line-height: 1.25;
    letter-spacing: -.7px;
    margin: 0;
    margin-bottom: 14px;
    max-width: 100%;
`
export const ContactInfoCard=styled.div`
display:block;

`
export const GridCard=styled.div`

display:grid;
grid-template-columns: repeat(2,1fr);
grid-template-rows:repeat(2,1fr);


`

export const InfoRow1=styled.div`
    
    display: block;
    -webkit-box-direction: normal;

    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    margin-bottom: 20px;
   
`

export const InfoItemCard=styled.div`
    display: block;
    margin-right: 50px;
    width: calc(50% - 25px);
    max-width: 190px;
    margin-bottom: 56px;
    padding-bottom: 20px;
    position: relative;

 &>p{
    margin-top: 16px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 1.28571;
    color: rgba(0,0,0,.5);
    margin: 0 0 12.5px;
 }

    &::before {
        content: "";
        display: block;
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 1px;
        background: -webkit-gradient(linear,left top,right top,from(#273cd8),color-stop(48.83%,#2cc1d1));
        background: -o-linear-gradient(left,#273cd8 0%,#2cc1d1 48.83%);
        background: linear-gradient(90deg,#273cd8 0%,#2cc1d1 48.83%);
    }
`
export const InfoNum=styled.div`
    font-size: 30px;
    line-height: 1;
    color: rgba(0,0,0,.7);
    display:block;
    font-weight: 400;
`
export const InfoRow2=styled.div`
    display: block;
`