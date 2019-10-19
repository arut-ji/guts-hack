import React from 'react';
import styled from 'styled-components';

const Container = styled.div`

`;

const FeatureContainer = styled.div`
  width: 100%;
  height: 50vh;
  background-color: #f1f2f8;
  border-bottom: 1px white solid;
`;

const FeatureSection = () => {
  return (
    <Container>
      <FeatureContainer></FeatureContainer>
      <FeatureContainer></FeatureContainer>
      <FeatureContainer></FeatureContainer>
    </Container>
  );
};

export default FeatureSection;
