import * as api from '../api';
import { takeLatest, call, put } from 'redux-saga/effects';
import * as actionsGetUser from '../actions/getUser'

function* getUserData(action) {
  try {
    const getDataUser = yield call(api.getUser);
    yield put(actionsGetUser.getUser.getUserSuccess(getDataUser.data));
  } 
  catch (err) {
    console.error(err);
    yield put(actionsGetUser.getUser.getUserFailure(err));
  }
}

function* RootSagas() {
  yield takeLatest(actionsGetUser.getUser.getUserRequest, getUserData);
}

export default RootSagas;