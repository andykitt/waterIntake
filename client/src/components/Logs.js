import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import Button from './UI/Button';
import Backdrop from './UI/Backdrop';
import Card from './UI/Card';
import { connect } from 'react-redux';
import { Spring, config } from 'react-spring';
import PropTypes from 'prop-types';

const Table = styled.table`
  font-size: 1rem;
  padding: 1rem;
  text-align: left;
  text-transform: uppercase;
  @media (max-width: 768px) {
    font-size: 0.6rem;
    padding: 0;
  }
`;

const Logs = styled.div``;

const logs = props => {
  return (
    <div>
      <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} config={config.slow}>
        {styles => (
          <Backdrop style={styles} onClick={props.logsToggle}>
            <Card>
              <Logs>
                {props.state.logs ? (
                  <div
                    style={{
                      overflow: 'scroll',
                      maxHeight: '50vh',
                      margin: '1rem'
                    }}
                  >
                    <Table cellPadding="5">
                      <thead>
                        <tr>
                          <th>date</th>
                          <th>time</th>
                          <th>water consumed</th>
                        </tr>
                      </thead>
                      <tbody>
                        {props.state.logs
                          ? props.state.logs
                              .slice()
                              .reverse()
                              .map((log, index) => (
                                <tr key={index}>
                                  <td>
                                    {moment(log.timestamp).format('DD/MM/YYYY')}
                                  </td>
                                  <td>
                                    {moment(log.timestamp).format('k:mm')}
                                  </td>
                                  <td>{log.amount}ml</td>
                                </tr>
                              ))
                          : null}
                      </tbody>
                    </Table>
                  </div>
                ) : (
                  <div style={{ textAlign: 'center' }}>
                    <h1>No Water Consumption Logged...</h1>
                    <h2>Get hydrating buddy!</h2>
                  </div>
                )}
              </Logs>
              <Button danger>CLOSE</Button>
            </Card>
          </Backdrop>
        )}
      </Spring>
    </div>
  );
};

logs.propTypes = {
  logsToggle: PropTypes.func,
  state: PropTypes.object
};

const mapStateToProps = state => ({
  state
});

export default connect(mapStateToProps)(logs);
