import React from 'react';
import styled from 'styled-components';
import HeroSection from "./hero.section";
import JourneySection from "./journeys.section";
import MapSection from "./map.section";
import FeatureSection from "./feature.section";
import FeedbackSection from "./Feedback.section";
import FooterSection from "./footer.section";
import Navbar from "../../shared/Navbar";
import EcoDataSection from '../EcoDataTest/index';
import Footer from '../../shared/Footer';
import AddJourneySection from './addJourney.section'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: fit-content;
`;

const Home = () => {
  return (
    <Container>
      <HeroSection/>
      <JourneySection/>
      <MapSection/>
      <EcoDataSection/>
      <FeatureSection/>
      <FeedbackSection/>
      <AddJourneySection/>
    </Container>
  )
};

export default Home;
