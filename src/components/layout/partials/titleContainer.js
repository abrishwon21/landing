import styled from '@emotion/styled';
import React from 'react'
const TtlContainer=styled.div`
width:100%;

margin-top: 2rem;
margin-bottom:2rem;
text-align:center;
color:#767676;
font-size:20px;
font-weight:300;
`
function TitleContainer({children}) {
  return (
    <TtlContainer>
    {children}
    </TtlContainer>
  )
}

export default TitleContainer;