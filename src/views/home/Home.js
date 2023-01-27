import { Divider } from '@mui/material';
import React from 'react';
import bgVideo from '../../assets/video/bgv2.mp4'
import SVideo from '../../assets/video/succs.mp4'
import Svenn from '../../assets/video/svenn.mp4'
import Avatar1 from '../../assets/images/avator1.jpg';
import avator from '../../assets/images/avator2.jpg';
import Testimonial from '../../components/sections/testimonial/Testimonial';
import VTestimonial from '../../components/sections/testimonial/vTestimonial';
import {
    Banner,
    Video,
    VidCover,
    Overlay,
    TContainer,
    StepperContainer,
    ProsContainer

} from './home.style';
import Footer from '../../components/layout/footer/footer';
import Success from '../../components/sections/success/succes';
import TitleContainer from '../../components/layout/partials/titleContainer';
import GridContainer from '../../components/layout/partials/gridContainer';
import CustomListContainer from '../../components/layout/partials/customList';
import CustomListNumber from '../../components/layout/partials/customListNumber';
import VerticalLinearStepper from '../../components/layout/partials/customStepper';
import CustomStepper from '../../components/layout/partials/customStepper';
import { Link } from 'react-router-dom';
import TeamModel from '../../components/layout/partials/teamModelContainer';

const Home = ()=>{


    const vtestimonials=[
        {
          id:1,
          text:'"We needed skilled staff and no downtime,which is what they\'ve delivered. Reveal software\'s with new ideas, and flexibility which is foreseen to collaboration."',
          author:'Paul',
          videoUrl:bgVideo,
          avatorUrl:avator,
          pTitle:"CEO at Google"
        },
        {
          id:2,
          text:'We needed skilled staff and no downtime,which is what they\'ve delivered. Reveal software\'s with new ideas, and flexibility which is foreseen to collaboration."',
          author:'Abel',
          videoUrl:bgVideo,
          avatorUrl:avator,
          pTitle:"CEO at Google"
        }
        ,  {
          id:3,
          text:'If you are looking for a rare book, you need to check out Parchment Bound Books on Main Street. I was looking for a first edition for my dad\'s birthday and I had almost given up. I went in just to see what they had and they were the friendliest people! They helped me find the perfect book for him and even offered a layaway. They have a huge selection of new, used and collectible books and their cappuccinos are to die for."',
          author:'Mark',
          videoUrl:bgVideo,
          avatorUrl:avator,
          pTitle:"CEO at Google"
        }
      ];

      const testimonials=[
        {
          id:1,
          text:'"We needed skilled staff and no downtime,which is what they\'ve delivered. Reveal software\'s with new ideas, and flexibility which is foreseen to collaboration."',
          author:'Paul',
          avatorUrl:avator,
          pTitle:"CEO at Google"
        },
        {
            id:2,
            text:'"We needed skilled staff and no downtime,which is what they\'ve delivered. Reveal software\'s with new ideas, and flexibility which is foreseen to collaboration."',
            author:'Kenedy',
            avatorUrl:avator,
            pTitle:"CEO at Google"
          },
        {
          id:3,
          text:'We needed skilled staff and no downtime,which is what they\'ve delivered. Reveal software\'s with new ideas, and flexibility which is foreseen to collaboration."',
          author:'Abel',
          avatorUrl:avator,
          pTitle:"CEO at Google"
        }
        ,  {
          id:4,
          text:'We needed skilled staff and no downtime,which is what they\'ve delivered. Reveal software\'s with new ideas, and flexibility which is foreseen to collaboration."',
          author:'Mark',
          avatorUrl:avator,
          pTitle:"CEO at Google"
        }
      ];

      const succes=[

        {
          id:1,
          title:"Norwegian",
          msg:"Helping Norway's largest airline migrate native iOS & Android apps to the React Native platform",
          serviceType:"Transportation",
          country:"Norway",
          vUrl:SVideo
        },

        {
          id:2,
          title:"Svenn",
          msg:"Reducing paperwork for construction companies",
          serviceType:"Construction",
          country:"Norway",
          vUrl:Svenn
        },
        {
          id:3,
          title:"Kaizo",
          msg:"Gamifying customer support with a Zendesk app",
          serviceType:"Management",
          country:"The Netherlands",
          vUrl:Svenn
        }
      ]

      //why we differ?
      const ourUniqueness=[
        {
          id:1,
          titl:"Boost your development capacity with quality talent",
          description:"Quickly hire senior developers with advanced degrees and solid experience in your domain. Our dedicated development team for hire doesn’t just receive tasks and write code; they think in terms of value, solutions, and solving real problems",
          
        },
        {
          id:2,
          titl:"Get access to a large tech talent pool",
          description:"Ukraine is one of the largest tech talent pools in the world with 200k+ engineers and ranks 5th among top IT service exporters, according to PwC. According to Gartner, it is also in the top 10 emerging market locations for offshore services.",
          
        },
        {
          id:3,
          titl:"Reduce time spent on recruitment",
          description:"The average time-to-hire for a software developer is 1.5 months. We can provide you with our staff, who will be ready to start work within one week. We also take care of recruitment and handpick developers according to your requirements.",
          
        },
        {
          id:4,
          titl:"Reduce expenses",
          description:"Outsourcing to us saves you from paying for offices, workspaces, equipment, coffee, etc. Also, the hourly rates of developers in Ukraine are significantly lower than those in the US and Europe.",
          
        },
        {
          id:5,
          titl:"Be flexible with a team size",
          description:"You can scale up and down your team size with a notice period of 1 month without worrying about the hiring process. Moreover, you can request part-time employees to do a specific task in technology outside your tech stack.",
          
        },
        {
          id:6,
          titl:"Get dedicated full-time engineers",
          description:"The engineers provided to you work full-time solely on your projects. They are dedicated to your product and are interested in success. They become a true part of your team.",
          
        }
      ]

      const projectSetup=[
        {
          label:1,
          title:"Gathering requirements",
          desc:"We start by hearing out your needs, which include a project description, job descriptions, team size, and desired workflow to assemble the right specialists for your project."
        },
        {
          label:2,
          title:"Assembling the team",
          desc:"If we have unoccupied specialists in-house, you can start work immediately. If we don’t have the desired talent, we do additional hires that can take around 1 month. Or if you need experts fast, we have access to a talent pool of our partners that allows us to provide any remote dedicated development team in Ukraine in under a week."
        },
        {
          label:3,
          title:"Talent selection",
          desc:"Our HR team assesses candidates to learn their background, tech skills, English level, and soft skills and then selects a best-fit candidate for a final interview with you."
        },
        {
          label:4,
          title:"Integrating the team",
          desc:"Based on years of practice, we smoothly and painlessly integrate our team into your ongoing project. You can choose the preferred management approach and tools. It is recommended that you meet with a team in-person by getting them to your office or by taking a trip to us."
        },
        {
          label:5,
          title:"The result",
          desc:"Hiring a dedicated software development team in Ukraine provides you with needed specialists under your complete control, just as with your in-house team. The only difference is the team works remotely and we handle all the administration."
        }
      ]

      const pros=[
        {
          id:1,
          ttl:"A cost-efficient alternative",
          desc:"Numbers vary, but the average in-house rate is $70/hour while the average outsourced dedicated development team rate is $35/hour. You may find an outsourcing vendor that isn’t that much cheaper to work with, but they are sure to offer the efficiency you could never reach with your in-house team."
        },
        {
          id:2,
          ttl:"Transparent management and communication",
          desc:"Once again, the outsource dedicated software development team is like an in-house team that works in a separate office. You’re managing them directly, and which includes a lot of daily communication. Plus, you always know what your team is doing and where they are on the progress scale at the moment."
        },
        {
          id:3,
          ttl:"No-fuss hiring",
          desc:"When you hire a dedicated development team, you'll get the skills or talents that would have been hard to find otherwise. The vendor usually has a pool of professionals you can handpick candidates that fit your company principles best."
        },
        {
          id:4,
          ttl:"A committed team that adopts your culture",
          desc:"It’s important for a new employee to understand your mission and help push the company toward the joint goal. You’d like to expect the same from your outsourcing partner, and a dedicated development team is most likely to adopt your culture and cheer for your company."
        },
      ]
    return (
    
        
        
        <Banner>
            <Video src={bgVideo} autoPlay muted loop />
            
     <VidCover/>
          <Overlay>
            <h5>Dedicated Software Development Team</h5>
            <h1>Hire dedicated development team that fits your needs at scale</h1>
            <p>Alleviate the pressure of a backlog without hiring, training, and maintaining long-term salaries. Hire a dedicated software development team of hand-selected engineers.</p>
            <div style={{ height: 20 }}></div>
            <button>Contact Us</button>
        </Overlay>
            <TitleContainer tType="client">
            
              <h1 style={{textAlign:"center", fontSize:34, fontWeight:600}}>Client testimonials </h1>
            
              </TitleContainer> 
            <TContainer>
                <VTestimonial vtestimonials={vtestimonials} />

                 {  
                  //  <Testimonial testimonials={testimonials} />
                  }
                 <Link to="#" className='newBtn'>GET A QUOTE FOR YOUR PROJECT</Link>

                 </TContainer> 

           <TitleContainer tType="howwediffer">
                  <h1>How We Differ</h1>
           </TitleContainer>
           <GridContainer rws={2} cols={3}>
           {ourUniqueness.map((ourUnq) => (
                  <CustomListContainer key={ourUnq.id}>
                      <CustomListNumber>{ourUnq.id<10?"0" + ourUnq.id:ourUnq.id}</CustomListNumber>
                      <h3>
                        {ourUnq.titl}
                      </h3>
                      <p>
                      {ourUnq.description}
                      </p>
                  </CustomListContainer>
           ))
           }
           </GridContainer>
           <div>
           <TitleContainer>
           <h6>The dedicated development team model is best suited for</h6>
       </TitleContainer>
       <TeamModel/>
       <br/>
       <br/>
       <br/>
       </div>
          <ProsContainer>

             <TitleContainer tType="pros">
                      <h2>Pros of the Dedicated Development Team Model</h2>
              </TitleContainer>
              <GridContainer rws={2} cols={2}>
              {pros.map((p) => (
                      <CustomListContainer key={p.id}>
                          
                          <h3>
                            {p.ttl}
                          </h3>
                          <p>
                          {p.desc}
                          </p>
                      </CustomListContainer>
              ))
              }
              </GridContainer>
          </ProsContainer>

           <TitleContainer tType="setup">
           <h3>Dedicated software development team set-up process</h3>
        </TitleContainer>

          <StepperContainer>
            <CustomStepper projectSetup={projectSetup}/>
          </StepperContainer>
     
            <Success succes={succes}/>

        </Banner>
   
        
    )
};

export default Home;