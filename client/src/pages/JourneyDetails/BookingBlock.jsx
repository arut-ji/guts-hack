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
      <div>
        £{totalPrice}
        <span> price per person</span>
      </div>
      <span>
        <BpkButton onClick={onClick}>Book</BpkButton>
      </span>
    </div>
  </div>
)
