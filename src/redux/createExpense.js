import * as actions from './actionTypes';
import { recordExpense } from '../api/createExpense';
import { validateInputs } from '../helpers/validator';

export const setInputError = (name, value) => ({
  type: actions.SET_INPUT_ERROR,
  payload: validateInputs(name, value),
});

export const handleInputChange = (name, value) => dispatch => {
  dispatch(setInputError(name, value));
  dispatch({ type: actions.INPUT_CHANGE, payload: { [name]: value } });
};

export const displayNewExpenseModal = () => ({ type: actions.DISPLAY_NEW_EXPENSE_MODAL });

export const apiCallInProgress = () => ({ type: actions.API_CALL_IN_PROGRESS });

export const handleExpenseCreation = expense => async dispatch => {
  dispatch(apiCallInProgress());
  try {
    const newExpense = await recordExpense(expense);
    dispatch({ type: actions.NEW_EXPENSE_SUCCESS, payload: { newExpense } });
  } catch (error) {
    dispatch({ type: actions.NEW_EXPENSE_FAILURE, payload: { error: error.message } });
  }
};