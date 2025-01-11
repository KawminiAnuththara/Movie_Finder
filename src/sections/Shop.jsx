import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import useMeasure from 'react-use-measure'; // Corrected hook name
import { motion } from 'framer-motion';

import film1 from '../assets/film1.jpg';
import film2 from '../assets/film2.jpg';
import film3 from '../assets/film3.jpg';
import film4 from '../assets/film4.jpg';
import film5 from '../assets/film5.jpg';
import film6 from '../assets/film6.jpg';
import film7 from '../assets/film7.jpg';
import film8 from '../assets/film8.jpg';
import film9 from '../assets/film9.jpg';

import ScrollTriggermeth from '../components/ScrollTriggermeth.jsx'; 

const Section = styled.section`
  min-height: 100vh;
  height: auto;
  width: 100vw;
  margin: 0 auto;
  overflow: hidden;
  top: 30px;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  position: relative;
`;

const Title = styled.h1`
  font-size: ${props => props.theme.fontxxxl};
  font-family: 'Bebas';
  font-weight: 300;
  text-shadow: 1px 1px 1px ${props => props.theme.body};
  color: ${props => props.theme.text};
  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 11;
`;

const Left = styled.div`
  width: 35%;
  background-color: ${props => props.theme.body};
  color: ${props => props.theme.text};
  min-height: 100vh;
  z-index: 5;
  position: fixed;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;
   text-align:center;

  p {
    font-size: ${props => props.theme.fontlg};
    font-weight: 300;
    width: 80%;
    margin: 0 auto;
    margin-top: 20%;
  }
`;

const Right = styled(motion.div)`
  position: absolute;
  left: 35%;
  padding-left: 30%;
  min-height: 100vh;

  background-color: ${props => props.theme.grey};
  width: 65%;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  h1 {
    width: 5rem;
    margin: 0 2rem;
  }

  .imagelist {
    position: absolute;
    left: 0;
    display: flex;
    gap: 4px;
  }
`;

const Films = [
  film1,
  film2,
  film3,
  film4,
  film5,
  film6,
  film7,
  film8,
  film9
];

const Shop = () => {
  const [ref, { width }] = useMeasure(); // Corrected hook usage
  const imagelistRef = useRef(null); // Ref for the image list

  useEffect(() => {
    if (width && imagelistRef.current) {
      const finalPosition = -width / 2 - 10;
      gsap.to(imagelistRef.current, {
        x: finalPosition,
        duration: 25,
        repeat: -1, // Infinite loop
        ease: 'linear'
      });
    }
  }, [width]);

  return (
    <Section id="shop">
      <Title data-scroll data-scroll-speed="-1">New Released</Title>
      <Left>
        <p>
          At MovieQ, we're thrilled to announce the release of our latest feature: "Trending Now."
          This new addition brings you the hottest and most talked-about movies, updated daily,
          so you’re always in the loop.
          <br /><br />
          Dive into detailed reviews, trailers, and behind-the-scenes insights for these blockbuster hits.
          With a seamless user experience and integration with top streaming platforms, finding your next
          favorite film has never been easier. Explore the magic of cinema with MovieQ today!
        </p>
      </Left>
      <Right ref={ref}>
        <div className="imagelist" ref={imagelistRef}>
          {[...Films, ...Films].map((item, idx) => (
            <ScrollTriggermeth image={item} key={idx} />
          ))}
        </div>
      </Right>
    </Section>
  );
};

export default Shop;
