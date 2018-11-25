import * as actions from '../actions/actionTypes';
import moment from 'moment';

const initialState = {
  date: moment(Date.now()).toISOString(),
  dayIntakeAmount: 0,
  target: 1000,
  inputValue: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.PLUS_DAY_INTAKE:
      return {
        ...state,
        dayIntakeAmount: action.amount <= 0 ? 0 : action.amount,
        logs: action.logs
      };
    case actions.SET_TARGET_AMOUNT:
      return {
        ...state,
        target: action.amount
      };
    case actions.ON_DATE_CHANGE:
      return {
        ...state,
        date: action.payload.date,
        dayIntakeAmount: action.payload.dayIntakeAmount,
        target: action.payload.target,
        logs: action.payload.logs
      };
    case actions.ON_INPUT_CHANGE:
      return {
        ...state,
        inputValue: action.payload === '' ? 0 : parseInt(action.payload)
      };
    default:
      return state;
  }
};
