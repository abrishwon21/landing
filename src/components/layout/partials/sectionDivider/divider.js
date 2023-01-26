import React from 'react'
import styled from 'styled-components'

export const Div1=styled.div`
width:100%;
margin-top:20px;
height:20vh;
background-color:red;

box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
`
const Divider = ({title}) => {
  return (
    <Div1>
    hjj
        <h3>{title}</h3>
    </Div1>
  )
}

export default Divider;