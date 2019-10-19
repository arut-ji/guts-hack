import React from 'react';
import BpkHeartIcon from 'bpk-component-icon/lg/heart'
import BpkHeartOutlineIcon from 'bpk-component-icon/lg/heart--outline'

import BackButton from './BackButton';
import RecommendationList from './ReccomendationList';
import ReviewerBlock from './ReviewerBlock';
import DescriptionBlock from './DescriptionBlock';
import TravelingBlock from './TravelingBlock';
import BookingBlock from './BookingBlock';

import './style.scss';

import journey from './placeholder';

function onClickBook() {
  console.log('Book Click')
}

const JourneyDetails = () => (
  <div>
    <BackButton />
    <div>
    <div>
      <h1>{journey.title}</h1>
      <h2>{journey.location}</h2>
    </div>
    <div>
      {journey.liked ? <BpkHeartIcon className='pink-icon'/> : <BpkHeartOutlineIcon className='pink-icon'/>}
    </div>
    </div>
    <RecommendationList checkpoints={journey.checkpoints}/>
    <ReviewerBlock {...journey.reviewer}/>
    <DescriptionBlock content={journey.description}/>
    <TravelingBlock transitions={journey.transitions}/>

    <img src={journey.mapImgSrc}/>
    
    <BookingBlock onClick={onClickBook} totalPrice={journey.totalPrice}/>
  </div>
);

export default JourneyDetails;