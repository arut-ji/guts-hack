import React from 'react';
import styled from 'styled-components';
import hongkong from '../../Assets/hongkong_pack.png'
import {Link} from  'react-router-dom';

const Container = styled.div`
  width: calc(216 / 375 * 100vw);
  font-size: 18px;
`;

const PictureSection = styled.div`
   height: 20vh;
   width: 100%;
   
   img {
     height: 100%;
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
  margin-bottom: 19px;
  
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

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 12px;
  color: #ff9400;
  cursor: pointer;
`;

const JourneyCard = ({imgUrl, title, location}) => {

  return (
    <Container>
      <PictureSection>
        <img src={hongkong} alt={title}/>
      </PictureSection>
      <DetailsSection>
        <h1>{title}</h1>
        <h2>{location}</h2>
        <StyledLink to={'/journey-details'}>See Details ></StyledLink>
      </DetailsSection>
    </Container>
  )
};

export default JourneyCard;
