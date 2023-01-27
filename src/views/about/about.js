
import React from 'react';

import AboutBannerImgUrl from '../../assets/images/abtBg.jpg';
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
    AboutBannerImgUrl,
    AboutBannerImgUrl,
    AboutBannerImgUrl,
    AboutBannerImgUrl,
    AboutBannerImgUrl,
  ];

  return (
    <AboutUsContainer>
      
      <BannerContainer  bgImg={AboutBannerImgUrl}>
        <BannerTitle>Welcome to Reveal Software</BannerTitle>
      </BannerContainer>
      <AboutUsTitle>Reveal Software</AboutUsTitle>
      <AboutUsText>
        Reveal Software is a software development company based in Addis Abeba, Ethiopia. We provide companies with senior tech talent and product development expertise to build world-class software.
      </AboutUsText>
      <AboutUsLink to="/services">Learn more about our services</AboutUsLink>

      <TitleContainer tType="teams">
          <h2>Our Dedicated Teams</h2>
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
