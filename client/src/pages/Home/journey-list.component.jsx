import React from 'react';
import styled from 'styled-components';
import BpkMobileScrollContainer from 'bpk-component-mobile-scroll-container';

const Container = styled.div`
  display: flex;
  > div {
    margin: 0 25px;
  }
  
  > :first-child {
    margin-left: 0;
  }
`;

const JourneyList = ({children}) => {
  return (
    <BpkMobileScrollContainer>
      <Container>
        {children}
      </Container>
    </BpkMobileScrollContainer>
  )
};

export default JourneyList;
