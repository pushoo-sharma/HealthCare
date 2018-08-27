import { combineReducers } from 'redux';
import SignInReducer from'./SignInReducer';
import RegisterUserReducer from'./RegisterUserReducer';

export default combineReducers({
	signIn : SignInReducer,
	registerUser : RegisterUserReducer
});
