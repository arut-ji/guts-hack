import React, {useState} from 'react';
import BpkButton from 'bpk-component-button';
import BpkText from 'bpk-component-text';
import STYLES from './App.scss';
import JourneyDetails from './pages/JourneyDetails';

const c = className => STYLES[className] || 'UNKNOWN';

const App = () => {

  const [count, setCount] = useState(0);

  return (
    <div className={c('App')}>
      <JourneyDetails/>
    </div>
  );
};

export default App;
