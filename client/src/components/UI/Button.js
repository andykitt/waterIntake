import React from 'react';
import styled from 'styled-components';

const Btn = styled.button`
  height: 2.5rem;
  padding: 0.4rem 1rem;
  color: white;
  font-size: 1rem;
  border-radius: 5px;
  border: none;
  background: ${props =>
    props.success ? '#00b16a' : props.danger ? '#f22613' : 'white'};

  &:focus {
    outline: 0;
    border: 0;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const Button = props => {
  return (
    <div style={{ padding: props.padding }}>
      <Btn
        width={props.width}
        danger={props.danger}
        success={props.success}
        type={props.type}
        onClick={props.onClick}
        disabled={props.disabled}
      >
        {props.children}
      </Btn>
    </div>
  );
};

export default Button;
