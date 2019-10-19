import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {withRtlSupport} from 'bpk-component-icon';
import LocationIconLg from 'bpk-component-icon/lg/location';
import BpkMap, {BpkMapMarker, MARKER_TYPES, withGoogleMapsScript} from 'bpk-component-map';
import {BpkExtraLargeSpinner} from 'bpk-component-spinner';

const AlignedLandmarkIconLg = withRtlSupport(LocationIconLg);

const Container = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
`;

const Spinner = styled(BpkExtraLargeSpinner)`
  position: absolute;
  left: 50%;
  top: 50%;
  display: ${props => props.loading ? 'block' : 'none'};
`;

const MAP_URL = 'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAlbAmT2oXbDkDpDUZA-2h0DITi3K6V7zA';

const BpkMapWithScript = withGoogleMapsScript(BpkMap);

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
      <Spinner loading={loading}/>
      <BpkMapWithScript
        zoom={13}
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
      </BpkMapWithScript>
    </Container>
  )
};

export default MapSection;
