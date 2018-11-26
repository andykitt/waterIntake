import React, { Component } from 'react';
import styled from 'styled-components';
import WaterGlass from './WaterGlass';
import Button from './UI/Button';
import Input from './UI/Input';
import Card from './UI/Card';
import Calendar from './Calendar';
import Stats from './Stats';
import { connect } from 'react-redux';
import {
  plusIntakeAmount,
  onInputChange,
  resetInputValue
} from '../store/actions/dataActions';

const Controls = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 3rem;
`;

const Title = styled.h3``;

const H1 = styled.h1`
  animation: fadeIn 2s ease-in;

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(5rem);
    }
    60% {
      opacity: 0;
    }
    100% {
      opacity: 1;
      transform: translate(0);
    }
  }
`;

class TheBox extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }
  addAmount = e => {
    e.preventDefault();
    const addToTotal =
      this.props.state.dayIntakeAmount + this.props.state.inputValue;
    this.props.onAddAmount(addToTotal, this.props.state.date);
    this.props.onResetInputValue('');
  };

  handleChange = e => {
    this.props.onInputChange(e.target.value);
  };

  render() {
    return (
      <Card>
        {this.props.state.date ? (
          <React.Fragment>
            <Calendar />
            <Title>Consumption Today:</Title>
            <H1>{this.props.state.dayIntakeAmount}ml</H1>
            <Stats />

            {/* <WaterGlass /> */}
            <Controls>
              <form onSubmit={this.addAmount}>
                <Input
                  type="number"
                  required
                  name="inputValue"
                  value={this.props.state.inputValue}
                  onChange={this.handleChange}
                  suffix="ml"
                />

                <Button
                  success
                  type="submit"
                  disabled={this.props.state.inputValue <= 0}
                >
                  ADD
                </Button>
              </form>
            </Controls>
            <Controls>
              <Button success onClick={this.props.targetToggle}>
                SET TARGET
              </Button>
              <Button primary onClick={this.props.logsToggle}>
                VIEW LOG
              </Button>
            </Controls>
          </React.Fragment>
        ) : (
          <h1>
            Sorry, There seems to be a problem connecting to our database,
            <br /> please try again later.
          </h1>
        )}
      </Card>
    );
  }
}

const mapStateToProps = state => ({
  state
});

const mapDispatchToProps = dispatch => ({
  onAddAmount: (amount, date) => dispatch(plusIntakeAmount(amount, date)),
  onInputChange: value => dispatch(onInputChange(value)),
  onResetInputValue: value => dispatch(resetInputValue(value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TheBox);
