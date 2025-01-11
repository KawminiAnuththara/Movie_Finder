import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

import new1 from '../assets/new1.jpg';
import new2 from '../assets/new2.jpg';
import new3 from '../assets/new3.jpg'; // Add more images
import new4 from '../assets/new4.jpg';

const MainSection = styled.section`
min-height:100vh;
width:100vw;
margin:0 auto;

display:flex;
justify-content:center;
align-items:center;

position:relative;

`;

const Overlay = styled.div`
  position:absolute;
  top:50%;
  left:50%;
  transform : translate(-50%,-50%);
  width:30vw;
  height:90vh;
  
  border-radius:10%;
  box-shadow:0 0 0 5vw ${props => props.theme.text};

  z-index:0;
`;

const Title = styled.h1`
  font-size: ${props => props.theme.fontxxxl};
  font-family: 'Bebas';
  font-weight: 300;
  text-shadow: 1px 1px 1px ${props => props.theme.text};
  color: ${props => props.theme.body};
  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 11;
`;
const Text = styled.div`
  width: 20%;
  color: ${props => props.theme.body};
  min-height: 100vh;
  z-index: 11;
  position: absolute;
  padding:2rem;
  top:0;
  right:0;
  

  display: flex;
  justify-content: center;
  align-items: center;
  text-align:center;

  p {
    font-size: ${props => props.theme.fontlg};
    font-weight: 300;
    width: 100%;
    margin: 0 auto;
    margin-right: 10%;
  
`;
const Textr = styled.div`
  width: 20%;
  color: ${props => props.theme.body};
  min-height: 100vh;
  z-index: 11;
  position: absolute;
  padding:2rem;
  top:0;
  left:0;
  

  display: flex;
  justify-content: center;
  align-items: center;
  text-align:center;

  p {
    font-size: ${props => props.theme.fontlg};
    font-weight: 300;
    width: 100%;
    margin: 0 auto;
    margin-right: 10%;
  
`;
const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1000px;
  cursor: pointer;
  margin-top: -200px;
  margin-left:190px;

  .flip-card {
    width: 600px;
    height: 360px;
    perspective: 1000px; /* Perspective for 3D effect */
  }

  .card-content {
    width: 70%;
    height: 80%;
    border-radius: 20px;
    transform-style: preserve-3d;
    transition: transform 0.6s;
  }

  .flip-card-front,
  .flip-card-back {
    position: absolute;
    width: 100%;
    height: 200%;
    backface-visibility: hidden;
    border-radius: 10px;
    background-size: cover;
    background-position: center;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .flip-card-back {
    transform: rotateY(180deg);
  }
`;

const NewRel = () => {
  const images = [
    { id: 1, src: new1, title: "Harry Potter Old", description: "The boy who lived" },
    { id: 2, src: new2, title: "Harry Potter New", description: "The boy who lived" },
    { id: 3, src: new3, title: "Harry Potter Classic", description: "The chosen one" },
    { id: 4, src: new4, title: "Harry Potter Modern", description: "The wizarding world" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Automatically change the currentIndex every 3 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <MainSection>
        <Title data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal">Most Searched</Title>
        
        <Text data-scroll data-scroll-speed="-4">
        <p>
          At MovieQ, we're thrilled to announce the release of our latest feature: "Trending Now."
          This new addition brings you the hottest and most talked-about movies, updated daily,
          so you’re always in the loop.
          <br /><br />
          Dive into detailed reviews, trailers, and behind-the-scenes insights for these blockbuster hits.
          With a seamless user experience and integration with top streaming platforms, finding your next
          favorite film has never been easier. Explore the magic of cinema with MovieQ today!
        </p>
      </Text>
      <Textr data-scroll data-scroll-speed="-4">
        <p>
          At MovieQ, we're thrilled to announce the release of our latest feature: "Trending Now."
          This new addition brings you the hottest and most talked-about movies, updated daily,
          so you’re always in the loop.
          <br /><br />
          Dive into detailed reviews, trailers, and behind-the-scenes insights for these blockbuster hits.
          With a seamless user experience and integration with top streaming platforms, finding your next
          favorite film has never been easier. Explore the magic of cinema with MovieQ today!
        </p>
      </Textr>
        <Section>
        <Overlay/>
      <div className="flip-card">
        <motion.div
          className="card-content"
          initial={false}
          animate={{ rotateY: currentIndex % 2 === 0 ? 0 : 180 }}
          transition={{ duration: 0.6 }}
        >
          <div
            className="flip-card-front"
            style={{
              backgroundImage: `url(${images[currentIndex].src})`,
            }}
          >
            <h1>{images[currentIndex].title}</h1>
            <p>{images[currentIndex].description}</p>
          </div>
          <div
            className="flip-card-back"
            style={{
              backgroundImage: `url(${images[(currentIndex + 1) % images.length].src})`,
            }}
          >
            <h1>{images[(currentIndex + 1) % images.length].title}</h1>
            <p>{images[(currentIndex + 1) % images.length].description}</p>
          </div>
        </motion.div>
      </div>
    </Section>
    </MainSection>
  
  );
};

export default NewRel;
