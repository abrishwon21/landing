import React from 'react'
import styled from 'styled-components'

function CustomListContainer({children}) {

    const ListContainer=styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:flex-start;

    &>h3{
        margin-top: 0;
        margin-bottom: 0;
        font-weight: 500;
        font-size: 20px;
        line-height: 1.4;
        font-family:font-family: 'Roboto', sans-serif;
    }

    &>p{
        margin-bottom: 0;
        margin-top: 11px;
        color: #3f3f3f;
        font-size: 14px;
        line-height: 1.49;
        letter-spacing: -.1px;
    }
    `
  return (
    <ListContainer>{children}</ListContainer>
  )
}

export default CustomListContainer