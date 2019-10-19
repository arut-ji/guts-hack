import React from 'react';
import styled from 'styled-components';
import JourneyList from "./journey-list.component";
import JourneyCard from "./journey-card.component";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 24px;
`;

const StyledLink = styled.p`
  color: #73cec6;
  font-size: 16px;
`;

const JourneySection = () => {
  return (
    <Container>
      <h1>Journeys</h1>
      <JourneyList>
        {
          (new Array(5).fill(5).map(_ => <JourneyCard/>))
        }
      </JourneyList>
      <StyledLink>
        See All Journey >
      </StyledLink>
    </Container>
  )
};

export default JourneySection;
