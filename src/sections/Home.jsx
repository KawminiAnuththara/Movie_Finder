import React from 'react'
import styled from 'styled-components'
import Cover from '../components/Cover'


const Section = styled.section`
position: relative;
min-height:200vh;
overflow :hidden;
`



const Home = () => {
  return (
    <Section>
        <Cover/>
    </Section>
  )
}

export default Home