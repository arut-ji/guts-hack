import React from 'react'

import BpkMobileScrollContainer from 'bpk-component-mobile-scroll-container';
import onetwo from '../../Assets/1to2.svg'

import { cssModules } from 'bpk-react-utils';
import STYLES from './style.scss';
const getClassName = cssModules(STYLES);

export default ({transitions}) => (
<div className={getClassName('travelling-block')}>
  <h1>Traveling</h1>
  <BpkMobileScrollContainer>
    <div className={getClassName('scroll-container')}>
      {
        transitions.map((item, index) => {
          return (
            <div className={getClassName('scroll-container-inner')} key={index}>
              <div className={getClassName('center')}>
                <img src={onetwo} alt="onetotwo"/>
              </div>
              <p>
                {item.from}
              <br/>
                to
                <br/>
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
  </div>
</div>
)
