import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  //padding: 0 24px;
`;

const Image = styled.div`
  width: 100%;
  height: 50vh;
  background-color: grey;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TextBox = styled.div`
  width: 100%;
  padding: 0 24px;
`;

const MapSection = () => {
  return (
    <Container>
      <TextBox>
        <h1>Stay Eco</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit,
        </p>
      </TextBox>
      <Image>
        <h1>Map</h1>
      </Image>
    </Container>
  )
};

export default MapSection;
