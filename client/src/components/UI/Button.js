import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Btn = styled.button`
  height: 2.5rem;
  padding: 0.4rem 1rem;
  color: white;
  font-size: 1rem;
  margin: 0.3rem;
  border-radius: 0.2rem;
  border: none;
  background: ${props =>
    props.success
      ? '#23d160'
      : props.danger
      ? '#f22613'
      : props.primary
      ? '#209cee'
      : 'white'};

  &:focus {
    outline: 0;
    border: 0;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    height: 1.8rem;
    font-size: 0.6rem;
  }
`;

const Button = props => {
  return (
    <Btn
      width={props.width}
      danger={props.danger}
      primary={props.primary}
      success={props.success}
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </Btn>
  );
};

Button.propTypes = {
  width: PropTypes.string,
  danger: PropTypes.bool,
  primary: PropTypes.bool,
  success: PropTypes.bool,
  type: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool
};

export default Button;
