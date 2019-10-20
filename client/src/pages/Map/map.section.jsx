import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {withRtlSupport} from 'bpk-component-icon';
import LocationIconLg from 'bpk-component-icon/lg/location';
import BpkMap, {BpkMapMarker, MARKER_TYPES, withGoogleMapsScript} from 'bpk-component-map';
import {BpkExtraLargeSpinner} from 'bpk-component-spinner';
import LeafIcon from 'bpk-component-icon/sm/eco-leaf';

import markerData from './markerData';
import geoCatalog from './geoCatalog';
import countryToDetails, {countries} from './countryToDetails';

import './style.scss';

// console.log(geoCatalog);
console.log(countryToDetails);
// console.log(countries);
const AlignedLandmarkIconLg = withRtlSupport(LocationIconLg);

const Container = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  .BpkMapMarker_bpk-map-marker__328e9 .BpkMapMarker_bpk-map-marker--secondary__2E1Qp .BpkMapMarker_bpk-map-marker--dynamic__3iT8S {
    background-color: white;
  }
`;

const MapMarker = styled(BpkMapMarker)`
 * {
  fill: green;
  opacity: 0;
 }
`;

const GreenIcon = styled(LeafIcon)`
  

  .low {
    fill: $bpk-color-sagano;
  }

  .mid {
    fill: $bpk-color-glencoe;
  }

  .high {
    fill: $bpk-color-monteverde;
  }
`

const Spinner = styled(BpkExtraLargeSpinner)`
  position: absolute;
  left: 50%;
  top: 50%;
  display: ${props => props.loading ? 'block' : 'none'};
`;

const MAP_URL = 'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAlbAmT2oXbDkDpDUZA-2h0DITi3K6V7zA';

const BpkMapWithScript = withGoogleMapsScript(BpkMap);
const generateMarkers = () => {
  const markers = []
  countries.forEach((countryName) => {
    const details = countryToDetails[countryName];
    const {epi, locations} = details;
    if(!locations[0] || !epi)
    return;
    console.log(epi);
    markers.push(<MapMarker
        key={markers.length}
        //{epi.ecosystemVitality <= 40 ? 'low' : epi.ecosystemVitality <= 70 ? 'mid' : 'high'}
        icon={<GreenIcon className='low'/>}
        type={MARKER_TYPES.secondary}
        position={{ latitude: locations[0][0], longitude: locations[0][1] }}
        onClick={() => {}}
      />)
  })
  
  return markers;
}

const MapSection = () => {
  
  const [loading, setLoading] = useState(false);
  const [coordinate, setCoordinate] = useState({
    latitude: 27.9881,
    longitude: 86.925,
  });
  
  useEffect(() => {
    setLoading(true);
    navigator.geolocation.getCurrentPosition((result) => {
      setCoordinate({
        latitude: result.coords.latitude,
        longitude: result.coords.longitude
      });
      setLoading(false)
    })
  }, []);

  return (
    <Container>
      {/* <Spinner loading={loading}/> */}
      <BpkMapWithScript
        zoom={2}
        googleMapURL={MAP_URL}
        showControls={true}
        panEnabled={true}
        center={{...coordinate}}
      >
      
        <BpkMapMarker
          icon={<AlignedLandmarkIconLg />}
          type={MARKER_TYPES.primary}
          position={{...coordinate}}
          onClick={() => {}}
          large
          selected
        />

      {
        generateMarkers()
      }
      
          {/* <BpkMapMarker
            icon={<LeafIcon />}
            type={MARKER_TYPES.primary}
            position={{ latitude: 27.9881, longitude: 86.9 }}
            onClick={() => {}}
            large
            selected
          /> */}
      </BpkMapWithScript>
    </Container>
  )
};

export default MapSection;
