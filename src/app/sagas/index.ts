import { all } from 'redux-saga/effects';
import gameSaga from 'app/sagas/game';

export default function* rootSaga() {
  yield all([gameSaga()]);
}
