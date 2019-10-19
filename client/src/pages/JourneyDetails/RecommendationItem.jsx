import React from 'react'

import BpkImage from 'bpk-component-image';

import { cssModules } from 'bpk-react-utils';
import STYLES from './style.scss';
const getClassName = cssModules(STYLES);

export default ({ imgSrc, rank, title, location }) => (
  <div>
    <img className={getClassName('checkpoint-image')} src={imgSrc} />
  />
    <p>#{rank} Destination</p>
    <p>{title}</p>
    <p>{location}</p>
  </div>
)