import axios from 'axios';
import * as actions from './actionTypes';
import moment from 'moment';

// Plus Amount
export const plusIntakeAmount = (amount, date) => dispatch => {
  axios
    .post('/api/data/total', { amount, date })
    .then(res =>
      dispatch({
        type: actions.PLUS_DAY_INTAKE,
        amount: res.data.dayIntakeAmount,
        logs: res.data.logs
      })
    )
    .catch(err =>
      dispatch({
        type: actions.SET_ERRORS,
        errors: err.response.data
      })
    );
};
// Set Target
export const setTargetAmount = (target, date) => dispatch => {
  axios
    .post('/api/data/target', { target, date })
    .then(res =>
      dispatch({
        type: actions.SET_TARGET_AMOUNT,
        amount: res.data.target <= 0 ? 0 : res.data.target
      })
    )
    .catch(err =>
      dispatch({
        type: actions.SET_ERRORS,
        errors: err.response.data
      })
    );
};

// onDateChange
export const onDateChange = date => dispatch => {
  axios
    .get(`/api/data/${moment(date).format('YYYY-MM-DD')}`)
    .then(res =>
      dispatch({
        type: actions.ON_DATE_CHANGE,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: actions.SET_ERRORS,
        errors: err.response.data
      })
    );
};

// onInputChange
export const onInputChange = value => ({
  type: actions.ON_INPUT_CHANGE,
  payload: value
});

export const resetInputValue = value => ({
  type: actions.RESET_INPUT_VALUE,
  payload: value
});
