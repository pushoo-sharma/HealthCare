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