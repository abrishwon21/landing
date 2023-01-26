import React, { useState } from 'react'

import {
  TestimonialWrapper,
  Testimony,
TestimonialContainer,
Profile,
Message,

TestimonialButton
} from './Testimonial.style'

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import Avatars from '../../layout/partials/avator';
const Testimonial = ({testimonials}) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrevClick = () => {
    if (currentIndex === 0) {
      setCurrentIndex(testimonials.length - 2)
    } else {
      setCurrentIndex(currentIndex - 2)
    }
  }

  const handleNextClick = () => {
    if (currentIndex === testimonials.length - 2) {
      setCurrentIndex(0)
    } else {
      setCurrentIndex(currentIndex + 2)
    }
  }

  return (
    

    <TestimonialContainer>

    <TestimonialButton onClick={handlePrevClick}><ArrowBackIosIcon/></TestimonialButton>



      

      <TestimonialWrapper >
      {testimonials.map((testimonial, index) => (
          <Testimony key={testimonial.id} active={index === currentIndex} >
              <Profile>
                  <Avatars url={testimonial.avator} className="profilePic"/>
                  <div>
                     <p>{testimonial.author}</p>
                     <span>{testimonial.pTitle}</span>
                  </div>
              </Profile>
              <Message>
                      <p>{testimonial.text}</p>
              </Message>
          </Testimony>

   

      ))}
      </TestimonialWrapper>

      <TestimonialButton onClick={handleNextClick}><ArrowForwardIosIcon/></TestimonialButton>

    </TestimonialContainer>
  )
}

export default Testimonial;