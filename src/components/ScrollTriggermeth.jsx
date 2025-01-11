import React, { useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for type checking
import styled from 'styled-components';
import {AnimatePresence, motion} from "framer-motion";

const ScrollIm = styled(motion.div)`
  position:relative;
  overflow:hidden;
  height:400px;
  width:300px;
  background-slate:400;
  border-radius:20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap:10;
  

  img{
    width:200%;
    height:500px;
    padding:10px;
    gap:20;
    margin:0px;
    
  }
  

  .overlay{
   position:absolute;
   inset:0;
   z-index:10;
   display:flex;
   justify-center:center;
   align-items:center;
   
  }
  .insideOverlay{
    position:absolute;
    background-color:black;
    pointer-events:none;
    opacity:0.5;
    height:100%;
    width:100%;
  }
  .insideh1{
    background-color:white;
    font-weight:600;
    font-size:0.875rem;
    z-index:10;
    gap:0.5ch;
    opacity:0.75;
    width:150px;
    padding:10px;
    border-radius:8px
  }
`;

// Component definition
const ScrollTriggerMeth = ({ image }) => {

  const [showOverlay ,setShowOverlay]=useState(false);
  return (
    <ScrollIm 
      onHoverStart={()=>setShowOverlay(true)}
      onHoverEnd={()=>setShowOverlay(false)}
    >
      <AnimatePresence>
      {showOverlay &&(
        <motion.div className='overlay'
          initial={{opacity:0}}
          animate={{opacity:1}}
          exit={{opacity:0}}
        >
          <div className='insideOverlay'/>
          <motion.h1 className='insideh1'
           initial={{y:10}}
           animate={{y:0}}
           exit={{y:10}}
          >
            <span>Explore Now➡️</span>
          </motion.h1>
        </motion.div>
      )}
      </AnimatePresence>
      <img src={image} alt="Scroll Trigger" />
    </ScrollIm>
  );
};

// Define PropTypes for type checking
ScrollTriggerMeth.propTypes = {
  image: PropTypes.string.isRequired, // Expected prop type
};

export default ScrollTriggerMeth;
