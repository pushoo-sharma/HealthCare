import { combineReducers } from 'redux';
import SignInReducer from'./SignInReducer';


export default combineReducers({
	signIn : SignInReducer
});
