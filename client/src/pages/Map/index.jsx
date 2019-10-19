import React, {useState} from 'react';
import styled from 'styled-components';
import SearchSection from "./search.section";
import MapSection from "./map.section";

const Container = styled.div`
  height: 100vh;
  width: 100%;
`;

const Map = () => {

  const [place, setPlace] = useState('');

  return (
    <Container>
      <SearchSection place={place} onChange={(newPlace) => setPlace(newPlace)}/>
      <MapSection/>
    </Container>
  )
};

export default Map;
