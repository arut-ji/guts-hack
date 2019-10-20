import React, {useState} from 'react';
import styled from 'styled-components';
import BpkInput from "bpk-component-input";
import BpkText from "bpk-component-text";

const Container = styled.div`
  width: 100%;
  height: 145px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  background-color: #f1f2f8;
  padding: 42px 25px;
  color: #5a489b;
  
  * {
    margin: 5px 0;
  }
`;

const SearchSection = ({place, onChange}) => {

  return (
    <Container>
      <BpkText tagName={'h1'}>
        Where to go
      </BpkText>
      <BpkInput
        id="origin"
        type={BpkInput.text}
        name="origin"
        placeholder="Country"
        clearButtonMode={BpkInput.whileEditing}
        clearButtonLabel="Clear"
        onChange={(e) => onChange(e.target.value)}
        value={place}
      />
    </Container>
  )
};

export default SearchSection;
