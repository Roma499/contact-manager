import { call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import Api from '../../../api';
import { fetchContactRejected, fetchContactFulfilled } from '../../actions';

export default function* fetchContact(action) {
  try {
    const response = yield call(Api.fetchContact, action.payload.id);
    yield put(fetchContactFulfilled(response));
  } catch (e) {
    yield put(fetchContactRejected(e));
    yield put(push('/404'));
  }
}
