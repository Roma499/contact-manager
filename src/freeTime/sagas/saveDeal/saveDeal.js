import { put } from 'redux-saga/effects';
import { goBack } from 'connected-react-router';

export default function* saveDeal(action) {
  yield put(goBack());
}
