import React from 'react';
import STYLES from './App.scss';
import {RouteConfig} from "./routes";
import Footer from './shared/Footer';
import Navbar from './shared/Navbar';

const c = className => STYLES[className] || 'UNKNOWN';
import styled from 'styled-components';
import {
  BrowserRouter as Router
} from 'react-router-dom';

const Main = styled.section`
  display: block;
  padding-top: 61px;
  width: 100%;
`;

const App = () => {

  return (
    <Router>
      <div className={c('App')}>
        <Navbar/>
        <Main>
          <RouteConfig/>
        </Main>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;
