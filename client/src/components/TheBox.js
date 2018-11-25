import React, { Component } from 'react';
import styled from 'styled-components';
import WaterGlass from './WaterGlass';
import Button from './UI/Button';
import Input from './UI/Input';
import Card from './UI/Card';
import Calendar from './Calendar';
import Stats from './Stats';
import { connect } from 'react-redux';
import { plusIntakeAmount, onInputChange } from '../store/actions/dataActions';

const Controls = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 60%;
  align-items: center;
  margin-bottom: 3rem;
`;

class TheBox extends Component {
  addAmount = () => {
    const addToTotal =
      this.props.state.dayIntakeAmount + this.props.state.inputValue;
    this.props.onAddAmount(addToTotal, this.props.state.date);
  };

  handleChange = e => {
    e.preventDefault();
    this.props.onInputChange(e.target.value);
  };

  render() {
    return (
      <Card>
        {this.props.state.date ? (
          <React.Fragment>
            <Calendar />
            <Stats />

            {/* <WaterGlass /> */}
            <Controls>
              <Input
                max="9999"
                type="number"
                required
                name="inputValue"
                value={this.props.state.inputValue}
                onChange={e => this.handleChange(e)}
                suffix="ml"
              />

              <Button
                success
                onClick={() => this.addAmount()}
                disabled={this.props.state.inputValue <= 0}
              >
                ADD
              </Button>
            </Controls>
            <Controls>
              <Button success onClick={this.props.targetToggle}>
                SET TARGET
              </Button>
              <Button success onClick={this.props.logsToggle}>
                VIEW LOG
              </Button>
            </Controls>
          </React.Fragment>
        ) : (
          <div>No Data</div>
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
  onInputChange: value => dispatch(onInputChange(value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TheBox);
