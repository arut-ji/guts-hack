import React from 'react'

import BpkMobileScrollContainer from 'bpk-component-mobile-scroll-container';
import RecommendationItem from './RecommendationItem';

import { cssModules } from 'bpk-react-utils';
import STYLES from './style.scss';
const getClassName = cssModules(STYLES);

export default ({checkpoints}) => (
  <BpkMobileScrollContainer>
    <div className={getClassName('scroll-container')}>
    {
      checkpoints.map((item, index) => {
        return (
          <div>
            <img src={item.imgSrc}/>
            <p>{item.rank}</p>
            <p>{item.title}</p>
            <p>{item.location}</p>
          </div>
        )
      })
    }
    </div>
  </BpkMobileScrollContainer>
)