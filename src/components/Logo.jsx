import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {motion} from 'framer-motion';

const Container = styled.div`
 position:absolute;
 top:6rem;
 left:1rem;

 width:100%;
 color:${props=>props.theme.text};
 z-index:5;

 a{
   display:flex;
   align-item: flex-end;
 }

 svg{
   width:4rem;
   height:auto;
   overflow:visible;
   stroke-linejoin:round;
   stroke-linecap:round;
   margin-right:1rem;
   margin-top:-1rem;

   g{
       path{
           stroke:${props=> props.theme.text};
       }
   }
 }
`;

 const Text=styled(motion.span)`
   font-size:${props=>props.theme.fontlg};
   color:${props=>props.theme.text};
   padding-bottom:2rem;
 `;

 const textVariants={
  hidden:{
    opacity:0,
    x:-50,
  },
  visible:{
    opacity:1,
    x:-5,

    transition:{
      duration:2,
      delay:2,
      ease:'easeInOut'
    }
  },
 
}

const pathVariants={
  hidden:{
    opacity:0,
    pathLength:0,
  },
  visible:{
    opacity:1,
    pathLength:1,

    transition:{
      duration:2,
      ease:'easeInOut'
    }
  },
 
}

const Logo = () => {
  return (
    <Container>
        <Link to="/">
        <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        width="48px" 
        height="48px" 
        fill="none"
        > 
          
          <g>
          <motion.path 
           variants={pathVariants}
           initial="hidden"
           animate="visible"
           d="M12 2.5l2.92 5.91 6.51.95-4.71 4.59 1.11 6.48L12 17.77l-5.83 3.06 1.11-6.48-4.71-4.59 6.51-.95L12 2.5z"/>
          </g>
          
        </svg>
        <Text
        variants={textVariants}
        initial="hidden"
        animate="visible">
          Movie studio
        </Text>

        </Link>
    </Container>
  )
}

export default Logo