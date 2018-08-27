import * as ActionTypes from './ActionsTypes';
export const actionFormSubmit =(data)=>{
    return {
        type : ActionTypes.FORM_SUBMIT,
        payload : data
    };
}
export const ResultFormSubmit =(data)=>{
    return {
        type : ActionTypes.FORM_SUBMIT_RESULT,
        payload : data
    };
}

export const SignInRequest = (data) =>{
    return{
        type : ActionTypes.SIGN_IN,
        payload : data
    }
}

export const SignInSuccess = (data) =>{
    return{
        type : ActionTypes.SIGN_IN_SUCCESS,
        payload : data
    }
}

export const PatientRegisterRequest = (data) =>{
   
    return{
        type : ActionTypes.REGISTER_PATIENT,
        payload : data
    }
}

export const PatientRegisterResponse = (data) =>{
    return{
        type : ActionTypes.REGISTER_PATIENT_RESPONSE,
        payload : data
    }
}


export const DoctorRegisterRequest = (data) =>{
   
    return{
        type : ActionTypes.REGISTER_DOCTOR,
        payload : data
    }
}

export const DoctorRegisterResponse = (data) =>{
   
    return{
        type : ActionTypes.REGISTER_DOCTOR_RESPONSE,
        payload : data
    }
}


export const StoreKeeperRegisterRequest = (data) =>{
   
    return{
        type : ActionTypes.REGISTER_STORE_KEEPER,
        payload : data
    }
}

export const StoreKeeperRegisterResponse = (data) =>{
   
    return{
        type : ActionTypes.REGISTER_STORE_KEEPER_RESPONSE,
        payload : data
    }
}