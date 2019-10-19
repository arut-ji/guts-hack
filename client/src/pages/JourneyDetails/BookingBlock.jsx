import React from 'react'

import BpkButton from 'bpk-component-button';

import { cssModules } from 'bpk-react-utils';
import STYLES from './style.scss';
const getClassName = cssModules(STYLES);

export default ({onClick, totalPrice}) => (
  <div>
    <div className={getClassName('booking-bar')}>
    </div>
    <div className={getClassName('booking-bar__actual')}>
      <span>£{totalPrice}</span>
      <span>price per person</span>
    <span>
      <BpkButton onClick={onClick}>Primary</BpkButton>
    </span>
    </div>
  </div>
)