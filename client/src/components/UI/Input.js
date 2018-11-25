import React from 'react';
import styled from 'styled-components';

const InputBox = styled.input`
  border-radius: 5rem solid #4286f4;
  padding: 1rem;
  width: 6rem;
  height: 2rem;
  font-size: 1.5rem;
`;

const InputWrapper = styled.div`
  display: inline-block;
  position: relative;
  height: 100%;
  margin: 2rem auto;
`;

const Suffix = styled.span`
  position: absolute;
  right: 0.1rem;
  height: 4rem;
  width: 2rem;
  line-height: 3.5rem;
  top: 0.1rem;
  background-color: white;
  text-align: center;
  font-size: 1rem;
`;

const Label = styled.label`
  position: absolute;
  top: -1rem;
`;

const Input = props => {
  return (
    <InputWrapper>
      <Label htmlFor="inputValue">ADD WATER INTAKE:</Label>
      <InputBox
        min={props.min}
        max={props.max}
        style={props.style}
        pattern={props.pattern}
        height={props.height}
        disabled={props.disabled}
        required={props.required}
        onChange={props.onChange}
        name={props.name}
        type={props.type}
      />
      <Suffix>{props.suffix}</Suffix>
    </InputWrapper>
  );
};

export default Input;
