import React, { Component } from 'react';
import 'react-dates/initialize';
import { SingleDatePicker, isInclusivelyBeforeDay } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment';
import { connect } from 'react-redux';
import { onDateChange } from '../store/actions/dataActions';

class Calendar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      focused: false
    };
  }

  componentDidMount() {
    this.props.onDateChange(this.props.state.date);
  }

  render() {
    return (
      <div>
        <span>Select Date: </span>
        <SingleDatePicker
          displayFormat="DD/MM/YYYY"
          date={moment(this.props.state.date)} // momentPropTypes.momentObj or null
          onDateChange={date => this.props.onDateChange(date)} // PropTypes.func.isRequired
          focused={this.state.focused} // PropTypes.bool
          onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
          id="your_unique_id" // PropTypes.string.isRequired,
          numberOfMonths={1}
          isOutsideRange={day => !isInclusivelyBeforeDay(day, moment())}
          withPortal
        />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  state
});

const mapDispatchToProps = dispatch => ({
  onDateChange: date => dispatch(onDateChange(date))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Calendar);
