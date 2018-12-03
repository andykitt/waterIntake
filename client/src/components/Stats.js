import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
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

const stats = props => {
  const { target, dayIntakeAmount } = props.state;
  return (
    <Wrapper>
      <StatsBlock>
        <H2>{target}ml</H2>
        <H4>Today's Target</H4>
      </StatsBlock>
      <StatsBlock>
        {dayIntakeAmount >= target ? (
          <React.Fragment>
            <H2>Well Done!</H2>
            <H4>Target Reached</H4>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <H2>{`Only ${target - dayIntakeAmount}ml`}</H2>
            <H4>To Go!</H4>
          </React.Fragment>
        )}
      </StatsBlock>
      <StatsBlock>
        <H2>{`${Math.round((dayIntakeAmount * 100) / target)}%`}</H2>
        <H4>Of Your Target</H4>
      </StatsBlock>
    </Wrapper>
  );
};

stats.propTypes = {
  state: PropTypes.object
};

const mapStateToProps = state => ({
  state
});
export default connect(mapStateToProps)(stats);
