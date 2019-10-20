import styled from "styled-components";
import React, {useState} from 'react';
import { ReactComponent as Logo } from '../../Assets/Pizzascanner_Logo.svg';
import {useHistory} from 'react-router-dom';

const Container = styled.div`
  height: 61px;
  padding: 0 21px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  position: fixed;
  z-index: 10;
`;

const NavbarItem = styled.div`
  height: 61px;
  padding: 0 21px;
  width: 100%;
`;

const HamburgerBar = styled.div`
  width: 35px;
  height: 5px;
  background-color: #333;
  margin: 6px 0;
  transition: 0.4s;
  border-radius: 3px;
`;

const Hamburger = styled.div`
  cursor: pointer;
`;

const Navbar = () => {

  const history = useHistory();
  const [isOpen, setIsOpen] = useState(initState);


  return (
    <Container>
      <Logo onClick={() => history.replace('/')}>
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
