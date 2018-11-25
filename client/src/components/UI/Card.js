import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: white;
  box-shadow: 0.3rem 0.3rem 2rem 0rem rgba(0, 0, 0, 0.1);
  display: flex;
  padding: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Lato', sans-serif;

  @media (max-width: 900px) {
    width: 90vw;
  }
`;

const card = props => {
  return <Container>{props.children}</Container>;
};

export default card;
