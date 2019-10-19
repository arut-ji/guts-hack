import React, {useState} from 'react';
import STYLES from './App.scss';
import Home from "./pages/Home";
import './App.scss'

const c = className => STYLES[className] || 'UNKNOWN';

const App = () => {

  const [count, setCount] = useState(0);

  return (
    <div>
      <Home/>
    </div>
  );
};

export default App;
