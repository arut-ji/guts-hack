import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
  padding: 77px 24px;
`;

const FeedbackBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 24px;
  line-height: 34px;
  
  > p {
    margin: 0;
  }
  
  > p:first-child {
    text-align: left;
  }
  
  > p:nth-last-child(2) {
    text-align: right;
  }
`;

const UserName = styled.div`
  font-size: 18px;
  display: flex;
  justify-content: flex-end;
`;

const Divider = styled.div`
   background-color: black;
   width: 100%;
   height: 1px;
   margin: 28px 0;
`;

const FeedbackSection = () => {
  return (
    <Container>
      <h1>Our Feedback</h1>
      <FeedbackBox>
        <p>"</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
        <p>"</p>
        <UserName>
          - Nguyễn Quế Anh
        </UserName>
      </FeedbackBox>
      <Divider/>
      <FeedbackBox>
        <p>"</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
        <p>"</p>
        <UserName>
          - Davea Butler
        </UserName>
      </FeedbackBox>
    </Container>
  );
};

export default FeedbackSection;
