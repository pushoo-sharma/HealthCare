import {take,put,call,all} from 'redux-saga/effects';
import * as actionCreator from'../Actions/ActionCreator';
import * as ActionTypes from'../Actions/ActionsTypes';
import axios from'axios';
export function* patientEquipmentsSaga(){
    while(true){
        const action = yield(take(ActionTypes.FETCH_PATIENT_EQUIPMENTS));
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
    
        var resp = []
        yield(put(actionCreator.FetchPatientEquipmentsResponse(resp)));
    }
};
export function* equipmentsSaga(){
    while(true){
        const action = yield(take(ActionTypes.FETCH_EQUIPMENTS));
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
    
        var resp = []
        yield(put(actionCreator.FetchEquipmentsResponse(resp)));
    }
};
export function* requestEquipmentSaga(){
    while(true){
        const action = yield(take(ActionTypes.REQUEST_EQUIPMENT));
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
    
        var resp = "successfull"
        yield(put(actionCreator.RequestEquipmentResponse(resp)));
    }
};