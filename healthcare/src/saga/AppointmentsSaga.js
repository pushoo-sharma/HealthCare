import {take,put,call,all} from 'redux-saga/effects';
import * as actionCreator from'../Actions/ActionCreator';
import * as ActionTypes from'../Actions/ActionsTypes';
import axios from'axios';
export function* upcomingAppointmentsSaga(){
    while(true){
        const action = yield(take(ActionTypes.FETCH_UPCOMING_APPOINTMENTS));
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
    
        var resp = [{dept:"orth",doctor:"Dr.Doctor",date:"11/11/11",time:"someTime"},
        {dept:"cardio",doctor:"Dr.NotDoctor",date:"12/12/12",time:"someOtherTime"}]
        yield(put(actionCreator.FetchUpcomingAppointmentsResponse(resp)));
    }
};
export function* cancelAppointmentSaga(){
    while(true){
        const action = yield(take(ActionTypes.CANCEL_APPOINTMENT));
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
    
        var resp = "cancelled"
        yield(put(actionCreator.CancelAppointmentResponse(resp)));
    }
};
export function* submitAppointmentSaga(){
    while(true){
        const action = yield(take(ActionTypes.SUBMIT_APPOINTMENT));
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
        yield(put(actionCreator.SubmitAppointmentResponse(resp)));
    }
};
export function* checkAvailibilitySaga(){
    while(true){
        const action = yield(take(ActionTypes.CHECK_AVAILIBILITY));
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
    
        var resp = "available"
        yield(put(actionCreator.CheckAvailibilityResponse(resp)));
    }
};