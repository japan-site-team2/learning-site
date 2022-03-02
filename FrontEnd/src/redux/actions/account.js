import { createActions } from 'redux-actions';

export const getType = (reduxAction) => {
  return reduxAction().type;
};

export const createAccount = createActions({
  createAccountRequest: (payload) => payload,
  createAccountSuccess: (payload) => payload,
  createAccountFailure: (err) => err,
});