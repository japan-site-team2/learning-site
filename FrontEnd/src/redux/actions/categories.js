import { createActions } from 'redux-actions';

export const getType = (reduxAction) => {
  return reduxAction().type;
};

export const getCategories = createActions({
  getCategoriesRequest: undefined,
  getCategoriesSuccess: (payload) => payload,
  getCategoriesFailure: (err) => err,
});

