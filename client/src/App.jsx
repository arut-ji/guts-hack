import React from 'react';
import STYLES from './App.scss';
import {RouteConfig} from "./routes";
const c = className => STYLES[className] || 'UNKNOWN';

const App = () => {
  return (
    <div className={c('App')}>
      <RouteConfig/>
    </div>
  );
};

export default App;
