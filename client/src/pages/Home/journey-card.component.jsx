import React from 'react';
import styled from 'styled-components';
import hongkong from '../../Assets/hongkong_pack.png'
import rightarrow from '../../Assets/chevron-right.svg'

const Container = styled.div`
  width: calc(216 / 375 * 100vw);
  font-size: 18px;
`;

const PictureSection = styled.div`
   height: 20vh;
   width: 100%;
   
   img {
     height: 100%
     border-radius: 6px 6px 0 0; 
   }
`;

const DetailsSection = styled.div`
  padding: 11px 15px;
  background-color: #042759;
  font-size: inherit;
  border-radius: 0 0 6px 6px;
  color: white;
  z-index: 1;
  * {
    margin: -4px 0;
  }
  h1 {
    font-size: 18px;
  }
  h2 {
    font-size: 14px;
    color: #bababa;
  }
  p {
    font-size: 12px;
    color: #ff9400;
  }
  i {
    color: #ff9400;
    font-size: 12px;
  }
`;

const JourneyCard = () => {
  return (
    <Container>
      <PictureSection>
        <img  src={hongkong} alt="hongkong"/>
      </PictureSection>
      <DetailsSection>
        <h1>Hong Kong Pack</h1>
        <h2>Hong Kong</h2>
        <p>See Details ></p>
      </DetailsSection>
    </Container>
  )
};

export default JourneyCard;
