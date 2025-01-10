import React from 'react'
import styled from 'styled-components';

const Section = styled.section`
min-height:100vh;
height:auto;
width:100vw;
margin:0 auto;
overflow:hidden;

display:flex;
justify-content: flex-start;
align-item:flex-start;

position:relative;
`;

const Title= styled.h1`
font-size:${props => props.theme.fontxxxl};
font-family:'Bebas';
font-weight:300;

position:absolute;
top:1rem;
left:5%;
z-index:5;
`;

const Shop = () => {
  return (
    <Section>
        <Title data-scroll data-scroll-speed="-1">New Released</Title>
    </Section>
  )
}

export default Shop