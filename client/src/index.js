import 'bpk-stylesheets/base';
import 'bpk-stylesheets/base.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {JourneyRepository} from './repositories/journey.repository';

ReactDOM.render(React.createElement(App), document.getElementById('root'));
