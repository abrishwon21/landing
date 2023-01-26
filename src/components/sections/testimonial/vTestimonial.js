import React, { useState } from 'react'

import {
  TestimonialWrapper,
  VideoTestimonialWrapper,
TestimonialContainer,
TestimonialSlide,
TestimonialAuthor,
TestimonialButtonContainer,
TestimonialButtonNMsgContainer,
TestimonialButton,
Profile,
PlayButton
} from './vTestimonial.style'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Avatars from '../../layout/partials/avator';


const VTestimonial = ({vtestimonials}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [firstIndex, setFirstIndex] = useState(0)
  const [lastIndex, setLastIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const handlePrevClick = () => {
    if (currentIndex === 0) {
      setCurrentIndex(vtestimonials.length - 1)
      setFirstIndex(0);
    } else {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const handleNextClick = () => {
    if (currentIndex === vtestimonials.length - 1) {
      setCurrentIndex(0)
      setLastIndex(vtestimonials.length-1);
    } else {
      setCurrentIndex(currentIndex + 1)

    }
  }
const Player=()=>{
setIsPlaying(!isPlaying)
}
  return (
    

    <TestimonialContainer>





      {vtestimonials.map((testimonial, index) => (

      <VideoTestimonialWrapper   key={testimonial.id} active={index === currentIndex}>
     
        <TestimonialButtonNMsgContainer className='mbtn'>
    
        <TestimonialButtonContainer>
        <TestimonialButton onClick={handlePrevClick} inactive={currentIndex === firstIndex}><ArrowBackIosIcon/></TestimonialButton>
        <TestimonialButton onClick={handleNextClick} inactive={currentIndex === lastIndex}><ArrowForwardIosIcon/></TestimonialButton>

      </TestimonialButtonContainer>
        <div className='msg'>
        <p>{testimonial.text}</p>
        </div>
      

          <Profile classsName="profile">
                  <div className='profilePic'>
                     <Avatars url={testimonial.avator}/>
                  </div>
                  <div className='authorInfo'>
                  <p>{testimonial.author}</p>
                     <span>{testimonial.pTitle}</span>
                  </div>
              </Profile>

            


      

        </TestimonialButtonNMsgContainer>
     

        <TestimonialSlide classsName="video">
            <video src={testimonial.videoUrl} autoPlay/>
             <PlayButton onClick={Player}>
                  <PlayArrowIcon className='playArrow'/>
             </PlayButton>
        </TestimonialSlide>

      
        </VideoTestimonialWrapper>
  
        
       

      ))}


    </TestimonialContainer>
  )
}

export default VTestimonial;