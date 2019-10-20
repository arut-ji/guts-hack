import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import JourneyList from "./journey-list.component";
import JourneyCard from "./journey-card.component";
import {JourneyRepository} from '../../repositories/journey.repository';
import {Link} from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 24px;
  
  .topic {
    margin-top: 30px;
    margin-bottom: 26px;
  }
`;

const StyledLink = styled(Link)`
  color: #73cec6;
  font-size: 16px;
  margin-bottom: 47px;
  text-decoration: none;
`;

const JourneySection = () => {

  const [journeys, setJourneys] = useState([]);
  useEffect(() => {
    JourneyRepository
      .fetchFeatured()
      .then((fetchedJourneys) => {
        console.log(fetchedJourneys)
        setJourneys(fetchedJourneys);
      })
  }, []);

  return (
    <Container>
      <h1 className='topic'>Journeys</h1>
      <JourneyList>
        {
          journeys.map(({id, title, location, imgUrl}) => (
            <JourneyCard
              key={id}
              title={title}
              location={location}
              imgUrl={''}
            />
          ))
        }
      </JourneyList>
      <StyledLink to={'/locations'}>
        See All Journey >
      </StyledLink>
    </Container>
  )
};

export default JourneySection;
