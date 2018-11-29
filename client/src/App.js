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

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { targetOpen: false, logsOpen: false };
  }

  targetToggle = () => {
    this.setState(prevState => ({ targetOpen: !prevState.targetOpen }));
  };
  logsToggle = () => {
    this.setState(prevState => ({ logsOpen: !prevState.logsOpen }));
  };

  render() {
    let liquid;

    if (
      (this.props.state.dayIntakeAmount * 100) / this.props.state.target >=
      100
    ) {
      liquid = '120%';
    } else {
      liquid = `${(this.props.state.dayIntakeAmount * 100) /
        this.props.state.target}%`;
    }
    return (
      <Container>
        {this.state.targetOpen ? (
          <SetTarget targetToggle={this.targetToggle} />
        ) : null}
        {this.state.logsOpen ? <Logs logsToggle={this.logsToggle} /> : null}
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
