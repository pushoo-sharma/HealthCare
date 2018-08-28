import {take,put,call,all} from 'redux-saga/effects';
import * as actionCreator from'../Actions/ActionCreator';
import * as ActionTypes from'../Actions/ActionsTypes';
import axios from'axios';
export function* visitNotesSaga(){
while(true){
    const action = yield(take(ActionTypes.FETCH_VISIT_NOTES));
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
  

    var resp=[{date:"11/11/11",doctor:"Dr.Doctor",Disease:"Flu",Medication:"Paracetamol",Precaution:"No Oili Food"},{date:"11/11/11",doctor:"Dr.Doctor",Disease:"Fluuuu",Medication:"Asprin",Precaution:"No Food"}]
    yield(put(actionCreator.FetchVisitNotesResponse(resp)));
}
};

export function* medicalHistorySaga(){
    while(true){
        const action = yield(take(ActionTypes.FETCH_MEDICAL_HISTORY));
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

        var resp={someinfo:"details"}
        yield(put(actionCreator.FetchMedicalHistoryResponse(resp)));
    }
};
export function* submitMedicalHistorySaga(){
    while(true){
        const action = yield(take(ActionTypes.SUBMIT_MEDICAL_HISTORY));
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

        var resp="success"
        yield(put(actionCreator.SubmitMedicalHistoryResponse(resp)));
    }
};