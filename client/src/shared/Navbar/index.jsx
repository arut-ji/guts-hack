import styled from "styled-components";
import React, {useState} from 'react';
import { ReactComponent as Logo } from '../../Assets/Pizzascanner_Logo.svg';
import {useHistory, Link} from 'react-router-dom';
import BpkDrawer from 'bpk-component-drawer';

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

const NavbarItem = styled.a`
  height: 61px;
  padding: 0 21px;
  width: 100%;
  text-decoration: none;
  color: black;
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

const NavbarItemContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Navbar = () => {

  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Container>
      <Logo onClick={() => history.replace('/')}>
      </Logo>
      <div id={"pagewrap"}>
        <Hamburger onClick={() => setIsOpen(true)}>
          <HamburgerBar/>
          <HamburgerBar/>
          <HamburgerBar/>
        </Hamburger>
      </div>
      <BpkDrawer
        id={'my-drawer'}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title={'Menu'}
        closeLabel={'Close Drawer'}
        getApplicationElement={() => document.getElementById('pagewrap')}
      >
        <NavbarItemContainer>
          <NavbarItem href="/">
            Home
          </NavbarItem>
          <NavbarItem href="/locations">
            Locations
          </NavbarItem>
          <NavbarItem href="/journeys">
            Journeys
          </NavbarItem>
          <NavbarItem href="/maps">
            Map
          </NavbarItem>
        </NavbarItemContainer>
      </BpkDrawer>
    </Container>
  )
};

export default Navbar;
