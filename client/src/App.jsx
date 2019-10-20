import React from 'react';
import STYLES from './App.scss';
import {RouteConfig} from "./routes";
import Footer from './shared/Footer';
import Navbar from './shared/Navbar';
const c = className => STYLES[className] || 'UNKNOWN';
import styled from 'styled-components';

const Main = styled.section`
  padding-top: 61px;
  width: 100%;
`;

const App = () => {
  return (
    <div className={c('App')}>
      <Navbar/>
      <Main>
        <RouteConfig/>
      </Main>
      <Footer/>
    </div>
  );
};

export default App;
