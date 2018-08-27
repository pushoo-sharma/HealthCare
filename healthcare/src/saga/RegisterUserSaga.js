import {take,put,call,all} from 'redux-saga/effects';
import * as actionCreator from'../Actions/ActionCreator';
import * as ActionTypes from'../Actions/ActionsTypes';
import axios from'axios';
export  function* registerPatient(){
while(true){
    const action = yield(take(ActionTypes.REGISTER_PATIENT));
 
    let details = action.payload.details;

   // const data = yield all([call(callAPI, "http://localhost:1339/users/")]);	
    //const a= data[0];
  
 
    let response = {"successMessage":"success",
                    "errorMessage" : "Registration is failed"};
    // console.log('data=== '+a.data);
    // let jsonD = {"message" :"hi"};
    yield(put(actionCreator.PatientRegisterResponse(response)));
}
};


export  function* registerDoctor(){
    while(true){
        const action = yield(take(ActionTypes.REGISTER_DOCTOR));
     
        let details = action.payload;
    
        let response = {"successMessage":"success",
                        "errorMessage" : "Doctor Registration is failed"};
        yield(put(actionCreator.DoctorRegisterResponse(response)));
    }
    };

    export  function* registerStoreKeeper(){
        while(true){
            const action = yield(take(ActionTypes.REGISTER_STORE_KEEPER));
         
            let details = action.payload;
        
            let response = {"successMessage":"success",
                            "errorMessage" : "Store Keeper Registration is failed"};
            yield(put(actionCreator.StoreKeeperRegisterResponse(response)));
        }
        };

function callAPI(API_URL) {
	
	return axios({
    url: API_URL,
    method: 'get',   
    
    })
    .catch(err => {
        console.log(err);
    });
}