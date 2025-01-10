import React, { useState } from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';

// Styling for the navigation container
const NavContainer = styled.div`
  width: 100vw;
  z-index: 7;
  position: fixed; /* Change to fixed to make the navbar sticky */
  top: 0; /* Always stay at the top */
  left: 0;
  padding: ${(props) => (props.searchVisible ? '3rem 0' : '1rem 0')}; /* Adjust padding on search visibility */

  display: flex;
  justify-content: center;
  align-items: center;
  
  transition: padding 0.3s ease; /* Smooth transition for padding */
`;

// Styling for individual menu items
const Menu = styled(motion.li)`
  background-color: ${(props) => `rgba(${props.theme.textRgba || '0,0,0'}, 0.7)`};
  list-style: none;
  color: ${(props) => props.theme.body || '#fff'};
  width: 15rem;
  height: 2.5rem;
  margin-top:0.5rem;

  clip-path:polygon(0 0,100% 0,80% 100%,20% 100%);

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: ${(props) => props.theme.fontmd || '1rem'};
  font-weight: 600;
  text-transform: uppercase;

  cursor: pointer;
  position: relative;
`;

// Styling for the search bar container
const SearchContainer = styled(motion.div)`
  position: absolute;
  top: 0.5rem; 
  left: 50%;
  transform: translateX(-50%);
  display: ${(props) => (props.visible ? 'flex' : 'none')}; 
  align-items: center;
  background-color: ${(props) => props.theme.body || '#fff'};
  border: 1px solid ${(props) => props.theme.text || '#000'};
  border-radius: 5px;
  padding: 0.5rem;
  width: 20rem;
  z-index: 10;
  transition: top 0.3s ease; 
`;

// Styling for the input field
const SearchInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  background-color: transparent;
  color: ${(props) => props.theme.text || '#000'};
  font-size: ${(props) => props.theme.fontmd || '1rem'};
`;

// Styling for the search icon
const SearchIcon = styled(motion.span)`
  margin-left: 0.5rem;
  font-size: ${(props) => props.theme.fontmd || '1rem'};
  cursor: pointer;
`;

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);

  const handleSearchClick = () => {
    setShowSearch((prev) => !prev); // Toggle search bar visibility
  };

  return (
    <NavContainer searchVisible={showSearch}
     initial={{
        y:'-100%'
     }}
     animate={{
        y:0
     }}
     transition={{
        duration:2,delay:2
     }}
    >
      {/* Search button */}
      <Menu onClick={handleSearchClick}
        drag='y'
        dragConstraints={{
            top:0,
            bottom:70,
        }}
        dragElastic={0.05}
        dragSnapToOrigin
        
      >
        Search
      </Menu>

      {/* Search bar */}
      <SearchContainer visible={showSearch}
      >
        <SearchInput type="text" placeholder="Search..." />
        <SearchIcon
        whileHover={{scale:1.1,y:-5}}
       whileTap={{scale:0.09,y:0}}
        >🔍</SearchIcon>
      </SearchContainer>
    </NavContainer>
  );
};

export default Navbar;
