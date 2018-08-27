import * as ActionTypes from'../Actions/ActionsTypes';
const RegisterUserReducer =(state={},action) =>{
switch(action.type){
    case ActionTypes.REGISTER_PATIENT_RESPONSE :
    return { ...state, response :action.payload};   

    case ActionTypes.REGISTER_DOCTOR_RESPONSE :
    return {...state, response:action.payload};

    case ActionTypes.REGISTER_STORE_KEEPER_RESPONSE :
    return {...state, response:action.payload};

    default : 
    return state;
}
};
export default RegisterUserReducer;