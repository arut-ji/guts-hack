import React, { useState } from 'react';
import BpkInput, { INPUT_TYPES, CLEAR_BUTTON_MODES, withOpenEvents } from 'bpk-component-input';
import BpkPopover from 'bpk-component-popover';
import { BpkGridContainer, BpkGridRow, BpkGridColumn } from 'bpk-component-grid';
import BpkCard from 'bpk-component-card';
import DatePicker from './DatePicker';
import BpkButton from 'bpk-component-button';
import {useHistory} from 'react-router-dom';

const Search = ({origin, destination}) => {

  const history = useHistory();

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  const [departDate, setDepartDate] = useState(Date.now());
  const [returnDate, setReturnDate] = useState(tomorrow);

  const [formOrigin, setFormOrigin] = useState(origin)
  const [formDestination, setFormDestination] = useState(destination);

	return (
		<BpkCard style={{ padding: 10, marginTop: 20, marginBottom: 20, marginLeft: 10, marginRight: 10,   backgroundColor: '#f1f2f8'}}>
			<BpkGridContainer>
				<BpkGridRow>
					<BpkGridColumn width={4} tabletWidth={12}>
						<label> From </label>

						<BpkInput
							id="origin"
							type={INPUT_TYPES.text}
							name="origin"
							value={formOrigin}
							onChange={(e) => setFormOrigin(e.target.value)}
							placeholder="Country, city or airport"
							clearButtonMode={CLEAR_BUTTON_MODES.whileEditing}
							clearButtonLabel="Clear"
							onClear={() => setFormOrigin("")}
						/>
					</BpkGridColumn>
					<BpkGridColumn width={4} tabletWidth={12}>
						<label> To </label>
						<BpkInput
							id="destination"
							type={INPUT_TYPES.text}
							name="destination"
							value={formDestination}
              onChange={(e) => setFormDestination(e.target.value)}
							placeholder="Country, city or airport"
							clearButtonMode={CLEAR_BUTTON_MODES.whileEditing}
							clearButtonLabel="Clear"
							onClear={() => setFormDestination("")}
						/>
					</BpkGridColumn>

					<BpkGridRow>
						<BpkGridColumn style={{ paddingLeft: 20, paddingRight: 10 }} width={2} tabletWidth={6}>
							<label>Depart</label>
							<DatePicker onSelected={(newDate) => setDepartDate(newDate)}/>
						</BpkGridColumn>
						<BpkGridColumn style={{ paddingLeft: 10, paddingRight: 20 }} width={2} tabletWidth={6}>
							<label>Return</label>
							<DatePicker
                onSelected={(newDate) => setDepartDate(newDate)}
                date={returnDate}
              />
						</BpkGridColumn>
					</BpkGridRow>
          <BpkGridColumn onClick={() => history.replace(`/locations?from=${formOrigin}&to=${formDestination}`)}>
            <BpkButton>Search</BpkButton>
          </BpkGridColumn>
				</BpkGridRow>
			</BpkGridContainer>
		</BpkCard>
	);
};

export default Search;
