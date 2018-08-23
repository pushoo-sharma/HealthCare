import { fork } from "redux-saga/effects";
import { all } from 'redux-saga/effects';
import signInSaga from './SignInSaga';

export default function* rootSaga() {
	yield all([
		fork(signInSaga)
	]);
}