import React from 'react';
import BpkText from "bpk-component-text";
import styled from 'styled-components';
import {withDefaultProps} from 'bpk-react-utils';

const Container = styled.div`
  width: 100%;
  background-color: #444560;
  padding: 17px 0;
`;

const Row = styled.div`
  padding: 17px 43px;
`;

const Title = styled(withDefaultProps(BpkText, {
  textStyle: 'm',
  tagName: 'h3'
}))`
  color: #ff9400;
`;

const Text = styled(withDefaultProps(BpkText, {
  textStyle: 'm',
  tagName: 'p'
}))`
  color: white;
`;

const FooterSection = () => {
  return (
    <Container>
      <Row>
        <Title tagName="h3" textStyle="m">Explore</Title>
        <Text tagName="p" textStyle="m">All journey</Text>
        <Text tagName="p" textStyle="m">All location</Text>
        <Text tagName="p" textStyle="s">All town</Text>
      </Row>

      <Row>
        <Title tagName="h3" textStyle="m">Sustainable</Title>
        <Text tagName="p" textStyle="s">Why</Text>
        <Text tagName="p" textStyle="s">How</Text>
      </Row>

    </Container>
  )
};

export default FooterSection;
