import * as React from 'react';
import Box from '@mui/material/Box';
import styled from 'styled-components';

const BoxContainer=styled.div`
width:90%;
display:flex;
align-items:center;
margin:auto;
margin-top:20px;
padding:20px 10px;
justify-content:space-between;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
@media(max-width:700px){
    flex-direction:column;
    order:1;
    }
`
export default function SuccessContainer({children}) {
  return (
    <BoxContainer

    >
        {children}
    </BoxContainer>
  );
}