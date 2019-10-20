import React from 'react';
import styled from 'styled-components';
import { BpkAccordion, BpkAccordionItem, withAccordionItemState } from 'bpk-component-accordion';
import { BpkGridContainer, BpkGridRow, BpkGridColumn } from 'bpk-component-grid';
import JourneyImage from './JourneyImage';
import BpkSectionList, { BpkSectionListSection, BpkSectionListItem } from 'bpk-component-section-list';
import BpkSmallFlightIcon from 'bpk-component-icon/sm/flight';
import BkpSmallWorldIcon from 'bpk-component-icon/sm/world--amer'
import JourneyDetail from './JourneyDetail';
import BpkButton from 'bpk-component-button';
import {Link} from 'react-router-dom';

const StatefulAccordionItem = withAccordionItemState(BpkAccordionItem);

const AccordionItem = styled(StatefulAccordionItem)`
   .BpkAccordionItem_bpk-accordion__title-text__3a4GN {
      color: #00a698;
   }
   
   .BpkAccordionItem_bpk-accordion__toggle-button__eJ9jA:focus {
      outline: 0;
   }
`;

const StyledLink = styled(Link)`
  margin-top: 5px;
  text-decoration: none;
  color: rgba(7,166,153,0.3);
  font-size: 1.3em;
`;

const JourneyCard = (props) => {
	return (
		<AccordionItem title={props.country}>
			<BpkGridContainer>
				<div>
          {props.journeyList.map(j => <JourneyDetail name = {j.name} ecoIndex = {j.ecoIndex} price = {j.price} img= {j.img }/>)}
        </div>
			</BpkGridContainer>
      <StyledLink to={'/journeys'}>
        See more
      </StyledLink>
		</AccordionItem>
	);
};
export default JourneyCard;
