import * as ActionTypes from '../Actions/ActionsTypes';
import * as actionCreator from '../Actions/ActionCreator';
import {take,put} from 'redux-saga-effects';
//import {push} from 'react-router-redux';

export default function* SignInSaga(){
    while(true){
        const action = yield(take(ActionTypes.SIGN_IN));
      //  let a = {message : "success"};
        yield(put(actionCreator.SignInSuccess("success")));
        
//  yield put(push('/doctor')) ;

    }
};