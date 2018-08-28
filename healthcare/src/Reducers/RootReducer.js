import { combineReducers } from 'redux';
import SignInReducer from'./SignInReducer';
import RegisterUserReducer from'./RegisterUserReducer';
import ProfileReducer from "./ProfileReducer"
import AppointmentsReducer from "./AppointmentsReducer";
import BillsReducer from "./BillsReducer";
import EquipmentsReducer from "./EquipmentsReducer";
import HealthReducer from "./HealthReducer"
export default combineReducers({
	signIn : SignInReducer,
	profile:ProfileReducer,
	registerUser : RegisterUserReducer,
	appointment:AppointmentsReducer,
	bills:BillsReducer,
	equipments:EquipmentsReducer,
	health:HealthReducer
});
