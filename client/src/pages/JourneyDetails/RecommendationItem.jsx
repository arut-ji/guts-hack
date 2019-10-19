import React from 'react'

import { cssModules } from 'bpk-react-utils';
import STYLES from './style.scss';
const getClassName = cssModules(STYLES);

export default ({ imgSrc, rank, title, location }) => (
  <div>
    <img src={imgSrc} />
    <p>#{rank} Destination</p>
    <p>{title}</p>
    <p>{location}</p>
  </div>
)