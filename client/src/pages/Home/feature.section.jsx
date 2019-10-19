import React from 'react';
import styled from 'styled-components';
import feature1 from '../../Assets/Feature1_svg.svg'
import feature2 from '../../Assets/Feature2_svg.svg'

const Container = styled.div`
 
`;

const FeatureContainer = styled.div`
  width: 100%;
  height: fit-content;
  background-color: #f1f2f8;
  display: flex;
  justify-content: center;
  padding: 0 42px 46px;
  flex-direction: column;
  text-align: center;
  
  .topic {
    font-size: 24px;
    margin: 0;
  }
  
  .description {
    padding-top: 24px;
    margin: 0;
    color: #444560;
  }
  
  img {
    padding: 0 61px;
    height: 256px;
  }
 
`;

const FeatureSection = () => {
  return (
    <Container>
      <FeatureContainer>
        <img src={feature1} alt='feature1'/>
        <p className='topic'>lorem ipsum dolor</p>
        <p className='description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et </p>
      </FeatureContainer>
      <FeatureContainer>
        <img src={feature2} alt='feature2'/>
        <p className='topic'>lorem ipsum dolor</p>
        <p className='description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et </p>
      </FeatureContainer>
    </Container>
  );
};

export default FeatureSection;
