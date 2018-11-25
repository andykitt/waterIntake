import React from 'react';
import styled from 'styled-components';

const Backdrop = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 999;
  overflow-y: scroll;
`;

const backdrop = props => {
  return <Backdrop onClick={props.onClick}>{props.children}</Backdrop>;
};

export default backdrop;
