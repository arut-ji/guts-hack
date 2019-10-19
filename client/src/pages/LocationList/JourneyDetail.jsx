import React from 'react';
import styled from 'styled-components';
import { BpkAccordion, BpkAccordionItem, withAccordionItemState } from 'bpk-component-accordion';
import { BpkGridContainer, BpkGridRow, BpkGridColumn } from 'bpk-component-grid';
import JourneyImage from './JourneyImage';
import BpkSectionList, { BpkSectionListSection, BpkSectionListItem } from 'bpk-component-section-list';
import BpkSmallFlightIcon from 'bpk-component-icon/sm/flight';
import BkpSmallWorldIcon from 'bpk-component-icon/sm/world--amer'

const JourneyDetail = (props) => {
    return (
        <BpkGridRow>
					<BpkGridColumn width={4} tabletWidth={6}>
						<JourneyImage img = {props.img} />
					</BpkGridColumn>
					<BpkGridColumn width={8} tabletWidth={6}>
						<h4 style={{ margin: 0 }}>{props.name}</h4>

						<BpkSectionList style={{ fontSize: 12 }}>
							<BpkSectionListItem style={{ color: 'blue', margin: 0, padding: 0 }} onClick={() => {}}>
								<BpkSmallFlightIcon className="abc-icon__flight" />
								from {props.price}
							</BpkSectionListItem>

							<BpkSectionListItem style={{ color: 'green', margin: 0, padding: 0, display: 'flex', justifyContent: 'space-between' }} href="#">
								<BkpSmallWorldIcon className="abc-icon_world_amer" />
								<span style= {{float:"right"}}>Eco index: {props.ecoIndex}</span> 
							</BpkSectionListItem>
						</BpkSectionList>
					</BpkGridColumn>
                    <hr></hr>
				</BpkGridRow>

    )
}

export default JourneyDetail
