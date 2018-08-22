import {take,put,call,all} from 'redux-saga/effects';
import * as actionCreator from'../Actions/ActionCreator';
import * as ActionTypes from'../Actions/ActionsTypes';
import axios from'axios';
export default function* formSaga(){
while(true){
    const action = yield(take(ActionTypes.FORM_SUBMIT));
    let name = action.payload.name;
    let city = action.payload.city;
    const data = yield all([call(callNode, "http://localhost:1339/users/"+name+"/"+city)]);	
    const a= data[0];
  
    debugger
    console.log('data=== '+a.data);
    let jsonD = {"message" :"hi"};
    yield(put(actionCreator.ResultFormSubmit(a.data)));
}
};

function callNode(API_URL) {
	
	return axios({
    url: API_URL,
    method: 'get',   
    
    })
    .catch(err => {
        console.log(err);
    });
}