import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import reducerSaga from '../reducers';

import rootSaga from '../sagas'


const sagaMiddleware = createSagaMiddleware()
export default configureStore({
  reducer: reducerSaga,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);