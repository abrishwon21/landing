import React from 'react'
import styled from 'styled-components'

function CustomStepper({projectSetup}) {
    const StepContainer=styled.div`
            position: relative;
            padding-left: 90px;
            margin-bottom: 56px;
            display:flex;
            align-items:flex-start;
            
    `
 const Numb=styled.div`
 display: block;
 font-weight: bold;
 font-size: 14px;
 color: #fff;
 position: absolute;
 width: 36px;
 height: 36px;
 text-align: center;
 line-height: 28px;
 left: 6px;
 top: 14px;
 border-radius: 50%;
 background-color: #3c4fdb;
 border: 4px solid #a0a9ee;
 -webkit-box-shadow: 0 0 0 6px #e2e5fa;
 box-shadow: 0 0 0 6px #e2e5fa;

 &::after{
    width: 1px;
    
    height: 10vh;
    content:"";
    position:absolute;
    background-color:blue;
    margin-top:60px;
    margin-bottom:60px;
    margin-left:-2px;
 }
 `
 const Desc=styled.div`
 max-width: 812px;
 display:block;
 &>h3{
    font-size: 28px;
    line-height: 1;
    margin-top: 0;
    margin-bottom: 0;
    font-weight: 500;
 }

 &>p{
    font-size: 20px;
    line-height: 1.4;
    margin-top: 16px;
    color: #303134;
    font-weight: 300;
    margin: 0 0 12.5px;
 }
 `
  return (
    <div>
    
    {projectSetup.map((ps) => (   
        
        <StepContainer key={ps.label}>
            <Numb>{ps.label}</Numb>
            <Desc>
                <h3>{ps.title}</h3>
                <p>{ps.desc}</p>
            </Desc>
        </StepContainer>
        ))
        }
    </div>
    
  )
}

export default CustomStepper