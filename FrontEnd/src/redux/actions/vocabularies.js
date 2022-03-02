import { createActions } from 'redux-actions';

export const getType = (reduxAction) => {
  return reduxAction().type;
};

export const getVocabularies = createActions({
  getVocabulariesRequest: undefined,
  getVocabulariesSuccess: (payload) => payload,
  getVocabulariesFailure: (err) => err,
});
