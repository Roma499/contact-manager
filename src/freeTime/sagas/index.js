import { takeEvery } from 'redux-saga/effects';
import saveDeal from './saveDeal/saveDeal';

export default function* dealSaga() {
  yield takeEvery('SAVE_DEAL', saveDeal);
}
