import React from 'react'
import styled from 'styled-components'


function GridContainer({children,rws,cols}) {
const GridBox=styled.div`
display:grid;
grid-template-columns: repeat(${cols},1fr);
grid-template-rows:repeat(${rws},1fr);
margin-left:10%;
grid-gap: 30px;
@media (max-width:700px){
    grid-template-columns: repeat(1,1fr);   
}
`
  return (
    <GridBox>{children}</GridBox>
  )
}

export default GridContainer