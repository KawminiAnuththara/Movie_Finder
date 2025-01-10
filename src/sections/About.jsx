import React from 'react'
import styled from 'styled-components'

import avatar from '../assets/avatar.jpg';
import conj from '../assets/conj.jpg';
import Brave from '../assets/Brave.png';


const Section = styled.section`
position: relative;
min-height:100vh;
width:200vh;
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
color:grey;
font-weight:300;
position:relative;
z-index:5;
margin-top:20%;
`;

const Right = styled.div`
width:50%;
position:relative;

img{
   width:90%;
   height:auto;
   
}

.smallImage1{
   width:50%;
   position:absolute:
   right:10%;
   bottom:10%;
   margin-top:-500px;
   margin-left:-20%;
}
.smallImage2{
   width:40%;
   position:absolute;
   left:30%;
   bottom:30%;
   margin-left:30%;
}

`;

const About = () => {
  return (
    <Section id="fixed-target">
        <Title data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal">
            About Us
        </Title>
        <Left  data-scroll data-scroll-speed="-2" data-scroll-sticky data-scroll-target="#fixed-target">
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
            <img src={avatar}  alt=''/>
            <img   data-scroll data-scroll-speed="5" src={conj} className='smallImage1' alt=''/>
            <img  data-scroll data-scroll-speed="-2" src={Brave} className='smallImage2' alt=''/>
          
        </Right>
    </Section>
  )
}

export default About