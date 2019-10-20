import React, {useEffect, useState} from 'react';
import BpkHeartIcon from 'bpk-component-icon/lg/heart'
import BpkHeartOutlineIcon from 'bpk-component-icon/lg/heart--outline'
import BpkEcoIcon from 'bpk-component-icon/lg/eco-leaf'

import BackButton from './BackButton';
import RecommendationList from './ReccomendationList';
import ReviewerBlock from './ReviewerBlock';
import DescriptionBlock from './DescriptionBlock';
import TravelingBlock from './TravelingBlock';
import BookingBlock from './BookingBlock';
import { cssModules } from 'bpk-react-utils';
import STYLES from './style.scss';
const getClassName = cssModules(STYLES);
import {JourneyService} from '../../services/journey.service';

import journey from './placeholder';

function onClickBook() {
  console.log('Book Click')
}

const JourneyDetails = () => {

  const [emissionRate, setEmissionRate] = useState('');
  useEffect(() => {
    const result = JourneyService.fetchAverageEmission({
      origin: 'Glasgow',
      destination: 'Hong Kong',
    });
    setEmissionRate(result.emissions)
  }, []);

  return (
    <div>
      <BackButton />
      <div>
        <div className={getClassName('header')}>
          <div className={getClassName('flex')}>
            <p>{journey.title}</p>
          </div>
          <p className={getClassName('sub-header')}>{journey.location}</p>
          <p className={getClassName('eco-header')}>50% <BpkEcoIcon/> </p>
          <p className={getClassName('eco-header')}>Flight CO2 Emission Rate: {emissionRate} </p>
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
}

export default JourneyDetails;
