import React from 'react'

import BpkMobileScrollContainer from 'bpk-component-mobile-scroll-container';

import { cssModules } from 'bpk-react-utils';
import STYLES from './style.scss';
const getClassName = cssModules(STYLES);

export default ({transitions}) => (
<div>
  <h1>Traveling</h1>
  <BpkMobileScrollContainer>
    <div className={getClassName('scroll-container')}>
    {
      transitions.map((item, index) => {
        return (
          <div>
            <div>
            {index + 1} -> {index + 2}
            </div>
            <p>
              {item.from}
            </p>
            <p>
              to
            </p>
            <p>
              {item.to}
            </p>
            <p>
              {item.description}
            </p>
          </div>
        )
      })
    }
    </div>
  </BpkMobileScrollContainer>
  <div>
    {} -> {}
  </div>
</div>
)