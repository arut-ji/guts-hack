import React from 'react';
import {BpkAccordion, BpkAccordionItem, withAccordionItemState} from 'bpk-component-accordion';
import BpkCard from 'bpk-component-card';
import JourneyCard from './JourneyCard';
import styled from 'styled-components';

const Accordion = styled(BpkAccordion)`
  .BpkCard_bpk-card__-8LKSQ {
    margin: 5px 0;
  }
`;

const listItems = ({items}) => {
  return (
    <BpkCard style={{margin: 10, padding: 15}}>
      <Accordion>
        {
          items.map((i) => (
            <JourneyCard
              key={i.country}
              country={i.country}
              journeyList={i.journeyList}
            />
          ))}
      </Accordion>
    </BpkCard>
  );
};

export default listItems;
