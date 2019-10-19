import React from 'react';

import BackButton from './BackButton';
import RecommendationList from './ReccomendationList';
import ReviewerBlock from './ReviewerBlock';
import DescriptionBlock from './DescriptionBlock';
import TravelingBlock from './TravelingBlock';

import { cssModules } from 'bpk-react-utils';
import STYLES from './style.scss';
const getClassName = cssModules(STYLES);

import journey from './placeholder';

const JourneyDetails = () => (
  <div>
    <BackButton />
    <RecommendationList checkpoints={journey.checkpoints}/>
    <ReviewerBlock {...journey.reviewer}/>
    <DescriptionBlock content={journey.description}/>
    <TravelingBlock transitions={journey.transitions}/>

    {/* <MapBlock/> */}

    {/* <BookingBlock/> */}
  </div>
);

export default JourneyDetails;