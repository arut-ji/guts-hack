import React from 'react';

import BackButton from './BackButton';
import RecommendationList from './ReccomendationList';
import ReviewerBlock from './ReviewerBlock';

import { cssModules } from 'bpk-react-utils';
import STYLES from './style.scss';
const getClassName = cssModules(STYLES);

import journey from './placeholder';

const JourneyDetails = () => (
  <div>
    <BackButton />
    <RecommendationList checkpoints={journey.checkpoints}/>
    <ReviewerBlock {...journey.reviewer}/>
    {/* <DescriptionBlock content={journey.description}/> */}
    {/* <TravelingBlock content={journey.description}/> */}
    {/* <MapBlock content={journey.description}/> */}
    {/* <BookingBlock content={journey.description}/> */}
  </div>
);

export default JourneyDetails;