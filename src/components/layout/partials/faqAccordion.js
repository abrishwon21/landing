import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import styled from 'styled-components'

export default function CostumFAQAccordion({faqs}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const Acotntainer=styled.div`
  width:80%;
  
  margin: 1rem auto;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 8px 16px, rgba(0, 0, 0, 0.22) 0px 7px 6px;
  &:hover{
    color:lightblue;
  }
  `
  return (
<div>
{
    faqs.map((fq)=>(

        <Acotntainer  key={fq.id} >

        <Accordion expanded={expanded === "panel"+fq.id} onChange={handleChange('panel1')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`"panel+${fq.id}+bh-content"`}
            id={`"panel+${fq.id}+bh-header"`}
  
          >
            <Typography sx={{ width: '60%', flexShrink: 0 }}>
             {fq.title}
            </Typography>
           { 
              // <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography>
          }
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {fq.description}
  
            </Typography>
          </AccordionDetails>
        </Accordion>
     
      </Acotntainer>
    ))}


</div>
           
      

  );
}