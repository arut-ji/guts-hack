import React from 'react';
import JourneyCard from './JourneyCard';
import styled from 'styled-components';
import { BpkAccordion, BpkAccordionItem, withAccordionItemState } from 'bpk-component-accordion';
import BpkMobileScrollContainer from 'bpk-component-mobile-scroll-container';
import { BpkGridContainer, BpkGridRow, BpkGridColumn } from 'bpk-component-grid';
import JourneyImage from '../LocationList/JourneyImage';
import BpkSectionList, { BpkSectionListSection, BpkSectionListItem } from 'bpk-component-section-list';
import BpkSmallFlightIcon from 'bpk-component-icon/sm/flight';
import BkpSmallWorldIcon from 'bpk-component-icon/sm/world--amer';
import BpkCard from 'bpk-component-card';
import BpkChevronLeft from 'bpk-component-icon/lg/chevron-left';

const Intro = styled.p`
	width: 313px;
	height: 69px;
	font-family: Questrial;
	font-size: 14px;
	font-weight: normal;
	font-stretch: normal;
	font-style: normal;
	line-height: 1.28;
	letter-spacing: normal;
	color: #4b4b4b;
`;

const Header = styled.p`
  margin-top: 0;
	width: 100%;
	height: 30px;
	font-family: Questrial;
	margin-bottom: 40px;
	font-size: 30px;
	font-weight: normal;
	font-stretch: normal;
	font-style: normal;
	letter-spacing: normal;
	color: #000000;
`;

const JourneyListView = (props) => {
	return (
		<BpkGridContainer style = {{padding: 20}}>
			<BpkGridRow>
				<BpkChevronLeft style={{marginTop:10}}/>
			</BpkGridRow>
			<Header>{props.countryName}</Header>
			<Intro>Lorem ipsum dolor sit amet, consectetur adispiscing elit, sed do eiusmod temport incidunt ut</Intro>

			<BpkGridRow>
				{props.journeyList.map((j) => (
					<BpkGridColumn width={5} tabletWidth={12}>
						<JourneyCard stops = {j.stops}name = {j.name} price={j.price} ecoIndex={j.ecoIndex} imgs={j.imgs} />
					</BpkGridColumn>
				))}
			</BpkGridRow>
		</BpkGridContainer>
	);
};

export default JourneyListView;
