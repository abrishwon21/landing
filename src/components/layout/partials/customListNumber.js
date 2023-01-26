import React from 'react'
import styled from 'styled-components'

function CustomListNumber({children}) {
    const NumberContainer=styled.div`
    font-size: 18px;
    margin-bottom: 35px;
    position: relative;
    padding-left: 70px; 
    font-family:font-family: 'Roboto', sans-serif;
    font-weight:500;


    &::before {
        position:absolute;
        content:"";
        left: 0;
        height: 2px;
        width: 48px;
        margin-top:10px;
        
        background-image: linear-gradient(90deg, rgba(39,63,216, 0.9) 0%, rgba(44,193,209, 100%) 100%);
        
    }
    


    @media (max-width: 700px){
    margin-bottom: 18px;
}
    `
  return (
    <NumberContainer className='num'>{children}</NumberContainer>
  )
}

export default CustomListNumber