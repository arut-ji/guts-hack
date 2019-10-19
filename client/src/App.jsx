import React, {useState} from 'react';
import BpkButton from 'bpk-component-button';
import BpkText from 'bpk-component-text';
import STYLES from './App.scss';
import JourneyDetails from './pages/JourneyDetails';
import EcoDataTest from './pages/EcoDataTest';
import {RouteConfig} from "./routes";
const c = className => STYLES[className] || 'UNKNOWN';

const App = () => {

  return (
    <RouteConfig/>
  );
};

export default App;
