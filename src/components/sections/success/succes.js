import React from 'react'

//icons
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import SuccessContainer from '../../layout/partials/SuccesContainer';

import {
TextCard,
VideoCard,
Wrapper
} from './success.style'
import { Link } from 'react-router-dom';
function Success({succes}) {
  return (
    <Wrapper>
    <h2>Success cases</h2>
    {succes.map((s) => (
        <SuccessContainer key={s.id}>
       <TextCard>
            <h2>{s.title}</h2>
            <p>{s.msg}</p>
            <span>
            <h3>{s.serviceType}</h3>
            <h4>{s.country}</h4>
            </span>
            <Link to="#" className='link'><p>View Case <ArrowForwardIosIcon className='arw'/></p> </Link>
       </TextCard>
        <VideoCard src={s.vUrl} autoPlay loop muted/>
        </SuccessContainer>
    ))
    }
    </Wrapper>
  )
}

export default Success;