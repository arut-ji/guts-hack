import React from 'react'

import { cssModules } from 'bpk-react-utils';
import STYLES from './style.scss';
const getClassName = cssModules(STYLES);

export default ({content}) => (
  <div className={getClassName('description')}>
    <p>Description</p>
    <p>{content}</p>
  </div>
)
