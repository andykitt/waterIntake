import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const StatsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 1rem;
  letter-spacing: 0.1srem;

  @media (max-width: 768px) {
    font-size: 0.5rem;
  }
`;

const StatsBlock = styled.div`
  height: 100%;
  text-align: center;
  margin: 1rem;
`;

const H2 = styled.h2`
  font-weight: 300;
`;

const Stats = props => {
  return (
    <StatsContainer>
      <StatsBlock>
        <H2>TODAY'S TARGET</H2>
        <h3>{props.state.target}ML</h3>
      </StatsBlock>
      <StatsBlock>
        {props.state.dayIntakeAmount >= props.state.target ? (
          <React.Fragment>
            <H2>WELL DONE</H2>
            <h4>TARGET REACHED</h4>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <H2>{`Only ${props.state.target -
              props.state.dayIntakeAmount}ml`}</H2>
            <h4>TO GO!</h4>
          </React.Fragment>
        )}
      </StatsBlock>
      <StatsBlock>
        <H2>{`${Math.round(
          (props.state.dayIntakeAmount * 100) / props.state.target
        )}%(${props.state.dayIntakeAmount}ml)`}</H2>
        <h4>OF YOUR TARGET REACHED</h4>
      </StatsBlock>
    </StatsContainer>
  );
};

const mapStateToProps = state => ({
  state
});
export default connect(mapStateToProps)(Stats);
