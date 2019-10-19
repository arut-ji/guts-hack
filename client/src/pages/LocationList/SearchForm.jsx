import React, { useState } from 'react';
import BpkInput, { INPUT_TYPES, CLEAR_BUTTON_MODES, withOpenEvents } from 'bpk-component-input';
import BpkPopover from 'bpk-component-popover';
import { BpkGridContainer, BpkGridRow, BpkGridColumn } from 'bpk-component-grid';
import BpkCard from 'bpk-component-card';
import DatePicker from './DatePicker';

const Search = (props) => {
	const [ origin, setOrigin ] = useState('');
	const [ destination, setDestination ] = useState('');

	const handleInputChange = (event) =>
		event.target.name === 'origin' ? setOrigin(event.target.value) : setDestination(event.target.value);

	return (
		<BpkCard style={{ padding: 10, marginTop: 20, marginBottom: 20, marginLeft: 10, marginRight: 10 }}>
			<BpkGridContainer>
				<BpkGridRow>
					<BpkGridColumn width={4} tabletWidth={12}>
						<label> From </label>

						<BpkInput
							id="origin"
							type={INPUT_TYPES.text}
							name="origin"
							value={origin}
							onChange={handleInputChange}
							placeholder="Country, city or airport"
							clearButtonMode={CLEAR_BUTTON_MODES.whileEditing}
							clearButtonLabel="Clear"
							onClear={() => setOrigin("")}
						/>
					</BpkGridColumn>
					<BpkGridColumn width={4} tabletWidth={12}>
						<label> To </label>
						<BpkInput
							id="destination"
							type={INPUT_TYPES.text}
							name="destination"
							value={destination}
							onChange={handleInputChange}
							placeholder="Country, city or airport"
							clearButtonMode={CLEAR_BUTTON_MODES.whileEditing}
							clearButtonLabel="Clear"
							onClear={() => setDestination("")}
						/>
					</BpkGridColumn>

					<BpkGridRow>
						<BpkGridColumn style={{ paddingLeft: 20, paddingRight: 10 }} width={2} tabletWidth={6}>
							<label>Depart</label>
							<DatePicker />
						</BpkGridColumn>
						<BpkGridColumn style={{ paddingLeft: 10, paddingRight: 20 }} width={2} tabletWidth={6}>
							<label>Return</label>
							<DatePicker />
						</BpkGridColumn>
					</BpkGridRow>
				</BpkGridRow>
			</BpkGridContainer>
		</BpkCard>
	);
};

export default Search;
