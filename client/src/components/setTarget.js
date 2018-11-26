import React, { Component } from 'react';
import styled from 'styled-components';
import Input from './UI/Input';
import Button from './UI/Button';
import Backdrop from './UI/Backdrop';
import Card from './UI/Card';
import { connect } from 'react-redux';
import { setTargetAmount } from '../store/actions/dataActions';
import { Spring, config } from 'react-spring';

const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const ButtonControls = styled.div`
  display: flex;
  margin-top: 2rem;
  justify-content: space-around;
`;

const BlockQuote = styled.blockquote`
  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

class setTarget extends Component {
  constructor(props) {
    super(props);

    this.state = { target: 0 };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSetTarget(this.state.target, this.props.state.date);
    this.props.targetToggle();
  };
  render() {
    return (
      <div>
        <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} config={config.slow}>
          {styles => (
            <Backdrop style={styles}>
              <Card>
                <Form onSubmit={this.handleSubmit}>
                  <BlockQuote>
                    In climates such as the UK's, we should drink about 1.2
                    litres (six to eight glasses) of fluid every day to stop us
                    getting dehydrated.
                  </BlockQuote>
                  <Input
                    required
                    name="target"
                    onChange={e => this.handleChange(e)}
                    height="100px"
                    suffix="ml"
                  />
                  <ButtonControls>
                    <Button success type="submit">
                      SET TARGET
                    </Button>
                    <Button danger onClick={this.props.targetToggle}>
                      CLOSE
                    </Button>
                  </ButtonControls>
                </Form>
              </Card>
            </Backdrop>
          )}
        </Spring>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  state
});

const mapDispatchToProps = dispatch => ({
  onSetTarget: (target, date) => dispatch(setTargetAmount(target, date))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(setTarget);
