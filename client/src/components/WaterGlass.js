import React, { Component } from 'react';
import styled from 'styled-components';
import { Spring } from 'react-spring';
import { connect } from 'react-redux';

const Glass = styled.div`
  position: relative;
  height: 80%;
  width: 200px;
  clip-path: polygon(0 0, 100% 0, 75% 100%, 25% 100%);
  z-index: 0;
  background-color: #d9e6e3;
`;

const GlassContainer = styled.div`
  height: 30vh;
`;
const Liquid = styled.div`
  position: absolute;
  left: 0rem;
  bottom: 0;
  background-color: #5ba3ff;
  width: 100%;
  text-align: center;
  color: white;
  background: linear-gradient(to bottom, #56ccf2, #2f80ed);
`;

class waterGlass extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    let liquid;

    if (
      (this.props.state.dayIntakeAmount * 100) / this.props.state.target >=
      100
    ) {
      liquid = '100%';
    } else if (
      (this.props.state.dayIntakeAmount * 100) / this.props.state.target <
      0
    ) {
      liquid = '0%';
    } else {
      liquid = `${(this.props.state.dayIntakeAmount * 100) /
        this.props.state.target}%`;
    }
    return (
      <GlassContainer>
        <Glass>
          {this.props.state.dayIntakeAmount <= 0 ? (
            <blockquote style={{ textAlign: 'center', paddingTop: '5rem' }}>
              GET SOME WATER IN YOU!
            </blockquote>
          ) : null}
          <Spring
            from={{ height: '0%' }}
            to={{
              height: liquid
            }}
            config={{ tension: 35, friction: 6 }}
            clamp="true"
          >
            {props => <Liquid style={props} />}
          </Spring>
        </Glass>
      </GlassContainer>
    );
  }
}

const mapStateToProps = state => ({
  state
});

export default connect(mapStateToProps)(waterGlass);
