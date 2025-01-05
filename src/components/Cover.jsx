import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import cover from '../assets/cover1.mp4';

const VideoContainer = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;

  video {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;

const DarkOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background-color: ${props => `rgba(${props.theme.bodyRgba}, 0.6)`};
`;

const Title = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.text};

  div {
    display: flex;
    flex-direction: row;
  }

  h1 {
    font-family: 'Bebas Neue';
    font-size: ${props => props.theme.fontBig};
    text-shadow: 1px 1px 1px ${props => props.theme.body};
  }

  h2 {
    font-family: 'Oswald';
    font-size: ${props => props.theme.fontlg};
    text-shadow: 1px 1px 1px ${props => props.theme.body};
    font-weight: 300;
    text-transform: capitalize;
  }
`;

const Cover = () => {
  const scrollRef = useRef(null);
  const locomotiveInstance = useRef(null);

  useEffect(() => {
    // Initialize Locomotive Scroll
    locomotiveInstance.current = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });

    return () => {
      // Destroy Locomotive Scroll instance on unmount
      if (locomotiveInstance.current) {
        locomotiveInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div data-scroll-container ref={scrollRef}>
      <VideoContainer data-scroll-section>
        <DarkOverlay />
        <Title>
          <div>
            <h1 data-scroll data-scroll-delay='0.13' data-scroll-speed="1">M</h1>
            <h1 data-scroll data-scroll-delay="0.09" data-scroll-speed="4">o</h1>
            <h1 data-scroll data-scroll-delay="0.06" data-scroll-speed="4">v</h1>
            <h1 data-scroll data-scroll-delay="0.04" data-scroll-speed="4">i</h1>
            <h1 data-scroll data-scroll-delay="0.02" data-scroll-speed="4">Q</h1>
          </div>
          <h2 data-scroll data-scroll-delay="0.02" data-scroll-speed="2">Movie Quick Search</h2>
        </Title>
        <video src={cover} type="video/mp4" autoPlay muted loop />
      </VideoContainer>

    </div>
  );
};

export default Cover;
