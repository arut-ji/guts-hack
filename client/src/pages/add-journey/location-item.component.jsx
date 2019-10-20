import React from 'react';
import styled from 'styled-components';
import {
  BpkAccordionItem,
  withAccordionItemState
} from 'bpk-component-accordion';

const StatefulAccordionItem = withAccordionItemState(BpkAccordionItem);

const Wrapper = styled(StatefulAccordionItem)`
  display: flex;
  flex-direction: column;
  width: 100%;
  *:focus {
    outline: none;
  }
  
  .title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  }
  
  .title > button {
    border: solid 1px #5a489b;
    border-radius: 50%;
    height: fit-content;
    
    background-color: transparent;
  }
`;

const Picture = styled.div`
  width: 50%;
  height: 124px;
  background-color: grey;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

const Description = styled.div`
  width: 50%;
  padding-left: 23px;
`;

const LocationItem = ({id, title, description, image}) => {
  return (
    <Wrapper title={title} id={id}>
      <div>
        <div className="title">
          <h1>{title}</h1>
          <button>X</button>
        </div>
        <Content>
          <Picture/>
          <Description>
            {description}
          </Description>
        </Content>
      </div>
    </Wrapper>
  )
};

export default LocationItem;
