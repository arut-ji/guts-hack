import React from 'react'
import styled from 'styled-components';
import ArrowRightIconSm from 'bpk-component-icon/sm/long-arrow-right';
import {useHistory} from 'react-router-dom';

const Container = styled.div`
  padding: 42px 24px;
  background-color: #d0eeec;
  
  button {
    padding: 10px 14px;
    background-color: transparent;
    border-radius: 4px;
    border: solid 2px #00a698;
    display: flex;
    justify-content: center;
    color: #00a698;
    float: right;
    margin: 22px 0 0;
  }
  
  svg {
      margin-left: 5px;
      margin-top: 3px;
      fill: #00a698;
  }
`;

const AddTopic = styled.div`
  font-size: 32px;
  color: #0770e3;
  line-height: normal;
`;

const AddJourneySection = () => {

  const history = useHistory();

  return (
    <Container>
      <AddTopic>
        Want to share your Journey ?
      </AddTopic>
      <button onClick={() => history.push('/add-journey')}>Add Journey<ArrowRightIconSm/></button>
    </Container>
  );
};

export default AddJourneySection;
