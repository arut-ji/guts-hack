import React, {useState} from 'react';
import styled from 'styled-components';
import BpkModal from 'bpk-component-modal';
import FormWithLabel from '../form-with-label.component';
import BpkButton from 'bpk-component-button';

const Button = styled(BpkButton)`

`;

const Wrapper = styled.div`
  
`;

const Modal = styled(BpkModal)`
  padding: 18px auto;
  > div > div{
    margin-bottom: 22px;
  }
`;

const AddLocation = ({id, isOpen, onClose, title}) => {

  const [locationName, setLocationName] = useState('')
  const [coordinate, setCoordinate] = useState('')
  const [description, setDescription] = useState('');

  return (
    <Wrapper id={'modal-container'}>
      <Modal
        id={id}
        isOpen={isOpen}
        title={title}
        closeLabel={'Close Modal'}
        getApplicationElement={() => document.getElementById('pagewrap')}
        renderTarget={() => document.getElementById('modal-container')}
        onClose={onClose}
      >
        <FormWithLabel
          id='location-name'
          name={'Location Name'}
          value={locationName}
          onChange={(change) => setLocationName(change)}
          placeholder={'Location'}
        />
        <FormWithLabel
          id='location'
          name={'Location'}
          value={coordinate}
          onChange={(change) => setCoordinate(change)}
          placeholder={'coordinate'}
        />
        <FormWithLabel
          id='description'
          name={'Desciption'}
          value={description}
          onChange={(change) => setDescription(change)}
          fieldType={'text-area'}
        />
        <Button>Save</Button>
      </Modal>
    </Wrapper>
  )
};

export default AddLocation;
