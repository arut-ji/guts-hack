import React from 'react';
import styled from 'styled-components';
import BpkInput, {INPUT_TYPES} from 'bpk-component-input';
import BpkLabel from 'bpk-component-label';
import BpkTextArea from 'bpk-component-textarea';

const Wrapper = styled.div`
  label {
    color: #5a489b;   
    font-size: 16px;
  }

`

const Input = styled(BpkInput)`
`;

const Label = styled(BpkLabel)`
  margin-bottom: 9px;
`;

const TextArea = styled(BpkTextArea)``;

const FormWithLabel = ({fieldType, onChange, id, name, placeholder = '', value}) => {
  return  (
    <Wrapper>
      <Label htmlFor="origin">{name}</Label>
      {
        fieldType === 'text-area' ?
          <TextArea
            id={id}
            name={name}
            value={value}
            onChange={(e) => onChange(e.target.value)}
          />
          :
          <Input
            id={id}
            type={INPUT_TYPES.text}
            name={name}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
          />
      }
    </Wrapper>
  )
}

export default FormWithLabel;
