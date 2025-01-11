import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
  min-height:100vh;
  width:80vw;
  margin:0 auto;

  display:flex;
  justify-content:center;
  align-items:center;

  position:relative;
`;

const Container =styled.div`
  min-height:100vh;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  
`;

const BannerComponent=styled.h1`
  font-size:${props=>props.theme.fontxxl};
  font-family:'Bebas';
  color:${props=>props.theme.text};
  white-space:nowrap;
  text-transform:uppercase;
  line-height:1;

  span{
      display:block;
      background-color:${props=>props.theme.body};
      padding:1rem 2rem;
  }
`;

const Banner = () => {
  return (
    <Section>
        <Container id="up">
            <BannerComponent>
                <span 
                data-scroll data-scroll-direction="horizontal"
                data-scroll-speed="8"
                data-scroll-target="#up"
                >Movies are a gateway </span>
            </BannerComponent>
            <BannerComponent>
                <span
                data-scroll data-scroll-direction="horizontal"
                data-scroll-speed="-6"
                data-scroll-target="#up"
                >to another world,  where </span>
            </BannerComponent>
            <BannerComponent>
                <span
                data-scroll data-scroll-direction="horizontal"
                data-scroll-speed="6"
                data-scroll-target="#up"
                >emotions, stories, and dreams </span>
            </BannerComponent>
            <BannerComponent>
                <span
                data-scroll data-scroll-direction="horizontal"
                data-scroll-speed="-6"
                data-scroll-target="#up"
                >come to life on screen.</span>
            </BannerComponent>
        </Container>
    </Section>
  )
}

export default Banner