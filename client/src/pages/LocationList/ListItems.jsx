import React from 'react';
import { BpkAccordion, BpkAccordionItem, withAccordionItemState } from 'bpk-component-accordion';
import BpkCard from 'bpk-component-card';
import JourneyCard from './JourneyCard';
import styled from 'styled-components';

const listItems = ({items}) => {
  const Accordion = styled(BpkAccordion)`
   
  `;

	return (
		<BpkCard style={{ margin: 10, padding: 15 }}>
			<Accordion>
				{items.map((i) => <JourneyCard key={i.country} country={i.country} journeyList={i.journeyList} />)}
			</Accordion>
		</BpkCard>
	);
};

export default listItems;
