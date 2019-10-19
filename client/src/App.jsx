import React, {useState} from 'react';
import STYLES from './App.scss';
import Map from "./pages/Map";

const c = className => STYLES[className] || 'UNKNOWN';

const App = () => {

  const [count, setCount] = useState(0);

  return (
    <div>
      <Map/>
    </div>
  );
};

export default App;
