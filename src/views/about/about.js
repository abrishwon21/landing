
import React from 'react';

import AboutBannerImgUrl from '../../assets/images/abtBg.jpg';
import Team1 from '../../assets/images/avator1.jpg';
import Team2 from '../../assets/images/avator2.jpg';

import TitleContainer from '../../components/layout/partials/titleContainer';
import {
  AboutUsContainer,
AboutUsTitle,
AboutUsText,
AboutUsLink,
BannerContainer,
BannerTitle,
PortfolioContainer,
PortfolioItem
} from './about.style';
const About = () => {

  const dummyImages = [
    AboutBannerImgUrl,
    Team1,
    Team2,
    AboutBannerImgUrl,
    AboutBannerImgUrl,
    AboutBannerImgUrl,
  ];

  return (
    <AboutUsContainer>
      
      <BannerContainer  bgImg={AboutBannerImgUrl}>
        <BannerTitle>We are Reveal Software Solution Team</BannerTitle>
      </BannerContainer>
      <AboutUsTitle>Reveal Software</AboutUsTitle>
      <AboutUsText>
        Reveal Software is a software development company based in Addis Abeba, Ethiopia. We provide companies with senior tech talent and product development expertise to build world-class software.
      </AboutUsText>
    

      <TitleContainer tType="teams">
          <h5>Our Dedicated Teams</h5>
      </TitleContainer>
     <PortfolioContainer>
      {dummyImages.map((img, index) => (
        <PortfolioItem key={index} img={img} />
      ))}
    </PortfolioContainer>
    </AboutUsContainer>
  );
};

export default About;
