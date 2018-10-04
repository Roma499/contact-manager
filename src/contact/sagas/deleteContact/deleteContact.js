import { call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import Api from '../../../api';
import { deleteContactRejected, deleteContactFulfilled } from '../../actions';

export default function* deleteContact(action) {
  try {
    const response = yield call(Api.deleteContact, action.payload.id);
    yield put(deleteContactFulfilled(response));
    yield put(push('/'));
  } catch (e) {
    yield put(deleteContactRejected(e));
  }
}
