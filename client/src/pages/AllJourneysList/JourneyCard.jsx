import React from 'react';
import styled from 'styled-components';
import { BpkAccordion, BpkAccordionItem, withAccordionItemState } from 'bpk-component-accordion';
import BpkMobileScrollContainer from 'bpk-component-mobile-scroll-container';
import { BpkGridContainer, BpkGridRow, BpkGridColumn } from 'bpk-component-grid';
import JourneyImage from '../LocationList/JourneyImage';
import BpkSectionList, { BpkSectionListSection, BpkSectionListItem } from 'bpk-component-section-list';
import BpkSmallFlightIcon from 'bpk-component-icon/sm/flight';
import BkpEcoLeafIcon from 'bpk-component-icon/lg/eco-leaf';
import BpkCard from 'bpk-component-card';
import BpkButton from 'bpk-component-button';

const Image = styled.div`
	border-radius: 6px 6px 0 0;
	height: 16vh;
	width: 100%;
	background-image: url(${(props) => props.url});
	background-size: cover;
	justify-content: center;
	align-items: center;
	display: flex;
	flex-direction: row;
`;

const EcoIndex = styled.span`
	width: 32px;
	height: 16px;
	font-family: Questrial;
	font-size: 16px;
	padding: 5;
	font-weight: normal;
	font-stretch: normal;
	font-style: normal;
	line-height: normal;
	letter-spacing: normal;
	color: #00a698;
`;

const JourneyHeader = styled.h5`
	width: 200px;
	font-family: Questrial;
	font-size: 20px;
	margin-top: 30px;
    margin-bottom: 0;
	font-weight: normal;
	font-stretch: normal;
	font-style: normal;
	line-height: normal;
	letter-spacing: normal;
	color: #000000;
`;

const MoreInfo = styled.p`
	width: 229px;
	height: 16px;
    margin-top: 3px;
	margin-bottom: 20px;
	font-family: Questrial;
	font-size: 16px;
	font-weight: normal;
	font-stretch: normal;
	font-style: normal;
	line-height: normal;
	letter-spacing: normal;
	color: #484848;
`;

const Price = styled.span`
	width: 59px;
	height: 20px;
	font-family: Questrial;
	font-size: 20px;
	font-weight: normal;
	font-stretch: normal;
	font-style: normal;
	line-height: normal;
	letter-spacing: normal;
	color: #484848;
`;

const JourneyCard = (props) => {
	return (
		<BpkCard style={{ paddingBottom: 20 }}>
			<BpkMobileScrollContainer>
				<div style={{ display: 'flex' }}>
					{props.imgs.map((i) => (
						<div
							style={{
								minWidth: '13.125rem',
								height: '100%',
								justifyContent: 'center',
								paddingRight: 10
							}}
						>
							<Image url={i} />
						</div>
					))}
				</div>
			</BpkMobileScrollContainer>

			<div>
				<EcoIndex>
					<BkpEcoLeafIcon
						style={{
							paddingTop: 5,
							fill: '#00a698'
						}}
					/>{' '}
					{props.ecoIndex}
				</EcoIndex>
				<JourneyHeader>{props.name}</JourneyHeader>
				<MoreInfo> Lorem Ipsum Lorem </MoreInfo>
				<div style= {{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
					<Price> {props.price} </Price>
					<BpkButton
						style={{
							fontWeight: 'normal',
							fontStretch: 'normal',
							fontStyle: 'normal',
							lineHeight: 1.5,
							letterSpacing: 'normal',
							textAlign: 'center'
						}}
					>
						BOOK
					</BpkButton>
				</div>
			</div>
		</BpkCard>
	);
};

export default JourneyCard;
