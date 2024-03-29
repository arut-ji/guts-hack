import React from 'react';
import styled from 'styled-components';
import map from '../../Assets/Map_svg.svg'
import {useHistory} from 'react-router-dom';

const Container = styled.div`
  width: 100%;
  //padding: 0 24px;
`;

const Image = styled.div`
  width: 100%;
  height: auto;
  background-color: grey;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TextBox = styled.div`
  width: 100%;
  padding: 0 24px;
  
  p {
    margin-bottom: 42px;
  }
`;

const MapSection = () => {

  const history = useHistory();

  return (
    <Container>
      <TextBox>
        <h1>Stay Eco</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit,
        </p>
      </TextBox>
      <Image
        onClick={() => history.push('/maps')}
      >
        <img src={map} alt="map"/>
      </Image>
    </Container>
  )
};

export default MapSection;
