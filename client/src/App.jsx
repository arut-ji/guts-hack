import React, {useState} from 'react';
import BpkButton from 'bpk-component-button';
import BpkText from 'bpk-component-text';
import STYLES from './App.scss';
import Home from "./pages/Home";
import LocationList from "./pages/LocationList/LocationListView"

const c = className => STYLES[className] || 'UNKNOWN';

const App = () => {

  const [count, setCount] = useState(0);

  return (
    <div>
      <LocationList/>
    </div>
  );
};

export default App;
