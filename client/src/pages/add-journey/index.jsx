import React, {useState} from 'react';
import styled from 'styled-components';
import {withDefaultProps} from  'bpk-react-utils';
import BpkText from 'bpk-component-text';
import FormWithLabel from './form-with-label.component';
import LocationForm from './location-list.component';
import BpkButton from 'bpk-component-button';
import ArrowLeftIconSm from 'bpk-component-icon/sm/long-arrow-left';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  background-color: #f1f2f8;
  padding: 24px;
  
  > div {
    margin-bottom: 17px;
  }
  
  > :nth-child(2) {
    margin-bottom: 36px;
  }
  
  svg {
   margin-bottom: 10px;
  }
`;

const Button = styled(BpkButton)`
  
`;

const FormTitle = styled(
  withDefaultProps(
    BpkText,
    {textStyle: 'lg', tagName: 'h1'}
  )
)`
  color: #5a489b;
`;

const AddJourney = () => {

  const [title, setTitle] = useState('');
  const [country, setCountry] = useState('');
  const [towns, setTowns] = useState('');
  const [description, setDescription] = useState('');


  return (
    <Container>
      <a href='javascript:history.back()'><ArrowLeftIconSm/></a>
      <FormTitle>
        Add new journey
      </FormTitle>
      <FormWithLabel
        id='journey-name'
        name={'Title'}
        value={title}
        onChange={(change) => setTitle(change)}
        placeholder={'title'}
      />
      <FormWithLabel
        id='country'
        name={'Country'}
        value={country}
        onChange={(change) => setCountry(change)}
        placeholder={'country'}
      />
      <FormWithLabel
        id='list-of-town'
        name={'List of towns'}
        value={towns}
        onChange={(change) => setTowns(change)}
        placeholder={'towns'}
      />
      <LocationForm/>
      <FormWithLabel
        id='description'
        name={'Desciption'}
        value={title}
        onChange={(change) => setTitle(change)}
        fieldType={'text-area'}
      />
      <Button>Submit</Button>
    </Container>
  )
};

export default AddJourney;
