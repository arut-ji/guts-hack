import styled from "styled-components";
import React from 'react';

const Container = styled.div`
  height: 61px;
  padding: 0 21px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: pink;
`;

const Logo = styled.h2``;

const HamburgerBar = styled.div`
  width: 35px;
  height: 5px;
  background-color: #333;
  margin: 6px 0;
  transition: 0.4s;
`;

const Hamburger = styled.div`
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <Container>
      <Logo>
        Pizzascanner
      </Logo>
      <Hamburger>
        <HamburgerBar/>
        <HamburgerBar/>
        <HamburgerBar/>
      </Hamburger>
    </Container>
  )
};

export default Navbar;
