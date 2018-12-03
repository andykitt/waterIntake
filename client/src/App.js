import React, { Component } from 'react';
import styled from 'styled-components';
import TheBox from './components/TheBox';
import { Spring } from 'react-spring';
import waterImage from './assets/images/water.png';
import { connect } from 'react-redux';
import SetTarget from './components/SetTarget';
import Logs from './components/Logs';

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
`;

const LiquidContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 100vw;
  z-index: -1;
`;

const Image = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
`;

export class App extends Component {
  // toggle state for setTarget and logs Modal
  state = { targetOpen: false, logsOpen: false };

  targetToggle = () => {
    this.setState(prevState => ({ targetOpen: !prevState.targetOpen }));
  };
  logsToggle = () => {
    this.setState(prevState => ({ logsOpen: !prevState.logsOpen }));
  };

  render() {
    let liquid;

    const { targetOpen, logsOpen } = this.state;
    const { dayIntakeAmount, target } = this.props.state;

    // if > 100% of target reached, go to 120% of screen for coverage

    if ((dayIntakeAmount * 100) / target >= 100) {
      liquid = '120%';
    } else {
      liquid = `${(dayIntakeAmount * 100) / target}%`;
    }
    return (
      <Container>
        {targetOpen ? <SetTarget targetToggle={this.targetToggle} /> : null}
        {logsOpen ? <Logs logsToggle={this.logsToggle} /> : null}
        <LiquidContainer>
          <Spring
            from={{
              height: '0%'
            }}
            to={{
              height: liquid
            }}
            config={{ tension: 10, friction: 2 }}
          >
            {height => <Image style={height} src={waterImage} />}
          </Spring>
        </LiquidContainer>
        <TheBox targetToggle={this.targetToggle} logsToggle={this.logsToggle} />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  state
});

export default connect(mapStateToProps)(App);
