import React from 'react';
import bgVideo from '../../assets/video/bgv2.mp4'
import Testimonial from '../../components/sections/testimonial/Testimonial';
import {
    Banner,
    Video,
    Overlay
} from './home.style';

const Home = ()=>{

    return (
    
    
        
        <Banner>
            <Video src={bgVideo} autoPlay muted loop />
            <Overlay>
                <h5>Dedicated Software Development Team</h5>
                <h1>Hire dedicated development team that fits your needs at scale</h1>
                <p>Alleviate the pressure of a backlog without hiring, training, and maintaining long-term salaries. Hire a dedicated software development team of hand-selected engineers.</p>
                <div style={{ height: 20 }}></div>
                <button>Contact Us</button>
            </Overlay>

            <Testimonial />
        </Banner>
        

      
    )
};

export default Home;