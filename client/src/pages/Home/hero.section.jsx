import React from 'react';
import styled from  'styled-components';
import green from '../../Assets/green.jpg'

const Container = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  height: 250px;
  justify-content: center;
  align-items: center;
  
  div {
    position: absolute;
    text-align: center;
    font-family: 'Questrial', sans-serif;
    line-height: 0.8;
    font-size: 60px;
    background-color: rgba(255, 255, 255, 0.82);
    padding: 23px 10px;
  }
`;

const HeroSection = () => {
  return (
    <Container>
      <img src={green} alt="green"/>
      <div>Travel<br/>eco</div>
    </Container>
  )
};

export default HeroSection;
