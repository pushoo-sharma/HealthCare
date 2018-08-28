import {take,put,call,all} from 'redux-saga/effects';
import * as actionCreator from'../Actions/ActionCreator';
import * as ActionTypes from'../Actions/ActionsTypes';
import axios from'axios';
export default function* billsSaga(){
while(true){
    const action = yield(take(ActionTypes.FETCH_BILLS));
    console.log("insaga",action)
  //FETCH USER WITH USED ID IN ACTION.PAYLOAD?
  // AND STORE IN RESP
/*  
var data = yield call(axios("myurl")
    .then(function (response) {
        const resp=response
        console.log(response);
    })
    .catch(function (response) {
        const resp=response
        console.log(response);
    }));
*/  
  

    var resp=[{},{}]
    yield(put(actionCreator.FetchBillsResponse(resp)));
}
};

