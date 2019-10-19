import React from 'react'

import BpkPanel from 'bpk-component-panel';

import { cssModules } from 'bpk-react-utils';
import STYLES from './style.scss';
const getClassName = cssModules(STYLES);

export default ({ imgSrc, name, location }) => (
    <div className={getClassName('reviewer-block')}>
        <img src={imgSrc}/>
        <div>
          <p className={getClassName('reviewer-name')}>{name}</p>
          <p className={getClassName('reviewer-name')}>{location}</p>
        </div>

    </div>
)
