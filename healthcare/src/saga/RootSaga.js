import { fork } from "redux-saga/effects";
import { all } from 'redux-saga/effects';
import signInSaga from './SignInSaga';
import {registerPatient,registerDoctor, registerStoreKeeper} from './RegisterUserSaga';
import {profileSaga,submitProfileSaga} from "./ProfileSaga"
import billsSaga from "./BillsSaga"
import{cancelAppointmentSaga,upcomingAppointmentsSaga,submitAppointmentSaga,checkAvailibilitySaga} from "./AppointmentsSaga"
import {visitNotesSaga,medicalHistorySaga,submitMedicalHistorySaga} from "./HealthSaga";
export default function* rootSaga() {
	yield all([
		fork(cancelAppointmentSaga),
		fork(upcomingAppointmentsSaga),
		fork(submitAppointmentSaga),
		fork(checkAvailibilitySaga),
		fork(visitNotesSaga),
		fork(medicalHistorySaga),
		fork(submitMedicalHistorySaga),
		fork(billsSaga),
		fork(submitProfileSaga),
		fork(profileSaga),
		fork(signInSaga),
		fork(registerPatient),
		fork(registerDoctor),
		fork(registerStoreKeeper)
	]);
}