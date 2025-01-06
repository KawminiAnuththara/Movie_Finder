import React from 'react'
import styled from 'styled-components'
import Cover from '../components/Cover'
import Logo from '../components/Logo'


const Section = styled.section`
position: relative;
min-height:200vh;
overflow :hidden;
`



const Home = () => {
  return (
    <Section data-scroll-container>
        <Cover/>
        <Logo/>
    </Section>
  )
}

export default Home