import React from 'react'

//icons
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import SuccessContainer from '../../layout/partials/SuccesContainer';

import {
TextCard,
VideoCard,
Wrapper
} from './service.style'
import { Link } from 'react-router-dom';
import TitleContainer from '../../layout/partials/titleContainer';
function Service({service}) {
  return (
    <Wrapper>
    <TitleContainer tType="sucs">
        <h2>Our Services</h2>
    </TitleContainer>
   

    {service.map((s) => (
        <SuccessContainer key={s.id}>
       <TextCard>
            <h2>{s.title}</h2>
            <p>{s.msg}</p>

            
       </TextCard>
        <VideoCard src={s.imgUrl}/>
        </SuccessContainer>
    ))
    }
    </Wrapper>
  )
}

export default Service;