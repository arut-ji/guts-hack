import React from 'react';
import BpkHeartIcon from 'bpk-component-icon/lg/heart'
import BpkHeartOutlineIcon from 'bpk-component-icon/lg/heart--outline'
import BpkEcoIcon from 'bpk-component-icon/lg/eco-leaf'

import BackButton from './BackButton';
import RecommendationList from './ReccomendationList';
import ReviewerBlock from './ReviewerBlock';
import DescriptionBlock from './DescriptionBlock';
import TravelingBlock from './TravelingBlock';
import BookingBlock from './BookingBlock';
import mapDirection from '../../Assets/map-direction.png'

import { cssModules } from 'bpk-react-utils';
import STYLES from './style.scss';
const getClassName = cssModules(STYLES);

import journey from './placeholder';

function onClickBook() {
  console.log('Book Click')
}

const JourneyDetails = () => (
  <div>
    <BackButton />
    <div>
    <div className={getClassName('header')}>
      <div className={getClassName('flex')}>
        <p>{journey.title}</p>
        {/*<div>*/}
        {/*{journey.liked ? <BpkHeartIcon className='pink-icon'/> : <BpkHeartOutlineIcon className='pink-icon'/>}*/}
        {/*</div>*/}
      </div>
      <p className={getClassName('sub-header')}>{journey.location}</p>
      <p className={getClassName('eco-header')}>50% <BpkEcoIcon/> </p>
    </div>

    </div>
    <RecommendationList checkpoints={journey.checkpoints}/>
    <ReviewerBlock {...journey.reviewer}/>
    <DescriptionBlock content={journey.description}/>
    <TravelingBlock transitions={journey.transitions}/>

    <img src={mapDirection}/>

    <BookingBlock onClick={onClickBook} totalPrice={journey.totalPrice}/>
  </div>
);

export default JourneyDetails;
