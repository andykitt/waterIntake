import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const StatsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;

const StatsBlock = styled.div`
  height: 100%;
  text-align: center;
  margin: 1rem;
`;

const H2 = styled.h2`
  font-size: 1rem;
  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;

const H4 = styled.h4`
  font-weight: 300;
`;

const Stats = props => {
  return (
    <StatsContainer>
      <StatsBlock>
        <H2>{props.state.target}ml</H2>
        <H4>Today's Target</H4>
      </StatsBlock>
      <StatsBlock>
        {props.state.dayIntakeAmount >= props.state.target ? (
          <React.Fragment>
            <H2>Well Done!</H2>
            <H4>Target Reached</H4>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <H2>{`Only ${props.state.target -
              props.state.dayIntakeAmount}ml`}</H2>
            <H4>To Go!</H4>
          </React.Fragment>
        )}
      </StatsBlock>
      <StatsBlock>
        <H2>{`${Math.round(
          (props.state.dayIntakeAmount * 100) / props.state.target
        )}%`}</H2>
        <H4>Of Your Target</H4>
      </StatsBlock>
    </StatsContainer>
  );
};

const mapStateToProps = state => ({
  state
});
export default connect(mapStateToProps)(Stats);
