import React, {useState} from 'react';
import styled from 'styled-components';
import {country} from './countries.mock.js';
import JourneyListView from './JourneyListView'

const Container = styled.div`
  display: flex;
  width: 100%;
`;

const JourneysList = () => {
  return (
    <JourneyListView {...country}/>
  )
}

export default JourneysList;
