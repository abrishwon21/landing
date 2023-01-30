import Reviews from '../../components/layout/partials/reviews';
import { FormControl } from '@mui/material'
import React from 'react'
import ContactInputForm from '../../components/layout/partials/contactForm'
import GridContainer from '../../components/layout/partials/gridContainer';
import TitleContainer from '../../components/layout/partials/titleContainer';
import {
  ContactContainer,
  ContactWrapper,
  InnerContactForm,
  ContactForm,
  ContactInfo,
  InfoTitle,
  ContactInfoCard,
  InfoRow1,
  InfoRow2,
  InfoItemCard,
  InfoNum,
  TitleCard,
  GridCard
} from './contact.style'
function Contact() {
  return (
    <ContactContainer>
        <ContactWrapper>
            <InnerContactForm>
                <ContactForm>
   
                <TitleCard>
                    Contact us to build
                    the right product
                      with the right team
                </TitleCard>
                   <ContactInputForm/>
                </ContactForm>
                <ContactInfo>
                  <InfoTitle>
                    Top-rated software development company
                  </InfoTitle>
                  <ContactInfoCard>
                  <InfoRow1>
                  
                  <GridCard>
                       
                      <InfoItemCard>
                       <InfoNum>200+</InfoNum>
                       <p>products delivered remotely</p>
                     </InfoItemCard>

                   <InfoItemCard>
                     <InfoNum>92%</InfoNum>
                     <p>of senior and middle engineers</p>
                 </InfoItemCard>

                 <InfoItemCard>
                   <InfoNum>20%</InfoNum>
                   <p>employee turnover rate</p>
                 </InfoItemCard>
                 <InfoItemCard>
                     <InfoNum>9/10</InfoNum>
                     <p>customer satisfaction score</p>
               </InfoItemCard>
                       
                       </GridCard>
                           

                   </InfoRow1>
                          <Reviews/>
                     <InfoRow2>


                  </InfoRow2>
                  </ContactInfoCard>
                </ContactInfo>
            </InnerContactForm>
        </ContactWrapper>
    </ContactContainer>
  )
}

export default Contact