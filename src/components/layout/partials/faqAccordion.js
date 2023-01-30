import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import styled,{css} from 'styled-components'
import { style } from '@mui/system';

export default function CostumFAQAccordion({faqs}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const Acotntainer=styled.div`
  width:80%;
  
  margin: 1rem auto;
 


.acc{
    box-shadow: 0px 2px 20px rgb(0 0 0 / 8%);
    border-radius: 5px;
    background-color: #fff;
    padding: 32px 24px;
    margin-bottom: 24px;


  }
  .titl{
    ${props=>props.expanded && css`
    color:lightblue;
    `}
    &:hover{
      color:lightblue;
    }
  }
  .details{
    transition: all .3s;
    &>Typography{
      display:none;
    }
  }
  `
  return (
<div>
{
    faqs.map((fq)=>(

        <Acotntainer  key={fq.id} >

        <Accordion classame='acc' expanded={expanded === "panel"+fq.id} onChange={handleChange('panel'+fq.id)}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`"panel+${fq.id}+bh-content"`}
            id={`"panel+${fq.id}+bh-header"`}
  
          >
            <Typography sx={{ width: '60%', flexShrink: 0 }} className='titl'>
             <span 
              style={
                {
                  fontSize: "18px",
                  lineHeight: 1,
                  position: "relative",
                  cursor: "pointer",
                 
                }
              }
             >{fq.title}</span>
            </Typography>
           { 
              // <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography>
          }
          </AccordionSummary>
          <AccordionDetails className='details'>
            <Typography>
              <span style={
                {
                  marginBottom: "26px",
                  marginTop: 0,
                  margin: "0 0 12.5px",
                  display: "block",
                  marginBlockStart: "1em",
                  marginBlockEnd: "1em",
                  marginInlineStart: 0,
                  marginInlineEnd: 0,
                }
              }>
                  {fq.description}
              </span>
  
            </Typography>
          </AccordionDetails>
        </Accordion>
     
      </Acotntainer>
    ))}


</div>
           
      

  );
}