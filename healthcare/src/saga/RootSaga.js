import { fork } from "redux-saga/effects";
import { all } from 'redux-saga/effects';
import signInSaga from './SignInSaga';
import {registerPatient,registerDoctor, registerStoreKeeper} from './RegisterUserSaga';

export default function* rootSaga() {
	yield all([
		fork(signInSaga),
		fork(registerPatient),
		fork(registerDoctor),
		fork(registerStoreKeeper)
	]);
}