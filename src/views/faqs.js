import React from 'react'
import styled from 'styled-components'
import CostumFAQAccordion from '../components/layout/partials/faqAccordion'

const FaQContainer=styled.div`
diplay:flex;
flex-direction:column;
align-items:center;

`

function FaQs() {
    const faqs=[
        {
            id:1,
            title:"What is the best place to hire dedicated software development team for my projects?",
            description:"To find a dedicated team that will help you carry out your tech project (or at least its tech part), go through:<br>Freelance platforms like Upwork <br/> B2B portals like Clutch <br/>GitHub or StackOverflow <br/> Outstaff vendors like Relevant"
        },
        {
            id:2,
            title:"What are the best countries to hire dedicated developers?",
            description:"To find a dedicated team that will help you carry out your tech project (or at least its tech part), go through:<br>Freelance platforms like Upwork <br/> B2B portals like Clutch <br/>GitHub or StackOverflow <br/> Outstaff vendors like Relevant"
        },
        {
            id:3,
            title:"Dedicated team vs. Time and Material model",
            description:"To find a dedicated team that will help you carry out your tech project (or at least its tech part), go through:<br>Freelance platforms like Upwork <br/> B2B portals like Clutch <br/>GitHub or StackOverflow <br/> Outstaff vendors like Relevant"
        },
        {
            id:4,
            title:"Dedicated team vs. Fixed price",
            desciption:"To find a dedicated team that will help you carry out your tech project (or at least its tech part), go through:<br>Freelance platforms like Upwork <br/> B2B portals like Clutch <br/>GitHub or StackOverflow <br/> Outstaff vendors like Relevant"
        },
        {
            id:5,
            title:"What are the legal aspects of hiring a dedicated team? What about intellectual property rights?",
            desciption:"To find a dedicated team that will help you carry out your tech project (or at least its tech part), go through:<br>Freelance platforms like Upwork <br/> B2B portals like Clutch <br/>GitHub or StackOverflow <br/> Outstaff vendors like Relevant"
        },
        {
            id:6,
            title:"What is the best place to hire dedicated software development team for my projects?",
            description:"To find a dedicated team that will help you carry out your tech project (or at least its tech part), go through:<br>Freelance platforms like Upwork <br/> B2B portals like Clutch <br/>GitHub or StackOverflow <br/> Outstaff vendors like Relevant"
        },
        {
            id:7,
            title:"What is the best place to hire dedicated software development team for my projects?",
            description:"To find a dedicated team that will help you carry out your tech project (or at least its tech part), go through:<br>Freelance platforms like Upwork <br/> B2B portals like Clutch <br/>GitHub or StackOverflow <br/> Outstaff vendors like Relevant"
        }
    ]
  return (

<FaQContainer>
        <CostumFAQAccordion faqs={faqs} />
</FaQContainer>

  )
}

export default FaQs