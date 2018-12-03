import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  background-color: white;
  box-shadow: 0.3rem 0.3rem 2rem 0rem rgba(0, 0, 0, 0.1);
  display: flex;
  padding: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Lato', sans-serif;
  max-width: 70vw;

  @media (max-width: 768px) {
    width: 70vw;
  }
`;

const card = props => {
  return <Wrapper>{props.children}</Wrapper>;
};

card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.array,
    PropTypes.object
  ])
};

export default card;
