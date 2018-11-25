import axios from 'axios';
import * as actions from './actionTypes';
import moment from 'moment';

// Plus Amount
export const plusIntakeAmount = (amount, date) => dispatch => {
  axios.post('/api/data/total', { amount, date }).then(res =>
    dispatch({
      type: actions.PLUS_DAY_INTAKE,
      amount: res.data.dayIntakeAmount,
      logs: res.data.logs
    })
  );
};
// Set Target
export const setTargetAmount = (target, date) => dispatch => {
  axios.post('/api/data/target', { target, date }).then(res =>
    dispatch({
      type: actions.SET_TARGET_AMOUNT,
      amount: res.data.target <= 0 ? 0 : res.data.target
    })
  );
};

// onDateChange
export const onDateChange = date => dispatch => {
  axios.get(`/api/data/${moment(date).format('YYYY-MM-DD')}`).then(res =>
    dispatch({
      type: actions.ON_DATE_CHANGE,
      payload: res.data
    })
  );
};

// on Input Change
export const onInputChange = value => {
  return {
    type: actions.ON_INPUT_CHANGE,
    payload: value
  };
};
