import React, { Component } from 'react';
import 'react-dates/initialize';
import { SingleDatePicker, isInclusivelyBeforeDay } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import '../react_dates_overrides.css';
import moment from 'moment';
import { connect } from 'react-redux';
import { onDateChange } from '../store/actions/dataActions';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;
const Label = styled.span`
  font-size: 1rem;
  text-transform: uppercase;
  margin-right: 1rem;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export class Calendar extends Component {
  state = {
    focused: false
  };

  componentDidMount() {
    this.props.onDateChange(this.props.state.date);
  }

  render() {
    return (
      <Wrapper>
        <Label>Select Date: </Label>
        <SingleDatePicker
          displayFormat="DD/MM/YYYY"
          date={moment(this.props.state.date)}
          onDateChange={date => this.props.onDateChange(date)}
          focused={this.state.focused}
          onFocusChange={({ focused }) => this.setState({ focused })}
          id="calendar"
          numberOfMonths={1}
          isOutsideRange={day => !isInclusivelyBeforeDay(day, moment())}
          withPortal
        />
      </Wrapper>
    );
  }
}
const mapStateToProps = state => ({
  state
});

const mapDispatchToProps = dispatch => ({
  onDateChange: date => dispatch(onDateChange(date))
});

Calendar.propTypes = {
  onDateChange: PropTypes.func.isRequired,
  state: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Calendar);
