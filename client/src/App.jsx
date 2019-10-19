import React, { useState } from 'react';
import BpkButton from 'bpk-component-button';
import BpkText from 'bpk-component-text';
import STYLES from './App.scss';
import Home from './pages/Home';
import LocationList from './pages/LocationList/LocationListView';
import JourneyListView from './pages/AllJourneysList/JourneyListView';

const c = (className) => STYLES[className] || 'UNKNOWN';

const App = () => {
	const [ count, setCount ] = useState(0);

	const country = {
		countryName: 'United Kingdom',
		journeyList: [
			{ 
        stops: ['Kelvingrove park', 'Cathedral', 'George Square'],
				name: 'Glasgow adventure',
				ecoIndex: 99,
				price: '£100',
				imgs: [
					'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.wow247.co.uk%2Fwp-content%2Fuploads%2F2015%2F01%2Funiversity-of-glasgow-tower.jpg&f=1&nofb=1',
					'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.wow247.co.uk%2Fwp-content%2Fuploads%2F2015%2F01%2Funiversity-of-glasgow-tower.jpg&f=1&nofb=1',
					'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.wow247.co.uk%2Fwp-content%2Fuploads%2F2015%2F01%2Funiversity-of-glasgow-tower.jpg&f=1&nofb=1'
				]
			},
			{
        stops: ['Big Ben', 'Westminster'],
				name: 'London journey',
				ecoIndex: 59,
				imgs: [
					'https://static.thousandwonders.net/Big.Ben.original.18069.jpg',
					'https://static.thousandwonders.net/Big.Ben.original.18069.jpg',
					'https://static.thousandwonders.net/Big.Ben.original.18069.jpg',
					'https://static.thousandwonders.net/Big.Ben.original.18069.jpg'
				],
				price: '£100'
			}
		]
	};

	return (
		<div>
			{/* <JourneyListView stops ={country.stops} location={country.countryName} journeyList={country.journeyList} /> */}
      <LocationList />
		</div>
	);
};

export default App;
