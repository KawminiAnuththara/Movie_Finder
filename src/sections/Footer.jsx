import React from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import logo from '../assets/star_white-48dp.svg';

const Section = styled.section`
  min-height:100vh;
  width:100vw;
  margin: 5rem auto;

  display:flex;
  flex-direction:column;
  justify-content:center;
  align-item:center;

  background-color: ${props => props.theme.body};
  color:${props => props.theme.text};

  position:relative;
`;

const LogoContainer = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;

  img{
     width:10vw;
     height:auto;
     filter: brightness(0) invert(1);
     
  }
  h3{
     font-size:${props => props.theme.fontxl};
     font-family:'Bebus';
  }
`;

const FooterComponent= styled(motion.footer)`
 width:90vw;
 padding:20px;

 ul{
    list-style:none;
    display:flex;
    justify-content:space-between;
    align-items:center;
    flex-wrap:wrap;
    margin:2rem;
    margin-top:4rem;
    padding: 0 1rem;
    border-top: 1px solid ${props=>props.theme.text};
    border-bottom: 1px solid ${props=>props.theme.text};
 }

 li{
   padding:2rem;
   font-size: ${props=>props.theme.fontlg};
   text-transform:uppercase;
   cursor:pointer;
   transition: all 0.3s ease;

   $:hover{
       transform:scale(1.1);
   }
 }
`;

const Bottom = styled.div`
padding:0.5rem 0;
margin:0 4rem;
font-size:${props => props.theme.fontlg};

display:flex;
justify-content:center;
align-items:center;
`

const Footer = () => {
  return (
    <Section>
        <LogoContainer>
            <img src={logo} alt=''/>
            <h3>Movie Studio</h3>
        </LogoContainer>
        <FooterComponent
        initial={{y:"-400px"}}
        whileInView={{y:0}}
        viewport={{once:false}}
        transition={{
            duration:1.5
        }}
        >
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Category</li>
                <li>New Released</li>
                <li>
                    <a href='http://google.com' target='_blank' rel="noreferrer">
                        Look Book
                    </a>
                </li>
                <li>
                <a href='http://google.com' target='_blank' rel="noreferrer">
                        Reviews
                    </a>
                </li>
            </ul>
            <Bottom>
                <span>&copy; {new Date().getFullYear()}.All Right reserved</span>
            </Bottom>
        </FooterComponent>
    </Section>
  )
}

export default Footer