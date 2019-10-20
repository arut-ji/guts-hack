import React from 'react';
import styled from 'styled-components';
import BpkLabel from 'bpk-component-label';
import { BpkAccordion, BpkAccordionItem, withSingleItemAccordionState } from 'bpk-component-accordion';
import LocationItem from './location-item.component';
import BpkButton from 'bpk-component-button';

const SingleItemAccordion = (BpkAccordion);

const Button = styled(BpkButton)`
  width: 100%;
`;

const Wrapper = styled.div`
  label {
    color: #5a489b;   
    font-size: 16px;
  }
`;

const Label = styled(BpkLabel)`
  margin-bottom: 17px
`;

const LocationList = styled(SingleItemAccordion)`
  
`;

const LocationForm = () => {
  return (
    <Wrapper>
      <Label htmlFor="origin">List of location</Label>
      <LocationList>
        <LocationItem
          title="Germany"
          description={"Hello world"}
        />
        <LocationItem
          title="Hong Kong"
          description={"Hello world"}
        />
        <LocationItem
          title="Vietnam"
          description={"Hello world"}
        />
      </LocationList>
      <Button secondary>Add Location</Button>
    </Wrapper>
  );
};

export default LocationForm;
