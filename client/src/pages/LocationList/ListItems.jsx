import React from 'react';
import { BpkAccordion, BpkAccordionItem, withAccordionItemState } from 'bpk-component-accordion';
import BpkCard from 'bpk-component-card';
import BpkThemeProvider from 'bpk-theming';

import JourneyCard from './JourneyCard';



const listItems = () => {
	const items = [
		{
			country: 'Hong Kong',
			journeyList: [
				{
					name: 'Hong Kong journey',
					ecoIndex: 60,
					price: '£100',
					img:
						'https://www.todayonline.com/sites/default/files/styles/new_app_article_detail/public/photos/43_images/hk2.jpg?itok=zX5eumeD'
				}
			],
			price: '£100'
		},

		{
			country: 'United Kingdom',
			journeyList: [
				{
					name: 'Glasgow adventure',
					ecoIndex: 99,
					price: '£100',
					img:
						'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.wow247.co.uk%2Fwp-content%2Fuploads%2F2015%2F01%2Funiversity-of-glasgow-tower.jpg&f=1&nofb=1'
				},
				{
					name: 'London journey',
					ecoIndex: 59,
					img: 'https://static.thousandwonders.net/Big.Ben.original.18069.jpg',
					price: '£100'
				}
			]
		}
	];

	return (
		<BpkCard style={{ margin: 10, padding: 15 }}>
			<BpkAccordion>
				{items.map((i) => <JourneyCard key={i.country} country={i.country} journeyList={i.journeyList} />)}
			</BpkAccordion>
		</BpkCard>
	);
};

export default listItems;
