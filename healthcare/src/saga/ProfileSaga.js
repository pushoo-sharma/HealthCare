import {take,put,call,all} from 'redux-saga/effects';
import * as actionCreator from'../Actions/ActionCreator';
import * as ActionTypes from'../Actions/ActionsTypes';
import axios from'axios';
export function* profileSaga(){
while(true){
    const action = yield(take(ActionTypes.FETCH_PROFILE_REQUEST));
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
  

    var resp={
        title:"",
        fname:"pehelaNaam",
        lname:"aakhriNaam"
    }
    yield(put(actionCreator.FetchProfileResponse(resp)));
}
};

export  function* submitProfileSaga(){
    while(true){
        const action = yield(take(ActionTypes.SUBMIT_PROFILE_REQUEST));
        
      //SUBMIT
      //  var bodyFormData = action.payload
      /*  var data = yield call(axios({
            method: 'post',
            url: 'myurl',
            data: bodyFormData,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
            })
            .then(function (response) {
                const resp=response
                console.log(response);
            })
            .catch(function (response) {
                const resp=response
                console.log(response);
            }));
    */
      var resp="success"
    
        yield(put(actionCreator.SubmitProfileResponse(resp)));
    }
    };
    