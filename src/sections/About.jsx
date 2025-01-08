import React from 'react'
import styled from 'styled-components'


const Section = styled.section`
position: relative;
min-height:100vh;
width:100vh;
overflow :hidden;
display:flex;
margin:0 auto;
`;

const Title = styled.h1`
font-size:${props => props.theme.fontBig};
font-family:'Bebas Neue';
font-weight:300;

position:absolute;
top:1rem;
left:5%;
z-index:5;


`;

const Left = styled.div`
width:50%;
font-size:${props=>props.theme.fontlg};
font-weight:300;
position:relative;
z-index:5;
margin-top:20%;
`;

const Right = styled.div`
width:50%;
`;

const About = () => {
  return (
    <Section id="fixed-target">
        <Title data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal">
            About Us
        </Title>
        <Left  data-scroll data-scroll-sticky data-scroll-target="#fixed-target">
        At MovieQ, we provide a seamless platform for movie enthusiasts to discover, explore,
         and enjoy a world of films tailored to their tastes. Our service includes an advanced 
         search functionality that allows users to find movies by title, genre, release year, 
         ratings, and more.<br/><br/> We offer personalized movie recommendations based on your preferences
          and watch history, ensuring you never miss a film that matches your mood. With detailed
           movie information, including trailers, cast, and reviews, you can make informed choices 
           about what to watch.<br/><br/> Our user-friendly watchlist feature lets you save favorites for later, 
           and our integration with popular streaming platforms makes it easy to find where to watch them. 
           Whether you’re exploring trending films, hidden gems, or timeless classics, MovieQ is here to
            make your movie-finding journey effortless and enjoyable.
        </Left>
        <Right>
            image
        </Right>
    </Section>
  )
}

export default About