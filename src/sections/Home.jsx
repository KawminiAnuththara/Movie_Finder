import React from 'react'
import styled from 'styled-components'
import Cover from '../components/Cover'
import Logo from '../components/Logo'
import Navbar from '../components/Navbar'


const Section = styled.section`
 position: relative;
 min-height:100vh;
 overflow :hidden;
`;

const Home = () => {
  return (
    <Section data-scroll-container id="home">
       <Navbar/>
       <Cover/>
       <Logo/>
    </Section>
  )
}

export default Home